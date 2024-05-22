import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import MainSection from "./MainSection";
import ActionSection from "./ActionSection";

const GameLayout = (game) => {
  return (
    <VStack
      width="100%"
      height="100%"
      spacing={4}
      justifyContent="center"
      alignItems="flex-start"
    >
      <Box
        minW="100%"
        minH="70%"
        flex="3"
        bg="gray.700"
        p={4}
        borderRadius="md"
      >
        <MainSection game={game} />
      </Box>
      <Box
        minW="100%"
        minH="30%"
        flex="1"
        bg="gray.600"
        p={4}
        borderRadius="md"
      >
        <ActionSection game={game} />
      </Box>
    </VStack>
  );
};

export default GameLayout;
