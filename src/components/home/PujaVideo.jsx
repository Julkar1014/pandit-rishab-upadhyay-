import pujaVideo from "../../assets/puja-video.mp4";
export default function PujaVideo() {
      return (
    <section className="section bg-gradient-cream">

      <div className="container-luxe">

        <div className="mx-auto max-w-3xl text-center">

          <div className="eyebrow justify-center">
            Experience Our Services
          </div>

          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Watch Our
            <span className="text-gradient-gold">
              {" "}Real Puja Ceremony
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Experience authentic Vedic rituals performed by
            <strong> Pandit Rishabh Upadhyay</strong>
            across Noida, Greater Noida and Delhi NCR.
          </p>

        </div>

        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-card shadow-luxe">

          <video
  autoPlay
  muted
  loop
  playsInline
  controls
  preload="auto"
  className="aspect-video w-full object-cover rounded-[2rem]"
>
  <source src={pujaVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>

        </div>

      </div>

    </section>
  );
}