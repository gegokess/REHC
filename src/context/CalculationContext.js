import { useConst } from "@chakra-ui/hooks";
import { createContext, useContext, useState } from "react";

export const CalculationContext = createContext();

export const CalculationProvider = function (props) {
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
	const batEnergy = useUnitFormInput("Battery size", 17, "kWh", 2, 50, 1);

	// House
	const [data, setData] = useState(null);
	// const electricityPrice = useFormInput(28.5);

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

	const components = [ev, solar, battery, hp];

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
		<CalculationContext.Provider value={components}>
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
