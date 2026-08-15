import { PageHero } from "@/components/ui/page-hero";

export default function ShopPage() {
  return (
    <>
      <PageHero eyebrow="Double Rose Strands" title="Shop the PESO Beauty retail experience." description="Double Rose Strands will serve as the product and hair retail experience connected to the broader PESO Beauty ecosystem while maintaining a distinct brand identity." />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {["Signature Collection", "Classic Collection", "Care Essentials"].map((name) => (
            <article key={name} className="peso-panel rounded-3xl p-5">
              <div className="min-h-60 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_25%,rgba(255,128,180,0.18),transparent_16rem)]" />
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl">{name}</h2>
              <p className="mt-2 text-sm text-white/50">Product content, pricing, inventory, and checkout will be connected in the commerce phase.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
