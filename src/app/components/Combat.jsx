"use client";

import { useState } from "react";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

export default function Combat({ hero, heroName }) {
  const [enemy, setEnemy] = useState({
    class: "Slime",
    hp: 50,
    mp: 0,
    fuerza: 10,
    destreza: 5,
    defensa: 5,
  });
  const [heroHp, setHeroHp] = useState(hero.stats.hp);
  const [enemyHp, setEnemyHp] = useState(enemy.hp);
  const [healUsed, setHealUsed] = useState(false);

  const attack = () => {
    setEnemyHp(enemyHp - hero.stats.fuerza);
    enemyAttack();
  };

  const defend = () => {
    const reducedDamage = enemy.fuerza - hero.stats.defensa;
    setHeroHp(heroHp - Math.max(reducedDamage, 0));
  };

  const heal = () => {
    if (!healUsed) {
      setHeroHp(heroHp + hero.stats.hp * 0.2);
      setHealUsed(true);
    }
  };

  const enemyAttack = () => {
    setHeroHp(heroHp - enemy.fuerza);
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
        {heroName} (HP: {heroHp}) vs Slime (HP: {enemyHp})
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
