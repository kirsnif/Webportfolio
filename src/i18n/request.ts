import * as rootParams from "next/root-params";
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

const messageLoaders = {
  en: () => import("../../messages/en.json"),
  de: () => import("../../messages/de.json"),
};

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    const paramValue = await rootParams.locale();
    if (hasLocale(routing.locales, paramValue)) {
      locale = paramValue;
    } else {
      notFound();
    }
  }

  const load = messageLoaders[locale as keyof typeof messageLoaders];
  if (!load) notFound();

  return {
    locale,
    messages: (await load()).default,
  };
});