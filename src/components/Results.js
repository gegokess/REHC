import { Heading, Box } from "@chakra-ui/layout";
import React, { useContext } from "react";

import { CalculationContext } from "../context/CalculationContext";

export default function Selection({ items, useSelection, name }) {
	const { results } = useContext(CalculationContext);
	const { solarProduction, autarky, selfConsumption } = results;

	return (
		<div>
			<Heading>Results</Heading>
			<Box>
				{"Solar Production"} {solarProduction}
			</Box>
			<Box>
				{"Autarkie"} {autarky}
			</Box>
			<Box>{selfConsumption}</Box>
		</div>
	);
}
