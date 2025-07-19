import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

import { HeaderLink } from '@/utils/types'
import { brandColors } from '@/styles/theme'
import { FadeContent } from '@/components/Bits'

type Props = {
  headerLinks: HeaderLink[]
}

const DesktopHeader = ({ headerLinks }: Props) => {
  return (
    <FadeContent
      blur={true}
      duration={1000}
      easing="ease-out"
      initialOpacity={0}
      delay={2000}
      className="z-[2] fixed w-full my-4"
    >
      <Flex
        marginX={'auto'}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={'full'}
        zIndex={1}
        className="isolate w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5"
      >
        {headerLinks.map((headerLink: HeaderLink, index: number) => (
          <Flex
            _hover={{
              backgroundColor: brandColors.white,
              opacity: 0.5,
              color: brandColors.black,
            }}
            color={brandColors.white}
            paddingX={4}
            paddingY={4}
            flex={1}
            transition={'all 0.3s ease-in-out'}
            height={'100%'}
            justifyContent={'center'}
            alignItems={'center'}
            borderLeftRadius={index === 0 ? 'full' : 'none'}
            borderRightRadius={
              index === headerLinks.length - 1 ? 'full' : 'none'
            }
            cursor={'pointer'}
          >
            <Text>{headerLink.label}</Text>
          </Flex>
        ))}
      </Flex>
    </FadeContent>
  )
}

export default DesktopHeader
