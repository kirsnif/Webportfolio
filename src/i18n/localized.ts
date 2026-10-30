export type Locale = "en" | "de";

export type Localized<T = string> = Record<Locale, T>;

export function pick<T>(field: Localized<T>, locale: string): T {
    return field[locale as Locale];
}