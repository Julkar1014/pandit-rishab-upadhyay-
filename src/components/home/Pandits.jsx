import {
  Star,
  MapPin,
} from "lucide-react";

import pandit1 from "../../assets/pandit-1.jpg";

/* ============ PANDITS ============ */
export default function Pandits() {
  const list = [
    {
      name: "Pandit Rishab upadhyay",
      exp: "8+ Years",
      lang: "Hindi • Sanskrit",
      spec: "Vivah • Griha Pravesh • Rudrabhishek • Satyanarayan",
      pujas: 500,
      rating: 5.0,
      image: pandit1,
    },
  ];

  
  return (
    <section id="pandits" className="bg-ink section text-cream">
      <div className="container-luxe">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow justify-center text-gold">Meet Your Pandit Ji</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl">
            Hands that have <span className="text-gradient-gold">held the sacred fire.</span>
          </h2>
          <p className="mt-6 text-cream/70">
            Every pandit on our platform is personally vetted by our acharya council —
            for shastra knowledge, ritual purity, and quiet devotion.
          </p>
        </div>

<div className="mt-16">
            {list.map((p, i) => (
            <div
              key={p.name}
             className="group overflow-hidden rounded-[2rem] border border-cream/10 bg-white/[0.04] backdrop-blur transition-all duration-500 hover:border-gold/40 hover:shadow-luxe lg:flex"
            >
<div className="relative overflow-hidden lg:w-[38%]">
                  <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 lg:min-h-[520px]"                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-foreground">
                  <Star className="h-3 w-3 fill-saffron text-saffron" /> {p.rating}
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-display text-2xl leading-tight">{p.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-gold">{p.exp} experience</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-8 lg:p-12">
                <div>
  <div className="inline-flex items-center rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-sm font-medium text-gold">
Verified Sanatan Vedic Pandit
  </div>

  <h3 className="mt-6 font-display text-4xl text-cream">
    {p.name}
  </h3>

  <p className="mt-3 text-lg text-gold">
    {p.exp} Experience
  </p>

  <p className="mt-6 max-w-xl text-lg leading-8 text-cream/70">
  Pandit Rishabh Upadhyay has over 8 years of experience in performing authentic Vedic rituals across Noida, Greater Noida, and Delhi NCR. Every ceremony is conducted with complete devotion, proper vidhi, and personalized guidance for your family's peace and prosperity.
</p>
</div>
<div className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
Professional Details
</div>
               <Row label="Languages" value={p.lang} />
<Row label="Service Area" value="Noida • Greater Noida • Delhi NCR" />
<Row label="Experience" value={p.exp} />
<Row label="Pujas Performed" value={`${p.pujas}+`} />
              <div className="mt-10 flex flex-wrap gap-4">
  <a
    href="tel:+918191836767"
    className="rounded-full bg-gradient-saffron px-8 py-4 font-semibold text-white transition hover:scale-105"
  >
    📞 Call Now
  </a>

  <a
    href="https://wa.me/918191836767"
    className="rounded-full border border-gold/30 px-8 py-4 font-semibold text-gold transition hover:bg-gold/10"
  >
    💬 WhatsApp
  </a>
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-cream/10 pb-3 last:border-0 last:pb-0">
      <span className="text-[10px] uppercase tracking-widest text-cream/50">
        {label}
      </span>
      <span className="max-w-[60%] text-right text-cream/90">
        {value}
      </span>
    </div>
  );
}