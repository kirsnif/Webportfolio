import HobbyCard, { type Hobby } from "@/components/hobbyCard";

const hobbies: Hobby[] = [
  {
    title: "Painting",
    description: "about",
    image: "/images/potat.jpg",
    alt: "Painting picture",
  },
  {
    title: "Hiking",
    description: "about",
    image: "/images/potat.jpg",
    alt: "Hiking picture",
  },
  {
    title: "Reading",
    description: "about",
    image: "/images/potat.jpg",
    alt: "Reading picture",
  },
 {
    title: "Gaming",
    description: "about",
    image: "/images/potat.jpg",
    alt: "Gaming picture",
  },
];

export default function Hobbies() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <h2 className="text-2xl font-bold">Hobbies</h2>
      <p className="mt-2 text-gray-400">What I do when I&apos;m not coding.</p>

      <div className="mt-10 space-y-16">
        {hobbies.map((hobby, index) => (
          <HobbyCard key={hobby.title} {...hobby} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
}