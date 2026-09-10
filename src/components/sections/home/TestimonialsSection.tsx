import { Quote, Star } from "lucide-react";
import { testimonials } from "@/src/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section">
        <div className="mb-7.5 lg:mb-9.5">
          <div className="flex flex-col xl:flex-row gap-6 justify-between items-start xl:items-end">
            <h2 className="xl:w-1/2 font-heading text-white leading-[0.95]">
              <span className="block font-decoration text-primary text-[clamp(1.5rem,0.5rem+3.5vw,3rem)] leading-none mb-1">
                Lo que dicen
              </span>
              <span className="block text-[clamp(1.875rem,-0.5rem+6vw,4.5rem)]">
                Testimonios de Nuestros Viajeros
              </span>
            </h2>
            <p className="xl:w-[38%]">
              Las experiencias de quienes ya viajaron con nosotros hablan por sí
              solas. Historias reales, momentos únicos y recuerdos que duran
              para siempre.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {testimonials.map((testimonial) => (
<figure
              key={testimonial.name}
              className="relative w-full overflow-hidden rounded-2xl bg-card border border-border p-6 flex flex-col gap-4"
            >
              <Quote className="size-8 text-primary" />
              <p className="text-foreground">"{testimonial.comment}"</p>
              <div className="border-t border-border pt-4 mt-auto flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="size-12 rounded-full object-cover object-center border-2 border-primary"
                />
                <div className="flex flex-col">
                  <figcaption className="font-heading text-white tracking-wider">
                    {testimonial.name}
                  </figcaption>
                  <span className="text-muted text-sm">
                    {testimonial.from}
                  </span>
                </div>
                <div className="ml-auto flex items-center gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="size-4 text-primary fill-primary" />
                  ))}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
