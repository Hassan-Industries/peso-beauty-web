import { PageHero } from "@/components/ui/page-hero";

export default function AccountPage() {
  return (
    <>
      <PageHero eyebrow="Client Account" title="Your PESO Beauty experience, in one place." description="The client portal will provide secure access to appointments, receipts, profile details, preferences, and permitted self-service actions." />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Appointments", "Review upcoming and past appointments, status, and service details."],
            ["Payments & Receipts", "View deposits, completed payments, credits, and receipts."],
            ["Profile & Preferences", "Manage contact information and communication preferences."],
          ].map(([title, description]) => (
            <article key={title} className="peso-panel rounded-3xl p-6">
              <p className="peso-eyebrow">Client Portal</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/55">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
