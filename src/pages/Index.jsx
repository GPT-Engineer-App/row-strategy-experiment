import React, { useState } from "react";
import { Box, Button, Container, Heading, Radio, RadioGroup, Stack, Text, VStack } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const Index = () => {
  const [selectedRow, setSelectedRow] = useState("");

  const gameMatrix = [
    { row: "A", payoff: [3, 2] },
    { row: "B", payoff: [2, 5] },
    { row: "C", payoff: [0, 1] },
  ];

  const handleRowSelection = (value) => {
    setSelectedRow(value);
  };

  const handleSubmit = () => {
    alert(`You have selected row: ${selectedRow}`);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={5}>
        <Heading as="h1" size="xl">
          Normal Form Game
        </Heading>
        <Text>Select a row as your strategy:</Text>
        <RadioGroup onChange={handleRowSelection} value={selectedRow}>
          <Stack direction="column">
            {gameMatrix.map((row) => (
              <Radio key={row.row} value={row.row}>
                Row {row.row}: Payoffs {row.payoff.join(", ")}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
        <Button leftIcon={<FaCheck />} colorScheme="teal" variant="solid" onClick={handleSubmit} isDisabled={!selectedRow}>
          Submit
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
