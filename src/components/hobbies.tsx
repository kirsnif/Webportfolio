import HobbyCard from "@/components/hobbyCard";
import { useTranslations } from "next-intl";
import { Localized } from "@/i18n/localized";

export type Hobby = {
  id: string;
  title: Localized;
  description: Localized;
  image: string;
  alt: string;
};

export const hobbies: Hobby[] = [
  {
    id: "1",
    title: {
      "en": "Creative activities",
      "de":  "Kreative Aktivitäten"
    },
    description: {
      "en": "I enjoy all kinds of creative activities, such as painting, drawing, writing and playing music. Recently, painting miniatures has become my main creative outlet.",
      "de": "Ich habe Spass an allen möglichen kreativen Aktivitäten, wie zum Beispiel Malen, Zeichnen, Schreiben und Musizieren. In letzter Zeit ist das Bemalen von Miniaturen zu meinem liebsten kreativen Hobby geworden."
    },
    image: "/images/knightMini.jpg",
    alt: "Painting picture",
  },
  {
    id: "2",
    title: {
      "en": "Staying active",
      "de": "Aktiv bleiben"
    },
    description: {
      "en": "Wether it's going on long walks, running or going to the gym, I love being active and spending time outdoors.",
      "de": "Ob lange Spaziergänge, Joggen oder der Gang ins Fitnessstudio, ich liebe es, aktiv zu sein und Zeit im Freien zu verbringen."
    },
    image: "/images/mountainView.jpg",
    alt: "Hiking picture",
  },
  {
    id: "3",
    title: {
      "en": "Reading",
      "de": "Lesen"
    },
    description:{
      "en": "Fictional novels are my favorite, as I love getting invested in a good story. I especially love gritty realism and character driven stories.",
      "de": "Ich lese am liebsten Romane, da ich es liebe, mich auf eine gute Geschichte einzulassen. Besonders mag ich Geschichten, die von schonungslosem Realismus geprägt sind und in denen die Charaktere im Mittelpunkt stehen.",
    },
    image: "/images/potat.jpg",
    alt: "Reading picture",
  },
 {
    id: "4",
    title: {
      "en": "Gaming",
      "de": "Gaming"
    },
    description: {
      "en": "I enjoy gaming, especially survival games and RPGs, either alone or with my partner. It's a great way for me to de-stress and have fun.",
      "de": "Ich spiele gerne Videospiele, vor allem Survival-Spiele und Rollenspiele, entweder alleine oder zusammen mit meinem Partner. Das ist für mich eine tolle Möglichkeit, Stress abzubauen und Spass zu haben."
    },
    image: "/images/rdr2.jpg",
    alt: "Gaming picture",
  },
];

export default function Hobbies() {
  const t = useTranslations("Hobbies")
  return (
    <section className="mx-auto max-w-5xl px-6">
      <h2 className="text-3xl font-bold">
        {t("title")}
      </h2>
      <div className="mt-10 space-y-16">
        {hobbies.map((hobby, index) => (
          <HobbyCard key={hobby.id} {...hobby} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
}