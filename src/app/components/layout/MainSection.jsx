import { Box, Text } from "@chakra-ui/react";
import React from "react";

const MainSection = (game) => {
  return (
    <Box>
      <Text fontSize="xl" mb={4}>
        Bienvenido, {game.currentHero ? game.currentHero.class : "jugador"}
      </Text>
      <Text>Aquí se mostrarán las escenas y textos del juego.</Text>
    </Box>
  );
};

export default MainSection;
