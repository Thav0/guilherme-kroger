import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    red: {
      "800": "#CD2122",
    },
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  styles: {
    global: {
      body: {
        bg: "white",
      },
    },
  },
});
