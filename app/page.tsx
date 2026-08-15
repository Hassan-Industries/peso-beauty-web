import Link from "next/link";

const serviceCards = [
  {
    title: "Signature Styling",
    description: "A polished styling experience tailored to your desired look.",
  },
  {
    title: "Protective Styling",
    description: "Protective options with preparation guidance and clear appointment expectations.",
  },
  {
    title: "Specialty Services",
    description: "Specialized beauty appointments and add-ons configured around your needs.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(255,42,122,0.18),transparent_30rem)]" />
        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div>
            <p className="peso-eyebrow">PESO Beauty Bar</p>
            <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
              <span className="peso-gradient-text">Confidence.</span>
              <br />
              Beauty.
              <br />
              Success.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              A modern, client-first beauty experience built around quality service, simple booking, secure payments, and confidence from start to finish.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book" className="rounded-full bg-peso-pink px-6 py-3 font-bold text-black transition hover:bg-peso-blush">
                Book Appointment
              </Link>
              <Link href="/services" className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-peso-rose hover:text-peso-blush">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="peso-panel relative min-h-[430px] overflow-hidden rounded-[2rem] p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,128,180,0.20),transparent_22rem)]" />
            <div className="relative flex h-full min-h-[376px] flex-col justify-between">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="peso-eyebrow">Official Experience</p>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl">Beauty with structure.</h2>
                </div>
                <span className="rounded-full border border-peso-gold/30 bg-peso-gold/10 px-3 py-1 text-xs font-semibold text-peso-gold">
                  PESO
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Easy online booking",
                  "Secure deposit handling",
                  "Client account access",
                  "Clear service policies",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white/75">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="peso-eyebrow">Featured Services</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl sm:text-4xl">Start with the look you want.</h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-peso-blush hover:text-peso-pink">
            View all services →
          </Link>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {serviceCards.map((service, index) => (
            <article key={service.title} className="peso-panel group rounded-3xl p-6 transition hover:-translate-y-1 hover:border-peso-pink/40">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.16em] text-white/35">0{index + 1}</span>
                <span className="h-2.5 w-2.5 rounded-full bg-peso-pink shadow-glow" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">{service.description}</p>
              <Link href="/services" className="mt-6 inline-block text-sm font-semibold text-peso-rose">
                Explore service →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="peso-panel grid gap-8 rounded-[2rem] p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="peso-eyebrow">Double Rose Strands</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl">Complete the look beyond the appointment.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">
              The PESO Beauty experience will connect clients to Double Rose Strands for hair products and related retail offerings while keeping each brand distinct.
            </p>
          </div>
          <Link href="/shop" className="rounded-full border border-peso-gold/40 px-6 py-3 text-sm font-semibold text-peso-gold transition hover:bg-peso-gold hover:text-black">
            Explore the Shop
          </Link>
        </div>
      </section>
    </>
  );
}
