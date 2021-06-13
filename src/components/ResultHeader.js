import { Heading, Box } from "@chakra-ui/layout";
import React, { useContext } from "react";

import { CalculationContext } from "../context/CalculationContext";
import ResultElement from "./ResultElement";

export default function Selection({ items, useSelection, name }) {
  const { results } = useContext(CalculationContext);
  const {
    elecDemandHousePerDay,
    solarProductionPerDay,
    gridConsumption,
    gridConsumptionPrice,
    gridFeedIn,
    autarky,
  } = results;

  return (
    <Box
      color="white"
      background="rgba(52, 152, 219, 0.5)"
      boxShadow="0px 2px 20px 0px rgba(52, 152, 219, 0.2)"
      borderRadius=".4rem"
      p="2rem"
      my="4rem"
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Box
        position="absolute"
        background="#34495e"
        top="0"
        mt="-1.5rem"
        p="1rem"
        px="2rem"
        borderRadius=".5rem"
      >
        <Heading size="md">Results For One Day</Heading>
      </Box>
      <ResultElement
        value={elecDemandHousePerDay}
        name="Electricity demand"
        unit="kWh"
      />
      <ResultElement value={gridConsumption} name="Grid demand" unit="kWh" />
      <ResultElement
        value={solarProductionPerDay}
        name="Solar Production"
        unit="kWh"
      />
      <ResultElement value={autarky} name="Autarky" unit="%" />
      <ResultElement
        value={gridConsumptionPrice}
        name="Grid consumption Price"
        unit="€"
      />
      <ResultElement value={gridFeedIn} name="Grid feed In Earnings" unit="€" />
    </Box>
  );
}
