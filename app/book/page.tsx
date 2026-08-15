import { PageHero } from "@/components/ui/page-hero";

const steps = ["Service", "Provider", "Date & Time", "Details", "Deposit", "Confirmation"];

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Online Booking"
        title="Book your PESO Beauty appointment."
        description="This foundation establishes the booking experience that will later connect directly to PESOOS availability, appointment records, policies, and Stripe deposits."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="peso-panel rounded-3xl p-6 sm:p-8">
            <div className="flex flex-wrap gap-2">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className={`rounded-full px-3 py-2 text-xs font-semibold ${
                    index === 0 ? "bg-peso-pink text-black" : "border border-white/10 text-white/45"
                  }`}
                >
                  {index + 1}. {step}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="peso-eyebrow">Step 01</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl">Select a service</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">
                Interactive booking controls will be introduced in the booking implementation phase. The layout and lifecycle are being established now so the integration can be added without redesigning the experience.
              </p>

              <div className="mt-7 grid gap-3">
                {["Signature Styling", "Protective Styling", "Specialty Services", "Consultation"].map((service, index) => (
                  <button
                    key={service}
                    type="button"
                    className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-4 text-left transition hover:border-peso-pink/40"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`h-3 w-3 rounded-full border ${index === 0 ? "border-peso-pink bg-peso-pink" : "border-white/35"}`} />
                      <span className="font-medium">{service}</span>
                    </span>
                    <span className="text-xs text-white/35">Select</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <aside className="peso-panel h-fit rounded-3xl p-6 lg:sticky lg:top-28">
            <p className="peso-eyebrow">Booking Summary</p>
            <div className="mt-5 space-y-4 text-sm">
              <div className="flex justify-between gap-4 border-b border-white/10 pb-3"><span className="text-white/45">Service</span><span>Not selected</span></div>
              <div className="flex justify-between gap-4 border-b border-white/10 pb-3"><span className="text-white/45">Provider</span><span>—</span></div>
              <div className="flex justify-between gap-4 border-b border-white/10 pb-3"><span className="text-white/45">Date</span><span>—</span></div>
              <div className="flex justify-between gap-4"><span className="text-white/45">Deposit</span><span>Calculated at checkout</span></div>
            </div>
            <button type="button" disabled className="mt-7 w-full rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white/35">
              Continue
            </button>
          </aside>
        </div>
      </section>
    </>
  );
}
