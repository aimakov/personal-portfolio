import React from 'react'
import { Flex, Grid, GridItem, Text } from '@chakra-ui/react'

import { Card } from '@/components/Bits'
import { featuredProjects } from './featuredProjects'

type Props = {}

const Projects = (props: Props) => {
  return (
    <Flex flexDirection={'column'} gap={4} id="projects" p={2}>
      <Text fontSize={['2rem', '2.5rem']} fontWeight={'bold'}>
        Featured Projects
      </Text>

      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={4}>
        {featuredProjects.map(featuredProject => {
          return (
            <GridItem>
              <Card {...featuredProject} />
            </GridItem>
          )
        })}
      </Grid>
    </Flex>
  )
}

export default Projects
