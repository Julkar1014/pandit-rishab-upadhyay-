import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  User,
  MessageSquare,
} from "lucide-react";
import { useEffect, useState } from "react";
import api from "../admin/services/api";

export default function BookPuja() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [puja, setPuja] = useState(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [requirements, setRequirements] = useState("");

  useEffect(() => {
    fetchPuja();
  }, [id]);

  const fetchPuja = async () => {
    try {
      const res = await api.get("/pujas");

      const found = res.data.data.find(
        (item) => item.id.toString() === id
      );

      if (!found) {
        setLoading(false);
        return;
      }

      setPuja({
  ...found,
  image: found.image
    ? `https://darkorchid-curlew-311953.hostingersite.com${found.image}`
    : "/placeholder.jpg",
});
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-32 text-center text-2xl">
        Loading...
      </div>
    );
  }

  if (!puja) {
    return <Navigate to="/services" replace />;
  }
    const handleBooking = async (e) => {
    e.preventDefault();

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

    try {
      setSubmitting(true);

      await api.post("/bookings", {
        puja_name: puja.name,
        customer_name: name,
        phone,
        email,
        booking_date: date,
        booking_time: time,
        city,
        address,
        landmark,
        state,
        pincode,
        requirements,
      });

      const message = `
🕉️ *New Puja Booking*

📿 Puja : ${puja.name}

👤 Name : ${name}

📞 Phone : ${phone}

📧 Email : ${email}

📅 Date : ${date}

🕐 Time : ${time}

🏙️ City : ${city}

📍 Address : ${address}

📌 Landmark : ${landmark}

🗺️ State : ${state}

📮 Pincode : ${pincode}

📝 Requirements :
${requirements}
`;

      window.location.href =
        `https://wa.me/918191836767?text=${encodeURIComponent(message)}`;

    } catch (err) {
      console.log(err);
      alert("Booking Failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-background pt-28 pb-20">

      <div className="container-luxe">

        <Link
          to={`/pujas/${puja.id}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-saffron"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[380px_1fr]">
                  {/* LEFT */}

          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">

            <img
              src={puja.image}
              alt={puja.name}
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />

            <span className="mt-6 inline-flex rounded-full bg-saffron/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-saffron">
              {puja.category}
            </span>

            <h2 className="mt-4 font-display text-3xl">
              {puja.name}
            </h2>

            <p className="mt-3 text-muted-foreground leading-7">
              {puja.tagline}
            </p>

          </div>

          {/* RIGHT */}

          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">

            <h2 className="font-display text-4xl">
              Book This Puja
            </h2>

            <p className="mt-3 text-muted-foreground">
              Fill your details and continue on WhatsApp.
            </p>

            <form
              onSubmit={handleBooking}
              className="mt-8 space-y-5"
            >

              <div className="grid gap-5 md:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Full Name
                  </label>

                  <div className="relative">

                    <User className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />

                    <input
                      type="text"
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                      className="w-full rounded-xl border border-border pl-12 pr-4 py-3 outline-none focus:border-saffron"
                      placeholder="Your Name"
                    />

                  </div>

                </div>

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Phone Number
                  </label>

                  <div className="relative">

                    <Phone className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />

                    <input
                      type="tel"
                      value={phone}
                      onChange={(e)=>setPhone(e.target.value)}
                      className="w-full rounded-xl border border-border pl-12 pr-4 py-3 outline-none focus:border-saffron"
                      placeholder="9876543210"
                    />

                  </div>

                </div>

              </div>
                            <div className="grid gap-5 md:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Email
                  </label>

                  <div className="relative">

                    <Mail className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@gmail.com"
                      className="w-full rounded-xl border border-border pl-12 pr-4 py-3 outline-none focus:border-saffron"
                    />

                  </div>

                </div>

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    City
                  </label>

                  <div className="relative">

                    <MapPin className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />

                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Greater Noida"
                      className="w-full rounded-xl border border-border pl-12 pr-4 py-3 outline-none focus:border-saffron"
                    />

                  </div>

                </div>

              </div>

              <div className="grid gap-5 md:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Booking Date
                  </label>

                  <div className="relative">

                    <Calendar className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />

                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-xl border border-border pl-12 pr-4 py-3 outline-none focus:border-saffron"
                    />

                  </div>

                </div>

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Booking Time
                  </label>

                  <div className="relative">

                    <Clock className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />

                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full rounded-xl border border-border pl-12 pr-4 py-3 outline-none focus:border-saffron"
                    />

                  </div>

                </div>

              </div>

              <div>

                <label className="mb-2 block text-sm font-medium">
                  Full Address
                </label>

                <textarea
                  rows={3}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter Full Address"
                  className="w-full rounded-xl border border-border p-4 outline-none focus:border-saffron"
                />

              </div>

              <div className="grid gap-5 md:grid-cols-2">

                <input
                  type="text"
                  placeholder="Landmark"
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                  className="rounded-xl border border-border px-4 py-3 outline-none focus:border-saffron"
                />

                <input
                  type="text"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="rounded-xl border border-border px-4 py-3 outline-none focus:border-saffron"
                />

              </div>

              <input
                type="text"
                placeholder="Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-saffron"
              />

              <div>

                <label className="mb-2 block text-sm font-medium">
                  Special Requirements
                </label>

                <div className="relative">

                  <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />

                  <textarea
                    rows={5}
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    placeholder="Any special requirements..."
                    className="w-full rounded-xl border border-border pl-12 pr-4 py-3 outline-none focus:border-saffron"
                  />

                </div>

              </div>
                            <button
                type="submit"
                disabled={submitting}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-saffron px-8 py-4 text-lg font-semibold text-white shadow-gold transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting
                  ? "Please Wait..."
                  : "Book Puja on WhatsApp"}
              </button>

              <p className="mt-4 text-center text-sm text-muted-foreground">
                After clicking the button, your booking will be saved in our
                database and WhatsApp will open with all booking details ready
                to send.
              </p>

            </form>

          </div>

        </div>

      </div>

    </div>

  );
}