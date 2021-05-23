import React, { useContext } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import { Container } from "@chakra-ui/react";
import Results from "./components/Results";
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
					<Container>
						<HomeInstallation />
					</Container>
				</ChakraProvider>
			</div>
		</CalculationProvider>
	);
}

export default App;
