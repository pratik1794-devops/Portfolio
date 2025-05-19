import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-emerald-500 mb-6">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Blog Post Not Found</h2>
        <p className="text-gray-400 mb-8">
          The blog post you're looking for doesn't exist or has been moved to a different location.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center text-emerald-500 hover:text-emerald-400 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to All Blog Posts
        </Link>
      </div>
    </div>
  )
}
