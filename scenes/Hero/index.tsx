import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

import { BlurText, FadeContent } from '@/components/Bits'

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
    >
      <BlurText
        text="Based in South Korea"
        delay={20}
        stepDuration={0.8}
        animateBy="letters"
        direction="top"
        className="font-bold"
      />

      <BlurText
        text="Quality Web &"
        delay={250}
        stepDuration={0.8}
        animateBy="words"
        direction="top"
        className="sm:text-[4rem] text-[2rem] font-bold text-white"
      />
      <BlurText
        text="Mobile Development"
        delay={250}
        stepDuration={0.8}
        animateBy="words"
        direction="bottom"
        className="sm:text-[4rem] text-[2rem] font-bold text-white  max-sm:-translate-y-3 -translate-y-6"
      />

      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        delay={2000}
      >
        <Text
          fontWeight={'hairline'}
          fontSize={['1rem', '1.2rem']}
          textAlign={['center', 'left']}
        >
          Hi, I'm Nurbolat, I create intuitive, visually stunning and highly
          functional web & mobile applications.
        </Text>
      </FadeContent>
    </Flex>
  )
}

export default Hero
