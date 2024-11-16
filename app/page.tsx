"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Layout,
  Cpu,
  Server,
  Blocks,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const technologies = [
  {
    icon: <Layout className="w-6 h-6" />,
    name: "Frontend",
    description: "Modern UI development with React, Vue, and Angular",
    tools: ["React", "Vue.js", "Angular", "Svelte"],
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: <Server className="w-6 h-6" />,
    name: "Backend",
    description: "Robust server-side solutions with Node.js, Python, and more",
    tools: ["Node.js", "Python", "Java", "Go"],
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: <Database className="w-6 h-6" />,
    name: "Databases",
    description: "Data management with SQL and NoSQL solutions",
    tools: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: <Blocks className="w-6 h-6" />,
    name: "DevOps",
    description: "Streamlined deployment and infrastructure management",
    tools: ["Docker", "Kubernetes", "AWS", "GitHub Actions"],
    color: "bg-orange-500/10 text-orange-500",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Badge className="mb-4" variant="secondary">
            Web Development 2024
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Master Modern Web Technologies
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore the most powerful and widely-used web development technologies
            that are shaping the future of the internet.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/login">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button size="lg" variant="secondary">
              Learn More
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Technologies Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Essential Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-muted">
                <CardContent className="p-6">
                  <div className={`p-3 rounded-lg w-fit ${tech.color} mb-4`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                  <p className="text-muted-foreground mb-4">{tech.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tech.tools.map((tool) => (
                      <Badge key={tool} variant="secondary">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm border-muted">
            <CardContent className="p-6 text-center">
              <Globe className="w-8 h-8 mx-auto mb-4 text-blue-500" />
              <h3 className="text-2xl font-bold mb-2">97%</h3>
              <p className="text-muted-foreground">
                of websites use JavaScript
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-muted">
            <CardContent className="p-6 text-center">
              <Code2 className="w-8 h-8 mx-auto mb-4 text-green-500" />
              <h3 className="text-2xl font-bold mb-2">5M+</h3>
              <p className="text-muted-foreground">
                Active React Developers
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-muted">
            <CardContent className="p-6 text-center">
              <Cpu className="w-8 h-8 mx-auto mb-4 text-purple-500" />
              <h3 className="text-2xl font-bold mb-2">89%</h3>
              <p className="text-muted-foreground">
                Use Node.js Backend
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}