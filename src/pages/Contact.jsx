import React, { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send, Sparkles } from "lucide-react";
import mandala from "../assets/mandala.png";



export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="pt-28">
       <section className="relative overflow-hidden bg-ink py-16 text-cream md:py-24">
<img
  src={mandala}
  alt=""
  aria-hidden
  className="pointer-events-none absolute right-0 top-10 w-72 md:w-[36rem] opacity-15"
/>
        <div className="container-luxe relative max-w-4xl">
          <div className="eyebrow text-gold">Contact Us</div>
         <h1 className="mt-4 font-display text-4xl leading-tight md:text-7xl">
            Book Your Puja with<br />
            <span className="text-gradient-gold">Pandit Rishab Upadhyay.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/75">
Need a Pandit Ji for Griha Pravesh, Satyanarayan Katha,
Marriage, Rudrabhishek or any Vedic ritual?

Contact us today. We are available across Noida,
Greater Noida and Delhi NCR.          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-luxe grid gap-12 lg:grid-cols-[1.4fr_1fr]">
         <div className="w-full rounded-[2rem] border border-border bg-card p-8 shadow-luxe md:p-12">
            <div className="eyebrow">Booking Enquiry</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Send us a request</h2>
            {sent ? (
              <div className="mt-10 rounded-2xl border border-gold/30 bg-cream p-8 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-saffron text-primary-foreground">
                  <Sparkles className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl">धन्यवाद · Thank you</h3>
                <p className="mt-2 text-muted-foreground">
                  Our concierge will reach out within minutes.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="mt-8 space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your Name" name="name" placeholder="Anjali Mehra" required />
                  <Field label="Phone Number" name="phone" type="tel" placeholder="+91 81918 36767" required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" placeholder="you@example.com" />
                  <Field label="Puja Type" name="puja" placeholder="e.g. Griha Pravesh" />
                </div>
                <Field label="Preferred Date" name="date" type="date" />
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Tell us about your occasion
                  </label>
                  <textarea
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-base outline-none transition focus:border-saffron focus:ring-2 focus:ring-saffron/20"
                    placeholder="Family customs, venue, language preference…"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-saffron px-7 py-4 text-sm font-semibold text-primary-foreground shadow-gold transition hover:brightness-110 sm:w-auto"
                >
                  <Send className="h-4 w-4" /> Send Booking Request
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <ContactCard icon={<Phone className="h-5 w-5" />} title="Call our concierge" line="+91 81918 36767" sub="Available 24 hours · All days" href="tel:+918191836767" />
            <ContactCard icon={<MessageCircle className="h-5 w-5" />} title="WhatsApp" line="+91 81918 36767" sub="Quickest way to reach us" href="https://wa.me/918191836767" />
            <ContactCard icon={<Mail className="h-5 w-5" />} title="Email" line="panditrishabupadhyay@gmail.com" sub="Replies within 2 hours" href="panditrishabupadhyay@gmail.com" />
            <ContactCard icon={<MapPin className="h-5 w-5" />} title="Service Areas" line="Noida • Greater Noida • Delhi NCR" sub="Home Puja Service Available" href="#" />
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <iframe
                title="Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.358%2C28.616%2C77.396%2C28.638&layer=mapnik"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, ...rest }) {


  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        {...rest}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-base outline-none transition focus:border-saffron focus:ring-2 focus:ring-saffron/20"
      />
    </div>
  );
}

function ContactCard({ icon, title, line, sub, href }) {
  return (
    <a
      href={href}
      className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-gold hover:shadow-luxe"
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cream text-saffron transition group-hover:bg-gradient-saffron group-hover:text-primary-foreground">
        {icon}
      </span>

      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {title}
        </div>

        <div className="mt-1 truncate font-display text-lg text-foreground">
          {line}
        </div>

        <div className="mt-0.5 text-xs text-muted-foreground">
          {sub}
        </div>
      </div>
    </a>
  );
}