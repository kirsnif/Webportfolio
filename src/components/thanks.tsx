import { useTranslations } from "next-intl";

export default function Thanks() {
  const t = useTranslations("Thanks")
    return(
      <section className="py-30">
        <div className="max-w-xl">
          <h1 className="mt-2 py-2 text-4xl font-bold md:text-7xl bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            {t("title")}
          </h1>
          <p className="mt-2 text-4xl font-bold md:text-5xl">
            {t("sub")}
          </p>
        </div>
      </section>
    );
}