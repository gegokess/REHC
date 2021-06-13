import React, { useContext, useEffect, useState } from "react";
import { Box, Heading, Flex, Image, useConst } from "@chakra-ui/react";
import DaySelectionElement from "./daySelectionElement";
import { CalculationContext } from "../context/CalculationContext";

export default function DaySelection() {
  const { dayTypes, setActiveDay, activeDay } = useContext(CalculationContext);

  const changeActiveDay = (id) => {
    setActiveDay(dayTypes.find((day) => day.id === id));
  };

  return (
    <div>
      <Flex justifyContent="space-around" boxSize={["100%"]} wrap="wrap">
        {dayTypes.map((day) => (
          <DaySelectionElement
            day={day}
            key={day.id}
            onClick={() => {
              changeActiveDay(day.id);
            }}
            active={day.id === activeDay.id}
          />
        ))}
      </Flex>
    </div>
  );
}
