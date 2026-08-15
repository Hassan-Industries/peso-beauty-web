import { PageHero } from "@/components/ui/page-hero";

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Get in touch with PESO Beauty." description="Use the contact experience for general questions, service inquiries, booking support, and client assistance. Final contact channels and hours will be published before launch." />
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <div className="peso-panel rounded-3xl p-7">
          <p className="peso-eyebrow">Client Support</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl">Questions before you book?</h2>
          <p className="mt-4 text-sm leading-7 text-white/60">The final site will publish verified contact methods, response expectations, and appointment-support information here.</p>
          <div className="mt-7 space-y-3 text-sm text-white/55">
            <div className="rounded-2xl border border-white/10 p-4">General inquiries</div>
            <div className="rounded-2xl border border-white/10 p-4">Booking support</div>
            <div className="rounded-2xl border border-white/10 p-4">Policy questions</div>
          </div>
        </div>
        <form className="peso-panel rounded-3xl p-7" action="#">
          <p className="peso-eyebrow">Send a Message</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-white/65">Name<input type="text" className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-peso-pink/60" /></label>
            <label className="text-sm text-white/65">Email<input type="email" className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-peso-pink/60" /></label>
          </div>
          <label className="mt-4 block text-sm text-white/65">Subject<input type="text" className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-peso-pink/60" /></label>
          <label className="mt-4 block text-sm text-white/65">Message<textarea rows={6} className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-peso-pink/60" /></label>
          <button type="button" className="mt-5 rounded-full bg-peso-pink px-6 py-3 text-sm font-bold text-black transition hover:bg-peso-blush">Send Message</button>
        </form>
      </section>
    </>
  );
}
