import { ROUTES } from "@/config/routes";
import { Link } from "@/i18n/navigation";
import { Destination } from "@/types/Destination";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface Props {
  data: Destination;
}

export function DestinationCard({ data }: Props) {
  const tCommon = useTranslations("common");
  return (
    <div className="flex origin-bottom flex-col items-center text-center">
      <div className="relative block w-full rounded-2xl">
        <figure className="relative aspect-square w-full overflow-hidden rounded-2xl">
          <Image
            src={data.image}
            alt={data.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover"
          />
        </figure>
      </div>

      <div className="mt-6 flex flex-col items-center">
        <h3 className="font-heading text-secondary hover:text-primary text-2xl font-semibold transition-colors">
          <Link href={`/${ROUTES.TOURS}?destino=${data.slug}`}>
            {data.title}
          </Link>
        </h3>
        <Link
          href={`/${ROUTES.TOURS}?destino=${data.slug}`}
          className="text-foreground mt-1 text-sm"
        >
          {tCommon("readMore")}
        </Link>
      </div>
    </div>
  );
}
