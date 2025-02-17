"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  demoUrl?: string;
  tags: string[];
  status: "completed" | "in-progress" | "planned";
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
    }

    fetchProjects();
  }, []);

  return (
    <>
      <Navbar />
      <motion.div
        className="min-h-screen flex flex-col max-w-[60rem] w-full mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-full"
        initial="hidden"
        animate="show"
        variants={containerVariants}
        exit={{ opacity: 0 }}
      >
        <main className="flex-1 container mx-auto mt-48">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="rounded-t-lg object-cover transition-all duration-300 grayscale hover:grayscale-0"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{project.title}</CardTitle>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          project.status === "completed"
                            ? "bg-green-500/10 text-green-500"
                            : project.status === "in-progress"
                              ? "bg-yellow-500/10 text-yellow-500"
                              : "bg-gray-500/10 text-gray-500"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-4 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      asChild
                    >
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                    {project.demoUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        asChild
                      >
                        <Link
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLink className="h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </main>
      </motion.div>
    </>
  );
}
