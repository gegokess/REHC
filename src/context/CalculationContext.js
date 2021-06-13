import { useConst } from "@chakra-ui/hooks";
import { createContext, useContext, useEffect, useState } from "react";

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

	const houseArea = useUnitFormInput("House area", 150, "m²", 50, 400, 10);

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
	const moduleAmount = useUnitFormInput(
		"Amount of Modules",
		30,
		"",
		6,
		72,
		6
	);

	// Heat Pump
	const usePump = useSwitchInput(false);
	const pumpPower = useUnitFormInput("Heat pump power", 5, "kW", 1, 15, 1);
	const heatingDemandHouse = useUnitFormInput(
		"House heating demand",
		3000,
		"kWh",
		500,
		10000,
		500
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
	const carEnergy = useUnitFormInput(
		"Car battery size",
		40,
		"kWh",
		5,
		100,
		5
	);
	const carConsumption = useUnitFormInput(
		"Car consumption",
		14,
		"kWh/100km",
		5,
		40,
		1
	);
	const range = useUnitFormInput(
		"Estimated range per year",
		15000,
		"km",
		3000,
		100000,
		3000
	);
	const carChargeLevel = useUnitFormInput(
		"Current battery charge level",
		60,
		"%",
		0,
		99,
		1
	);
	const carChargeGoal = useUnitFormInput(
		"Battery charge goal",
		80,
		"%",
		1,
		100,
		1
	);

	// Battery
	const useBattery = useSwitchInput(false);
	const batEnergy = useUnitFormInput("Battery size", 10, "kWh", 2, 25, 1);

	// House
	const [data, setData] = useState(null);
	// const electricityPrice = useFormInput(28.5);

	const house = {
		id: 0,
		name: "House",
		imagePath: "home.png",
		active: true,
		items: [elecDemandHouse, houseArea, heatingDemandHouse],
	};

	const ev = {
		id: 1,
		name: "Electric vehicle",
		imagePath: "car.png",
		active: useCar,
		items: [
			carEnergy,
			// carConsumption,
			// range,
			carChargeLevel,
			//carChargeGoal,
		],
	};

	const hp = {
		id: 2,
		name: "Heat Pump",
		imagePath: "fan.png",
		active: usePump,
		items: [pumpPower],
	};

	const battery = {
		id: 3,
		name: "House battery",
		imagePath: "battery.png",
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
		solarPerDay: 2.85,
	};

	const summerDay = {
		id: 3,
		title: "Summer day",
		icon: "sun.png",
		active: false,
		solarPerDay: 4.3,
	};

	const dayTypes = [winterDay, averageDay, summerDay];

	const elecDemandHeatPump = 0;

	const components = [house, ev, solar, grid, battery, hp];

	const elecDemandHousePerDay =
		(elecDemandHouse.value - elecDemandHeatPump) / 365;

	const solarProductionPerDay =
		(averageDay.solarPerDay * moduleAmount.value * modulePower.value) /
		1000;
	const gridConsumption = Math.max(
		elecDemandHousePerDay - solarProductionPerDay,
		0
	);
	const gridFeedIn = Math.max(
		solarProductionPerDay - elecDemandHousePerDay,
		0
	);

	const autarky =
		Math.max(elecDemandHousePerDay - gridConsumption, 0) /
		elecDemandHousePerDay;

	const results = {
		elecDemandHousePerDay,
		solarProductionPerDay,
		gridConsumption,
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
		<CalculationContext.Provider value={{ results, components, dayTypes }}>
			{props.children}
		</CalculationContext.Provider>
	);
};

export function useItem(componentId) {
	const components = useContext(CalculationContext);
	const component = components.find(
		(component) => componentId == component.id
	);
	return {
		component,
	};
}
