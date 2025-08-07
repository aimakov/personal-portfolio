import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
      w={'100%'}
      maxWidth={'1200px'}
      mx={'auto'}
      justifyContent={'center'}
      alignItems={'center'}
      py={10}
      px={2}
      mb={[10, 0]}
    >
      <Flex gap={1} fontSize={'sm'}>
        <Text mt={'1px'}>©</Text>
        <Text>{new Date().getFullYear()}</Text>
        <Text>aimakov.dev | All rights reserved</Text>
      </Flex>
    </Flex>
  )
}

export default Footer
