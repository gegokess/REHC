import React, { useState } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// import PriceChart from "./components/PriceChart";
import SelectionEV from "./components/SelectionEV";
import SelectionHouse from "./components/SelectionHouse";

function App() {
	const [data, setData] = useState(null);
	const [pumpPower, setPumpPower] = useState(5);
	const [carEnergy, setCarEnergy] = useState(52);
	const [solarPower, setSolarPower] = useState(15);
	const [batEnergy, setBatEnergy] = useState(17);
	const [range, setRange] = useState(15000);
	const [carConsumption, setCarConsumption] = useState(14);
	const [electricityPrice, setElectricityPrice] = useState(28.5);

	return (
		<div className="App">
			<Container maxWidth="lg">
				<h1 className="text-4xl p-4">Electricity valuation</h1>
				<Grid container spacing={3} justify="center">
					<Grid item lg={6}>
						<Grid container spacing={3} justify="center">
							<Grid item lg={10}>
								<SelectionHouse
									setPumpPower={setPumpPower}
									pumpPower={pumpPower}
									setSolarPower={setSolarPower}
									solarPower={solarPower}
									setBatEnergy={setBatEnergy}
									batEnergy={batEnergy}
									setElectricityPrice={setElectricityPrice}
								/>
								<SelectionEV
									setCarEnergy={setCarEnergy}
									carEnergy={carEnergy}
									setCarConsumption={setCarConsumption}
									carConsumption={carConsumption}
									setRange={setRange}
									range={range}
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item lg={6}>
						asdf
					</Grid>
				</Grid>

				{/* <PriceChart setData={setData} data={data} /> */}

				<div>Result: {range * carConsumption}</div>
			</Container>
		</div>
	);
}

export default App;
