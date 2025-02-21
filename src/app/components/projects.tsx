import { ProjectItem } from "@/app/components/ProjectItem";
import projectData from "@/data/projects.json";
import { projectSchema } from "@/lib/schemas";

export const Projects = () => {
  const projects = projectSchema.parse(projectData).projects;

  return (
    <div id="projects">
      <h3 className="mb-4">Projects</h3>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectItem key={i} project={project} />
        ))}
      </ul>
    </div>
  );
};
