import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ============ FAQ ============ */
export default function FAQ() {
      const items = [
    { q: "Which areas do you serve?", a: "We serve Noida, Greater Noida, Greater Noida West, Ghaziabad, Delhi, Gurugram and Faridabad — the entire Delhi NCR region." },
    { q: "Is samagri included in the price?", a: "Yes. A premium, sanctified samagri kit appropriate for the chosen puja is included in every booking — no last-minute shopping for you." },
    { q: "How do I confirm muhurat?", a: "Our concierge takes your event date, your birth nakshatra (if relevant), and recommends the most auspicious muhurat at no extra charge." },
    { q: "Can the puja be performed in English?", a: "Mantras are always chanted in Sanskrit. Our pandits explain procedure, meaning and katha in Hindi, English, or your preferred language." },
    { q: "What if I need to reschedule?", a: "No problem — reschedule once free of charge up to 24 hours before the muhurat. We understand sacred moments are personal." },
    { q: "Are your pandits vegetarian?", a: "Yes, every pandit on our roster is a lifelong vegetarian and follows the daily nityakarma per the tradition." },
  ];
  function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="overflow-hidden rounded-2xl border border-border bg-card px-6 shadow-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left font-display text-lg"
      >
        <span>{question}</span>

        <ChevronDown
          size={20}
          style={{
            transition: "0.3s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {open && (
        <div className="pb-5 text-base text-muted-foreground">
          {answer}
        </div>
      )}
    </div>
  );
}
  return (
    <section className="bg-gradient-cream section">
      <div className="container-luxe grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="eyebrow">Frequently Asked</div>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
            Questions, <span className="text-gradient-gold">answered.</span>
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Still curious? Our concierge is available around the clock to walk you through
            every detail of your booking.
          </p>
        </div>
        <div className="space-y-3">
  {items.map((f, i) => (
    <FAQItem key={i} question={f.q} answer={f.a} />
  ))}
</div>
      </div>
    </section>
  );
}
