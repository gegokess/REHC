import React, { useContext } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import Results from "./components/Results";
import Selection from "./components/Selection";
import { CalculationProvider } from "./context/CalculationContext";
import HomeInstallation from "./components/HomeInstallation";

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
		<CalculationProvider>
			<div className="App">
				<ChakraProvider>
					<Container maxW="container.lg">
						<Grid w="100%" templateColumns="repeat(2, 1fr)" gap={6}>
							<Box w="100%" bg="blue.500" />

							<Box w="100%" bg="blue.500">
								<Selection name="HeatPump" />
							</Box>
						</Grid>
					</Container>
				</ChakraProvider>
			</div>
		</CalculationProvider>
	);
}

export default App;
