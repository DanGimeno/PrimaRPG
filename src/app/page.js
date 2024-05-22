"use client";

import {
  Box,
  Button,
  Heading,
  Input,
  Stack,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useGame } from "./context/GameContext";
import { useState } from "react";

export default function Home() {
  const { gameState, changeScene, setCurrentHero } = useGame();
  const [heroName, setHeroName] = useState("");

  const startGame = () => changeScene("characterSelection");

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
      {gameState.currentScene === "start" && (
        <Stack spacing={4}>
          <Button colorScheme="blue" onClick={startGame}>
            Iniciar Partida
          </Button>
        </Stack>
      )}
      {gameState.currentScene === "characterSelection" && (
        <CharacterSelection
          setHeroName={setHeroName}
          setCurrentHero={setCurrentHero}
          changeScene={changeScene}
        />
      )}
      {gameState.currentScene !== "start" &&
        gameState.currentScene !== "characterSelection" && (
          <GameLayout heroName={heroName} />
        )}
    </VStack>
  );
}

function CharacterSelection({ setHeroName, setCurrentHero, changeScene }) {
  const heroes = [
    {
      class: "Guerrero",
      stats: { hp: 100, mp: 50, fuerza: 20, destreza: 10, defensa: 15 },
    },
    {
      class: "Mago",
      stats: { hp: 60, mp: 100, fuerza: 10, destreza: 20, defensa: 10 },
    },
    {
      class: "Arquero",
      stats: { hp: 80, mp: 60, fuerza: 15, destreza: 20, defensa: 12 },
    },
  ];

  const selectHero = (hero) => {
    setCurrentHero(hero);
    changeScene("game");
  };

  return (
    <Box textAlign="center">
      <Heading as="h2" size="lg" mb={4}>
        Selecciona tu héroe
      </Heading>
      <Input
        placeholder="Nombre del Héroe"
        onChange={(e) => setHeroName(e.target.value)}
        bg="gray.700"
        mb={4}
        color="white"
      />
      <Stack spacing={2}>
        {heroes.map((hero) => (
          <Button
            key={hero.class}
            colorScheme="green"
            onClick={() => selectHero(hero)}
          >
            {hero.class}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}

function GameLayout({ heroName }) {
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
        <MainSection heroName={heroName} />
      </Box>
      <Box
        minW="100%"
        minH="30%"
        flex="1"
        bg="gray.600"
        p={4}
        borderRadius="md"
      >
        <ActionSection />
      </Box>
    </VStack>
  );
}

function MainSection({ heroName }) {
  return (
    <Box>
      <Text fontSize="xl" mb={4}>
        Bienvenido, {heroName}
      </Text>
      <Text>Aquí se mostrarán las escenas y textos del juego.</Text>
    </Box>
  );
}

function ActionSection() {
  return (
    <Stack spacing={4}>
      <Button colorScheme="blue">Acción 1</Button>
      <Button colorScheme="green">Acción 2</Button>
      <Button colorScheme="red">Acción 3</Button>
    </Stack>
  );
}
