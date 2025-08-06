import React from 'react'
import { Flex, Text, Grid } from '@chakra-ui/react'

import SkillBadge from './SkillBadge'
import { skillsList } from './SkillsList'

type Props = {}

const AboutMe = (props: Props) => {
  return (
    <Flex w="100%" flexDirection={'column'} mx={'auto'} p={2} id="about">
      <Text fontSize={['2rem', '2.5rem']} fontWeight={'bold'}>
        Current technologies
      </Text>
      <Text fontWeight={'light'}>
        I'm proficient in a range of modern technologies that empower me to
        build highly functional solutions. These are some of my main
        technologies.
      </Text>

      <Grid
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap="3"
        my={4}
      >
        {skillsList.map(skill => (
          <SkillBadge
            imgUrl={skill.imgUrl}
            name={skill.name}
            description={skill.description}
            invert={skill.invert}
          />
        ))}
      </Grid>
    </Flex>
  )
}

export default AboutMe
