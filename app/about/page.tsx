import Link from "next/link";

import { PageHero } from "@/components/ui/page-hero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About PESO Beauty Bar"
        title="Confidence, beauty, success."
        description="PESO Beauty Bar is the service-facing beauty brand operated by PESO Beauty, LLC. The public experience is being built around quality service, clarity, professionalism, and client confidence."
        actions={
          <Link href="/services" className="rounded-full bg-peso-pink px-6 py-3 text-sm font-bold text-black transition hover:bg-peso-blush">
            Explore Services
          </Link>
        }
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div className="peso-panel rounded-3xl p-7 sm:p-9">
          <p className="peso-eyebrow">Our Direction</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl">A beauty brand built to grow with its clients.</h2>
          <p className="mt-5 text-sm leading-7 text-white/60">
            The site will focus on the real client experience rather than presenting facilities or capabilities that do not yet exist. As PESO Beauty grows, imagery and business information can evolve without changing the core design system.
          </p>
        </div>
        <div className="peso-panel min-h-80 rounded-3xl p-7">
          <div className="flex h-full min-h-64 flex-col justify-between rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_58%_32%,rgba(255,42,122,0.18),transparent_16rem)] p-6">
            <div className="peso-eyebrow">Brand Visual Area</div>
            <p className="max-w-sm font-[family-name:var(--font-display)] text-2xl text-white/80">
              Beauty editorial imagery, product details, tools, hair, and brand-focused photography can live here instead of fictional salon imagery.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
