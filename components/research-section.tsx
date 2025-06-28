"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { researchProjects, publications, conferences } from "@/lib/data"
import { Calendar, MapPin, Users, Award, Link2 } from "lucide-react"

export function ResearchSection() {
  const [activeTab, setActiveTab] = useState("projects")

  return (
      <section id="research" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Research Portfolio</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our ongoing projects, publications, and contributions to the field of language and cognition
              research.
            </p>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger
                  value="projects"
                  className="flex items-center gap-2 rounded-md data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-md!"
              >
                <Users size={16} />
                Projects
              </TabsTrigger>
              <TabsTrigger
                  value="publications"
                  className="flex items-center gap-2 rounded-md data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-md!"
              >
                <Award size={16} />
                Publications
              </TabsTrigger>
              <TabsTrigger
                  value="conferences"
                  className="flex items-center gap-2 rounded-md data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-md!"
              >
                <MapPin size={16} />
                Conferences
              </TabsTrigger>
            </TabsList>

            {/* Projects */}
            <TabsContent value="projects" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {researchProjects.map((project, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          {project.year && (
                              <div className="flex items-center text-sm text-slate-500">
                                <Calendar size={14} className="mr-1" />
                                {project.year}
                              </div>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight">{project.title}</h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                        <div className="text-sm text-slate-500">
                          <strong>Funded by:</strong> {project.sponsor}
                        </div>
                      </CardContent>
                    </Card>
                ))}
              </div>
            </TabsContent>

            {/* Publications */}
            <TabsContent value="publications" className="space-y-6">
              <div className="space-y-4">
                {publications.map((pub, index) => (
                    <Card key={index} className="hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-slate-900 flex-1 mr-4">{pub.title}</h3>
                          <Badge variant="outline">{pub.year}</Badge>
                        </div>
                        <p className="text-slate-600 mb-2">{pub.authors.join(", ")}</p>
                        <p className="text-sm text-slate-500 italic">
                          {pub.journal}
                          {pub.volume && `, ${pub.volume}`}
                          {pub.publisher && `, ${pub.publisher}`}
                        </p>
                        {(pub.doi || pub.link) && (
                            <div className="zoni flex items-center text-sm text-blue-600 mt-2">
                              <Link2 size={14} className="mr-1" />
                              {pub.doi && <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">DOI</a>}
                              {pub.doi && pub.link && " | "}
                              {pub.link && <a href={pub.link} target="_blank" rel="noopener noreferrer">Link</a>}
                            </div>
                        )}
                      </CardContent>
                    </Card>
                ))}
              </div>
            </TabsContent>

            {/* Conferences */}
            <TabsContent value="conferences" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {conferences.map((conf, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center text-sm text-slate-500">
                            <Calendar size={14} className="mr-1" />
                            {conf.date}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">{conf.title}</h3>
                        <p className="text-slate-600 mb-2">
                          <strong>Authors:</strong> {conf.authors.join(", ")}
                        </p>
                        <p className="text-slate-600 mb-2">
                          <strong>Conference:</strong> {conf.conference}
                        </p>
                        {conf.organizer && (
                            <p className="text-slate-600 mb-2">
                              <strong>Organizer:</strong> {conf.organizer}
                            </p>
                        )}
                        <div className="flex items-center text-sm text-slate-500">
                          <MapPin size={14} className="mr-1" />
                          {conf.location}
                        </div>
                      </CardContent>
                    </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
  )
}