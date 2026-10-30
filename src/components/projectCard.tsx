import { Link } from "@/i18n/navigation";
import type { Project } from "./allProjects";
import { useLocale } from "next-intl";
import { pick } from "@/i18n/localized";

export default function ProjectCard({ project }: { project: Project }) {
  const locale = useLocale();
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block overflow-hidden rounded-xl border border-white/10 bg-white/5 transition hover:border-violet-400/50 hover:bg-white/10"
    >
      <div className="flex aspect-video items-center justify-center bg-white/5 text-gray-500">
        {project.image && (
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-400">{pick(project.summary, locale)}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t} className="rounded bg-white/10 px-2 py-1 text-xs text-gray-300">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}