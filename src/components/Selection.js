import React, { setState } from "react";
import HomeInstallation from "./Item";

import {
	Box,
	Badge,
	Heading,
	CloseButton,
	Image,
	Spacer,
} from "@chakra-ui/react";

export default function Selection({ items, id, name, imagePath }) {
	return (
		<Box
			mb="2"
			width={["100%", "lg", "md"]}
			borderWidth="1px"
			borderRadius="lg"
			mt="5rem"
			bg="white"
			p="6"
		>
			<Box mb="20px" px="10px" d="flex" alignItems="center">
				<Heading as="h5" size="md">
					{name}
				</Heading>
				<Spacer />
				<Image mt="-80px" boxSize="130px" src={imagePath} />
			</Box>
			<Box>
				{items.map((item, index) => (
					<HomeInstallation
						key={index}
						item={item}
						id={id}
					></HomeInstallation>
				))}
			</Box>
		</Box>
	);
}
