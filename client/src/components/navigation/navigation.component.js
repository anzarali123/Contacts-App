import React from "react";
import { Link } from "react-router-dom";
import {
  Heading,
  Flex,
  Box,
  ButtonGroup,
  Button,
  Spacer,
} from "@chakra-ui/react";
const Navigation = () => {
  return (
    <Flex
      background="#211e32"
      minWidth="max-content"
      padding="20px"
      alignItems="center"
      gap="2"
    >
      <Box p="2">
        <Heading size="xl" color="white">
          <Link to="/"> CONTACTS+</Link>
        </Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Link to="/">
          <Button colorScheme="whiteAlpha">Home</Button>
        </Link>
        <Link to="/messagelist">
          <Button colorScheme="whiteAlpha">Messages</Button>
        </Link>
      </ButtonGroup>
    </Flex>
  );
};

export default Navigation;
