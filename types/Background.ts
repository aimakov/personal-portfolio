import { StaticImageData } from 'next/image'

export type BackgroundInfo = {
  title: string
  institution: string
  dates: string
  description: string[]
  imgUrl: string | StaticImageData
  logoInverted?: boolean
}
