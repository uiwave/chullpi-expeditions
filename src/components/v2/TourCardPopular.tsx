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
    <article className="group rounded-2xl overflow-hidden transition-all duration-300 flex flex-col border">
      <div className="relative w-full aspect-4/3 overflow-hidden">
        <Image
          src={`/images/${data.image}`}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-heading font-medium text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {data.title}
          </h3>

          <div className="flex items-baseline gap-1 mb-6">
            <span className="font-medium text-2xl">${data.price}</span>
            <span className="text-lg">/{t("perPerson")}</span>
          </div>
        </div>

        <div className="pt-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-base">
            <Clock
              className="size-4 text-primary shrink-0"
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
