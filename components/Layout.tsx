import React, { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'

import { Header, Footer } from '@/components'
import { brandColors } from '@/styles/theme'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Flex
      zIndex={1}
      w={'100%'}
      minHeight={'100dvh'}
      overflow={'auto'}
      flexDirection={'column'}
      bgGradient={`radial-gradient( circle farthest-corner at 0% 21.8%,  ${brandColors.pinkBg} 0%, ${brandColors.purpleBg} 90% );`}
    >
      <Header />
      <Flex
        flexDirection={'column'}
        w={'100%'}
        maxWidth={'1200px'}
        mx={'auto'}
        gap={10}
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  )
}

export default Layout
