import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSection } from "@/components/hero-section"
import { BlogSection } from "@/components/blog-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            <span className="text-emerald-500">DevOps</span>Engineer
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#about" className="hover:text-emerald-500 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-emerald-500 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-emerald-500 transition-colors">
              Projects
            </Link>
           
            <Link href="#blog" className="hover:text-emerald-500 transition-colors">
              Blog
            </Link>
            <Link href="#contact" className="hover:text-emerald-500 transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden">
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24">
        {/* Hero Section with Contact Section */}
        <HeroSection />

        {/* About Section */}
        <section id="about" className="py-20 border-t border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <img src="/profile.jpg?height=400&width=400" alt="DevOps Engineer" className="w-full h-auto" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Hi, I'm <span className="text-emerald-500">Pratik</span>
                </h3>
                <p className="text-gray-300 mb-4">
                  I'm a passionate DevOps Engineer with 3 years of experience in designing, implementing, and
                  maintaining CI/CD pipelines and cloud infrastructure.
                </p>
                <p className="text-gray-300 mb-4">
                  My journey in DevOps began when I discovered the power of automation to solve complex deployment
                  challenges. Since then, I've been dedicated to building resilient systems that enable teams to deliver
                  software faster and more reliably.
                </p>
                <p className="text-gray-300">
                  When I'm not optimizing infrastructure, you'll find me contributing to open-source projects, writing
                  technical blogs, and exploring new technologies in the cloud-native ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills & Tools</h2>

            <Tabs defaultValue="cloud" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="cloud">Cloud</TabsTrigger>
                <TabsTrigger value="containers">Containers</TabsTrigger>
                <TabsTrigger value="iac">IaC & CI/CD</TabsTrigger>
                <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
              </TabsList>

              <TabsContent value="cloud" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <SkillCard name="AWS" level="Advanced" />
                  <SkillCard name="Azure" level="Intermediate" />
                  <SkillCard name="GCP" level="Intermediate" />
                  <SkillCard name="CloudFormation" level="Advanced" />
                  <SkillCard name="AWS Lambda" level="Advanced" />
                  <SkillCard name="S3/CloudFront" level="Advanced" />
                </div>
              </TabsContent>

              <TabsContent value="containers" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <SkillCard name="Docker" level="Advanced" />
                  <SkillCard name="Kubernetes" level="Advanced" />
                  <SkillCard name="Helm" level="Intermediate" />
                  <SkillCard name="EKS" level="Advanced" />
                  <SkillCard name="AKS" level="Intermediate" />
                  <SkillCard name="Docker Compose" level="Advanced" />
                </div>
              </TabsContent>

              <TabsContent value="iac" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <SkillCard name="Terraform" level="Advanced" />
                  <SkillCard name="Ansible" level="Intermediate" />
                  <SkillCard name="Jenkins" level="Advanced" />
                  <SkillCard name="GitHub Actions" level="Advanced" />
                  <SkillCard name="GitLab CI" level="Intermediate" />
                  <SkillCard name="ArgoCD" level="Intermediate" />
                </div>
              </TabsContent>

              <TabsContent value="monitoring" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <SkillCard name="Prometheus" level="Advanced" />
                  <SkillCard name="Grafana" level="Advanced" />
                  <SkillCard name="ELK Stack" level="Intermediate" />
                  <SkillCard name="CloudWatch" level="Advanced" />
                  <SkillCard name="Datadog" level="Intermediate" />
                  <SkillCard name="New Relic" level="Basic" />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Kubernetes Autoscaling Solution"
                description="Implemented a custom autoscaling solution for Kubernetes clusters that reduced infrastructure costs by 35% while maintaining performance SLAs."
                tags={["Kubernetes", "Go", "Prometheus", "AWS"]}
                githubUrl="https://github.com/pratik1794-devops/kubernetes-Project"
              />

              <ProjectCard
                title="CI/CD Pipeline Modernization"
                description="Migrated legacy Jenkins pipelines to GitHub Actions, reducing build times by 60% and improving developer experience with simplified workflows."
                tags={["GitHub Actions", "Docker", "Terraform", "AWS"]}
                githubUrl="https://github.com/pratik1794-devops/CICD-Pipeline-Modernization"
              />

              <ProjectCard
                title="Infrastructure as Code Framework"
                description="Developed a reusable Terraform module framework for standardizing infrastructure deployments across multiple AWS accounts and environments."
                tags={["Terraform", "AWS", "Python", "CloudFormation"]}
                githubUrl="https://github.com/pratik1794-devops/Infrastructure-as-Code-Framework"
              />

              <ProjectCard
                title="Microservices Monitoring Dashboard"
                description="Created a comprehensive monitoring solution using Prometheus and Grafana to provide real-time visibility into microservices health and performance."
                tags={["Prometheus", "Grafana", "Kubernetes", "Alertmanager"]}
                githubUrl="https://github.com/pratik1794-devops/Microservices-Monitoring-Dashboard"
              />

              <ProjectCard
                title="Disaster Recovery Automation"
                description="Implemented automated disaster recovery procedures that reduced recovery time objective (RTO) from hours to minutes for critical applications."
                tags={["AWS", "Terraform", "Python", "Lambda"]}
                githubUrl="https://github.com/pratik1794-devops/Disaster-Recovery-Automation"
              />

              <ProjectCard
                title="Container Security Scanner"
                description="Built a custom container security scanning tool that integrates with CI/CD pipelines to detect vulnerabilities before deployment."
                tags={["Docker", "Python", "Jenkins", "Security"]}
                githubUrl="https://github.com/pratik1794-devops/Secure-Scan-CI-Project"
              />
            </div>
          </div>
        </section>

        
        {/* Blog Section */}
        <BlogSection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="text-xl font-bold">
                <span className="text-emerald-500">DevOps</span>Engineer
              </Link>
              <p className="text-gray-400 mt-2">Building resilient infrastructure for the modern web</p>
            </div>

            <div className="flex space-x-6">
              <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-gray-400 hover:text-white transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Pratik DevOps Engineer. All rights reserved.</p>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="https://github.com/pratik1794-devops"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/pratik-karande-9831ab302/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
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
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Component for skill cards
function SkillCard({ name, level }: { name: string; level: string }) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
      <h3 className="font-medium">{name}</h3>
      <div className="mt-2">
        <Badge variant={level === "Advanced" ? "default" : level === "Intermediate" ? "secondary" : "outline"}>
          {level}
        </Badge>
      </div>
    </div>
  )
}

// Component for project cards
function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
}: {
  title: string
  description: string
  tags: string[]
  githubUrl: string
}) {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400 mb-4">{description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" asChild>
          <Link href={githubUrl} target="_blank" className="flex items-center">
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

// Component for certification cards
/*
function CertificationCard({
  name,
  issuer,
  date,
  image,
}: {
  name: string
  issuer: string
  date: string
  image: string
}) {
  return (
    <div className="flex items-center p-4 bg-gray-900 rounded-lg border border-gray-800">
      <div className="flex-shrink-0 mr-4">
        <img src={image || "/placeholder.svg"} alt={issuer} className="w-16 h-16 object-contain" />
      </div>
      <div>
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-gray-400">{issuer}</p>
        <p className="text-xs text-gray-500 mt-1">Issued {date}</p>
      </div>
    </div>
  )
}
*/
// Component for blog post cards
/*function BlogPostCard({
  title,
  excerpt,
  date,
  readTime,
  image,
}: {
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
}) {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400 mb-4">{excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-gray-500">
        <span>{date}</span>
        <span>{readTime}</span>
      </CardFooter>
    </Card>
  )
}
*/