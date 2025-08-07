import { BackgroundInfo } from '@/types/Background'
import { backgroundIcons } from '@/assets'

export const backgroundInfo: {
  [x: string]: BackgroundInfo[]
} = {
  experience: [
    {
      title: 'Expo - React Native Developer',
      institution: 'Sunni Marriage',
      dates: 'Aug 2024 - Present',
      description: [
        'Delivered numerous releases across React Native mobile application, implementing features, optimizations, and integrations with cross-functional teams.',
        'Architected secure data management system using Supabase Edge Functions, enhancing performance and protecting sensitive user information.',
        'Developed real-time messaging platform with instant communication capabilities between users and guardians.',
        'Built secure photo-sharing feature with disposable image functionality for enhanced privacy protection.',
        'Implemented deep linking architecture for seamless navigation from external sources to specific app screens, improving user engagement.',
        'Engineered comprehensive push notification system for real-time updates on matches, interactions, and account activities.',
        'Enhanced user discovery algorithms with dynamic filtering and profile visibility optimization.',
        'Developed authentication and validation systems including email verification, phone formatting, and referral management.',
        'Integrated third-party email validation service, reducing spam registrations and improving user quality.',
        'Led UI/UX redesign initiatives including dashboard optimization and user experience tracking.',
        'Implemented account compliance and security measures to maintain platform integrity.',
      ],
      imgUrl: backgroundIcons.sunniMarriage,
    },
    {
      title: 'NextJS - Fullstack Developer',
      institution: 'Sunni Marriage',
      dates: 'Aug 2023 - Present',
      description: [
        'Implemented comprehensive data privacy and compliance measures to protect user information and prevent unauthorized data sharing.',
        'Built multi-currency payment system supporting subscriptions, one-time purchases, free trials, and coupon redemption.',
        'Developed real-time notification system enabling secure communication between users and guardians.',
        'Developed file upload functionality with image validation and optimization for improved performance across devices.',
        'Optimized application performance and accessibility with responsive layouts and fast loading times for global user base.',
        'Designed user onboarding flows with trial-to-paid conversion optimization, automated trial management, and subscription promotion.',
        'Created automated email workflow system to enhance user engagement and reduce churn rates.',
        'Implemented email validation system to ensure account authenticity and improve communication reliability.',
      ],
      imgUrl: backgroundIcons.sunniMarriage,
    },
    {
      title: 'NextJS - Fullstack Developer',
      institution: 'Aduko',
      dates: 'Jan 2022 - Dec 2024',
      description: [
        'Built HTML5 games marketplace with preview functionality and source code purchasing capabilities.',
        'Developed automated file processing and deployment pipeline using Netlify for seamless content delivery.',
        'Integrated Stripe and Razorpay payment gateways to enable secure global transaction processing.',
        'Configured backend infrastructure and authentication system using Supabase.',
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
        'Developed advanced optical systems for high-resolution biological imaging applications.',
        'Designed multimodal imaging platforms for comprehensive biological specimen analysis.',
        'Engineered custom LED illumination systems for specialized microscopy applications.',
        'Built control software for automated microscope hardware and image acquisition systems.',
      ],
      imgUrl: backgroundIcons.unist,
    },
    {
      title: 'B.E. in Electrical and Electronic Engineering',
      institution: 'Nazarbayev University',
      dates: 'Aug 2012 - June 2017',
      description: [
        'Developed computer vision-based desktop application for real-time heart rate monitoring using webcam technology.',
        'Built integrated hardware-software system for heart rate estimation using infrared sensors and data visualization.',
      ],
      imgUrl: backgroundIcons.nazarbayev,
    },
  ],
}
