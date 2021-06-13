import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

export default function daySelectionElement({ day, active, onClick }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      m="2"
      width={["100%", "sm", "xs"]}
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
      p="6"
      color={active ? "white" : "inherit"}
      bgColor={active ? "rgba(52, 152, 219, 0.5)" : null}
      borderColor={active ? "none" : "inherit"}
      border="none"
      onClick={onClick}
      cursor="pointer"
    >
      <Heading as="h5" size="md" mb="2">
        {day.title}
      </Heading>
      <Box w="80px" my="2">
        <Image src={day.icon} alt="Segun Adebayo" />
      </Box>
    </Box>
  );
}
