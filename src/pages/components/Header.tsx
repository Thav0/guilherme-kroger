import {
  Flex,
  Heading,
  Box,
  HStack,
  Link as ChakraLink,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

import { ActiveLink } from "./ActiveLink";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";
import { Sidebar } from "./Sidebar";

export function Header() {
  const { onOpen, isOpen, onClose } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
      {!isWideVersion && <Sidebar />}

      <Box paddingRight={[5, 0, 0]}>
        <Heading as="h1">Logo</Heading>
      </Box>

      {isWideVersion && (
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
      )}
    </Flex>
  );
}
