import React, { useContext } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import { Grid, GridItem, Box, Center } from "@chakra-ui/react";
import { Container, Heading } from "@chakra-ui/react";
import ResultHeader from "./components/ResultHeader";
import Selection from "./components/Selection";
import Selections from "./components/Selections";
import { CalculationProvider } from "./context/CalculationContext";
import HomeInstallation from "./components/Item";
import DaySelection from "./components/daySelection";

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
      <div className="App" style={{ background: "#1B232C" }}>
        <ChakraProvider>
          <Container
            maxW={{
              base: "100%",
              md: "container.md",
              lg: "80%",
            }}
          >
            <Heading my={4} size="xl" color="white">
              Electricity valuation
            </Heading>
            <Center>
              <DaySelection></DaySelection>
            </Center>

            <ResultHeader></ResultHeader>
            <Box width="100%">
              <Selections />
            </Box>
          </Container>
        </ChakraProvider>
      </div>
    </CalculationProvider>
  );
}

export default App;
