import React from 'react'
import {
  Box,
  Flex,
  Text,
  UnorderedList,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import Image from 'next/image'

import { BackgroundInfo } from '@/types/Background'
import { brandColors } from '@/styles/theme'
import { maxItemsForExperienceList } from '@/settings/constants'

const ListEntry = (props: BackgroundInfo & { isLast: boolean }) => {
  return (
    <Flex alignItems={'start'} gap={4} position={'relative'}>
      <Image
        src={props.imgUrl}
        alt={props.title}
        width={40}
        height={40}
        style={{ objectFit: 'contain', transform: 'translateY(5px)' }}
        className={`${props.logoInverted ? 'invert' : ''}`}
      />
      {!props.isLast && (
        <Box
          width={'0px'}
          borderLeft={`1px solid ${brandColors.lightGray}`}
          position={'absolute'}
          left={5}
          top={14}
          bottom={-3}
        />
      )}
      <Flex flexDirection={'column'}>
        <Text fontSize={'0.8rem'} color={brandColors.lightGray}>
          {props.dates}
        </Text>
        <Text fontWeight={'bold'} fontSize={'1.2rem'} lineHeight={'1.1'}>
          {props.institution}
        </Text>
        <Text fontSize={'0.9rem'} color={brandColors.lightGray}>
          {props.title}
        </Text>

        <UnorderedList
          mt={1}
          fontSize={['0.8rem', '0.9rem']}
          fontWeight={'normal'}
          maxW={['100%', '80%']}
        >
          {props.description.slice(0, maxItemsForExperienceList).map(desc => (
            <ListItem key={desc}>{desc}</ListItem>
          ))}
        </UnorderedList>
        {props.description.length > maxItemsForExperienceList && (
          <Accordion allowMultiple>
            <AccordionItem border={'none'}>
              {({ isExpanded }) => (
                <>
                  <AccordionButton w={'fit-content'}>
                    <Text fontSize={'0.8rem'} fontWeight={'bold'}>
                      {isExpanded ? 'See Less' : 'See More'}
                    </Text>
                  </AccordionButton>
                  <AccordionPanel p={0}>
                    <UnorderedList
                      mt={1}
                      fontSize={['0.8rem', '0.9rem']}
                      maxW={['100%', '80%']}
                    >
                      {props.description
                        .slice(
                          maxItemsForExperienceList,
                          props.description.length,
                        )
                        .map(desc => (
                          <ListItem key={desc}>{desc}</ListItem>
                        ))}
                    </UnorderedList>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        )}
      </Flex>
    </Flex>
  )
}

export default ListEntry
