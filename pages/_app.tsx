import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import { ThemeProvider } from "../context/themeContext"; // Ensure correct path

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Haranya&apos;s Portfolio</title>
      </Head>
      <NextUIProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </NextUIProvider>
    </>
  );
}
