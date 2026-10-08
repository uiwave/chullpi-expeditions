import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Tour } from "@/types/Tour";
import { ROUTES } from "@/config/routes";

interface Props {
  data: Tour;
}

export default function TourCardPopular({ data }: Props) {
  const t = useTranslations("common");

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border transition-all duration-300">
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={`/images/${data.image}`}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h3 className="font-heading group-hover:text-primary mb-2 line-clamp-1 text-lg font-medium transition-colors">
            {data.title}
          </h3>

          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-2xl font-medium">${data.price}</span>
            <span className="text-lg">/{t("perPerson")}</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 pt-4">
          <div className="flex items-center gap-1.5 text-base">
            <Clock
              className="text-primary size-4 shrink-0"
              aria-hidden="true"
            />
            <span>{data.duration}</span>
          </div>

          <Link
            href={`${ROUTES.TOURS}/${data.slug}`}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <span>{t("bookNow")}</span>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </article>
  );
}
