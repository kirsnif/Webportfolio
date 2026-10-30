import Image from "next/image";
import { pick } from "@/i18n/localized";
import { useLocale } from "next-intl";
import { Hobby } from "./hobbies";

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
  const locale = useLocale();
  return (
    <article
      className={`flex items-center gap-4 md:gap-10 ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <Image
        src={image}
        alt={alt}
        width={640}
        height={448}
        className="h-28 w-28 shrink-0 rounded-xl object-cover sm:h-36 sm:w-36 md:h-64 md:w-1/2 md:shrink"
      />
      <div className="min-w-0 md:w-1/2">
        <h3 className="text-lg font-semibold md:text-xl">{pick (title, locale)}</h3>
        <p className="mt-2 text-sm text-gray-400 md:mt-3 md:text-base">{pick(description, locale)}</p>
      </div>
    </article>
  );
}