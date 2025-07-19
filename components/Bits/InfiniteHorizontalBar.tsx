import React, { ReactNode } from 'react'
import { Box, Flex } from '@chakra-ui/react'

type Props = {
  children: ReactNode
  maxWidth?: string
  speed?: number // Animation duration in seconds
}

const InfiniteHorizontalBar = ({ children, maxWidth = '100%', speed = 1 }: Props) => {
  return (
    <Box
      position="relative"
      backgroundColor={'red'}
      maxW={maxWidth}
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '50px',
        height: '100%',
        background: 'linear-gradient(to right, transparent, transparent)',
        zIndex: 1,
        pointerEvents: 'none',
      }}
      _after={{
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50px',
        height: '100%',
        background: 'linear-gradient(to left, transparent, transparent)',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      <Flex
        animation={`scroll ${speed}s linear infinite`}
        sx={{
          '@keyframes scroll': {
            '0%': {
              transform: 'translateX(0)',
            },
            '100%': {
              transform: 'translateX(-50%)',
            },
          },
        }}
        _hover={{
          animationPlayState: 'paused',
        }}
      >
        {children}
        {children}
        {children}
        {children}
      </Flex>
    </Box>
  )
}

export default InfiniteHorizontalBar
