import React from "react";
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

export default function HomeInstallation({ item }) {
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
            value={item.value}
            onChange={(_valueString, valueNumber) => {
              if (!Number.isNaN(valueNumber)) {
                item.onChange(valueNumber);
              }
            }}
            min={item.min}
            max={item.max}
            step={item.step}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Text ml="0.5rem">{item.unit}</Text>
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
