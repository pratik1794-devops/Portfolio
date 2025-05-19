"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/data/blog-posts"

export function BlogSection() {
  // Get the 3 most recent blog posts
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <section id="blog" className="py-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Latest Blog Posts</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <div key={post.id}>
              <BlogPostCard
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                image={post.image}
                tags={post.tags.slice(0, 2)}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-950" asChild>
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
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
}: 

{
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
