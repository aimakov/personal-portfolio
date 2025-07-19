import React from 'react'
import { Flex, Grid, GridItem, Text } from '@chakra-ui/react'

import { Card } from '@/components/Bits'
import { backgroundIcons, projectImages } from '@/assets'
import { featuredProjects } from './featuredProjects'

type Props = {}

const Projects = (props: Props) => {
  return (
    <Flex flexDirection={'column'} gap={4}>
      <Text fontSize={'2.5rem'} fontWeight={'bold'}>
        Featured Personal Projects
      </Text>

      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={4}>
        {featuredProjects.map(featuredProject => {
          return (
            <GridItem>
              <Card
                image={featuredProject.image}
                title={featuredProject.title}
                description={featuredProject.description}
                tags={featuredProject.tags}
              />
            </GridItem>
          )
        })}
      </Grid>
    </Flex>
  )
}

export default Projects
