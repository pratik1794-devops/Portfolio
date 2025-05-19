"use client"

import { useRef } from "react"
import Link from "next/link"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactSection } from "@/components/contact-section"

export function HeroSection() {
  const contactRef = useRef<HTMLElement>(null)

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <section className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-emerald-500">Automating</span> the Future,
            <span className="block mt-2">One Pipeline at a Time</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            DevOps Engineer with 3 years of experience building scalable infrastructure and streamlining deployment
            processes
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={scrollToContact}>
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
            <Button variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-950" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>
          <div className="flex justify-center mt-8 space-x-4">
            <Link
              href="https://github.com/pratik1794-devops"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/pratik-karande-9831ab302/"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Pass the ref to the Contact section */}
      <ContactSection ref={contactRef} />
    </>
  )
}
