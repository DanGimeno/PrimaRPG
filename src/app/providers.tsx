// app/providers.tsx
'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { GameProvider } from './context/GameContext';
import React from 'react';

export function Providers({ children }) {
  return (
    <ChakraProvider>
      <GameProvider>{children}</GameProvider>
    </ChakraProvider>
  );
}
