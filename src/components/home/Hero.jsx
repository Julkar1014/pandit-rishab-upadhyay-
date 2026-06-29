import {
  ArrowRight,
  BadgeCheck,
  Flame,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import heroTemple from "../../assets/hero-temple.jpg";
import mandala from "../../assets/mandala.png";
/* ============ HERO ============ */
export default function Hero() {
      return (
    <section className="relative isolate overflow-hidden bg-ink pt-28 text-cream">
      <img
        src={heroTemple}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/85 via-ink/65 to-ink" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,122,0,0.45), transparent 60%)" }}
      />
      <img
        src={mandala}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 -z-10 h-[36rem] w-[36rem] animate-spin-slow opacity-20"
      />
      <img
        src={mandala}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[28rem] w-[28rem] animate-spin-slow opacity-10"
        style={{ animationDirection: "reverse" }}
      />

      <div className="container-luxe relative pb-28 pt-12 md:pb-36 md:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex animate-rise-in items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest text-gold backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            VERIFIED PANDIT • AUTHENTIC VEDIC RITUALS • TRUSTED SERVICE
          </div>

          <p className="mt-8 animate-rise-in font-deva text-2xl text-gold/90 md:text-3xl" style={{ animationDelay: "80ms" }}>
            ॐ श्री गणेशाय नमः
          </p>

          <h1
            className="mt-4 animate-rise-in font-display text-5xl leading-[1.02] md:text-7xl lg:text-[5.5rem]"
            style={{ animationDelay: "160ms" }}
          >
Bring Divine Blessings
            <span className="block text-gradient-gold">To Your Home</span>
          </h1>

          <p
            className="mx-auto mt-8 max-w-2xl animate-rise-in text-lg text-cream/75 md:text-xl"
            style={{ animationDelay: "240ms" }}
          >
Experience authentic Vedic rituals performed by highly experienced Pandit Ji with complete devotion, traditional procedures, and personalized guidance. Serving Noida, Greater Noida & Delhi NCR for every sacred occasion.          </p>

          <div
            className="mt-10 flex animate-rise-in flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "320ms" }}
          >
            <a
              href="tel:+91 8191836767"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-saffron px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition hover:brightness-110"
            >
              <Phone className="h-4 w-4" />
              Book Your Puja
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/918191836767"
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-cream backdrop-blur transition hover:border-gold hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <div
            className="mt-14 grid animate-rise-in grid-cols-2 gap-3 sm:grid-cols-4 md:gap-5"
            style={{ animationDelay: "400ms" }}
          >
            {[
              { icon: <Star className="h-4 w-4 fill-gold text-gold" />, label: "4.9 ★ Google", sub: "1,200+ reviews" },
              { icon: <Flame className="h-4 w-4 text-saffron" />, label: "5,000+ Pujas", sub: "Successfully completed" },
              { icon: <Users className="h-4 w-4 text-gold" />, label: "1,000+ Families", sub: "Across Delhi NCR" },
              { icon: <BadgeCheck className="h-4 w-4 text-gold" />, label: "100% Verified", sub: "Background checked" },
            ].map((b) => (
              <div key={b.label} className="rounded-2xl border border-cream/10 bg-white/5 p-4 backdrop-blur transition hover:border-gold/30">
                <div className="flex items-center justify-center gap-2 text-sm font-semibold text-cream">
                  {b.icon}
                  {b.label}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-cream/50">{b.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* floating decorative diya */}
      <div className="pointer-events-none absolute right-8 top-1/3 hidden animate-float-slow lg:block">
        <div className="h-24 w-24 rounded-full bg-gradient-to-br from-gold to-saffron opacity-30 blur-xl" />
      </div>
    </section>
  );
}