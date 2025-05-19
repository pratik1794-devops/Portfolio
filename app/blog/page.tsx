import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { blogPosts } from "@/data/blog-posts"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Blog | DevOps Engineer Portfolio",
  description: "Articles and insights on DevOps, cloud infrastructure, and automation.",
}

export default function BlogPage() {
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
          <Link href="/" className="inline-flex items-center text-emerald-500 hover:text-emerald-400 transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">DevOps Blog</h1>
          <p className="text-gray-400 text-lg mb-12">
            Insights, tutorials, and best practices for DevOps, cloud infrastructure, and automation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                image={post.image}
                tags={post.tags.slice(0, 2)}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Pratik DevOps Engineer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function BlogPostCard({
  id,
  title,
  excerpt,
  date,
  readTime,
  image,
  tags,
}: {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  tags: string[]
}) {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden h-full flex flex-col hover:border-emerald-500/50 transition-colors">
      <Link href={`/blog/${id}`} className="h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </Link>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">
          <Link href={`/blog/${id}`} className="hover:text-emerald-500 transition-colors">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <CardDescription className="text-gray-400 mb-4">{excerpt}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-gray-500 pt-0">
        <span>{date}</span>
        <span>{readTime}</span>
      </CardFooter>
    </Card>
  )
}
