import { Testimonials } from "@/types/Testimonial";
import { Star } from "lucide-react";
import { getTranslations } from "next-intl/server";

interface Props {
  data: Testimonials;
}

export async function TestimonialCard({ data }: Props) {
  const t = await getTranslations("home.testimonial");

  return (
    <figure className="flex flex-col gap-6 bg-transparent p-2">
      {/* Cabecera: Avatar, Nombre y Rating */}
      <div className="flex items-center gap-4">
        <img
          src={data.image}
          alt={data.name}
          className="size-16 rounded-full object-cover object-center shadow-md"
        />
        <div className="flex flex-col gap-1">
          <figcaption className="font-heading text-primary text-lg tracking-wider">
            {data.name}
          </figcaption>

          {/* Renderizado de rating con estrellas */}
          <div
            className="flex items-center gap-1"
            aria-label={t("ratingAria", { rating: data.rating })}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`size-4 ${
                  index < data.rating
                    ? "fill-primary text-primary"
                    : "fill-gray-600 text-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Cuerpo: Comilla doble en bloque + Comentario que fluye desde la primera línea */}
      <div className="text-base leading-relaxed whitespace-pre-line">
        <svg
          aria-hidden="true"
          className="fill-primary mr-3 inline-block h-8 w-8 shrink-0 align-top"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        {data.comment}
      </div>
    </figure>
  );
}
