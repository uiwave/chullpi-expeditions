import Image from "next/image";
import { useTranslations } from "next-intl";
import { Tour } from "@/types/Tour";
import { ROUTES } from "@/config/routes";
import Button from "../uiwave/Button";

interface Props {
  data: Tour;
}

export default function TourCardPopular({ data }: Props) {
  const t = useTranslations("common");

  return (
    <article className="group border-border flex flex-col overflow-hidden rounded-xl border bg-white text-black">
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={`/images/${data.image}`}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 rounded-lg bg-white/95 px-3 py-1.5 text-sm font-medium shadow-sm backdrop-blur-sm">
          <span>{data.duration}</span>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-6">
        <h3 className="font-heading group-hover:text-primary line-clamp-2 text-xl leading-snug font-semibold transition-colors">
          {data.title}
        </h3>

        <div className="flex items-baseline gap-1">
          <span className="text-xl font-medium">${data.price}</span>
          <span className="text-lg font-normal">/{t("perPerson")}</span>
        </div>

        <Button
          href={`${ROUTES.TOURS}/${data.slug}`}
          label={t("bookNow")}
          variant="primary"
          size="md"
        />
      </div>
    </article>
  );
}
