import { Star } from "lucide-react";

/* ============ TESTIMONIALS ============ */
export default function Testimonials() {
      const reviews = [
    {
      name: "Amit & Neha Sharma",
      where: "Greater Noida West",
      text: "Our Griha Pravesh felt straight out of a sacred memory. Pandit ji explained every step, the samagri was pristine, and the concierge was responsive even at 11 PM the night before. Worth every rupee.",
      occ: "Griha Pravesh",
    },
    {
      name: "Rajesh Gupta",
      where: "Noida Extension",
      text: "Booked Satyanarayan Puja with three days' notice. The pandit was punctual, deeply knowledgeable, and the katha was narrated beautifully. My elderly mother kept saying it reminded her of her village.",
      occ: "Satyanarayan",
    },
    {
      name: "Pankaj Vermah",
      where: "South Delhi",
      text: "For my son's Mundan we wanted everything traditional. Pandit Rishab Upadhyay handled the muhurat, samagri, and even guided the barber. Premium experience without the chaos of arranging it ourselves.",
      occ: "Mundan Sanskar",
    },
  ];
  return (
    <section className="bg-gradient-cream section">
      <div className="container-luxe">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
<div className="eyebrow">Client Testimonials</div>
           <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
  Trusted by <span className="text-gradient-gold">Hundreds of Families.</span>
</h2>
<p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
  Our clients trust us for authentic Vedic rituals, experienced Pandit Ji,
  punctual service, and complete peace of mind. Here's what families across
  Noida, Greater Noida, and Delhi NCR have to say.
</p>
          </div>
          
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <div className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
  Verified Google Review
</div>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
4.9 Rating • Trusted by 500+ Families
          </div>
        </div>

<div className="mt-16 grid gap-8 lg:grid-cols-3">
            {reviews.map((r) => (
            <figure
              key={r.name}
className="group flex h-full flex-col justify-between rounded-[2rem] border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-luxe"            >
              <div>
<div className="flex items-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold" />
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-xl leading-snug text-foreground">
                  “{r.text}”
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center justify-between border-t border-border pt-5">
                <div>
                  <div className="font-semibold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.where}</div>
                </div>
                <span className="rounded-full bg-cream px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-saffron">
                  {r.occ}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


