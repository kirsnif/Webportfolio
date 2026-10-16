"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/languageSwitcher";

console.log(LanguageSwitcher);

const links = [
  { key: "professional", href: "/" },
  { key: "projects", href: "/projects" },
  { key: "personal", href: "/personal" },
  { key: "contact", href: "/contact" },
];

export default function Navbar() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkColor = (href: string) =>
    pathname === href ? "text-violet-400" : "text-gray-300 hover:text-white";

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-3 backdrop-blur sm:px-6 sm:py-4">
      <Link
        href="/"
        onClick={() => setOpen(false)}
        className="text-lg font-bold text-white"
      >
        Kiera Smith
      </Link>

      {/* Right side: links, language switcher and menu button */}
      <div className="flex items-center gap-4">
        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkColor(link.href)}>
                {t(link.key)}
              </Link>
            </li>
          ))}
        </ul>

        <LanguageSwitcher />

        {/* Menu button, phones only */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t("closeMenu") : t("openMenu")}
          className="rounded-lg p-2 text-gray-300 hover:bg-white/10 hover:text-white md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown, phones only */}
      {open && (
        <ul
          id="mobile-menu"
          className="absolute inset-x-0 top-full flex flex-col border-b border-white/10 bg-black/90 px-4 py-2 backdrop-blur md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-3 ${linkColor(link.href)}`}
              >
                {t(link.key)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}