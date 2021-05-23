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

import { Flex, Spacer } from "@chakra-ui/react";
import { CalculationContext } from "../context/CalculationContext";

export default function HomeInstallation({
	name,
	min,
	max,
	step,
	// item,
	disabled,
}) {
	const [checked, setChecked] = useState(true);
	const { ev } = useContext(CalculationContext);

	const toggleChecked = () => {
		setChecked((prev) => !prev);
	};

	const { range } = ev;
	const item = range;

	return (
		<div>
			<Flex>
				<Slider
					flex="1"
					focusThumbOnChange={false}
					value={item.value}
					onChange={item.onChange}
					min={0}
					max={15000}
					step={1000}
				>
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<SliderThumb boxSize={6} />
				</Slider>
				<NumberInput
					maxW="100px"
					ml="2rem"
					value={item.value}
					onChange={item.onChange}
				>
					<NumberInputField />
					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
			</Flex>

			{/* 	<FormControl>
				<TextField
					type="number"
					textAlign="center"
					margin="dense"
					color="primary"
					inputProps={{
						min: min,
						max: max,
						step: step,
						style: { textAlign: "center" },
						"aria-label": { name },
					}}
					disabled={disabled}
					id="standard-adornment"
					{...item}
					aria-describedby="standard-helper-text"
				/>
				<FormHelperText id="standard-helper-text">
					{item.name} [{item.unit}]
				</FormHelperText>
			</FormControl> */}
		</div>
	);
}
