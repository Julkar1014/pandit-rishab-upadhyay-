import {
  Award,
  BadgeCheck,
  Calendar,
  Flame,
  Heart,
  Sparkles,
  ArrowRight,
} from "lucide-react";

/* ============ WHY US ============ */
export default function WhyUs() {
      const items = [
    { title: "Verified Pandits", desc: "Every priest is background-checked, qualification-verified and personally interviewed.", icon: <BadgeCheck className="h-5 w-5" /> },
    { title: "Experienced Priests", desc: "10+ years of authentic Vedic practice. Multilingual & shastra-trained.", icon: <Award className="h-5 w-5" /> },
    { title: "Transparent Pricing", desc: "No hidden charges. Complete package with samagri quoted upfront.", icon: <Sparkles className="h-5 w-5" /> },
    { title: "Same-Day Booking", desc: "Last-minute muhurat? We have you covered with rapid concierge response.", icon: <Calendar className="h-5 w-5" /> },
    { title: "Dedicated Support", desc: "A real human concierge — not a chatbot — for every booking.", icon: <Heart className="h-5 w-5" /> },
    { title: "Authentic Rituals", desc: "Complete shastra-vidhi without abbreviation. Premium samagri included.", icon: <Flame className="h-5 w-5" /> },
  ];
  return (
    <section className="section">
      <div className="container-luxe">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
<div className="eyebrow">Why Pandit Rishab Upadhyay</div>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              The difference is in the <span className="text-gradient-gold">devotion.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              We exist for one purpose — to bring the sacred home with the dignity, precision
              and warmth your family deserves.
            </p>
            <a
              href="tel:+91 8191836767"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-saffron px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition hover:brightness-110"
            >
              Speak to a Concierge <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((it, i) => (
              <div
                key={it.title}
                className={`group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-luxe ${
                  i % 2 === 1 ? "sm:translate-y-8" : ""
                }`}
              >
                <div className="inline-grid h-12 w-12 place-items-center rounded-xl bg-cream text-saffron ring-gold transition group-hover:bg-gradient-saffron group-hover:text-primary-foreground">
                  {it.icon}
                </div>
                <h3 className="mt-5 font-display text-xl text-foreground">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}