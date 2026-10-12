import Image from "next/image";

export type Hobby = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

type HobbyCardProps = Hobby & {
  reverse?: boolean;
};

export default function HobbyCard({
  title,
  description,
  image,
  alt,
  reverse = false,
}: HobbyCardProps) {
  return (
    <article
      className={`flex flex-col items-center gap-6 md:gap-10 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <Image
        src={image}
        alt={alt}
        width={640}
        height={448}
        className="h-64 w-full rounded-xl object-cover md:w-1/2"
      />
      <div className="md:w-1/2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-3 text-gray-400">{description}</p>
      </div>
    </article>
  );
}