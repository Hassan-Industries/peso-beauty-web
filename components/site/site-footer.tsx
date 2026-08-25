import Link from "next/link";

import { PesoBrandMark } from "@/components/brand/peso-brand-mark";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/75">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_.8fr_.8fr] lg:px-8">
        <div>
          <PesoBrandMark showTagline />
          <p className="mt-4 max-w-md text-sm leading-6 text-white/55">
            A client-first beauty experience focused on clear booking, thoughtful service, and a polished public experience from discovery through follow-up.
          </p>
        </div>

        <div>
          <div className="peso-eyebrow">Explore</div>
          <div className="mt-4 grid gap-2 text-sm text-white/65">
            <Link href="/services" className="transition hover:text-peso-blush">Services</Link>
            <Link href="/book" className="transition hover:text-peso-blush">Book Appointment</Link>
            <Link href="/gallery" className="transition hover:text-peso-blush">Gallery</Link>
            <Link href="/shop" className="transition hover:text-peso-blush">Double Rose Strands</Link>
          </div>
        </div>

        <div>
          <div className="peso-eyebrow">Information</div>
          <div className="mt-4 grid gap-2 text-sm text-white/65">
            <Link href="/policies" className="transition hover:text-peso-blush">Policies</Link>
            <Link href="/faq" className="transition hover:text-peso-blush">FAQ</Link>
            <Link href="/contact" className="transition hover:text-peso-blush">Contact</Link>
            <Link href="/privacy" className="transition hover:text-peso-blush">Privacy</Link>
          </div>
        </div>
      </div>

      <div className="peso-divider mx-auto max-w-7xl" />

      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-center text-xs tracking-wide text-white/40 sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">
        <span>PESO Beauty, LLC. All rights reserved.</span>
        <span>A member of The Kousins Corporation operating enterprise.</span>
      </div>
    </footer>
  );
}
