import React, { setState, useContext } from "react";
import HomeInstallation from "./Item";

import { Box, IconButton } from "@chakra-ui/react";
import { CalculationContext } from "../context/CalculationContext";
import Selection from "./Selection";
import { AddIcon } from "@chakra-ui/icons";

export default function Selections() {
	const { components } = useContext(CalculationContext);

	return (
		<Box align="center">
			{components.map((component) => (
				<Selection
					name={component.name}
					items={component.items}
					id={component.id}
				/>
			))}
			<IconButton
				colorScheme="blue"
				aria-label="Search database"
				icon={<AddIcon />}
			/>
		</Box>
	);
}
