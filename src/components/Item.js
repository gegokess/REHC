import React, { useState, useContext } from "react";
import {
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
} from "@chakra-ui/react";

import {
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from "@chakra-ui/react";

import { Flex, Text, Spacer } from "@chakra-ui/react";
import { CalculationContext } from "../context/CalculationContext";

export default function HomeInstallation({
	name,
	min,
	max,
	step,
	item,
	disabled,
}) {
	const [checked, setChecked] = useState(true);

	const toggleChecked = () => {
		setChecked((prev) => !prev);
	};

	const format = (val) => val + " " + item.unit;

	return (
		<div>
			<Flex py="2" align="center">
				<Flex>
					<Text>{item.name}</Text>
				</Flex>
				<Spacer />
				<Flex>
					<NumberInput
						maxW="150px"
						ml="2rem"
						value={format(item.value)}
						onChange={item.onChange}
						min={item.min}
						max={item.max}
						step={item.step}
					>
						<Spacer />
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</Flex>
			</Flex>
			<Slider
				flex="1"
				focusThumbOnChange={false}
				value={item.value}
				onChange={item.onChange}
				min={item.min}
				max={item.max}
				step={item.step}
			>
				<SliderTrack>
					<SliderFilledTrack />
				</SliderTrack>
				<SliderThumb />
			</Slider>
		</div>
	);
}
