import React, { useState } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// import PriceChart from "./components/PriceChart";
import Selection from "./components/Selection";
import Box from "@material-ui/core/Box";
import Results from "./components/Results";

function App() {
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

	// Battery
	const useBattery = useSwitchInput(false);
	const batEnergy = useUnitFormInput("Battery size", 17, "kWh");

	// House
	const [data, setData] = useState(null);
	// const electricityPrice = useFormInput(28.5);

	return (
		<div className="App">
			<Container maxWidth="lg">
				<h1 className="text-4xl p-4">Electricity valuation</h1>
				<Grid container spacing={3} justify="center">
					<Grid item xs={12} lg={6}>
						<Box flexDirection="column">
							<Selection
								name="Solar Panels"
								items={[solarPower]}
								useSelection={useSolar}
							/>
							<Selection
								name="Battery"
								items={[batEnergy]}
								useSelection={useBattery}
							/>
							<Selection
								name="Heat pump"
								items={[pumpPower]}
								useSelection={usePump}
							/>
							<Selection
								name="Electric vehicle"
								items={[carEnergy, carConsumption, range]}
								useSelection={useCar}
							/>
						</Box>
					</Grid>

					<Grid item lg={6}>
						<Results></Results>
					</Grid>
				</Grid>

				{/* <PriceChart setData={setData} data={data} /> */}

				<div>Result: {range.value * carConsumption.value}</div>
			</Container>
		</div>
	);

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
			console.log(value, e.target.value);
			setValue(e.target.value);
		}

		return {
			name,
			value,
			onChange: handleChange,
			unit: unit,
		};
	}
}

export default App;
