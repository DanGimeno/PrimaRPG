"use client";

import { useState } from "react";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useGame } from "../context/GameContext";
import { Slime } from "../models/Villain";

export default function Combat() {
  const { gameState } = useGame();
  const [enemy] = useState(new Slime());
  const [heroHp, setHeroHp] = useState(gameState.currentHero.hp);
  const [enemyHp, setEnemyHp] = useState(enemy.hp);
  const [healUsed, setHealUsed] = useState(false);

  const attack = () => {
    gameState.currentHero.attack(enemy);
    setEnemyHp(enemy.hp);
    if (enemy.hp > 0) {
      enemyAttack();
    }
  };

  const defend = () => {
    const reducedDamage =
      enemy.strength - gameState.currentHero.effectiveStats.defense;
    setHeroHp(heroHp - Math.max(reducedDamage, 0));
  };

  const heal = () => {
    if (!healUsed) {
      setHeroHp(heroHp + gameState.currentHero.hp * 0.2);
      setHealUsed(true);
    }
  };

  const enemyAttack = () => {
    gameState.currentHero.takeDamage(enemy.strength);
    setHeroHp(gameState.currentHero.hp);
  };

  if (heroHp <= 0)
    return <Heading color="red.500">¡Has sido derrotado!</Heading>;
  if (enemyHp <= 0)
    return <Heading color="green.500">¡Has derrotado al enemigo!</Heading>;

  return (
    <VStack spacing={4}>
      <Heading as="h2" size="lg">
        Combate
      </Heading>
      <Text>
        {gameState.currentHero.name} (HP: {heroHp}) vs {enemy.name} (HP:{" "}
        {enemyHp})
      </Text>
      <VStack spacing={2}>
        <Button colorScheme="red" onClick={attack}>
          Atacar
        </Button>
        <Button colorScheme="yellow" onClick={defend}>
          Defender
        </Button>
        <Button colorScheme="blue" onClick={heal}>
          Curarse
        </Button>
      </VStack>
    </VStack>
  );
}
