import {
  Flex,
  Heading,
  Box,
  HStack,
  Link as ChakraLink,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

import { ActiveLink } from "./ActiveLink";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";
import { Sidebar } from "./Sidebar";
import { ChevronDownIcon } from "@chakra-ui/icons";

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
      className="navHeader"
    >
      {!isWideVersion && <Sidebar />}

      <Box paddingRight={[5, 0, 0]}>
        <Heading as="h1">Logo</Heading>
      </Box>

      {isWideVersion && (
        <HStack as="nav" zIndex="10">
          <ActiveLink href="/">
            <ChakraLink>Home</ChakraLink>
          </ActiveLink>

          <ActiveLink href="/institucional">
            <ChakraLink>Institucional</ChakraLink>
          </ActiveLink>
          <Menu>
            <MenuButton
              background="var(--chakra-colors-red-800)"
              _hover={{ bg: "var(--chakra-colors-red-800)", color: "white" }}
              _expanded={{ bg: "var(--chakra-colors-red-800)", color: "white" }}
              color="white"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Serviços
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link href="#regularizacao">
                  <ChakraLink>Regularização</ChakraLink>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="#financiamento-bancario">
                  <ChakraLink>Financiamento Bancário</ChakraLink>
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <ActiveLink href="/contato">
            <ChakraLink>Contato</ChakraLink>
          </ActiveLink>
        </HStack>
      )}
    </Flex>
  );
}
