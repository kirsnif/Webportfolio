import { Link } from "@/i18n/navigation"
import { notFound } from "next/navigation";
import { projects } from "@/components/allProjects";
import { pick } from "@/i18n/localized";
import { getTranslations } from "next-intl/server";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} | Kiera` : "Project not found",
  };
}

// React bug

export default async function ProjectPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const t = await getTranslations("Project");

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/projects" className="text-sm text-violet-400 hover:underline">
        {t("return")}
      </Link>

      <h1 className="mt-6 text-4xl font-bold">{project.title}</h1>
      <p className="mt-2 text-lg text-gray-400">{pick(project.summary, locale)}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li key={t} className="rounded bg-white/10 px-2 py-1 text-xs text-gray-300">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex aspect-video items-center justify-center rounded-xl bg-white/5 text-gray-500">
        {project.image && (
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
        )}
      </div>

      <h2 className="mt-10 text-xl font-semibold">{t("about")}</h2>
      <p className="mt-3 text-gray-300">{pick(project.description, locale)}</p>

      <h2 className="mt-10 text-xl font-semibold text-violet-400">{t("learned")}</h2>
      <p className="mt-3 text-gray-300">{pick(project.learned, locale)}</p>

      {(project.github) && (
        <div className="mt-10 flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-violet-400 px-5 py-2 font-semibold text-black hover:bg-violet-300"
            >
              View code
            </a>
          )}
        </div>
      )}
    </main>
  );
}