"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Monitor, Cpu, Database, ChevronLeft, ChevronRight } from "lucide-react"
import { facilityImages } from "@/lib/data"

const equipment = [
  {
    icon: Eye,
    name: "EyeLink Portable Duo",
    description: "High-precision eye-tracking system for real-time gaze analysis",
    specs: "1000Hz sampling rate, 0.25° accuracy",
  },
  {
    icon: Monitor,
    name: "Experimental Stations",
    description: "Dedicated workstations for psycholinguistic experiments",
    specs: "High-resolution displays, audio recording",
  },
  {
    icon: Cpu,
    name: "Computing Cluster",
    description: "High-performance computing for data analysis and modeling",
    specs: "Multi-core processors, GPU acceleration",
  },
  {
    icon: Database,
    name: "Data Infrastructure",
    description: "Secure storage and management of research data",
    specs: "Encrypted storage, backup systems",
  },
]

export function FacilitiesSection() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % facilityImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)
  }

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Research Facilities</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            State-of-the-art equipment and infrastructure supporting cutting-edge language and cognition research.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image Gallery */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={facilityImages[currentImage] || "/placeholder.svg"}
                alt={`Facility ${currentImage + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {facilityImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImage ? "bg-blue-600" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4">Advanced Technology</Badge>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">EyeLink Portable Duo System</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Our lab is equipped with the industry-leading EyeLink Portable Duo eye-tracking system from SR Research.
                This high-precision device captures eye movement data with millisecond accuracy, enabling us to study
                real-time language processing, reading comprehension, and visual attention patterns.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The system's portability and flexibility allow us to conduct experiments across diverse participant
                populations and experimental paradigms, supporting our research in cognitive linguistics,
                psycholinguistics, and cross-cultural language studies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">1000Hz</div>
                <div className="text-sm text-slate-600">Sampling Rate</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">0.25°</div>
                <div className="text-sm text-slate-600">Accuracy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-blue-600" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{item.name}</h4>
                <p className="text-slate-600 text-sm mb-3 leading-relaxed">{item.description}</p>
                <p className="text-xs text-slate-500">{item.specs}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
