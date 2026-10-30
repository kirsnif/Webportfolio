import { pick } from "@/i18n/localized";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

const timeline = [
  {
    id: "3",
    period: {
      "en": "08 / 2025 – Present",
      "de": "08 / 2025 - heute"
    },
    title: {
      "en": "Application Developer Apprentice EFZ",
      "de": "Informatikerin EFZ, Fachrichtung Applikationsentwicklung"
    },
    place: "ESPAS, Zürich",
    description: {
      "en": [
        "Development of applications using C# and .NET (MAUI, Blazor), as well as Python",
        "Creation of websites using HTML, CSS and JavaScript",
        "Setup of Windows Server environments with Active Directory on Proxmox",
        "Collaboration within a SCRUM team, writing test cases and technical documentation",
      ],
      "de": [
        "Entwicklung von Anwendungen mit C#, .NET (MAUI, Blazor), und Python",
        "Entwicklung von Webseiten mit HTML, CSS und JavaScript",
        "Einrichtung von Windows Server-Umgebungen mit Active Directory auf Proxmox",
        "Zusammenarbeit in einem SCRUM-Team, Erstellung von Testfällen und technischer Dokumentation",
      ],
    },
},
  {
    id: "2",
    period: {
      "en": "05 / 2025 – 09 / 2025",
      "de": "05 / 2025 – 09 / 2025"
    },
    title: {
      "en": "Career Preparation IT",
      "de": "Berufsvorbereitung IT"
    },
    place: "ESPAS, Zürich",
    description: {
      "en": [
        "Preparation for the apprenticeship",
        "Learning the fundamentals of programming, web development, databases and networks",
      ],
      "de": [
        "Vorbereitung auf die Ausbildung",
        "Erlernen der Grundlagen der Programmierung, der Webentwicklung, von Datenbanken und Netzwerken"
      ],
    },
  },
  {
    id: "1",
    period: {
      "en": "10 / 2024 – 05 / 2025",
      "de": "10 / 2024 – 05 / 2025"
    },
    title: {
      "en": "Career Assessment IT",
      "de": "Berufsabklärung IT"
    },
    place: "Santis, Lenzburg",
    description: {
      "en": [
        "Assessment of my skills and interests in the field of IT",
        "Covering programming, networks and hardware",
      ],
      "de": [
        "Abklärung meiner Fähigkeiten und Interessen im Bereich der IT",
        "Themen: Programmierung, Netzwerke und Hardware",
      ],
    },
  },
];

export default function Timeline() {
  const locale = useLocale();
  const t = useTranslations("Timeline");
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold">{t("title")}</h2>
      <ol className="mt-6 space-y-6 border-l border-white/10 pl-6">
        {timeline.map((item) => (
          <li key={item.id}>
            <p className="text-sm text-violet-400">{pick(item.period, locale)}</p>
            <h3 className="font-semibold">{pick(item.title, locale)}</h3>
            <p className="text-sm text-gray-400">{item.place}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-400">
              {pick(item.description, locale).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}