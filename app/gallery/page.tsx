import { PageHero } from "@/components/ui/page-hero";

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title="See the PESO Beauty look." description="A future portfolio of approved client work, signature looks, and beauty content without misrepresenting the current physical salon environment." />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="peso-panel min-h-64 rounded-3xl p-5">
              <div className="flex h-full min-h-56 items-end rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_25%,rgba(255,42,122,0.16),transparent_16rem)] p-4">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Portfolio image {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
