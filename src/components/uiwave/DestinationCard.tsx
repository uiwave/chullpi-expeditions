import { ROUTES } from "@/config/routes";
import { Link } from "@/i18n/navigation";
import { Destination } from "@/types/Destination";

interface Props {
  data: Destination;
}

export function DestinationCard({ data }: Props) {
  return (
    <Link
      href={`/${ROUTES.TOURS}?destino=${data.slug}`}
      className="bg-card flex w-full flex-col overflow-hidden rounded-2xl"
    >
      <div className="relative aspect-4/4 w-full overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="font-heading text-3xl text-white">{data.title}</h3>
      </div>
    </Link>
  );
}
