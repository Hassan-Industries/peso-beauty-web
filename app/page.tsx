import Link from "next/link";
import { CalendarCheck2, CreditCard, ShieldCheck, Sparkles, UserRound } from "lucide-react";

import { DoubleRoseMark } from "@/components/brand/double-rose-mark";
import { PesoLogoArtwork } from "@/components/brand/peso-logo-artwork";

const serviceCards = [
  {
    title: "Signature Styling",
    description: "A polished styling experience tailored to your desired look.",
    label: "Styling",
  },
  {
    title: "Protective Styling",
    description: "Protective options with preparation guidance and clear appointment expectations.",
    label: "Protective",
  },
  {
    title: "Specialty Services",
    description: "Specialized beauty appointments and add-ons configured around your needs.",
    label: "Specialty",
  },
];

const experienceItems = [
  {
    icon: CalendarCheck2,
    title: "Easy Booking",
    detail: "Move from service selection to a confirmed appointment in one guided flow.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    detail: "Deposits and eligible appointment payments will be handled through Stripe.",
  },
  {
    icon: UserRound,
    title: "Client Account",
    detail: "Review appointments, receipts, profile details, and permitted self-service actions.",
  },
  {
    icon: ShieldCheck,
    title: "Clear Policies",
    detail: "Important preparation, cancellation, and service expectations appear before booking.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 peso-grid-overlay opacity-45" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_76%_28%,rgba(255,42,122,0.24),transparent_28rem),radial-gradient(circle_at_18%_86%,rgba(212,175,55,0.07),transparent_24rem)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid min-h-[690px] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.03fr_.97fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="peso-eyebrow">PESO Beauty Bar</p>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.95] sm:text-6xl lg:text-[5.35rem]">
              <span className="peso-gradient-text">Confidence.</span>
              <br />
              Beauty.
              <br />
              Success.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              A modern beauty experience built around thoughtful service, simple booking, clear expectations, and the confidence to own your finished look.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="rounded-full bg-peso-pink px-6 py-3.5 text-sm font-bold text-black shadow-glow transition hover:-translate-y-0.5 hover:bg-peso-blush"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/20 bg-black/20 px-6 py-3.5 text-sm font-semibold transition hover:border-peso-rose hover:text-peso-blush"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
              <span>Client-first</span>
              <span className="text-peso-gold" aria-hidden="true">✦</span>
              <span>Secure booking</span>
              <span className="text-peso-gold" aria-hidden="true">✦</span>
              <span>Built for growth</span>
            </div>
          </div>

          <div className="peso-brand-surface min-h-[500px] rounded-[2.25rem] p-6 sm:p-8">
            <div className="flex h-full min-h-[438px] flex-col justify-between">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="peso-eyebrow">The PESO Experience</p>
                  <h2 className="mt-3 max-w-sm font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-4xl">
                    Beauty presented with intention.
                  </h2>
                </div>
                <Sparkles className="mt-1 h-6 w-6 shrink-0 text-peso-gold" aria-hidden="true" />
              </div>

              <div className="peso-logo-stage my-10 flex flex-1 items-center justify-center rounded-[1.75rem] border border-white/10 px-6 py-8 text-center backdrop-blur-sm">
                <div>
                  <PesoLogoArtwork priority className="mx-auto max-w-[17rem]" />
                  <p className="peso-logo-stage-copy -mt-8 text-[0.58rem] font-semibold uppercase tracking-[0.24em]">
                    Confidence, Beauty, Success.
                  </p>
                  <p className="peso-logo-stage-copy mx-auto mt-4 max-w-sm text-sm leading-6">
                    Official photography and campaign imagery will live here as the public brand library develops.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="rounded-2xl border border-peso-pink/15 bg-peso-pink/5 p-4">
                  <div className="font-semibold text-peso-blush">Appointments</div>
                  <div className="mt-1 text-white/45">Simple, guided booking</div>
                </div>
                <div className="rounded-2xl border border-peso-gold/15 bg-peso-gold/5 p-4">
                  <div className="font-semibold text-peso-gold">Client Care</div>
                  <div className="mt-1 text-white/45">Clear expectations first</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-peso-champagne text-black">
          <div className="mx-auto grid max-w-7xl divide-y divide-black/10 px-5 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:px-8">
            {experienceItems.map(({ icon: Icon, title, detail }) => (
              <div key={title} className="flex gap-3 px-4 py-5 first:pl-0 sm:px-5 lg:py-6">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-peso-pink" aria-hidden="true" />
                <div>
                  <div className="text-sm font-bold">{title}</div>
                  <p className="mt-1 text-xs leading-5 text-black/55">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="peso-eyebrow">Featured Services</p>
            <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl sm:text-4xl">
              Start with the look you want.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/50">
              Services will publish from the PESO operating system with current pricing, timing, preparation requirements, and bookable availability.
            </p>
          </div>
          <Link href="/services" className="text-sm font-semibold text-peso-blush transition hover:text-peso-pink">
            View all services →
          </Link>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {serviceCards.map((service, index) => (
            <article
              key={service.title}
              className="peso-panel group overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-peso-pink/40"
            >
              <div className="relative h-44 border-b border-white/10 bg-[radial-gradient(circle_at_70%_25%,rgba(255,42,122,0.28),transparent_12rem),linear-gradient(145deg,#20131b,#090909)] p-5">
                <div className="absolute inset-0 peso-grid-overlay opacity-30" aria-hidden="true" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-peso-blush">
                      {service.label}
                    </span>
                    <span className="text-xs font-semibold tracking-[0.16em] text-white/30">0{index + 1}</span>
                  </div>
                  <div className="text-right font-[family-name:var(--font-display)] text-5xl text-peso-pink/25" aria-hidden="true">
                    ✦
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-[family-name:var(--font-display)] text-2xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{service.description}</p>
                <Link href="/services" className="mt-6 inline-block text-sm font-semibold text-peso-rose transition group-hover:text-peso-blush">
                  Explore service →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[.85fr_1.15fr] lg:px-8 lg:py-20">
          <div>
            <p className="peso-eyebrow">Our Approach</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl sm:text-4xl">
              Built around the appointment—not a fictional storefront.
            </h2>
          </div>
          <div className="grid gap-4 text-sm leading-7 text-white/55 sm:grid-cols-2">
            <p>
              PESO Beauty Bar is being presented for what it is today: a developing beauty service business with a professional digital experience, not an established luxury salon location.
            </p>
            <p>
              As the business grows, the site can evolve with real staff imagery, verified portfolio work, physical-location information, and future studio or salon photography when those assets actually exist.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="peso-brand-surface grid gap-8 rounded-[2rem] p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <DoubleRoseMark />
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl">Complete the look beyond the appointment.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">
              The PESO Beauty experience will connect clients to Double Rose Strands for hair products and related retail offerings while keeping the retail identity distinct from Beauty Bar service operations.
            </p>
          </div>
          <Link
            href="/shop"
            className="rounded-full border border-peso-gold/40 px-6 py-3 text-center text-sm font-semibold text-peso-gold transition hover:bg-peso-gold hover:text-black"
          >
            Explore the Shop
          </Link>
        </div>
      </section>
    </>
  );
}
