import React from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'
import { FaSquareUpwork } from 'react-icons/fa6'

import { BlurText, FadeContent } from '@/components/Bits'
import { brandColors } from '@/styles/theme'
import { handleLinkClick } from '@/components/Header/DesktopHeader'

type Props = {}

const Hero = (props: Props) => {
  return (
    <Flex
      h={'100dvh'}
      w={'full'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      px={4}
      id="home"
    >
      <BlurText
        text="Based in South Korea"
        delay={20}
        stepDuration={0.8}
        animateBy="letters"
        direction="top"
        className="font-bold text-[1rem] max-sm:mb-4"
      />

      <BlurText
        text="Quality Web &"
        delay={250}
        stepDuration={0.8}
        animateBy="words"
        direction="top"
        className="sm:text-[4rem] text-[2.5rem] font-bold text-white max-sm:leading-[55px]"
      />
      <BlurText
        text="Mobile Development"
        delay={250}
        stepDuration={0.8}
        animateBy="words"
        direction="bottom"
        className="sm:text-[4rem] text-[2.5rem] font-bold text-white max-sm:leading-[55px] sm:-translate-y-6 max-sm:mb-4"
      />

      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        delay={2000}
        className="flex flex-col gap-2 justify-center items-center"
      >
        <Text
          fontWeight={'hairline'}
          fontSize={['1rem', '1.2rem']}
          textAlign={['center', 'left']}
        >
          Hi, I'm Nurbolat, I create intuitive, visually stunning and highly
          functional web & mobile applications.
        </Text>

        <Button
          w={'fit-content'}
          mt={4}
          bg={brandColors.white}
          _hover={{
            bg: brandColors.pinkBg,
            color: brandColors.white,
          }}
          color={brandColors.pinkBg}
          as={'a'}
          href="https://www.upwork.com/freelancers/~01e07e43f9d95233ac"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hire me on <FaSquareUpwork size={24} className="ml-2" />
        </Button>
        <Button
          w={'fit-content'}
          mt={2}
          variant={'outline'}
          onClick={e => handleLinkClick(e, 'projects')}
        >
          See my work <FaArrowRight size={12} className="ml-2" />
        </Button>
      </FadeContent>
    </Flex>
  )
}

export default Hero
