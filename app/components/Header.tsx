"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "WordPress", href: "/" },
  { label: "Elementor", href: "/elementor" },
  { label: "Divi", href: "/divi" },
  { label: "Jamstack", href: "/jamstack" },
  { label: "Next.js", href: "/nextjs" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 flex justify-center px-6 py-4 md:px-10">
      <nav className="flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-full border border-line bg-card/90 px-6 py-3 backdrop-blur">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`font-label text-xs uppercase tracking-[0.1em] transition-colors ${
                isActive ? "text-navy" : "text-navy-soft hover:text-navy"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
