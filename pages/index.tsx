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
      <div id="home">
        <HeroScene />
      </div>
      <div id="about">
        <AboutMeScene />
      </div>
      <Divider />
      <div id="experience">
        <ExperienceScene />
      </div>
      <Divider />
      <div id="projects">
        <ProjectsScene />
      </div>
      <Divider />
      <TestimonialsScene />
    </Layout>
  )
}
