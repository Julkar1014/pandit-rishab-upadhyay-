import { useEffect, useRef, useState } from "react";
import {
  Award,
  CheckCircle2,
  Clock,
  Flame,
} from "lucide-react";

/* ============ TRUST / COUNTERS ============ */
export default function Trust() {
     const items = [
  {
    value: 15,
    suffix: "+",
    label: "Years of Experience",
    icon: <Award className="h-5 w-5" />,
  },
  {
    value: 500,
    suffix: "+",
    label: "Pujas Performed",
    icon: <Flame className="h-5 w-5" />,
  },
  {
    value: 100,
    suffix: "%",
    label: "Traditional Vedic Rituals",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
  {
    value: 24,
    suffix: "/7",
    label: "Booking Assistance",
    icon: <Clock className="h-5 w-5" />,
  },
];
  return (
    <section className="section">
      <div className="container-luxe">
        <div className="grid divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card shadow-luxe md:grid-cols-4 md:divide-x md:divide-y-0">
          {items.map((it) => (
<div className="group p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-gradient-cream hover:shadow-luxe md:p-10"><div className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-saffron text-primary-foreground shadow-gold transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">                {it.icon}
              </div>
<div className="mt-6 font-display text-6xl tracking-tight text-foreground">                <Counter to={it.value} />
                <span className="text-gradient-gold">{it.suffix}</span>
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ to }) {
      const [val, setVal] = useState(0);
const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1600;
          const tick = (t) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{val.toLocaleString("en-IN")}</span>;
}
