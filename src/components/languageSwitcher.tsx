"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

console.log("languageSwitcher module loaded");

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div role="group" aria-label="Language" className="flex items-center gap-1 text-sm">
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => router.replace(pathname, { locale: l })}
          aria-pressed={l === locale}
          className={
            l === locale
              ? "rounded px-2 py-1 font-semibold text-violet-400"
              : "rounded px-2 py-1 text-gray-400 hover:text-white"
          }
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}