import { useTranslations } from "next-intl";
import { Tour } from "@/types/Tour";
import { Link } from "@/i18n/navigation";

interface Props {
  data: Tour;
}

export default function CardReserva({ data }: Props) {
  const t = useTranslations("common");

  return (
    <div className="bg-primary/30 text-secondary relative flex h-full w-full flex-col overflow-visible rounded-lg">
      {/* División horizontal con muescas (posicionadas a 80px del fondo) */}
      <div className="pointer-events-none absolute right-0 bottom-20 left-0 z-30 flex items-center justify-between">
        <div className="-ml-3 h-6 w-6 shrink-0 rounded-full bg-[#F4F9FA]"></div>
        <div className="border-secondary w-full border-t-2 border-dashed"></div>
        <div className="-mr-3 h-6 w-6 shrink-0 rounded-full bg-[#F4F9FA]"></div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4 pb-6 sm:p-5 sm:pb-6">
        <div className="group relative h-48 w-full shrink-0 overflow-hidden rounded-md">
          <div className="relative h-full w-full overflow-hidden">
            <img
              src={`/images/${data.image}`}
              alt={data.title}
              className="h-full w-full object-cover sepia-[0.15]"
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center text-center">
          <h3
            className="text-secondary text-base leading-snug font-extrabold sm:text-lg"
            title={data.title}
          >
            {data.title}
          </h3>
        </div>
      </div>

      <div className="flex h-20 shrink-0 items-center justify-between gap-2 px-5 py-3">
        <div className="flex flex-col justify-center">
          <span className="text-[10px] font-bold tracking-wider uppercase">
            {t("perPerson")}
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl leading-none font-bold">
              ${data.price}
            </span>
            <span className="text-xs font-bold uppercase">USD</span>
          </div>
        </div>

        <Link
          href={data.slug}
          className="bg-secondary text-secondary-foreground relative inline-flex h-11 w-32 shrink-0 items-center justify-center overflow-hidden rounded-md px-3 text-center text-xs leading-tight font-bold tracking-wider uppercase"
        >
          <span className="line-clamp-2 text-center">{t("viewItinerary")}</span>
        </Link>
      </div>
    </div>
  );
}
