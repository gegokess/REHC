import { Heading, Box, Text, Flex } from "@chakra-ui/layout";
import CountUp from "react-countup";

export default function ResultElement({ name, value, unit }) {
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
            end={value.toFixed(2)}
            separator=","
            decimals={1}
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
