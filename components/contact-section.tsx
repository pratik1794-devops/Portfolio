"use client"

import { forwardRef } from "react"
import { Mail, Github, Linkedin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"

export const ContactSection = forwardRef<HTMLElement, React.HTMLProps<HTMLElement>>((props, ref) => {
  return (
    <section id="contact" ref={ref} className="py-20 border-t border-gray-800" {...props}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-500 mr-3" />
                <span>pratikkarande1794@gmail.com</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-500 mr-3"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+91 8087 193 693 </span>
              </div>
              <div className="flex items-center">
                <Github className="h-5 w-5 text-emerald-500 mr-3" />
                <a
                  href="https://github.com/pratik1794-devops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500 transition-colors"
                >
                  github.com/devopsengineer
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 text-emerald-500 mr-3" />
                <a
                  href="https://www.linkedin.com/in/pratik-karande-9831ab302/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500 transition-colors"
                >
                  linkedin.com/in/devopsengineer
                </a>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Current Status</h3>
            <div className="text-gray-300 mb-2">
              <Badge className="bg-emerald-500 text-black mr-2">Available</Badge>
              Open to freelance opportunities and consulting
            </div>
            <div className="text-gray-300">
              <Badge className="bg-gray-700 text-white mr-2">Remote</Badge>
              Preferring remote work with occasional on-site visits
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
})

ContactSection.displayName = "ContactSection"
