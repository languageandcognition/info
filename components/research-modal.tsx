"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { researchData } from "@/lib/data"

interface ResearchModalProps {
  isOpen: boolean
  onClose: (open: boolean) => void
  activeTab: string
  onTabChange: (tab: string) => void
}

export function ResearchModal({ isOpen, onClose, activeTab, onTabChange }: ResearchModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#254D70] capitalize">{activeTab}</DialogTitle>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="publications">Publications</TabsTrigger>
            <TabsTrigger value="conferences">Conferences</TabsTrigger>
          </TabsList>
          <TabsContent value="projects" className="space-y-6 mt-6">
            {researchData.projects.map((project, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-bold text-[#254D70] mb-2">{project.title}</h3>
                <p className="text-base mb-3">{project.description}</p>
                <p className="text-sm text-gray-600">
                  <strong>Sponsored by:</strong> {project.sponsor}
                </p>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="publications" className="space-y-6 mt-6">
            {researchData.publications.map((publication, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-bold text-[#254D70] mb-2">{publication.title}</h3>
                <p className="text-base italic">{publication.citation}</p>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="conferences" className="space-y-6 mt-6">
            {researchData.conferences.map((conference, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-bold text-[#254D70] mb-2">{conference.title}</h3>
                <p className="text-base">{conference.presentation}</p>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
