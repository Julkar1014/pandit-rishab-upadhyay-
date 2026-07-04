import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CalendarDays,
  HeartHandshake,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import pandit1 from "../assets/pandit-1.jpg";
import mandala from "../assets/mandala.png";

export default function About() {
  return (
    <div className="pt-28">

      {/* HERO */}

      <section className="relative overflow-hidden bg-ink py-20 md:py-28 text-cream">

        <img
          src={mandala}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -right-48 top-0 h-[42rem] w-[42rem] opacity-10 animate-spin-slow"
        />

        <div className="container-luxe relative">
                    <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            {/* LEFT */}

            <div>

              <div className="eyebrow text-gold">
                About Pandit Rishabh Upadhyay
              </div>

              <h1 className="mt-5 font-display text-5xl leading-tight md:text-7xl">
                Bringing
                <span className="text-gradient-gold">
                  {" "}Sacred Traditions
                </span>
                <br />
                To Every Home
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-cream/75">
                Pandit Rishabh Upadhyay provides trusted Vedic Pandit Ji for all Hindu
                rituals including Griha Pravesh, Satyanarayan Katha,
                Rudrabhishek, Marriage, Havan and many more across Noida,
                Greater Noida & Delhi NCR.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-saffron px-8 py-4 font-semibold text-white shadow-gold transition hover:scale-[1.03]"
                >
                  Book Puja
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <a
                  href="tel:+918191836767"
                  className="rounded-full border border-gold px-8 py-4 font-semibold text-gold transition hover:bg-gold hover:text-ink"
                >
                  Call Now
                </a>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-saffron opacity-20 blur-3xl" />

              <img
                src={pandit1}
                alt="Pandit Ji"
                className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-luxe"
              />

            </div>

          </div>

        </div>

      </section>
            {/* OUR STORY */}

      <section className="py-20">

        <div className="container-luxe">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>

              <img
                src={pandit1}
                alt="About VHI Pandit"
                className="rounded-[2rem] object-cover shadow-luxe"
              />

            </div>

            <div>

              <div className="eyebrow text-gold">
                Our Story
              </div>

              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                Rooted in
                <span className="text-gradient-gold">
                  {" "}Faith & Tradition
                </span>
              </h2>

              <p className="mt-8 leading-8 text-muted-foreground">
              Pandit Rishabh Upadhyay is dedicated to making authentic Vedic rituals easily accessible for every Hindu family. Whether it's a Griha Pravesh, Marriage, Satyanarayan Katha or any sacred ceremony, every ritual is performed with complete devotion and according to the Vedic scriptures.
              </p>

              <p className="mt-6 leading-8 text-muted-foreground">
                Our goal is not just to complete a Puja, but to create a
                peaceful spiritual experience for your family with punctual
                service, proper guidance and complete dedication.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">

                <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">

                  <ShieldCheck className="h-8 w-8 text-saffron" />

                  <div>

                    <h4 className="font-semibold">
                      Verified Pandit Ji
                    </h4>

                    <p className="text-sm text-muted-foreground">
                      Experienced & Trusted
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">

                  <HeartHandshake className="h-8 w-8 text-saffron" />

                  <div>

                    <h4 className="font-semibold">
                      Customer First
                    </h4>

                    <p className="text-sm text-muted-foreground">
                      Dedicated Support
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* WHY CHOOSE US */}

      <section className="bg-muted/30 py-20">

        <div className="container-luxe">

          <div className="mx-auto max-w-3xl text-center">

            <div className="eyebrow justify-center text-gold">
              Why Choose Us
            </div>

            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Why Thousands of Families
              <span className="text-gradient-gold">
                {" "}TrustPandit Rishabh Upadhyay
              </span>
            </h2>

            <p className="mt-6 text-muted-foreground">
              We believe every Puja should be peaceful, authentic and
              spiritually fulfilling.
            </p>

          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: <BadgeCheck />,
                title: "Verified Pandit Ji",
                desc: "Experienced Vedic Pandits with years of expertise.",
              },
              {
                icon: <CalendarDays />,
                title: "On-Time Service",
                desc: "Always punctual for every booking.",
              },
              {
                icon: <ShieldCheck />,
                title: "Authentic Rituals",
                desc: "Complete Puja according to Vedic traditions.",
              },
              {
                icon: <HeartHandshake />,
                title: "Friendly Support",
                desc: "Quick assistance before and after booking.",
              },
              {
                icon: <MapPin />,
                title: "Delhi NCR Coverage",
                desc: "Available across Noida, Greater Noida & Delhi.",
              },
              {
                icon: <Award />,
                title: "Premium Experience",
                desc: "Professional service with complete guidance.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-[2rem] border border-border bg-card p-8 transition hover:-translate-y-2 hover:shadow-luxe"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-saffron text-white">
                  {item.icon}
                </div>

                <h3 className="mt-6 font-display text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
            {/* MEET YOUR PANDIT */}

      <section className="py-20">

        <div className="container-luxe">

          <div className="grid gap-14 lg:grid-cols-[420px_1fr] lg:items-center">

            <div>

              <img
                src={pandit1}
                alt="Pandit Ji"
                className="rounded-[2rem] object-cover shadow-luxe"
              />

            </div>

            <div>

              <div className="eyebrow text-gold">
                Meet Your Pandit Ji
              </div>

              <h2 className="mt-4 font-display text-5xl">
               Pandit
                <span className="text-gradient-gold">
                  {" "}Rishabh Upadhyay
                </span>
              </h2>

              <p className="mt-7 leading-8 text-muted-foreground">
                Pandit Rishabh Upadhyay has years of experience in performing all major Hindu rituals with complete devotion, proper Vedic traditions and spiritual guidance across Noida, Greater Noida and Delhi NCR.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                {[
                  "Satyanarayan Katha",
                  "Griha Pravesh",
                  "Marriage Puja",
                  "Rudrabhishek",
                  "Pitru Dosh Puja",
                  "Kaal Sarp Puja",
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-xl border border-border bg-card px-5 py-4"
                  >
                    ✅ {item}
                  </div>

                ))}

              </div>

              <Link
                to="/services"
                className="mt-10 inline-flex rounded-full bg-gradient-saffron px-8 py-4 font-semibold text-white shadow-gold transition hover:scale-[1.03]"
              >
                Book Your Puja
              </Link>

            </div>

          </div>

        </div>

      </section>
            {/* HOW BOOKING WORKS */}

      <section className="bg-muted/30 py-20">

        <div className="container-luxe">

          <div className="mx-auto max-w-3xl text-center">

            <div className="eyebrow justify-center text-gold">
              Booking Process
            </div>

            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              How It Works
            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">

            {[
              "Choose Puja",
              "Book Online",
              "Confirmation Call",
              "Pandit Visits",
            ].map((step, index) => (

              <div
                key={step}
                className="relative rounded-[2rem] border border-border bg-card p-8 text-center shadow-sm"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-saffron text-2xl font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="mt-6 font-display text-2xl">
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>
         
            {/* FINAL CTA */}

      <section className="relative overflow-hidden bg-ink py-24 text-cream">

        <img
          src={mandala}
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 opacity-10"
        />

        <div className="container-luxe relative text-center">

          <div className="eyebrow justify-center text-gold">
            Book Your Puja Today
          </div>

          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Book Your Puja
            <span className="text-gradient-gold">
              {" "}with Pandit Rishabh Upadhyay
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cream/75">
            Let our experienced Pandit Ji perform your sacred ceremony with
            complete devotion, proper Vedic rituals and spiritual guidance.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              to="/services"
              className="rounded-full bg-gradient-saffron px-8 py-4 font-semibold text-white shadow-gold transition hover:scale-[1.03]"
            >
              Book Puja
            </Link>

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