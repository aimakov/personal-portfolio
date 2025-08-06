import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

type Props = {
  testimonial: string
  title?: string
  task?: string
}

export const Testimonial = ({ testimonial, title, task }: Props) => {
  return (
    <Flex flexDirection={'column'} p={4}>
      <Text fontSize={'1.2rem'} fontWeight={'bold'} textAlign={'center'}>
        {title}
      </Text>

      <Text mb={4} textAlign={'center'} color="gray.400">
        Task: {task}
      </Text>
      <Text
        fontSize={'1.4rem'}
        fontWeight={'light'}
        textAlign={'center'}
        fontStyle={'italic'}
      >
        &quot;{testimonial}&quot;
      </Text>
    </Flex>
  )
}
