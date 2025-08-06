import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
} from '@chakra-ui/react'
import { StaticImageData } from 'next/image'

import { brandColors } from '@/styles/theme'

interface Props {
  image: string | StaticImageData
  title: string
  description: string
  tags: string[]
  github: string
  link: string
}

export default function ProductSimple({
  image,
  title,
  description,
  tags,
  github,
  link,
}: Props) {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        bg={'white'}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${
              typeof image === 'string' ? image : image.src
            })`,
            filter: 'blur(20px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(15px)',
            },
          }}
        >
          <Image
            rounded={'lg'}
            height={240}
            width={240}
            style={{ margin: 'auto', display: 'block' }}
            objectFit={'cover'}
            src={typeof image === 'string' ? image : image.src}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {tags.join(', ')}
          </Text>
          <Heading color={'gray.600'} fontSize={'2xl'} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text color={'gray.600'}>{description}</Text>
          </Stack>

          <Flex gap={6} mt={2} w={'full'} justifyContent={'flex-end'}>
            <a target="_blank" href={github}>
              <Text color={brandColors.darkGray}>Github Repo</Text>
            </a>
            <a target="_blank" href={link}>
              <Text color={brandColors.darkGray}>Try me</Text>
            </a>
          </Flex>
        </Stack>
      </Box>
    </Center>
  )
}
