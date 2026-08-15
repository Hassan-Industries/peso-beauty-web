import { PageHero } from "@/components/ui/page-hero";

const questions = [
  "How do deposits work?",
  "How should I prepare for my appointment?",
  "Can I reschedule online?",
  "What happens if I am late?",
  "Where can I view my receipt?",
];

export default function FAQPage() {
  return (
    <>
      <PageHero eyebrow="Frequently Asked Questions" title="Answers before your appointment." description="The FAQ will centralize common booking, payment, preparation, and client-account questions so clients can resolve routine issues quickly." />
      <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
        <div className="grid gap-4">
          {questions.map((question) => (
            <article key={question} className="peso-panel rounded-3xl p-6">
              <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl">{question}</h2>
              <p className="mt-3 text-sm leading-6 text-white/55">Final guidance will be published from approved PESO Beauty booking and service policies.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
