"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { multilingualChars } from "@/lib/data"

interface FloatingChar {
  id: number
  char: string
  x: number
  y: number
  delay: number
}

export function HeroSection() {
  const [floatingChars, setFloatingChars] = useState<FloatingChar[]>([])

  useEffect(() => {
    const chars: FloatingChar[] = []
    for (let i = 0; i < 75; i++) {
      chars.push({
        id: i,
        char: multilingualChars[Math.floor(Math.random() * multilingualChars.length)],
        x: Math.random() * 120,
        y: Math.random() * 120,
        delay: Math.random() * 15,
      })
    }
    setFloatingChars(chars)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />

      {/* Floating Characters */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingChars.map((char) => (
          <div
            key={char.id}
            className="absolute text-4xl text-white/10 animate-float"
            style={{
              left: `${char.x}%`,
              top: `${char.y}%`,
              animationDelay: `${char.delay}s`,
              fontFamily: "serif",
            }}
          >
            {char.char}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Language & Cognition<br />
            <span className="gradient-text">Laboratory</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Exploring the intersection of language, cognition, and communication at Department of Humanities and Social Sciences, IIT Madras
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore Our Research
            </button>
            <button
              onClick={() => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Meet the Team
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/60" size={24} />
      </div>
    </section>
  )
}
