import { PageHero } from "@/components/ui/page-hero";

export default function PoliciesPage() {
  return (
    <>
      <PageHero eyebrow="Policies" title="Clear expectations before every appointment." description="Final deposit, cancellation, lateness, rescheduling, refund, preparation, and service policies will be published here after operational approval." />
      <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
        <div className="grid gap-4">
          {["Booking & Deposits", "Cancellations & Rescheduling", "Lateness & No-Shows", "Service Preparation", "Refunds & Credits"].map((title) => (
            <article key={title} className="peso-panel rounded-3xl p-6">
              <h2 className="font-[family-name:var(--font-display)] text-2xl">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/55">Policy language will be populated from the approved PESO Beauty operational policy set before public launch.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
