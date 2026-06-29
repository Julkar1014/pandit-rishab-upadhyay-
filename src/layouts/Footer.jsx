import { Link } from "react-router-dom";

import {
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";
export default function Footer() {
      return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-cream">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #FF7A00 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }}
      />

      <div className="container-luxe relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-saffron font-display text-xl text-primary-foreground shadow-gold">
                ॐ
              </span>
              <div>
                <div className="font-display text-2xl font-semibold">
                  PANDIT <span className="text-gradient-gold">RISHAB UPADHYAY</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-cream/60">
                  Sacred · Verified · Vedic
                </div>
              </div>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/70">
              India's most trusted premium platform to book verified, experienced Hindu
              pandits for every sacred occasion across Noida, Greater Noida & Delhi NCR.
            </p>
            <div className="mt-6 flex items-center gap-3">

  <a
    href="https://www.instagram.com/vedaachayra_rishabhupadhyay"
    target="_blank"
    rel="noopener noreferrer"
    className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/80 transition hover:border-gold hover:text-gold"
  >
    <FaInstagram className="h-4 w-4" />
  </a>

  <a
    href="https://wa.me/918191836767"
    target="_blank"
    rel="noopener noreferrer"
    className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/80 transition hover:border-gold hover:text-gold"
  >
    <MessageCircle className="h-4 w-4" />
  </a>

</div>
          </div>

          <FooterCol
            title="Sacred Services"
            items={[
              { label: "Satyanarayan Puja", slug: "satyanarayan" },
              { label: "Griha Pravesh", slug: "griha-pravesh" },
              { label: "Vivah Sanskar", slug: "vivah" },
              { label: "Rudrabhishek", slug: "rudrabhishek" },
              { label: "Navgraha Shanti", slug: "navgraha" },
            ]}
            type="puja"
          />
          <FooterCol
            title="Company"
            items={[
              { label: "About Us", to: "/about" },
              { label: "All Services", to: "/services" },
              { label: "Contact", to: "/contact"  },
              { label: "Privacy Policy", to: "/contact"  },
              { label: "Terms of Service", to: "/contact"  },
            ]}
            type="page"
          />

          <div>
            <div className="eyebrow text-gold">Reach Us</div>
            <ul className="mt-5 space-y-4 text-sm text-cream/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
<span>
  Noida • Greater Noida
  <br />
  Delhi NCR, India
</span>              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href="tel:+9181918 36767">+91 81918 36767</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
               <a href="mailto:panditrishabupadhyay@gmail.com">panditrishabupadhyay@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Pandit Rishab Upadhyay. All sacred rights reserved.</p>
          <p className="font-deva text-base text-gold/80">सर्वे भवन्तु सुखिनः</p>
        </div>
      </div>
    </footer>
  );
}


function FooterCol({ title, type, items }) {
  return (
    <div>
      <div className="eyebrow text-gold">{title}</div>

      <ul className="mt-5 space-y-3 text-sm text-cream/80">
        {type === "page"
          ? items.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))
          : items.map((l) => (
              <li key={l.label}>
                <Link
  to={`/services/${l.slug}`}
  className="transition hover:text-gold"
>
  {l.label}
</Link>
              </li>
            ))}
      </ul>
    </div>
  );
}