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
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";

import { Link as LinkScroll } from "react-scroll";

import { ActiveLink } from "./ActiveLink";
import { Sidebar } from "./Sidebar";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ScrollToTop } from "./ScrollToTop";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box className="navContainer" id="header">
      <Flex
        w="100%"
        as="header"
        maxWidth={1140}
        h={[20, 28]}
        mx="auto"
        direction="row"
        justify="space-between"
        align="center"
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
                // background="var(--chakra-colors-red-800)"
                background="inherit"
                color="var(--chakra-colors-red-800)"
                transition="all 0.2s ease"
                _hover={{
                  bg: "var(--chakra-colors-red-800)",
                  filter: "brightness(1.1)",
                  color: "white",
                }}
                _expanded={{
                  bg: "var(--chakra-colors-red-800)",
                  color: "white",
                }}
                borderRadius="0"
                padding="0.3rem 0.8rem"
                height="auto"
                fontSize="1.1rem"
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Serviços
              </MenuButton>
              <MenuList>
                <MenuItem as="div" _hover={{ bg: "" }} _focus={{ bg: "" }}>
                  <LinkScroll to="regularizacao" smooth={true}>
                    <ChakraLink display="block">Regularização</ChakraLink>
                  </LinkScroll>
                </MenuItem>
                <MenuItem as="div" _hover={{ bg: "" }} _focus={{ bg: "" }}>
                  <LinkScroll to="financiamento-bancario" smooth={true}>
                    <ChakraLink>Financiamento Bancário</ChakraLink>
                  </LinkScroll>
                </MenuItem>
              </MenuList>
            </Menu>
            <ActiveLink href="/contato">
              <ChakraLink>Contato</ChakraLink>
            </ActiveLink>
          </HStack>
        )}
      </Flex>

      <ScrollToTop />
    </Box>
  );
}
