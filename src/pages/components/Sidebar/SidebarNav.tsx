import { Stack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/institucional">Institucional</NavLink>
        <NavLink href="/servicos">Serviços</NavLink>
        <NavLink href="/contato">Contato</NavLink>
      </NavSection>
    </Stack>
  );
}
