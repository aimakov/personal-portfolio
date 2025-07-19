import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'
import localFont from 'next/font/local'
import { Raleway } from 'next/font/google'

const satoshi = localFont({
  src: './fonts/Satoshi-Variable.woff2',
  display: 'fallback',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box className={raleway.className}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}
