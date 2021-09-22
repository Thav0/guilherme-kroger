import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { Header } from "./components/Header";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Header />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
