import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Phone,
  Mail,
  User,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

import { getPuja } from "../data/pujas";




export default function BookPuja() {

  const { slug } = useParams();

  const puja = getPuja(slug);

  if (!puja) {
    return <Navigate to="/" replace />;
  }
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
const [address, setAddress] = useState("");
const [landmark, setLandmark] = useState("");
const [state, setState] = useState("");
const [pincode, setPincode] = useState("");
const [time, setTime] = useState("");
  const [requirements, setRequirements] = useState("");

  return (
    <div className="bg-background pt-28 pb-20">

      <div className="container-luxe">

      <Link
to={`/pujas/${puja.slug}`}
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-saffron"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Puja
        </Link>
                <div className="grid gap-10 lg:grid-cols-[380px_1fr]">

          {/* LEFT */}

          <div className="lg:sticky lg:top-28">

            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-luxe">

              <img
                src={puja.image}
                alt={puja.name}
                className="aspect-[4/3] w-full object-cover"
              />

              <div className="p-6">

                <span className="rounded-full bg-saffron/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-saffron">
                  {puja.category}
                </span>

                <h1 className="mt-4 font-display text-3xl">
                  {puja.name}
                </h1>

                <p className="mt-2 font-deva text-gold">
                  {puja.sanskrit}
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <h2 className="font-display text-5xl">
              Book Your Puja
            </h2>

            <p className="mt-4 max-w-2xl text-muted-foreground leading-8">
              Fill in your details below. Once you click
              <strong> Confirm Booking</strong>, WhatsApp will open with all
              your booking information ready to send.
            </p>

            <div className="mt-10 rounded-[2rem] border border-border bg-card p-8 shadow-sm">
                            <h3 className="mb-6 font-display text-3xl">
                Personal Details
              </h3>

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Full Name *
                  </label>

                  <div className="relative">

                    <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-14 w-full rounded-xl border border-border bg-background pl-12 pr-4 outline-none focus:border-saffron"
                    />

                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Mobile Number *
                  </label>

                  <div className="relative">

                    <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                   <input
  type="tel"
  placeholder="Enter mobile number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  required
  maxLength={10}
  inputMode="numeric"
  pattern="[6-9][0-9]{9}"
  className="h-14 w-full rounded-xl border border-border bg-background pl-12 pr-4 outline-none focus:border-saffron"
/>

                  </div>
                </div>
<div>

  <label className="mb-2 block text-sm font-medium">
    Preferred Time *
  </label>

  <select
    value={time}
    onChange={(e) => setTime(e.target.value)}
    className="h-14 w-full rounded-xl border border-border bg-background px-4 outline-none focus:border-saffron"
  >
    <option value="">Select Time</option>
    <option>Morning</option>
    <option>Afternoon</option>
    <option>Evening</option>
  </select>

</div>
                <div className="md:col-span-2">

                  <label className="mb-2 block text-sm font-medium">
                    Email (Optional)
                  </label>

                  <div className="relative">

                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                    <input
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-14 w-full rounded-xl border border-border bg-background pl-12 pr-4 outline-none focus:border-saffron"
                    />

                  </div>

                </div>

              </div>
                            <h3 className="mt-12 mb-6 font-display text-3xl">
                Puja Details
              </h3>

              <div className="grid gap-6">

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Preferred Date *
                  </label>

                  <div className="relative">

                    <Calendar className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                    <input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="h-14 w-full rounded-xl border border-border bg-background pl-12 pr-4 outline-none focus:border-saffron"
                    />

                  </div>

                </div>

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    City *
                  </label>

                  <div className="relative">

                    <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                    <input
                      type="text"
                      placeholder="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="h-14 w-full rounded-xl border border-border bg-background pl-12 pr-4 outline-none focus:border-saffron"
                    />

                  </div>

                </div>

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Full Address *
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Complete address..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background p-4 outline-none focus:border-saffron"
                  />

</div>
        <div>

  <label className="mb-2 block text-sm font-medium">
    Landmark (Optional)
  </label>

  <input
    type="text"
    placeholder="Nearby Landmark"
    value={landmark}
    onChange={(e) => setLandmark(e.target.value)}
    className="h-14 w-full rounded-xl border border-border bg-background px-4 outline-none focus:border-saffron"
  />

</div>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium">
      State *
    </label>

    <input
      type="text"
      placeholder="State"
      value={state}
      onChange={(e) => setState(e.target.value)}
      className="h-14 w-full rounded-xl border border-border bg-background px-4 outline-none focus:border-saffron"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium">
      Pincode *
    </label>

    <input
      type="text"
      placeholder="Pincode"
      maxLength={6}
      inputMode="numeric"
      value={pincode}
      onChange={(e) => setPincode(e.target.value)}
      className="h-14 w-full rounded-xl border border-border bg-background px-4 outline-none focus:border-saffron"
    />
  </div>

</div>

<label className="mb-2 block text-sm font-medium">
  Special Requirements
</label>

<div className="relative">

  <MessageSquare className="absolute left-4 top-5 h-5 w-5 text-muted-foreground" />

  <textarea
    rows={4}
    placeholder="Any special requirements..."
    value={requirements}
    onChange={(e) => setRequirements(e.target.value)}
    className="w-full rounded-xl border border-border bg-background pl-12 p-4 outline-none focus:border-saffron"
  />

</div>
            

              </div>
                            <div className="mt-10">

               <button
  onClick={() => {
    if (
  !name ||
  !phone ||
  !date ||
  !time ||
  !city ||
  !address ||
  !state ||
  !pincode
) {
      alert("Please fill all required fields.");
      return;
    }
if (!/^[6-9]\d{9}$/.test(phone)) {
  alert("Please enter a valid 10-digit mobile number.");
  return;
}
    const message = `🕉️ *New Puja Booking*

📿 *Puja:* ${puja.name}

👤 *Name:* ${name}

📞 *Mobile:* ${phone}

📧 *Email:* ${email || "Not Provided"}

📅 *Preferred Date:* ${date}

🕒 *Preferred Time:* ${time}

📍 *City:* ${city}

🏠 *Complete Address:*
${address}

📌 *Landmark:*
${landmark || "Not Provided"}

🌎 *State:*
${state}

📮 *Pincode:*
${pincode}

📝 *Special Requirements:*
${requirements || "None"}

Please confirm my booking.`;
   const whatsappNumber = "918191836767";

const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  message
)}`;

    window.open(url, "_blank");
  }}
  className="w-full rounded-full bg-gradient-saffron py-4 text-lg font-semibold text-white shadow-gold transition hover:scale-[1.02]"
>
  Confirm Booking on WhatsApp
</button>

                <p className="mt-4 text-center text-sm text-muted-foreground">
                  After clicking the button, WhatsApp will open with your
                  booking details ready to send.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}