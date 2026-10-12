import TourTypeFilter from "./TourTypeFilter";

interface ToursSidebarProps {
  typeCounts: Record<string, number>;
}

export default function ToursSidebar({ typeCounts }: ToursSidebarProps) {
  return (
    <aside className="order-first flex w-full flex-col gap-8 lg:order-none lg:col-span-4 xl:col-span-3">
      <TourTypeFilter counts={typeCounts} />
    </aside>
  );
}
