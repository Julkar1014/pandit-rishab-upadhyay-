import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PUJAS } from "../../data/pujas";

export default function Services() {
      const featured = PUJAS.slice(0, 6);
  return (
    <section className="bg-gradient-cream section">
      <div className="container-luxe">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <div className="eyebrow">Sacred Services</div>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              Every ritual,<br />
              <span className="text-gradient-gold">performed with grace.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
  Discover authentic Vedic ceremonies performed with complete devotion,
  traditional rituals, and personalized guidance by experienced Pandit Ji.
  From Griha Pravesh to Vivah Sanskar, every puja is conducted with
  precision, purity, and spiritual excellence.
</p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-gold"
          >
            All Pujas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              to={`/pujas/${p.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-luxe"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute left-3 top-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2">
  <span className="text-xs font-medium tracking-wide text-white">
    {p.category}
  </span>
</div>
                
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl leading-tight text-foreground">
                  {p.name}
                </h3>
                <p className="mt-1 font-deva text-base text-gold">{p.sanskrit}</p>
<p className="mt-4 line-clamp-3 text-[15px] leading-7 text-muted-foreground">
  {p.tagline}
</p>               <div className="mt-8 border-t border-gold/10 pt-6">
  <span className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-saffron px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-gold">
    Book Puja
    <ArrowRight className="h-4 w-4" />
  </span>
</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}