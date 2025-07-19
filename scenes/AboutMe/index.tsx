import React from 'react'
import { Flex, Text, Grid } from '@chakra-ui/react'

import SkillBadge from './SkillBadge'
import { skillsList } from './SkillsList'

type Props = {}

const AboutMe = (props: Props) => {
  return (
    <Flex w="100%" flexDirection={'column'} mx={'auto'} px={2}>
      <Text fontSize={'2.5rem'} fontWeight={'bold'}>
        Current technologies
      </Text>
      <Text fontWeight={'light'} w={'80%'}>
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
