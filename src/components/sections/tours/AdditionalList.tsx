import { CircleCheck } from "lucide-react";
import type { AdditionalItem, TourAdditionalGroup } from "@/types/Tour";

function Item({ item }: { item: AdditionalItem }) {
  return (
    <div>
      <div className="text-foreground relative pl-10 text-lg leading-7">
        <CircleCheck
          className="text-primary absolute top-0.5 left-0 size-6"
          aria-hidden="true"
        />
        <span className="flex items-baseline justify-between gap-4">
          <span>{item.name}</span>
          {item.price ? (
            <span className="text-primary shrink-0 font-semibold">
              {item.price}
            </span>
          ) : null}
        </span>
      </div>
      {item.description ? (
        <p className="text-foreground/80 mt-1 pl-10 text-base leading-relaxed whitespace-pre-line">
          {item.description}
        </p>
      ) : null}
      {item.blocks?.length ? (
        <div className="mt-4 ml-4 space-y-4 border-l-2 border-[#E1E4E5] pl-5">
          {item.blocks.map((child, index) => (
            <Item key={index} item={child} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function AdditionalList({
  groups,
}: {
  groups: TourAdditionalGroup[];
}) {
  return (
    <div className="space-y-8">
      {groups.map((group, groupIndex) => (
        <div key={groupIndex}>
          {group.title ? (
            <h4 className="text-secondary font-heading mb-3 text-xl font-semibold">
              {group.title}
            </h4>
          ) : null}
          {group.subtitle ? (
            <p className="text-primary mb-4 text-lg font-medium whitespace-pre-line">
              {group.subtitle}
            </p>
          ) : null}
          <div className="space-y-4">
            {group.items.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
