import { BackgroundInfo } from '@/types/Background'
import { backgroundIcons } from '@/assets'

export const backgroundInfo: { [x: string]: BackgroundInfo[] } = {
  experience: [
    {
      title: 'Expo - React Native Developer',
      institution: 'Sunni Marriage',
      dates: 'Aug 2024 - Present',
      description: [
        'Developed frontend for a mobile app using React Native and Expo.',
        'Developed backend for the app using Supabase BaaS',
      ],
      imgUrl: backgroundIcons.sunniMarriage,
    },
    {
      title: 'NextJS - Fullstack Developer',
      institution: 'Sunni Marriage',
      dates: 'Aug 2023 - Present',
      description: [
        'Developed frontend for a mobile app using React and NextJS.',
        'Developed backend for the app using Supabase BaaS',
      ],
      imgUrl: backgroundIcons.sunniMarriage,
    },
    {
      title: 'NextJS - Fullstack Developer',
      institution: 'Aduko',
      dates: 'Jan 2022 - Dec 2024',
      description: [
        'Developed frontend for a mobile app using React and NextJS.',
        'Developed backend for the app using Supabase BaaS',
      ],
      imgUrl: backgroundIcons.aduko,
      logoInverted: true,
    },
  ],
  education: [
    {
      title: 'Combined MS-PhD in Biomedical Engineering',
      institution: 'Ulsan National Institute of Science and Technology',
      dates: 'Sep 2017 - June 2024',
      description: [
        'Developed modern web applications using React and Next.js.',
      ],
      imgUrl: backgroundIcons.unist,
    },
    {
      title: 'Combined MS-PhD in Biomedical Engineering',
      institution: 'Nazarbayev University',
      dates: 'Aug 2012 - June 2017',
      description: [
        'Developed modern web applications using React and Next.js.',
      ],
      imgUrl: backgroundIcons.nazarbayev,
    },
  ],
}
