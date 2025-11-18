"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { decodeLink } from "@/lib/utils"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-orange-600" onClick={closeMenu}>
              ENEX GADGETS
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`${
                isActive("/")
                  ? "text-orange-600 font-medium border-b-2 border-orange-600"
                  : "text-gray-700 hover:text-orange-600"
              } transition-colors duration-200 pb-1`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`${
                isActive("/services")
                  ? "text-orange-600 font-medium border-b-2 border-orange-600"
                  : "text-gray-700 hover:text-orange-600"
              } transition-colors duration-200 pb-1`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`${
                isActive("/about")
                  ? "text-orange-600 font-medium border-b-2 border-orange-600"
                  : "text-gray-700 hover:text-orange-600"
              } transition-colors duration-200 pb-1`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`${
                isActive("/contact")
                  ? "text-orange-600 font-medium border-b-2 border-orange-600"
                  : "text-gray-700 hover:text-orange-600"
              } transition-colors duration-200 pb-1`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Contact Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:07062300213"
              className="text-orange-600 hover:text-orange-700 transition-colors duration-200"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href={decodeLink("aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9lbmV4X2dhZGdldHNfMDAxLw==")}
              className="text-orange-600 hover:text-orange-700 transition-colors duration-200"
              aria-label="Follow us on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Contact Icons */}
            <a
              href="tel:07062300213"
              className="text-orange-600 hover:text-orange-700 transition-colors duration-200"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href={decodeLink("aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9lbmV4X2dhZGdldHNfMDAxLw==")}
              className="text-orange-600 hover:text-orange-700 transition-colors duration-200"
              aria-label="Follow us on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" />
            </a>

            {/* Menu Toggle Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-3 py-2 text-sm font-medium"
              aria-label="Toggle menu"
            >
              {isOpen ? "Close" : "Menu"}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
            <Link
              href="/"
              onClick={closeMenu}
              className={`${
                isActive("/")
                  ? "bg-orange-50 text-orange-600 border-l-4 border-orange-600"
                  : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              } block px-3 py-3 text-base font-medium transition-all duration-200 rounded-r-md`}
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className={`${
                isActive("/services")
                  ? "bg-orange-50 text-orange-600 border-l-4 border-orange-600"
                  : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              } block px-3 py-3 text-base font-medium transition-all duration-200 rounded-r-md`}
            >
              Services
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className={`${
                isActive("/about")
                  ? "bg-orange-50 text-orange-600 border-l-4 border-orange-600"
                  : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              } block px-3 py-3 text-base font-medium transition-all duration-200 rounded-r-md`}
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className={`${
                isActive("/contact")
                  ? "bg-orange-50 text-orange-600 border-l-4 border-orange-600"
                  : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              } block px-3 py-3 text-base font-medium transition-all duration-200 rounded-r-md`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
