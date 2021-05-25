import { useConst } from "@chakra-ui/hooks";
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
		42,
		"",
		6,
		150,
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
		active: true,
		items: [elecDemandHouse, houseArea, heatingDemandHouse],
	};

	const ev = {
		id: 1,
		name: "Electric vehicle",
		active: useCar,
		items: [
			carEnergy,
			carConsumption,
			range,
			carChargeLevel,
			carChargeGoal,
		],
	};

	const hp = {
		id: 2,
		name: "Heat Pump",
		active: usePump,
		items: [pumpPower],
	};

	const battery = {
		id: 3,
		name: "House battery",
		active: useBattery,
		items: [batEnergy],
	};

	const solar = {
		id: 4,
		name: "Solar Panels",
		active: useSolar,
		items: [modulePower, moduleAmount],
	};

	const components = [house, ev, solar, battery, hp];

	const solarProduction = moduleAmount.value * modulePower.value;
	const autarky = calcAutarky(solarProduction, batEnergy.value);
	const selfConsumption = calcSelfConsumptionFactor(
		solarProduction,
		batEnergy.value
	);
	const gridConsumption = 0;
	const gridFeedIn = 0;

	function calcAutarky(solarProduction, batEnergy) {
		const solarFactor = solarProduction / 10 / elecDemandHouse.value;
		const batteryFactor = batEnergy / (elecDemandHouse.value / 1000);

		return Math.max((solarFactor * batteryFactor) / 2.25, 0.99);
	}

	function calcSelfConsumptionFactor(solarProduction, batEnergy) {
		const solarFactor = solarProduction / 10 / elecDemandHouse.value;
		const batteryFactor = batEnergy / (elecDemandHouse.value / 1000);

		console.log(
			solarFactor,
			batteryFactor,
			(batteryFactor / 2.5) * 99,
			(solarFactor / 2.5) * 59
		);

		const calcSelfConsumptionFactor =
			Math.min(batteryFactor / elecDemandHouse.value / 2.5, 1) * 99 -
			Math.min(solarFactor / elecDemandHouse.value / 2.5, 1) * 59;

		return Math.max(calcSelfConsumptionFactor, 0.99);
	}

	const results = {
		solarProduction,
		autarky,
		selfConsumption,
		gridConsumption,
		gridFeedIn,
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

		function handleChange(value) {
			setValue(value);
		}

		return {
			name,
			value,
			onChange: handleChange,
			unit,
			min,
			max,
			step,
		};
	}

	function toggleComponent() {}

	return (
		<CalculationContext.Provider value={{ results, components }}>
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
