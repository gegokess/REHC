import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import PriceChart from "./components/PriceChart";
import Selection from "./components/Selection";
import Box from "@material-ui/core/Box";
import Results from "./components/Results";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import { CalculationProvider } from "./context/CalculationContext";

function App() {
	// Fetch Sun Data

	// Fetch Electricity tariffs
	// const fetchPrices = async () => {
	// 	await axios("https://api.awattar.de/v1/marketdata").then((response) => {
	// 		setData(response.data.data);
	// 	});
	// };

	// useEffect(() => {
	// 	fetchPrices();
	// }, []);

	return (
		<div className="App">
			<CalculationProvider>
				<Container maxWidth="lg">
					{/* <h1 className="text-4xl p-4">
						Electricity valuation for today
					</h1>
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
									items={[
										carEnergy,
										carConsumption,
										range,
										carChargeLevel,
										carChargeGoal,
									]}
									useSelection={useCar}
								/>
							</Box>
						</Grid>

						<Grid item lg={6}>
							<Results></Results>
						</Grid>
					</Grid> */}

					{/* <div>Result: {range.value * carConsumption.value}</div> */}
					<Typography variant="h6">Data sources</Typography>
					<Results></Results>
					<Box my={3}>
						<Divider></Divider>
					</Box>
					{/* <PriceChart setData={setData} data={data} /> */}
				</Container>
			</CalculationProvider>
		</div>
	);
}

export default App;
