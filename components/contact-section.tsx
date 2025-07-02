"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react"
import { principalInvestigator } from "@/lib/data"

export function ContactSection() {
  return (
    <section id="contact" className="pt-32 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get in Touch</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to collaborate, join our team, or learn more about our research? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <Card className="hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                        <a
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          {principalInvestigator.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                        <p className="text-slate-600">{principalInvestigator.phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Address</h4>
                        <p className="text-slate-600 leading-relaxed">
                          HSB332B, Humanities and Sciences Block
                          <br />
                          Indian Institute of Technology Madras
                          <br />
                          Chennai - 600036, Tamil Nadu, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Office Hours</h4>
                        <p className="text-slate-600">
                          Monday - Friday: 9:00 AM - 5:00 PM IST
                          <br />
                          <span className="text-sm text-slate-500">By appointment preferred</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a
                  href="https://www.iitm.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  IIT Madras <ExternalLink size={14} />
                </a>
                <a
                  href="https://hss.iitm.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Department of HSS <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Map or Additional Info */}
          <div className="space-y-8">
            <Card className="h-96 bg-slate-100 flex items-center justify-center">
              <div className="w-full h-full">
                <iframe
                    title="IIT Madras Precise Location"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=12.990073455533864,80.23249482879334&z=18&output=embed"
                ></iframe>
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Join Our Research Community</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Whether you're a prospective student, visiting researcher, or potential collaborator, we welcome
                  inquiries about joining our dynamic research environment.
                </p>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                    Schedule a Visit
                  </button>
                  <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all duration-300">
                    Download Lab Brochure
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
