"use client";

import { VStack, Button, Heading, Stack } from "@chakra-ui/react";
import { useGame } from "../context/GameContext";

export default function MainMenu() {
  const { changeScene } = useGame();

  return (
    <VStack
      minH="100%"
      minW="100%"
      bg="gray.800"
      color="white"
      justify="center"
      spacing={4}
    >
      <Heading as="h1" size="2xl" mb={8}>
        Prima RPG
      </Heading>
      <Stack spacing={4}>
        <Button
          colorScheme="blue"
          onClick={() => changeScene("characterSelection")}
        >
          Iniciar Partida
        </Button>
      </Stack>
    </VStack>
  );
}
