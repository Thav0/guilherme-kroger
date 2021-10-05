import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    red: {
      "800": "#CD2122",
    },
    gray: {
      "700": "#353535",
      "750": "#2F2F2F",
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
