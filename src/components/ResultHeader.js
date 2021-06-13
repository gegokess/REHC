import { Heading, Box } from "@chakra-ui/layout";
import React, { useContext } from "react";

import { CalculationContext } from "../context/CalculationContext";

export default function Selection({ items, useSelection, name }) {
  const { results } = useContext(CalculationContext);
  const {
    elecDemandHousePerDay,
    solarProductionPerDay,
    gridConsumption,
    gridFeedIn,
    autarky,
  } = results;

  return (
    <Box color="white">
      <Heading>Results</Heading>
      <Box>
        <Box>
          {"Solar Production"} {solarProductionPerDay}
        </Box>
        <Box>
          {"Autarkie"} {autarky}
        </Box>
        <Box>
          {"gridConsumption"} {gridConsumption}
        </Box>
        <Box>
          {"gridFeedIn"} {gridFeedIn * 0.11} €
        </Box>
        <Box>
          {"elecDemandHousePerDay"} {elecDemandHousePerDay}
        </Box>
      </Box>
    </Box>
  );
}
