import React from 'react'
import {
  FaHome,
  FaRegUser,
  FaSuitcase,
  FaLightbulb,
  FaStar,
} from 'react-icons/fa'
import { BsNutFill } from 'react-icons/bs'

import DesktopHeader from './DesktopHeader'

type Props = {}

const headerLinks = [
  {
    label: 'Home',
    link: 'home',
    icon: FaHome,
  },
  {
    label: 'About',
    link: 'about',
    icon: BsNutFill,
  },
  {
    label: 'Experience',
    link: 'experience',
    icon: FaSuitcase,
  },
  {
    label: 'Projects',
    link: 'projects',
    icon: FaLightbulb,
  },
  {
    label: 'Testimonials',
    link: 'testimonials',
    icon: FaStar,
  },
]

const Header = (props: Props) => {
  return <DesktopHeader headerLinks={headerLinks} />
}

export default Header
