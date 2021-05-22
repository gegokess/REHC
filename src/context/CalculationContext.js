import { createContext, useState } from "react";

export const CalculationContext = createContext();

export const CalculationProvider = function (props) {
	// Solar
	const useSolar = useSwitchInput(false);
	const solarPower = useUnitFormInput("Solar power size", 15, "kWp");

	// Heat Pump
	const usePump = useSwitchInput(false);
	const pumpPower = useUnitFormInput("Heat pump power", 5, "kW");

	// EV
	const useCar = useSwitchInput(true);
	const carEnergy = useUnitFormInput("Car battery size", 40, "kWh");
	const carConsumption = useUnitFormInput("Car consumption", 14, "kWh/100km");
	const range = useUnitFormInput("Estimated range per year", 15000, "km");
	const carChargeLevel = useUnitFormInput(
		"Current battery charge level",
		60,
		"%"
	);
	const carChargeGoal = useUnitFormInput("Battery charge goal", 80, "%");

	// Battery
	const useBattery = useSwitchInput(false);
	const batEnergy = useUnitFormInput("Battery size", 17, "kWh");

	// House
	const [data, setData] = useState(null);
	// const electricityPrice = useFormInput(28.5);

	const ev = {
		active: useCar,
		battery: carEnergy,
		consumption: carConsumption,
		range: range,
		charging: {
			current: carChargeLevel,
			goal: carChargeGoal,
		},
	};

	const hp = {
		active: usePump,
		power: pumpPower,
	};

	const battery = {
		active: useBattery,
		energy: batEnergy,
	};

	const solar = {
		active: useSolar,
		power: solarPower,
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

	function useUnitFormInput(name, initialValue, unit) {
		const [value, setValue] = useState(initialValue);

		function handleChange(e) {
			setValue(e.target.value);
		}

		return {
			name,
			value,
			onChange: handleChange,
			unit: unit,
		};
	}

	function toggleComponent() {}

	return (
		<CalculationContext.Provider value={{ ev, hp, solar, battery }}>
			{props.children}
		</CalculationContext.Provider>
	);
};
