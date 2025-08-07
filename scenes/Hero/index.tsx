import React from 'react'
import { Button, Flex, Text, Box, Badge } from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'
import {
  FaSquareUpwork,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa6'
import { FaStar } from 'react-icons/fa'

import { BlurText, FadeContent } from '@/components/Bits'
import { brandColors } from '@/styles/theme'
import { handleLinkClick } from '@/components/Header/DesktopHeader'
import { handleLinkClick as handleSocialLinkClick } from '@/utils/helpers'

const Hero = () => {
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
        className={`font-bold text-[1rem] max-sm:mb-4 text-[${brandColors.white}]`}
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
          color={brandColors.white}
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

        <Box
          mt={3}
          display="flex"
          flexDirection={'column'}
          gap={2}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Badge
            bg={brandColors.teal1}
            color={brandColors.white}
            px={3}
            py={1}
            borderRadius="full"
            fontSize="0.6rem"
            fontWeight="bold"
            display="flex"
            alignItems="center"
            gap={1}
            w={'fit-content'}
            mx={'auto'}
          >
            <FaStar size={12} />
            Top rated plus
          </Badge>
          <Badge
            bg={brandColors.green}
            color={brandColors.white}
            px={3}
            py={1}
            borderRadius="full"
            fontSize="0.6rem"
            fontWeight="bold"
            w={'fit-content'}
            mx={'auto'}
          >
            100% job success
          </Badge>

          <Text mx={'auto'} my={2}>
            or
          </Text>

          <Flex gap={3}>
            <Text>Contact me on</Text>

            <FaGithub
              size={20}
              className="ml-2 cursor-pointer"
              onClick={e =>
                handleSocialLinkClick(e, 'https://github.com/aimakov')
              }
            />

            <FaLinkedin
              size={20}
              className="ml-2 cursor-pointer"
              onClick={e =>
                handleSocialLinkClick(e, 'https://www.linkedin.com/in/aimakov/')
              }
            />

            <FaEnvelope
              size={20}
              className="ml-2 cursor-pointer"
              onClick={e =>
                handleSocialLinkClick(e, 'mailto:aimakov.dev@gmail.com')
              }
            />
          </Flex>
        </Box>
        <Button
          w={'fit-content'}
          mt={8}
          variant={'outline'}
          onClick={e => handleLinkClick(e, 'projects')}
          color={brandColors.white}
        >
          See my work <FaArrowRight size={12} className="ml-2" />
        </Button>
      </FadeContent>
    </Flex>
  )
}

export default Hero
