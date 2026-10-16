"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Professional", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Personal", href: "/personal" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

const linkColor = (href: string) =>
  pathname === href ? "text-violet-400" : "text-gray-300 hover:text-white";

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-3 backdrop-blur sm:px-6 sm:py-4">
      <Link href="/" onClick={() => setOpen(false)} className="text-lg font-bold text-white">
        Kiera Smith
      </Link>

      <ul className="hidden items-center gap-6 md:flex">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={linkColor(link.href)}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} className="rounded-lg p-2 text-gray-300 hover:bg-white/10 hover:text-white md:hidden">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      {open && (
        <ul id="mobile-menu" className="absolute inset-x-0 top-full flex flex-col border-b border-white/10 bg-black/90 px-4 py-2 backdrop-blur md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setOpen(false)} className={'böocl py-3 ${linkColor(link.href)}'}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}