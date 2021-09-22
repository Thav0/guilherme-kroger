import {
  Flex,
  Heading,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
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
      h="20"
      mx="auto"
      direction="row"
      justify="space-between"
      align="center"
      my="20"
    >
      <Box>
        <Heading as="h1">Logo</Heading>
      </Box>
      <HStack as="nav">
        <ActiveLink href="">
          <a>Home</a>
        </ActiveLink>
        <Link href="">
          <a>Institucional</a>
        </Link>
        <Link href="">
          <a>Serviços</a>
        </Link>
        <Link href="">
          <a>Contato</a>
        </Link>
      </HStack>
    </Flex>
  );
}
