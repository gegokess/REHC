import React, { setState, useContext } from "react";
import HomeInstallation from "./Item";

import { Spacer, IconButton, Wrap, WrapItem } from "@chakra-ui/react";
import { CalculationContext } from "../context/CalculationContext";
import Selection from "./Selection";

export default function Selections() {
  const { components } = useContext(CalculationContext);

  return (
    <Wrap columns={2} spacing={10} justify="center">
      {components.map((component) => (
        <WrapItem key={component.id}>
          <Selection
            name={component.name}
            items={component.items}
            id={component.id}
            imagePath={component.imagePath}
          />
        </WrapItem>
      ))}
    </Wrap>
  );
}
