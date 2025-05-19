"use client"

import { useRef } from "react"
import Link from "next/link"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useActionState } from "react" // Changed from useFormState to useActionState
import { submitContactForm, type ContactFormState } from "./actions"

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
      <ContactSectionRef ref={contactRef} />
    </>
  )
}

// Component for the contact form
export function ContactForm() {
  const initialState: ContactFormState = { errors: {} }
  // Changed from useFormState to useActionState
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <form action={formAction} className="space-y-4">
      {state.errors?._form && (
        <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-md">
          <p className="text-sm text-red-500">{state.errors._form}</p>
        </div>
      )}

      {state.success && (
        <div className="p-3 bg-emerald-500/10 border border-emerald-500/50 rounded-md">
          <p className="text-sm text-emerald-500">{state.message}</p>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={`w-full px-4 py-2 bg-gray-900 border ${
            state.errors?.name ? "border-red-500" : "border-gray-700"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500`}
          placeholder="Your name"
        />
        {state.errors?.name && <p className="mt-1 text-xs text-red-500">{state.errors.name[0]}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={`w-full px-4 py-2 bg-gray-900 border ${
            state.errors?.email ? "border-red-500" : "border-gray-700"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500`}
          placeholder="your.email@example.com"
        />
        {state.errors?.email && <p className="mt-1 text-xs text-red-500">{state.errors.email[0]}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className={`w-full px-4 py-2 bg-gray-900 border ${
            state.errors?.subject ? "border-red-500" : "border-gray-700"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500`}
          placeholder="What is this regarding?"
        />
        {state.errors?.subject && <p className="mt-1 text-xs text-red-500">{state.errors.subject[0]}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`w-full px-4 py-2 bg-gray-900 border ${
            state.errors?.message ? "border-red-500" : "border-gray-700"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500`}
          placeholder="Your message here..."
        ></textarea>
        {state.errors?.message && <p className="mt-1 text-xs text-red-500">{state.errors.message[0]}</p>}
      </div>

      <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isPending}>
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

// Contact section with forwardRef
import { forwardRef } from "react"

export const ContactSectionRef = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="contact" ref={ref} className="py-20 border-t border-gray-800">
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
                <span>+91 8087 193 693</span>
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
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500 transition-colors"
                >
                  linkedin.com/in/devopsengineer
                </a>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Current Status</h3>
            <p className="text-gray-300 mb-2">
              <Badge className="bg-emerald-500 text-black mr-2">Available</Badge>
              Open to freelance opportunities and consulting
            </p>
            <p className="text-gray-300">
              <Badge className="bg-gray-700 text-white mr-2">Remote</Badge>
              Preferring remote work with occasional on-site visits
            </p>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
})

ContactSectionRef.displayName = "ContactSection"
