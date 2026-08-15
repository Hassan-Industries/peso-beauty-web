"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { PesoBrandMark } from "@/components/brand/peso-brand-mark";

const navigation = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Book", "/book"],
  ["Gallery", "/gallery"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-5" aria-hidden="true">
      <span
        className={`absolute left-0 top-1/2 h-px w-5 bg-current transition duration-200 ${
          open ? "translate-y-0 rotate-45" : "-translate-y-[5px]"
        }`}
      />
      <span
        className={`absolute left-0 top-1/2 h-px w-5 bg-current transition duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 top-1/2 h-px w-5 bg-current transition duration-200 ${
          open ? "translate-y-0 -rotate-45" : "translate-y-[5px]"
        }`}
      />
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link href="/" className="group min-w-fit" aria-label="PESO Beauty Bar home">
          <PesoBrandMark compact className="transition duration-200 group-hover:brightness-110" />
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex" aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`relative py-2 transition hover:text-peso-blush ${
                isActive(href) ? "text-white" : ""
              }`}
            >
              {label}
              {isActive(href) ? (
                <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-px w-5 bg-peso-pink" aria-hidden="true" />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/account" className="hidden text-sm text-white/70 transition hover:text-white lg:inline">
            My Account
          </Link>
          <Link
            href="/book"
            className="hidden rounded-full bg-peso-pink px-5 py-2.5 text-sm font-bold text-black shadow-glow transition hover:bg-peso-blush sm:inline-flex"
          >
            Book Now
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-peso-pink/60 hover:text-peso-blush md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 top-[69px] z-40 h-[calc(100dvh-69px)] bg-black/98 transition duration-200 md:hidden ${
          menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
      >
        <div className="mx-auto flex h-full max-w-7xl flex-col px-5 pb-8 pt-7">
          <PesoBrandMark showTagline />

          <nav className="mt-7 grid" aria-label="Mobile navigation">
            {navigation.map(([label, href], index) => (
              <Link
                key={href}
                href={href}
                tabIndex={menuOpen ? 0 : -1}
                className="group flex items-center justify-between border-b border-white/10 py-4"
              >
                <span
                  className={`font-[family-name:var(--font-display)] text-2xl transition group-hover:text-peso-blush ${
                    isActive(href) ? "text-peso-blush" : "text-white"
                  }`}
                >
                  {label}
                </span>
                <span className="text-xs font-semibold tracking-[0.18em] text-white/30">0{index + 1}</span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto grid gap-3 pt-8">
            <Link
              href="/book"
              tabIndex={menuOpen ? 0 : -1}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-peso-pink px-6 py-3 text-sm font-bold text-black transition hover:bg-peso-blush"
            >
              Book Appointment
            </Link>
            <Link
              href="/account"
              tabIndex={menuOpen ? 0 : -1}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-peso-rose hover:text-peso-blush"
            >
              My Account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
