import { BackgroundInfo } from '@/types/Background'
import { backgroundIcons } from '@/assets'

export const backgroundInfo: { [x: string]: BackgroundInfo[] } = {
  experience: [
    {
      title: 'Expo - React Native Developer',
      institution: 'Sunni Marriage',
      dates: 'Aug 2024 - Present',
      description: [
        'Developed and delivered 60+ pull requests to production—driving feature development, bug fixes, performance tuning, and backend integrations across the mobile app. Regularly shipped new features end‑to‑end, optimized critical flows, and collaborated across teams to ensure high quality and reliability.',
        'Implemented robust user data management via Supabase Edge Functions, improving performance and securing sensitive data like wali details without client-side exposure.',
        'Built real-time chat functionality, enabling instant messaging between users, guardians, and matches—facilitating seamless halal communication flows in-app.',
        'Developed secure one-time-photo chat, allowing users to send disposable profile pictures within conversations—ensuring privacy and alignment with cultural sensitivity.',
        'Implemented deep linking across mobile, enabling users to navigate directly from emails, referral links, or notifications into specific screens (profile pages, chat threads, guardian invites), improving onboarding and re-engagement.',
        'Engineered push notifications and system alerts, delivering real-time updates for new matches, guardian interactions, profile milestones, and account changes to boost engagement and retention.',
        'Enhanced real-time profile discovery and halal-match flows, including boosted profile visibility, dynamic filters (height, wali status, photo), and guardian contact badges to support faith-based matchmaking.',
        'Built privacy-first authentication and validation flows, covering email validation, phone-number formatting, referral codes, and profile linking.',
        'Integrated MailerCheck email validation, reducing spam and improving signup quality by verifying email delivery upfront.',
        'Led comprehensive UI/UX refactoring, including matched sheet redesign, dashboard data integration, and profile-completeness tracking.',
        'Enforced community compliance, blocking blacklisted or restricted accounts to maintain trust and halal standards.',
      ],
      imgUrl: backgroundIcons.sunniMarriage,
    },
    {
      title: 'NextJS - Fullstack Developer',
      institution: 'Sunni Marriage',
      dates: 'Aug 2023 - Present',
      description: [
        'Integrated real-time notifications, facilitating halal communication between brothers, guardians, and prospective matches (aligned with “no free-mixing” ethos).',
        'Ensured data privacy and compliance, protecting user data and preventing unauthorized sharing—supporting “we`ll never share your identifiable data with any third parties”.',
        'Optimized for performance and accessibility, delivering responsive layouts, quick load times, and accessible content to build trust and engagement on a platform serving a global Muslim user base.',
        'Engineered multi-currency payment workflows, enabling subscription models, one-time purchases, free trial periods, and coupon code redemption to support flexible pricing tiers—mirroring the platform’s affordable model, e.g., plans starting at £7.99/month with “cancel anytime” terms',
        'Designed onboarding flows for trial-to-paid conversion, including free-trial provisioning, automated trial expirations, and promotion of full subscriptions to drive member acquisition.',
        'Built responsive email workflows, covering triggers to maintain user engagement and reduce churn.',
        'Developed user-upload features, supporting profile picture uploads with validation and image optimization to ensure fast load times across devices.',
        'Implemented robust email validation mechanisms to ensure genuine accounts and improve communications reliability.',
      ],
      imgUrl: backgroundIcons.sunniMarriage,
    },
    {
      title: 'NextJS - Fullstack Developer',
      institution: 'Aduko',
      dates: 'Jan 2022 - Dec 2024',
      description: [
        'Designed and implemented an HTML5 games marketplace enabling users to preview games prior to purchasing source code.',
        'Established an automated workflow for uploading and processing game files, with deployment handled via Netlify.',
        'Integrated secure payment processing using Stripe and Razorpay to support global transactions.',
        'Configured backend services and user authentication using Supabase (Backend-as-a-Service platform).',
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
        'Developed advanced optical systems for high-resolution, label-free imaging of biological specimens.',
        'Designed and integrated holistic imaging platforms to support multimodal, high-fidelity biological imaging.',
        'Engineered custom LED-based illumination systems tailored for multimodal microscopy applications.',
        ' Built and programmed custom software to control microscope hardware and automate wide-field, mosaic image acquisition.',
      ],
      imgUrl: backgroundIcons.unist,
    },
    {
      title: 'Combined MS-PhD in Biomedical Engineering',
      institution: 'Nazarbayev University',
      dates: 'Aug 2012 - June 2017',
      description: [
        'Designed and developed a desktop application leveraging computer vision to quantify heart rate via webcam, showcasing skills in real-time signal processing and user-facing interfaces.',
        'Built an integrated hardware-software system to estimate heart rate using infrared sensors, demonstrating cross-disciplinary expertise in embedded systems and data visualization.',
      ],
      imgUrl: backgroundIcons.nazarbayev,
    },
  ],
}
