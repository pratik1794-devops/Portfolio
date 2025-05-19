import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, Calendar, Clock, User } from "lucide-react"
import { blogPosts } from "@/data/blog-posts"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((post) => post.id === params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: `${post.title} | DevOps Engineer Blog`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }))
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((post) => post.id === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            <span className="text-emerald-500">DevOps</span>Engineer
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/#about" className="hover:text-emerald-500 transition-colors">
              About
            </Link>
            <Link href="/#skills" className="hover:text-emerald-500 transition-colors">
              Skills
            </Link>
            <Link href="/#projects" className="hover:text-emerald-500 transition-colors">
              Projects
            </Link>
            <Link href="/#certifications" className="hover:text-emerald-500 transition-colors">
              Certifications
            </Link>
            <Link href="/blog" className="text-emerald-500 transition-colors">
              Blog
            </Link>
            <Link href="/#contact" className="hover:text-emerald-500 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-emerald-500 hover:text-emerald-400 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to All Posts
          </Link>
        </div>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

            <div className="flex flex-wrap gap-4 text-gray-400 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="w-full h-64 md:h-96 mb-8 overflow-hidden rounded-lg">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="prose prose-invert prose-emerald max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }} />
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Share this post</h3>
            <div className="flex space-x-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://yourwebsite.com/blog/${post.id}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
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
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://yourwebsite.com/blog/${post.id}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
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
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} DevOps Engineer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
