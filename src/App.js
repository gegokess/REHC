import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { Box, Center } from "@chakra-ui/react";
import { Container, Heading } from "@chakra-ui/react";
import ResultHeader from "./components/ResultHeader";
import Selections from "./components/Selections";
import { CalculationProvider } from "./context/CalculationContext";
import DaySelection from "./components/daySelection";

function App() {
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
            <Heading py="3rem" size="xl" color="white" textAlign="center">
              Renewable Energy House Calculator
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
