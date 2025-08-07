/**
 * Converts a number between 0-100 to a two-digit hex code
 * @param value Number between 0-100
 * @returns Two character hex string
 */
export const percentToHex = (value: number): string => {
  // Clamp value between 0-100
  const clampedValue = Math.max(0, Math.min(100, value))

  // Convert to hex value between 00-FF
  const hexValue = Math.round((clampedValue / 100) * 255).toString(16)

  // Ensure two digits by padding with leading 0 if needed
  return hexValue.length === 1 ? `0${hexValue}` : hexValue
}

export const handleLinkClick = (e: React.MouseEvent, link: string) => {
  e.preventDefault()
  window.open(link, '_blank')
}
