import {
  Flex,
  Heading,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { ActiveLink } from "./ActiveLink";

export function Header() {
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1140}
      h="15"
      mx="auto"
      direction="row"
      justify="space-between"
      align="center"
      my="10"
    >
      <Box>
        <Heading as="h1">Logo</Heading>
      </Box>
      <HStack as="nav">
        <ActiveLink href="/">
          <ChakraLink>Home</ChakraLink>
        </ActiveLink>
        <ActiveLink href="/institucional">
          <ChakraLink>Institucional</ChakraLink>
        </ActiveLink>
        <ActiveLink href="/servicos">
          <ChakraLink>Serviços</ChakraLink>
        </ActiveLink>
        <ActiveLink href="/contato">
          <ChakraLink>Contato</ChakraLink>
        </ActiveLink>
      </HStack>
    </Flex>
  );
}
