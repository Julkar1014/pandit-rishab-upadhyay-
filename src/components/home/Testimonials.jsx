import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../../admin/services/api";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await api.get("/reviews");

      const data = res.data.data.filter(
        (item) =>
          item.status === "Approved" ||
          item.status === "approved" ||
          item.status === 1 ||
          item.status === true
      );

      setReviews(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (reviews.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === reviews.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [reviews]);
    const nextReview = () => {
    setCurrent((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  const prevReview = () => {
    setCurrent((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-gradient-cream section">
      <div className="container-luxe">

        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">

          <div>

            <div className="eyebrow">
              Client Testimonials
            </div>

            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              Trusted by
              <span className="text-gradient-gold">
                {" "}Hundreds of Families.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Our clients trust us for authentic Vedic rituals,
              experienced Pandit Ji, punctual service, and complete
              peace of mind.
            </p>

          </div>

          <div className="flex items-center gap-2">

            <button
              onClick={prevReview}
              className="rounded-full border p-3 transition hover:bg-saffron hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={nextReview}
              className="rounded-full border p-3 transition hover:bg-saffron hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

          </div>

        </div>

        {reviews.length === 0 && (
          <div className="mt-10 text-center text-muted-foreground">
            No Reviews Found
          </div>
        )}
                <div className="mt-14 hidden lg:grid gap-8 lg:grid-cols-3">

          {reviews.map((r) => (

            <figure
              key={r.id}
              className="group flex h-full flex-col justify-between rounded-[2rem] border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-luxe"
            >

              <div>

                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold" />
                  ))}
                </div>

                <blockquote className="mt-5 font-display text-xl leading-snug">
                  “{r.review}”
                </blockquote>

              </div>

              <figcaption className="mt-8 flex items-center justify-between border-t border-border pt-5">

                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {r.location}
                  </div>
                </div>

                <span className="rounded-full bg-cream px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-saffron">
                  {r.puja_name}
                </span>

              </figcaption>

            </figure>

          ))}

        </div>

        {reviews.length > 0 && (

          <div className="mt-12 lg:hidden">

            <figure className="rounded-[2rem] border border-border bg-card p-7 shadow-sm">

              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold" />
                ))}
              </div>

              <blockquote className="mt-5 text-lg leading-8">
                “{reviews[current].review}”
              </blockquote>

              <figcaption className="mt-7 border-t border-border pt-5">

                <div className="font-semibold">
                  {reviews[current].name}
                </div>

                <div className="text-sm text-muted-foreground">
                  {reviews[current].location}
                </div>

                <div className="mt-2 inline-block rounded-full bg-cream px-3 py-1 text-xs font-semibold text-saffron">
                  {reviews[current].puja_name}
                </div>

              </figcaption>

            </figure>

          </div>

        )}

      </div>
    </section>
  );
}