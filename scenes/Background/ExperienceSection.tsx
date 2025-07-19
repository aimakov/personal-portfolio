import React from 'react'
import {
  ListIcon,
  TabPanel,
  UnorderedList,
  ListItem,
  Flex,
  Text,
  Box,
} from '@chakra-ui/react'
import { BsCircleFill } from 'react-icons/bs'

import { brandColors } from '@/styles/theme'

type Props = {}

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Tech Solutions',
    dates: 'Jan 2022 - Present',
    description: 'Developed modern web applications using React and Next.js.',
  },
  {
    title: 'UI/UX Designer',
    company: 'Creative Studio',
    date: 'Jun 2020 - Dec 2021',
    description: 'Designed user interfaces and experiences for mobile and web.',
  },
  {
    title: 'Intern',
    company: 'Startup Inc.',
    date: 'Jan 2020 - May 2020',
    description: 'Assisted in building MVPs and prototyping new features.',
  },
]

const ExperienceSection = (props: Props) => {
  return (
    <TabPanel>
      <UnorderedList
        position={'relative'}
        spacing={5}
        w={'100%'}
        maxW={'568px'}
      >
        {experiences.map((exp, idx) => (
          <ListItem
            key={idx}
            listStyleType={'none'}
            position={'relative'}
            justifyContent={'space-between'}
          >
            <ListIcon
              as={BsCircleFill}
              boxSize={2}
              color={brandColors.white}
              position={'absolute'}
              left={-6}
              top={'6px'}
            />
            <Flex w={'100%'} justifyContent={'space-between'}>
              <Flex flexDirection={'column'}>
                <Text>
                  {exp.title} @ {exp.company}
                </Text>
                <Text fontSize={'0.8rem'}>{exp.description}</Text>
              </Flex>
              <Text fontSize={'0.8rem'}>{exp.date}</Text>
            </Flex>
          </ListItem>
        ))}
        <Box
          w={'0px'}
          h={'100%'}
          borderLeft={`1px solid ${brandColors.white}`}
          position={'absolute'}
          left={-5}
          top={0}
          bottom={0}
          mt={'0px !important'}
        />
      </UnorderedList>
    </TabPanel>
  )
}

export default ExperienceSection
