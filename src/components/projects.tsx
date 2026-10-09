import Link from "next/link";
import ProjectCard from "./projectCard";

const projects = [
  {
    title: "Webportfolio",
    description: "My current project :)",
    tech: ["Next.js", "Tailwind"],
  },
  {
    title: "Absence Tracker",
    description: "Extensive Learning Report",
    tech: ["Python", "SQLite"],
  },
  {
    title: "To-Do App",
    description: ".NET project for tracking tasks",
    tech: ["Blazor", "MariaDB"],
  },
];

export default function Projects() {
  return (
    <section className="py-12">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-bold">Selected projects</h2>
        <Link href="/projects" className="text-sm text-violet-400 hover:underline">
          All projects →
        </Link>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}