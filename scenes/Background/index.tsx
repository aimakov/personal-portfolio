import React from 'react'
import {
  Flex,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabIndicator,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { brandColors } from '@/styles/theme'

import { backgroundInfo } from './BackgroundInfo'
import ListEntry from './ListEntry'
import { maxItemsForExperienceList } from '@/settings/constants'

const Experience = () => {
  return (
    <Flex flexDirection={'column'} gap={4} id="experience" p={2}>
      <Text fontSize={['2rem', '2.5rem']} fontWeight={'bold'}>
        Background
      </Text>
      <Tabs position="relative" variant="unstyled">
        <TabList
          bg="#18191a69"
          borderRadius={'15px'}
          px={'5px'}
          mx="auto"
          w={'fit-content'}
        >
          <Tab w={'150px'}>Experience</Tab>
          <Tab w={'150px'}>Education</Tab>
        </TabList>
        <TabIndicator
          height="30px"
          mt={'-35px'}
          bg={brandColors.white}
          borderRadius="10px"
          opacity={'20%'}
        />
        <TabPanels>
          <TabPanel>
            <Flex flexDirection={'column'} gap={4}>
              {backgroundInfo.experience.map((entry, index) => (
                <ListEntry
                  key={entry.title}
                  {...entry}
                  isLast={index === backgroundInfo.experience.length - 1}
                />
              ))}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex flexDirection={'column'} gap={4}>
              {backgroundInfo.education.map((entry, index) => (
                <ListEntry
                  key={entry.title}
                  {...entry}
                  isLast={index === backgroundInfo.education.length - 1}
                />
              ))}
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default Experience
