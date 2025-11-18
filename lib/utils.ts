import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function decodeLink(encodedLink: string): string {
  try {
    return atob(encodedLink)
  } catch (error) {
    console.error("Failed to decode link:", error)
    return ""
  }
}

// Encrypted Instagram link
export const ENCRYPTED_INSTAGRAM = "aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9lbmV4X2dhZGdldHNfMDAxLw=="
