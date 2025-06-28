"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, ExternalLink } from "lucide-react"
import { principalInvestigator, teamMembers, type TeamMember } from "@/lib/data"

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Team</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet the dedicated researchers advancing our understanding of language and cognition.
          </p>
        </div>

        {/* Principal Investigator */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Principal Investigator</h3>
          <Card className="max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                <div className="relative">
                  <img
                    src={principalInvestigator.image || "/placeholder.svg"}
                    alt={principalInvestigator.name}
                    className="w-48 h-48 rounded-2xl object-cover shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <Badge className="mb-3">{principalInvestigator.role}</Badge>
                  <h4 className="text-3xl font-bold text-slate-900 mb-2">{principalInvestigator.name}</h4>
                  <p className="text-lg text-slate-600 mb-4">{principalInvestigator.title}</p>
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    <strong>Research Interests:</strong> {principalInvestigator.interests}
                  </p>
                  {principalInvestigator.email && (
                    <a
                      href={`mailto:${principalInvestigator.email}`}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <Mail size={16} />
                      {principalInvestigator.email}
                    </a>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* PhD Scholars */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">PhD Scholars</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-md"
                  />
                  <Badge variant="outline" className="mb-2">
                    {member.role}
                  </Badge>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">{member.name}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{member.research}</p>
                  <div className="mt-4">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 mx-auto">
                      Learn more <ExternalLink size={12} />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Position */}
        <div className="mt-12 text-center">
          <Card className="max-w-md mx-auto border-dashed border-2 border-slate-300 hover:border-blue-400 transition-colors">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">+</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Join Our Team</h4>
              <p className="text-slate-600 text-sm mb-4">
                We're always looking for passionate researchers to join our lab.
              </p>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Get in touch
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
