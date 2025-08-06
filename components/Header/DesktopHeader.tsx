import React, { useState, useEffect } from 'react'
import { Flex, Icon, Text } from '@chakra-ui/react'

import { HeaderLink } from '@/utils/types'
import { brandColors } from '@/styles/theme'
import { FadeContent } from '@/components/Bits'

type Props = {
  headerLinks: HeaderLink[]
}

export const handleLinkClick = (e: React.MouseEvent, link: string) => {
  e.preventDefault()

  const viewportWidth = window.innerWidth

  const section = document.getElementById(link)

  if (section) {
    const headerHeight = 80
    const sectionTop =
      viewportWidth < 768 ? section.offsetTop : section.offsetTop - headerHeight

    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth',
    })
  }
}

const DesktopHeader = ({ headerLinks }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const threshold = viewportHeight

      setIsScrolled(scrollY > threshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <FadeContent
      blur={true}
      duration={1000}
      easing="ease-out"
      initialOpacity={0}
      delay={2000}
      className="z-[2] fixed w-full my-4 max-sm:bottom-0"
    >
      <Flex
        marginX={'auto'}
        justifyContent={['space-between', 'center']}
        alignItems={'center'}
        borderRadius={'full'}
        zIndex={1}
        w={'90%'}
        maxWidth={'700px'}
        className={`isolate rounded-xl shadow-lg ring-1 ring-black/5 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md'
            : 'bg-white/20 backdrop-blur-sm'
        }`}
      >
        {headerLinks.map((headerLink: HeaderLink, index: number) => (
          <Flex
            key={headerLink.label}
            onClick={e => handleLinkClick(e, headerLink.link)}
            _hover={{
              backgroundColor: brandColors.white,
              opacity: 0.5,
              color: brandColors.black,
            }}
            color={isScrolled ? brandColors.black : brandColors.white}
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
            <Text
              display={['none', 'block']}
              userSelect={'none'}
              fontSize={['0.8rem', '1rem']}
              color={isScrolled ? brandColors.black : brandColors.white}
            >
              {headerLink.label}
            </Text>
            <Icon display={['block', 'none']} as={headerLink.icon} />
          </Flex>
        ))}
      </Flex>
    </FadeContent>
  )
}

export default DesktopHeader
