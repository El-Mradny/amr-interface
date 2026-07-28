"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/roundtables", label: "Roundtables" },
  { href: "/outputs", label: "Outputs" },
  { href: "/leadership", label: "Leadership" },
  { href: "/engage", label: "Engage" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="brand" href="/" aria-label="The AMR Interface — home">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">
            The AMR Interface
            <span className="brand-sub">Research · Policy · Practice</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="btn btn-gold nav-cta" href="/engage#register">
          Register interest
        </Link>
      </div>
    </header>
  );
}
