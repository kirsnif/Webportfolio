// src/app/projects/page.tsx
import { projects } from "@/components/allProjects";
import ProjectCard from "@/components/projectCard";
import { useTranslations } from "next-intl";

export default function ProjectsPage() {
  const t = useTranslations("AllProjects");
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold">{t("title")}</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}