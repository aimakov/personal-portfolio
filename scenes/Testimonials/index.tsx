import React from 'react'
import { Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import Image from 'next/image'

import { testimonials } from './testimonials'
import { icons } from '@/assets'
import { Testimonial } from '@/components/Bits'

type Props = {}

const Testimonials = (props: Props) => {
  return (
    <Flex flexDirection={'column'} gap={4}>
      <Flex mx={'auto'} gap={10}>
        {new Array(5).fill(0).map((_, index) => (
          <Image
            src={icons.star}
            alt="star"
            width={60}
            height={60}
            className={` filter-white `}
          />
        ))}
      </Flex>

      <Grid
        templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
        gap={10}
        my={12}
      >
        {testimonials.map(testimonial => (
          <GridItem>
            <Testimonial {...testimonial} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  )
}

export default Testimonials
