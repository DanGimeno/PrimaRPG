import { Button, Stack } from "@chakra-ui/react";
import React from "react";

const ActionSection = (game) => {
  return (
    <Stack spacing={4}>
      <Button colorScheme="blue">Acción 1</Button>
      <Button colorScheme="green">Acción 2</Button>
      <Button colorScheme="red">Acción 3</Button>
    </Stack>
  );
};

export default ActionSection;
