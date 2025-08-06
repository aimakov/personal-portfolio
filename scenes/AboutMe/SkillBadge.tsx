import React from 'react'
import { Flex, Text, Box } from '@chakra-ui/react'
import Image from 'next/image'
import { brandColors } from '@/styles/theme'

type Props = {
  imgUrl: string
  name: string
  description: string
  invert?: boolean
}

const SkillBadge = ({ imgUrl, name, description, invert }: Props) => {
  return (
    <Flex
      w="100%"
      // maxW={['100%', '250px']}
      // w={'100%'}
      h="80px"
      bg="#18191a69"
      borderRadius="lg"
      boxShadow="md"
      align="center"
      p={3}
      gap={3}
    >
      <Box
        aspectRatio={'1/1'}
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#232425"
        borderRadius="md"
        boxShadow="sm"
        flexShrink={0}
      >
        <Image
          src={imgUrl}
          alt={name}
          width={32}
          height={32}
          objectFit="contain"
          className={`${invert ? 'invert' : ''}`}
        />
      </Box>
      <Flex
        direction="column"
        gap={1}
        flex={1}
        py={1}
        h={'100%'}
        my={1}
        justifyContent={'center'}
      >
        <Text
          color="white"
          fontWeight="bold"
          fontSize="1.3rem"
          lineHeight="1.2"
        >
          {name}
        </Text>
        <Text
          color={brandColors.lightGray}
          fontSize="0.8rem"
          fontWeight="normal"
        >
          {description}
        </Text>
      </Flex>
    </Flex>
  )
}

export default SkillBadge
