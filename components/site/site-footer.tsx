import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3 lg:px-8">
        <div>
          <div className="text-lg font-black tracking-[0.22em]">PESO BEAUTY BAR</div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">
            Confidence, beauty, success. A client-first beauty experience operated by PESO Beauty, LLC.
          </p>
        </div>

        <div>
          <div className="peso-eyebrow">Explore</div>
          <div className="mt-4 grid gap-2 text-sm text-white/65">
            <Link href="/services">Services</Link>
            <Link href="/book">Book Appointment</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/shop">Double Rose Strands</Link>
          </div>
        </div>

        <div>
          <div className="peso-eyebrow">Information</div>
          <div className="mt-4 grid gap-2 text-sm text-white/65">
            <Link href="/policies">Policies</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs tracking-wide text-white/40">
        PESO Beauty Bar is operated by PESO Beauty, LLC · A member of The Kousins Corporation operating enterprise.
      </div>
    </footer>
  );
}
