import Link from "next/link";

import { PageHero } from "@/components/ui/page-hero";

const services = [
  ["Signature Styling", "Professional styling tailored to the finished look you want.", "60–90 min"],
  ["Protective Styling", "Protective service options with clear preparation expectations.", "Varies"],
  ["Specialty Services", "Specialized beauty appointments and approved add-on options.", "Varies"],
  ["Consultation", "A focused consultation for service planning and preparation.", "20–30 min"],
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="PESO Beauty Bar Services"
        title="Choose the experience that fits your look."
        description="Our service catalog is designed to make pricing, timing, preparation, and booking expectations clear before your appointment begins."
        actions={
          <Link href="/book" className="rounded-full bg-peso-pink px-6 py-3 text-sm font-bold text-black transition hover:bg-peso-blush">
            Book Appointment
          </Link>
        }
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map(([name, description, duration], index) => (
            <article key={name} className="peso-panel rounded-3xl p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs font-semibold tracking-[0.18em] text-white/30">0{index + 1}</span>
                <span className="rounded-full border border-peso-pink/25 bg-peso-pink/10 px-3 py-1 text-xs text-peso-blush">{duration}</span>
              </div>
              <h2 className="mt-8 font-[family-name:var(--font-display)] text-2xl sm:text-3xl">{name}</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/55">{description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/book" className="rounded-full bg-peso-pink px-5 py-2.5 text-sm font-bold text-black hover:bg-peso-blush">
                  Book Service
                </Link>
                <span className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/55">Pricing configured before launch</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
