export default function HeroTours() {
  return (
    <section className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Tour-a-Machu-Picchu-03.webp"
          alt="Tours en Perú"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="uw-container relative z-20 pt-30 text-center">
        <div>
          <span className="font-decoration text-[clamp(1rem,0.643rem+0.893vw,1.5rem)] tracking-[4px] text-primary uppercase">
            Explora Perú
          </span>
          <h1 className="font-heading text-[clamp(3rem,-5rem+18vw,14rem)] leading-none text-white">
            Nuestros Tours
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-foreground text-lg">
            Descubre las mejores experiencias de aventura, cultura y naturaleza
            en los destinos más increíbles del Perú.
          </p>
        </div>
      </div>
    </section>
  );
}
