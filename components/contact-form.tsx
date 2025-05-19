"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { submitContactForm, type ContactFormState } from "@/app/actions"

export function ContactForm() {
  const initialState: ContactFormState = { errors: {} }
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <form action={formAction} className="space-y-4">
      {state?.errors?._form && (
        <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-md">
          <p className="text-sm text-red-500">{state.errors._form}</p>
        </div>
      )}

      {state?.success && (
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
            state?.errors?.name ? "border-red-500" : "border-gray-700"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500`}
          placeholder="Your name"
        />
        {state?.errors?.name && <p className="mt-1 text-xs text-red-500">{state.errors.name[0]}</p>}
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
            state?.errors?.email ? "border-red-500" : "border-gray-700"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500`}
          placeholder="your.email@example.com"
        />
        {state?.errors?.email && <p className="mt-1 text-xs text-red-500">{state.errors.email[0]}</p>}
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
            state?.errors?.subject ? "border-red-500" : "border-gray-700"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500`}
          placeholder="What is this regarding?"
        />
        {state?.errors?.subject && <p className="mt-1 text-xs text-red-500">{state.errors.subject[0]}</p>}
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
            state?.errors?.message ? "border-red-500" : "border-gray-700"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500`}
          placeholder="Your message here..."
        ></textarea>
        {state?.errors?.message && <p className="mt-1 text-xs text-red-500">{state.errors.message[0]}</p>}
      </div>

      <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isPending}>
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
