import { createContext, useContext, useState } from "react";

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

  // const houseArea = useUnitFormInput("House area", 150, "m²", 50, 400, 10);

  // Solar
  const useSolar = useSwitchInput(false);
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
  const usePump = useSwitchInput(false);
  const heatingDemandHouse = useUnitFormInput(
    "House heating demand",
    0,
    "kWh",
    0,
    50000,
    5000
  );

  const useGrid = useSwitchInput(true);
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
  const useCar = useSwitchInput(true);
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
  const useBattery = useSwitchInput(false);
  const batEnergy = useUnitFormInput("Battery size", 12, "kWh", 2, 25, 1);

  // House

  const house = {
    id: 0,
    name: "House",
    imagePath: "home.png",
    active: true,
    items: [elecDemandHouse],
  };

  const ev = {
    id: 1,
    name: "Electric vehicle",
    imagePath: "car.png",
    active: useCar,
    items: [carEnergy, carChargeLevel],
  };

  const hp = {
    id: 2,
    name: "Heat Pump",
    imagePath: "fan.png",
    active: usePump,
    items: [heatingDemandHouse],
  };

  const battery = {
    id: 3,
    name: "House battery",
    imagePath: "battery-level.png",
    active: useBattery,
    items: [batEnergy],
  };

  const solar = {
    id: 4,
    name: "Solar Panels",
    imagePath: "solar-panel.png",
    active: useSolar,
    items: [modulePower, moduleAmount],
  };

  const grid = {
    id: 5,
    name: "Grid",
    imagePath: "power-line.png",
    active: useGrid,
    items: [gridElectricity, feedInTarif],
  };

  const winterDay = {
    id: 1,
    title: "Winter day",
    icon: "snowflake.png",
    active: false,
    solarPerDay: 0.86,
  };

  const averageDay = {
    id: 2,
    title: "Average day",
    icon: "cloudy.png",
    active: true,
    solarPerDay: 2.1,
  };

  const summerDay = {
    id: 3,
    title: "Summer day",
    icon: "sun.png",
    active: false,
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

  function useSwitchInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
      setValue(!value);
    }

    return {
      value,
      onChange: handleChange,
    };
  }

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

export function useItem(componentId) {
  const components = useContext(CalculationContext);
  const component = components.find(
    (component) => componentId === component.id
  );
  return {
    component,
  };
}
