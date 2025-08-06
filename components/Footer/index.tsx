import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

import { socialIcons } from '@/assets'

const Footer = () => {
  const handleLinkClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault()
    window.open(link, '_blank')
  }

  return (
    <Flex
      w={'100%'}
      maxWidth={'1200px'}
      mx={'auto'}
      justifyContent={'space-between'}
      alignItems={'center'}
      py={10}
      px={2}
      mb={[10, 0]}
    >
      <Flex gap={1} fontSize={'sm'}>
        <Text mt={'1px'}>©</Text>
        <Text>{new Date().getFullYear()}</Text>
        <Text>aimakov.dev | All rights reserved</Text>
      </Flex>

      <Flex gap={3}>
        <Image
          src={socialIcons.linkedin}
          alt="LinkedIn"
          width={20}
          height={20}
          className={`invert cursor-pointer`}
          onClick={e =>
            handleLinkClick(e, 'https://www.linkedin.com/in/aimakov/')
          }
        />
        <Image
          src={socialIcons.github}
          alt="GitHub"
          width={20}
          height={20}
          className={`invert cursor-pointer`}
          onClick={e => handleLinkClick(e, 'https://github.com/aimakov')}
        />
        <Image
          src={socialIcons.mail}
          alt="Mail"
          width={20}
          height={20}
          className={`invert cursor-pointer`}
          onClick={e => handleLinkClick(e, 'mailto:aimakov.dev@gmail.com')}
        />
      </Flex>
    </Flex>
  )
}

export default Footer
