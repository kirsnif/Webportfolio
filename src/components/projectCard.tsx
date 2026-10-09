type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
};

export default function ProjectCard({ title, description, tech }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <div className="flex h-40 items-center justify-center bg-white/5 text-gray-500">
        Cover image
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li key={t} className="rounded bg-white/10 px-2 py-1 text-xs text-gray-300">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}