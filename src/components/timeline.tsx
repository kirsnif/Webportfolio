const timeline = [
  {
    period: "09 / 2025 – Present",
    title: "Application Developer Apprentice",
    place: "ESPAS, Zürich",
    description: "description",
  },
  {
    period: "05 / 2025 – 09 / 2025",
    title: "Career Preperation IT",
    place: "ESPAS, Zürich",
    description: "description",
  },
  {
    period: "10 / 2024 – 05 / 2025",
    title: "Career Assessment IT",
    place: "Santis, Lenzburg",
    description: "description",
  },
];
export default function Timeline() {
    return (
      <section className="py-12">
        <h2 className="text-2xl font-bold">Experience &amp; education</h2>
        <ol className="mt-6 space-y-6 border-l border-white/10 pl-6">
          {timeline.map((item) => (
            <li key={item.title}>
              <p className="text-sm text-violet-400">{item.period}</p>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.place}</p>
              <p className="mt-2 text-gray-400">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>
);
}