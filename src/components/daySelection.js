import React, { useContext, useEffect, useState } from "react";
import { Box, Heading, Flex, Image, useConst } from "@chakra-ui/react";
import DaySelectionElement from "./daySelectionElement";
import { CalculationContext } from "../context/CalculationContext";

export default function DaySelection() {
  const [activeDay, setActiveDay] = useState(2);
  const { dayTypes } = useContext(CalculationContext);

  const changeActiveDay = (id) => {
    setActiveDay(id);
    console.log(activeDay);
    console.log(activeDay);
    console.log(activeDay);
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
            active={day.id === activeDay}
          />
        ))}
      </Flex>
    </div>
  );
}
