import React, { setState } from "react";
import HomeInstallation from "./Item";

import {
	Box,
	Badge,
	Heading,
	CloseButton,
	Flex,
	Spacer,
} from "@chakra-ui/react";

export default function Selection({ items, id, name }) {
	return (
		<Box
			mb="2"
			maxW="lg"
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
		>
			<Box p="6">
				<Box mb="4" d="flex" alignItems="baseline">
					<Heading as="h5" size="md">
						{name}
					</Heading>
					<Spacer />
					<CloseButton />
				</Box>
				<Box>
					{items.map((item) => (
						<HomeInstallation
							item={item}
							id={id}
						></HomeInstallation>
					))}
				</Box>
			</Box>
		</Box>
	);
}
