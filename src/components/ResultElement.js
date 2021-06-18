import { useEffect, useState } from "react";

import { Heading, Box, Text } from "@chakra-ui/layout";
import CountUp from "react-countup";

export default function ResultElement({ name, value, unit }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  useEffect(() => {
    setStart(end);
    setEnd(value);
  }, [value]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      w="100%"
      maxW="md"
      textAlign="center"
      m="1rem"
    >
      <Box display="flex" textAlign="center" alignItems="baseline">
        <Heading as="h4" size="lg">
          <CountUp
            start={start}
            end={end}
            separator=","
            decimals={2}
            decimal="."
          ></CountUp>
        </Heading>
        <Text ml=".3rem" my="1rem" fontSize="md" color="#95a5a6">
          {unit}
        </Text>
      </Box>
      <Heading as="h6" color="#bdc3c7" size="xs" textTransform="uppercase">
        {name}
      </Heading>
    </Box>
  );
}
