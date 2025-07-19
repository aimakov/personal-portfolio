import React from 'react'

import DesktopHeader from './DesktopHeader'

type Props = {}

const headerLinks = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Projects',
    link: '/projects',
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Contact',
    link: '/contact',
  },
]

const Header = (props: Props) => {
  return <DesktopHeader headerLinks={headerLinks} />
}

export default Header
