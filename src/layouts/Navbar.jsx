import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Pujas", to: "/services" },
  { label: "Reviews", to: "/reviews" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-luxe">
        <div
          className={`flex items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-6 ${
            scrolled ? "glass-luxe shadow-luxe" : "bg-transparent"
          }`}
        >
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-saffron text-primary-foreground shadow-gold">
              <span className="font-display text-lg leading-none">ॐ</span>
              <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/30" />
            </span>
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold tracking-tight text-foreground">
              <span className="text-gradient-gold"> PANDIT JI GREATER NOIDA</span>
              </div>
              <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Sacred · Verified · Vedic
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent/60 hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+918191836767"
              className="hidden items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:border-gold hover:text-saffron sm:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" />
              +91 8191836767
            </a>
            <Link
  to="/services#services"
  className="hidden items-center gap-2 rounded-full bg-gradient-saffron px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold transition hover:brightness-110 sm:inline-flex"
>
  Book Now
</Link>
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="mt-2 animate-rise-in rounded-2xl glass-luxe p-4 shadow-luxe lg:hidden">
            <nav className="flex flex-col">
              {NAV.map((n) => (
                <Link
                  key={n.label}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-accent"
                >
                  {n.label}
                </Link>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href="tel:+918191836767"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-3 py-3 text-sm font-medium"
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
              <Link
  to="/services#services"
  onClick={() => setOpen(false)}
  className="inline-flex items-center justify-center rounded-xl bg-gradient-saffron px-3 py-3 text-sm font-semibold text-primary-foreground"
>
  Book Now
</Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}