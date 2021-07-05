import { createContext, useState } from "react";

export const CalculationContext = createContext();

export const CalculationProvider = function (props) {
  // House
  const elecDemandHouse = useUnitFormInput(
    "House electricity demand",
    3000,
    "kWh",
    250,
    7500,
    500
  );

  // Solar
  const modulePower = useUnitFormInput(
    "Solar power size",
    275,
    "Wp",
    100,
    400,
    25
  );
  const moduleAmount = useUnitFormInput("Amount of Modules", 24, "", 6, 48, 6);

  // Heat Pump
  const heatingDemandHouse = useUnitFormInput(
    "House heating demand",
    0,
    "kWh",
    0,
    50000,
    5000
  );

  const gridElectricity = useUnitFormInput(
    "Electricity tariff",
    28.5,
    "ct",
    20,
    35,
    0.5
  );

  const feedInTarif = useUnitFormInput(
    "Grid feed in tariff",
    8,
    "ct",
    0,
    25,
    1
  );

  // EV
  const carEnergy = useUnitFormInput("Car battery size", 40, "kWh", 5, 100, 5);
  const carChargeLevel = useUnitFormInput(
    "Current battery charge level",
    60,
    "%",
    0,
    80,
    1
  );

  // Battery
  const batEnergy = useUnitFormInput("Battery size", 12, "kWh", 2, 25, 1);

  // House
  const house = {
    id: 0,
    name: "House",
    imagePath: "home.png",
    items: [elecDemandHouse],
  };

  // Car
  const ev = {
    id: 1,
    name: "Electric vehicle",
    imagePath: "car.png",
    items: [carEnergy, carChargeLevel],
  };

  // Heat Pump
  const hp = {
    id: 2,
    name: "Heat Pump",
    imagePath: "fan.png",
    items: [heatingDemandHouse],
  };

  // House battery
  const battery = {
    id: 3,
    name: "House battery",
    imagePath: "battery-level.png",
    items: [batEnergy],
  };

  // Solar panels
  const solar = {
    id: 4,
    name: "Solar Panels",
    imagePath: "solar-panel.png",
    items: [modulePower, moduleAmount],
  };

  // Grid
  const grid = {
    id: 5,
    name: "Grid",
    imagePath: "power-line.png",
    items: [gridElectricity, feedInTarif],
  };

  // Day types
  const winterDay = {
    id: 1,
    title: "Winter day",
    icon: "snowflake.png",
    solarPerDay: 0.86,
  };

  const averageDay = {
    id: 2,
    title: "Average day",
    icon: "cloudy.png",
    solarPerDay: 2.1,
  };

  const summerDay = {
    id: 3,
    title: "Summer day",
    icon: "sun.png",
    solarPerDay: 4.3,
  };

  const [activeDay, setActiveDay] = useState(averageDay);

  const dayTypes = [winterDay, averageDay, summerDay];

  const components = [grid, ev, solar, house, battery, hp];

  const copPump = 5;

  const elecDemandFromHeatingPerDay = heatingDemandHouse.value / copPump / 365;

  const elecDemandHousePerDay =
    elecDemandHouse.value / 365 +
    elecDemandFromHeatingPerDay +
    ((80 - carChargeLevel.value) * carEnergy.value) / 100;

  const solarProductionPerDay =
    (activeDay.solarPerDay * moduleAmount.value * modulePower.value) / 1000;

  const gridFeedIn =
    (Math.max(solarProductionPerDay - elecDemandHousePerDay, 0) *
      feedInTarif.value) /
    100;

  const autarky =
    (Math.max(
      elecDemandHousePerDay -
        Math.max(elecDemandHousePerDay - solarProductionPerDay, 0),
      0
    ) /
      elecDemandHousePerDay) *
    Math.min(batEnergy.value / elecDemandHousePerDay, 1) *
    100;

  const gridConsumption = elecDemandHousePerDay * (1 - autarky / 100);

  const gridConsumptionPrice = (gridConsumption * gridElectricity.value) / 100;

  const results = {
    elecDemandHousePerDay,
    solarProductionPerDay,
    gridConsumption,
    gridConsumptionPrice,
    gridFeedIn,
    autarky,
  };

  function useUnitFormInput(name, initialValue, unit, min, max, step) {
    const [value, setValue] = useState(initialValue);

    function onChange(value) {
      setValue(value);
    }

    return {
      name,
      value,
      onChange,
      unit,
      min,
      max,
      step,
    };
  }

  return (
    <CalculationContext.Provider
      value={{ results, components, dayTypes, setActiveDay, activeDay }}
    >
      {props.children}
    </CalculationContext.Provider>
  );
};
