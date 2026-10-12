import Image from "next/image";
import { Clock } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/config/routes";
import type { Tour } from "@/types/Tour";

interface SimilarToursProps {
  tours: Tour[];
}

export default async function SimilarTours({ tours }: SimilarToursProps) {
  const t = await getTranslations("tours.details");

  if (tours.length === 0) return null;

  return (
    <div className="bg-card border-border rounded-2xl border p-6">
      <h2 className="text-secondary font-heading mb-5 text-xl font-semibold">
        {t("similarTours")}
      </h2>
      <ul className="space-y-4">
        {tours.map((tour) => (
          <li key={tour.slug}>
            <Link
              href={`${ROUTES.TOURS}/${tour.slug}`}
              className="group flex items-center gap-4"
            >
              <div className="relative size-20 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={`/images/${tour.image}`}
                  alt={tour.title}
                  fill
                  sizes="80px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-secondary group-hover:text-primary font-heading line-clamp-2 text-base font-medium transition-colors">
                  {tour.title}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <span className="text-primary font-semibold">
                    ${tour.price}
                  </span>
                  <span className="text-foreground inline-flex items-center gap-1">
                    <Clock className="size-3" aria-hidden="true" />
                    {tour.duration}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
