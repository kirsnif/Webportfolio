import HobbyCard, { type Hobby } from "@/components/hobbyCard";

const hobbies: Hobby[] = [
  {
    title: "Creative activities",
    description: "I enjoy all kinds of creative activities, such as painting, drawing, writing and playing music. Recently, painting miniatures has become my main creative outlet.",
    image: "/images/knightMini.jpg",
    alt: "Painting picture",
  },
  {
    title: "Staying active",
    description: "Wether it's going on long walks, running or going to the gym, I love being active and spending time outdoors.",
    image: "/images/mountainView.jpg",
    alt: "Hiking picture",
  },
  {
    title: "Reading",
    description: "Fictional novels are my favorite, as I love getting invested in a good story. I especially love gritty realism and character driven stories.",
    image: "/images/potat.jpg",
    alt: "Reading picture",
  },
 {
    title: "Gaming",
    description: "I enjoy gaming, especially survival games and RPGs, either alone or with my partner. It's a great way for me to de-stress and have fun.",
    image: "/images/rdr2.jpg",
    alt: "Gaming picture",
  },
];

export default function Hobbies() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <h2 className="text-3xl font-bold">Hobbies</h2>
      <div className="mt-10 space-y-16">
        {hobbies.map((hobby, index) => (
          <HobbyCard key={hobby.title} {...hobby} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
}