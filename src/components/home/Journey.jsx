
/* ============ JOURNEY ============ */
export default function Journey() {
     const steps = [
  {
    t: "Choose Your Puja",
    d: "Select the puja or ritual you want to perform."
  },
  {
    t: "Call or WhatsApp",
    d: "Share your preferred date, location, and requirements."
  },
  {
    t: "Confirm Booking",
    d: "We'll confirm the muhurat, booking, and all puja arrangements."
  },
  {
    t: "Pandit Ji Arrives",
    d: "Our experienced Pandit Ji performs the puja with complete Vedic rituals."
  },
];
  return (
    <section className="section">
      <div className="container-luxe">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow justify-center">How It Works</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl">
            Book Your Puja in
<span className="text-gradient-gold">4 Easy Steps. </span>
          </h2>
        </div>
<div className="relative mx-auto mt-16 max-w-6xl">
<div className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-gradient-to-r from-transparent via-gold to-transparent md:block" />
<div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
              {steps.map((s, i) => (
              <div key={s.t} className="text-center">
                <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-full border-2 border-gold/40 bg-card shadow-luxe">
                  <span className="font-display text-2xl text-gradient-gold">0{i + 1}</span>
                  <div className="absolute -inset-2 -z-10 rounded-full bg-gradient-saffron opacity-20 blur-md" />
                </div>
                <h3 className="mt-5 font-display text-lg">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}