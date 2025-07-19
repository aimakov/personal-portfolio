import { Divider } from '@chakra-ui/react'

import { Layout } from '@/components'
import {
  HeroScene,
  AboutMeScene,
  ExperienceScene,
  ProjectsScene,
  TestimonialsScene,
} from '@/scenes'

export default function Home() {
  return (
    <Layout>
      <HeroScene />
      <AboutMeScene />
      <Divider />
      <ExperienceScene />
      <Divider />
      <ProjectsScene />
      <Divider />
      <TestimonialsScene />
    </Layout>
  )
}
