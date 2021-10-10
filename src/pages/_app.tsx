import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import React from "react";
import { SidebarDrawerProvider } from "../context/SidebarDrawerContext";
import "../styles/common.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Header />
        <Component {...pageProps} />
      </SidebarDrawerProvider>
      <Footer />
    </ChakraProvider>
  );
}
export default MyApp;
