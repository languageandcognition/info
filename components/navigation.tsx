"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Research", href: "/research" },
    { label: "Team", href: "/team" },
    { label: "Facilities", href: "/facilities" },
    { label: "Collaborations", href: "/collaborations" },
    { label: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
      <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-6">
              {/* IIT Madras Logo */}
              <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png"
                  alt="IIT Madras Logo"
                  className="h-11 w-auto"
              />

              {/* LC Lab Logo */}
              <img
                  src={isScrolled ? "/darkLogo.png" : "https://res.cloudinary.com/dt8amwctw/image/upload/v1749980465/lcl2-removebg-preview_g6aof2.png"}
                  alt="LC Lab Logo"
                  className="h-10 w-auto transition-all duration-300"
              />

              {/* Text */}
              <div className="hidden sm:block">
                <h1 className={`text-lg font-semibold ${isScrolled ? "text-slate-900" : "text-white"}`}>
                  Language & Cognition Lab
                </h1>
                <p className={`text-xs ${isScrolled ? "text-slate-600" : "text-slate-200"}`}>IIT Madras</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                  <Link
                      key={item.href}
                      href={item.href}
                      className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                          pathname === item.href
                              ? "text-blue-600"
                              : isScrolled
                                  ? "text-slate-700"
                                  : "text-white hover:text-blue-200"
                      }`}
                  >
                    {item.label}
                  </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden ${isScrolled ? "text-slate-900" : "text-white"}`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
              <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                      <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`block w-full text-left px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors ${
                              pathname === item.href ? "text-blue-600 bg-slate-50" : ""
                          }`}
                      >
                        {item.label}
                      </Link>
                  ))}
                </div>
              </div>
          )}
        </div>
      </nav>
  )
}