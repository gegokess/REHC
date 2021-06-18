import React, { useContext } from "react";
import { Flex } from "@chakra-ui/react";
import DaySelectionElement from "./daySelectionElement";
import { CalculationContext } from "../context/CalculationContext";

export default function DaySelection() {
  const { dayTypes, setActiveDay, activeDay, components } =
    useContext(CalculationContext);
  const heatingComponent = components.find((component) => component.id === 2);

  const changeActiveDay = (id) => {
    const newActiveDay = dayTypes.find((day) => day.id === id);
    setActiveDay(newActiveDay);
    const heatingValue = newActiveDay.id === 1 ? 25000 : 0;
    heatingComponent.items[0].onChange(heatingValue);
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
