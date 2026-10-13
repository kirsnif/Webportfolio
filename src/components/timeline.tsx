const timeline = [
  {
    period: "09 / 2025 – Present",
    title: "Application Developer Apprentice EFZ",
    place: "ESPAS, Zürich",
    description: [
      "Development of applications using C# and .NET (MAUI, Blazor), as well as Python",
      "Creation of websites using HTML, CSS and JavaScript",
      "Setup of Windows Server environments with Active Directory on Proxmox",
      "Collaboration within a SCRUM team, writing test cases and technical documentation",
    ],
  },
  {
    period: "05 / 2025 – 09 / 2025",
    title: "Career Preparation IT",
    place: "ESPAS, Zürich",
    description: [
      "Preparation for the apprenticeship",
      "Learning the fundamentals of programming, web development, databases and networks",
    ],
  },
  {
    period: "10 / 2024 – 05 / 2025",
    title: "Career Assessment IT",
    place: "Santis, Lenzburg",
    description: [
      "Assessment of my skills and interests in the field of IT",
      "Covering programming, networks and hardware",
    ],
  },
];

export default function Timeline() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold">Experience</h2>
      <ol className="mt-6 space-y-6 border-l border-white/10 pl-6">
        {timeline.map((item) => (
          <li key={item.title}>
            <p className="text-sm text-violet-400">{item.period}</p>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.place}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-400">
              {item.description.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}