import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import api from "../admin/services/api";
import mandala from "../assets/mandala.png";

export default function Services() {
  const navigate = useNavigate();

  const [pujas, setPujas] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetchPujas();
  }, []);

  const fetchPujas = async () => {
    try {
      const res = await api.get("/pujas");

      const API_URL = "https://darkorchid-curlew-311953.hostingersite.com";

const data = res.data.data.map((p) => ({
  ...p,
  image: p.image
    ? `${API_URL}${p.image}`
    : "/placeholder.jpg",
}));

      setPujas(data);
    } catch (err) {
      console.log(err);
    }
  };

  const categories = [
    "All",
    ...Array.from(new Set(pujas.map((p) => p.category))),
  ];

  const filteredPujas = useMemo(() => {
    return pujas.filter((p) => {
      const matchCategory =
        activeCategory === "All" ||
        p.category === activeCategory;

      const matchSearch =
        (p.name || "")
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        (p.tagline || "")
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [pujas, search, activeCategory]);

  return (
    <div className="pt-28">

      <section className="relative overflow-hidden bg-ink py-14 md:py-28 text-cream">

        <img
          src={mandala}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -right-40 top-10 h-[36rem] w-[36rem] animate-spin-slow opacity-10"
        />

        <div className="container-luxe relative">

          <div className="mx-auto max-w-4xl text-center">

            <div className="eyebrow justify-center text-gold">
              Sacred Services
            </div>

            <h1 className="mt-3 font-display text-[42px] leading-none sm:text-5xl md:text-7xl">
              Book Your
              <br />
              <span className="text-gradient-gold">
                Sacred Puja
              </span>
            </h1>

            <div className="relative mx-auto mt-6 w-full max-w-xl px-4 sm:px-0">

              <Search className="absolute left-4 sm:left-5 top-1/2 h-4 w-4 sm:h-5 sm:w-5 -translate-y-1/2 text-cream/50" />

              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-11 sm:h-14 w-full rounded-full border border-gold/20 bg-white/5 pl-12 sm:pl-14 pr-4 sm:pr-6 text-sm text-white outline-none backdrop-blur placeholder:text-cream/40 focus:border-gold"
              />

            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-2 px-4">

              {categories.slice(0, 6).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition ${
                    activeCategory === cat
                      ? "bg-gradient-saffron text-white shadow-gold"
                      : "border border-cream/15 bg-white/5 text-cream/80 hover:border-gold"
                  }`}
                >
                  {cat}
                </button>
              ))}

            </div>

          </div>

        </div>

      </section>
            <section className="py-10 bg-background">

        <div className="container-luxe">

          <div className="flex items-center justify-between mb-8">

            <div>

              <p className="eyebrow text-gold">
                Most Booked
              </p>

              <h2 className="font-display text-4xl">
                Popular Pujas
              </h2>

            </div>

          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">

            {pujas
              .filter(
                (p) =>
                  p.popular === 1 ||
                  p.popular === true ||
                  p.popular === "1"
              )
              .map((p) => (

                <Link
                  key={p.id}
                  to={`/pujas/${p.id}`}
                  className="group min-w-[88px] md:min-w-[150px] flex-shrink-0 text-center snap-start"
                >

                  <div className="mx-auto h-16 w-16 md:h-28 md:w-28 overflow-hidden rounded-full border-2 md:border-4 border-gold/20 transition duration-300 group-hover:border-gold">

                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />

                  </div>

                  <h3 className="mt-2 text-[11px] leading-4 font-medium md:mt-4 md:text-sm md:leading-6">
                    {p.name}
                  </h3>

                </Link>

              ))}

          </div>

        </div>

      </section>

      <section className="pt-0 pb-16">

        <div className="container-luxe">

          <div className="mb-12 text-center">

            <p className="eyebrow justify-center text-gold">
              Explore Sacred Rituals
            </p>

            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Find the Perfect
              <span className="text-gradient-gold">
                {" "}
                Puja for Every Occasion
              </span>
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {filteredPujas.map((p) => (

              <div
                key={p.id}
                className="group overflow-hidden rounded-[2rem] bg-gradient-to-b from-white to-cream/30 border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-gold/30 hover:shadow-luxe"
              >

                <Link to={`/pujas/${p.id}`}>

                  <div className="relative aspect-[4/3] overflow-hidden">

                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                    <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-saffron">
                      {p.category}
                    </span>

                  </div>

                </Link>

                <div className="flex flex-1 flex-col p-7">

                  <Link to={`/pujas/${p.id}`}>

                    <h3 className="font-display text-2xl leading-tight transition group-hover:text-saffron">
                      {p.name}
                    </h3>

                    <p className="mt-1 font-deva text-base text-gold">
                      {p.sanskrit}
                    </p>

                    <p className="mt-4 flex-1 line-clamp-3 text-sm leading-7 text-muted-foreground">
                      {p.tagline}
                    </p>

                  </Link>

                  <div className="mt-7 border-t border-gold/10 pt-6">

                    <button
                      onClick={() => navigate(`/book-puja/${p.id}`)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-saffron px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-gold"
                    >
                      Book Puja
                      <ArrowRight className="h-4 w-4" />
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
            <section className="section pt-0">

        <div className="container-luxe">

          {filteredPujas.length === 0 && (

            <div className="col-span-full rounded-[2rem] border border-dashed border-gold/20 py-20 text-center">

              <h3 className="font-display text-3xl text-foreground">
                No Puja Found
              </h3>

              <p className="mt-4 text-muted-foreground">
                Try searching with another keyword or choose a different category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-8 rounded-full bg-gradient-saffron px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:shadow-gold"
              >
                View All Pujas
              </button>

            </div>

          )}

        </div>

      </section>

      <section className="relative overflow-hidden bg-ink py-24 text-center text-cream">

        <img
          src={mandala}
          alt=""
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 opacity-10"
        />

        <div className="container-luxe relative">

          <div className="eyebrow justify-center text-gold">
            Need Help?
          </div>

          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Need Guidance for the Right Puja?
            <span className="text-gradient-gold">
              {" "}
              Puja You Need?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/70">
            Talk directly with our experienced Pandit Ji and get free guidance
            before booking your puja.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="tel:+918191836767"
              className="rounded-full bg-gradient-saffron px-8 py-4 font-semibold text-primary-foreground shadow-gold transition hover:scale-105"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/918191836767"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gold px-8 py-4 font-semibold text-gold transition hover:bg-gold hover:text-ink"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}