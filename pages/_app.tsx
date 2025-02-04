import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, defaultSystem } from "@chakra-ui/react";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  display: "fallback",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box className={satoshi.className}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
