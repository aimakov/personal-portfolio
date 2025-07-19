/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['gsap'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || []
      config.externals.push({
        'gsap/ScrollTrigger': 'commonjs gsap/ScrollTrigger',
        'gsap/SplitText': 'commonjs gsap/SplitText',
      })
    }

    return config
  },
}

export default nextConfig
