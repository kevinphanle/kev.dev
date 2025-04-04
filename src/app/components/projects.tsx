"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProjectItem } from "@/app/components/ProjectItem";
import projectData from "@/data/projects.json";
import { projectSchema, Project } from "@/lib/schemas";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Projects = () => {
  const baseProjects = projectSchema.parse(projectData).projects;
  const [projects, setProjects] = useState<Project[]>(baseProjects);

  const handleFilter = (e: string) => {
    if (e === "all") {
      setProjects(baseProjects);
      return;
    }

    if (e === "deprecated") {
      const filteredProjects = baseProjects.filter(
        (project) => project.deprecated
      );
      setProjects(filteredProjects);
      return;
    }

    const filteredProjects = baseProjects.filter((project) =>
      project.stack.map((item) => item.toLowerCase()).includes(e)
    );
    setProjects(filteredProjects);
  };

  return (
    <div id="projects" className="py-10 border-b">
      <div className="flex items-center justify-between w-full mb-4">
        <h2 className="mb-1 text-2xl italic font-semibold">projects</h2>
        <Select onValueChange={handleFilter} aria-label="Filter projects">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Technology" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="canvas">Canvas</SelectItem>
            <SelectItem value="typescript">TypeScript</SelectItem>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="ruby">Ruby</SelectItem>
            <SelectItem value="node.js">Node.js</SelectItem>
            <SelectItem value="deprecated">Deprecated</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="project-filter"></div>

      <AnimatePresence mode="wait">
        <motion.ul
          key="projects"
          className="min-h-[350px] grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {projects.map((project, i) => (
            <ProjectItem key={i} project={project} />
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
};
