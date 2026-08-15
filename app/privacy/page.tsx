import { PageHero } from "@/components/ui/page-hero";

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Your information should be handled with care." description="The final privacy notice will describe how PESO Beauty collects, uses, stores, and protects information associated with booking, payments, communications, and client accounts." />
      <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
        <div className="peso-panel rounded-3xl p-7 sm:p-9">
          <p className="text-sm leading-7 text-white/60">This route is established as part of the public-site foundation. Final legal language will be added before production release and should be reviewed alongside the completed booking, account, analytics, and payment integrations.</p>
        </div>
      </section>
    </>
  );
}
