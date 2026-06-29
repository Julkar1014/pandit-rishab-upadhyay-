import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  Star,
 
  Phone,
  MessageCircle,
} from "lucide-react";

import { getPuja, PUJAS } from "../data/pujas";

export default function PujaDetails() {
  const { slug } = useParams();

  const puja = getPuja(slug);

  if (!puja) {
    return <Navigate to="/" replace />;
  }

  const related = PUJAS.filter(
    (p) => p.slug !== puja.slug
  ).slice(0, 3);
  return (
    <div className="bg-background pt-28 pb-20">

      <div className="container-luxe">

        <Link
          to="/services"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-saffron"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 items-center">
                    {/* LEFT */}

          <div>

            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">

              <img
                src={puja.image}
                alt={puja.name}
                className="aspect-[4/3] w-full object-cover"
              />

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <span className="inline-flex rounded-full bg-saffron/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-saffron">
              {puja.category}
            </span>

            <h1 className="mt-5 font-display text-4xl md:text-5xl">
              {puja.name}
            </h1>

            <p className="mt-2 font-deva text-xl text-gold">
              {puja.sanskrit}
            </p>

            <div className="mt-6 flex items-center gap-2">

              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

              <span className="font-medium">
                4.9
              </span>

              <span className="text-muted-foreground">
                (250+ Reviews)
              </span>

            </div>

<div className="mt-8 space-y-5">
               

             
              <div className="grid gap-4 sm:grid-cols-2">

              <Link
to={`/book-puja/${puja.slug}`}
  className="inline-flex items-center justify-center rounded-full bg-gradient-saffron px-7 py-4 text-base font-semibold text-white shadow-gold transition hover:scale-[1.02]"
>
  Book Now
</Link>

                <a
                  href="tel:+918191836767"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-4 font-semibold transition hover:border-saffron"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>

                <a
                  href="https://wa.me/918191836767"
                  target="_blank"
                  rel="noreferrer"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full border border-green-500 bg-green-50 px-7 py-4 font-semibold text-green-700 transition hover:bg-green-100"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
</div>   {/* grid buttons */}

</div>   {/* right */}

</div>   {/* lg:grid-cols-2 */}

</div>   {/* container-luxe */}

</div>   {/* main wrapper */}

{/* ABOUT PUJA */}            {/* ABOUT PUJA */}

      <section className="py-20">

        <div className="container-luxe">

          <div className="mb-10">

            <h2 className="font-display text-4xl">
              About Puja
            </h2>

            <div className="mt-2 h-1 w-20 rounded-full bg-gradient-saffron" />

          </div>

          <div className="grid gap-10 lg:grid-cols-2 items-center">

            <div>

              <img
                src={puja.image}
                alt={puja.name}
                className="rounded-[2rem] object-cover shadow-luxe"
              />

            </div>

            <div>

              <p className="text-lg leading-9 text-muted-foreground">
                {puja.intro}
              </p>

              <p className="mt-6 leading-8 text-muted-foreground">
                {puja.importance}
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* BENEFITS */}

      <section className="bg-muted/30 py-20">

        <div className="container-luxe">

          <div className="mb-10">

            <h2 className="font-display text-4xl">
              Benefits
            </h2>

            <div className="mt-2 h-1 w-20 rounded-full bg-gradient-saffron" />

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {puja.benefits.map((benefit) => (

              <div
                key={benefit}
                className="rounded-[1.7rem] border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-luxe"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-saffron text-white">

                  ✓

                </div>

                <p className="mt-6 text-base leading-7">
                  {benefit}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
            
          
            {/* RELATED PUJAS */}

      <section className="py-20">

        <div className="container-luxe">

          <div className="mb-10">

            <h2 className="font-display text-4xl">
              Related Pujas
            </h2>

            <div className="mt-2 h-1 w-20 rounded-full bg-gradient-saffron" />

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {related.map((item)=>(

              <Link
  key={item.slug}
  to={`/pujas/${item.slug}`}
  className="overflow-hidden rounded-[2rem] border border-border bg-card transition hover:-translate-y-1 hover:shadow-luxe"
>

                <img
                  src={item.image}
                  alt={item.name}
                  className="aspect-[4/3] w-full object-cover"
                />

                <div className="p-6">

                  <h3 className="font-display text-2xl">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    {item.tagline}
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </div>

  );
}