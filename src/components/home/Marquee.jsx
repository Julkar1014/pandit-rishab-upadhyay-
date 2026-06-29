import { CheckCircle2 } from "lucide-react";
/* ============ MARQUEE ============ */
export default function Marquee() {
     const items = [
  "✓ Verified Vedic Pandit Ji",
  "✓ 15+ Years of Experience",
  "✓ Authentic Sanatan Rituals",
  "✓ Premium Puja Samagri Included",
  "✓ Same Day Booking Available",
  "✓ Muhurat Consultation",
  "✓ Noida • Greater Noida • Delhi NCR",
  "✓ WhatsApp Booking Support",
  "✓ Transparent Pricing",
  "✓ 100% Traditional Vedic Vidhi",
];
  return (
<div className="border-y border-gold/20 bg-gradient-to-r from-cream/40 via-background to-cream/40 py-5">      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee items-center gap-12 pr-12 whitespace-nowrap">
          {[...items, ...items].map((t, i) => (
            <span key={i} className="flex items-center gap-3 font-medium tracking-wide text-lg text-foreground/80">
              {t}
<CheckCircle2 className="h-4 w-4 text-gold" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
