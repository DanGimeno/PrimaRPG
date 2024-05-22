"use client";
import React from "react";
import { useContext } from "react";
import MainMenu from "./MainMenu";
import CharacterSelection from "./CharacterSelection";
import Introduction from "./Introduction";
import Combat from "./Combat";
import GameContext from "../context/GameContext";
import { useGame } from "../context/GameContext";

const SceneRenderer = () => {
  const { gameState } = useContext(GameContext); // Aquí es donde se usa el hook
  //const { gameState } = useGame(); // Aquí es donde se usa el hook

  switch (gameState.currentScene) {
    case "start":
      return <MainMenu />;
    case "characterSelection":
      return <CharacterSelection />;
    case "introduction":
      return <Introduction />;
    case "combat":
      return <Combat />;
    default:
      return <MainMenu />;
  }
};

export default SceneRenderer;
