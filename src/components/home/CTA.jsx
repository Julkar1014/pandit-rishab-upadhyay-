import {
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";

import heroTemple from "../../assets/hero-temple.jpg";
import mandala from "../../assets/mandala.png";

/* ============ CTA ============ */
export default function CTA() {
      return (
    <section className="section">
      <div className="container-luxe">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink p-10 text-cream shadow-luxe md:p-20">
          <img src={heroTemple} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent" />
          <img src={mandala} alt="" aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-[36rem] w-[36rem] animate-spin-slow opacity-20" />
          <div className="relative max-w-xl">
            <div className="eyebrow text-gold">Reserve your sacred moment</div>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
              Let us bring the <span className="text-gradient-gold">divine</span> to your doorstep.
            </h2>
            <p className="mt-6 text-lg text-cream/75">
              From an intimate Satyanarayan katha to a full Vedic wedding —
              every detail handled with reverence and grace.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="tel:+91 8191836767"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-saffron px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition hover:brightness-110"
              >
                <Phone className="h-4 w-4" /> Call +91 81918 36767
              </a>
              <a
                href="https://wa.me/91 8191836767"
                className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-cream backdrop-blur transition hover:border-gold"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Concierge
              </a>
            </div>
            <div className="mt-8 flex items-center gap-2 text-xs text-cream/60">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              Serving Noida · Greater Noida · Delhi · Gurugram · Ghaziabad · Faridabad
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
