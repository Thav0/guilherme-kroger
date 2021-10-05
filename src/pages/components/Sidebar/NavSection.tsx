import { Box, Stack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface NavSectionProps {
  children: ReactNode;
}

export function NavSection({ children }: NavSectionProps) {
  return (
    <Box>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
