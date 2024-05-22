"use client";

import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useGame } from "../context/GameContext";

export default function Introduction() {
  const { changeScene } = useGame();

  return (
    <Box textAlign="center" p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Introducción
      </Heading>
      <Text mb={4}>
        Bienvenido al mundo de Prima RPG. Tu aventura está a punto de comenzar.
      </Text>
      <Button colorScheme="blue" onClick={() => changeScene("combat")}>
        Continuar
      </Button>
    </Box>
  );
}
