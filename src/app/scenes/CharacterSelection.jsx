"use client";

import { Box, Button, Heading, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useGame } from "../context/GameContext";
import { Warrior, Mage, Archer } from "../models/Hero";

export default function CharacterSelection() {
  const { setCurrentHero, changeScene } = useGame();
  const [heroName, setHeroName] = useState("");

  const selectHero = (HeroClass) => {
    const hero = new HeroClass(heroName);
    setCurrentHero(hero);
    changeScene("introduction");
  };

  return (
    <Box textAlign="center" p={4}>
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
        <Button colorScheme="green" onClick={() => selectHero(Warrior)}>
          Guerrero
        </Button>
        <Button colorScheme="green" onClick={() => selectHero(Mage)}>
          Mago
        </Button>
        <Button colorScheme="green" onClick={() => selectHero(Archer)}>
          Arquero
        </Button>
      </Stack>
    </Box>
  );
}
