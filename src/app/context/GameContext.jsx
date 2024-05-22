"use client";

import { createContext, useContext, useState } from "react";
import { Warrior, Mage, Archer } from "../models/Hero";

const GameContext = createContext();

export const useGame = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState({
    currentScene: "start", // puede ser 'start', 'characterSelection', 'introduction', 'combat', etc.
    heroes: [],
    currentHero: null,
  });

  const addHero = (hero) => {
    setGameState((prevState) => ({
      ...prevState,
      heroes: [...prevState.heroes, hero],
    }));
  };

  const setCurrentHero = (hero) => {
    setGameState((prevState) => ({
      ...prevState,
      currentHero: hero,
    }));
  };

  const changeScene = (scene) => {
    setGameState((prevState) => ({
      ...prevState,
      currentScene: scene,
    }));
  };

  return (
    <GameContext.Provider
      value={{ gameState, addHero, setCurrentHero, changeScene }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
