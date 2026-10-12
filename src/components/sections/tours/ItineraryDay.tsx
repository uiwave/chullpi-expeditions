import { CircleCheck } from "lucide-react";
import type { ItineraryBlock, TourItineraryDay } from "@/types/Tour";

function Block({ block }: { block: ItineraryBlock }) {
  return (
    <div>
      <p className="text-foreground text-base leading-relaxed whitespace-pre-line">
        {block.text}
      </p>
      {block.items?.length ? (
        <ul className="mt-2.5 space-y-2.5">
          {block.items.map((item) => (
            <li
              key={item}
              className="text-foreground relative pl-10 text-base leading-relaxed"
            >
              <CircleCheck
                className="text-primary absolute top-0.5 left-0 size-6"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      {block.blocks?.length ? (
        <div className="mt-4 space-y-4 border-l-2 border-[#E1E4E5] pl-5">
          {block.blocks.map((child, index) => (
            <Block key={index} block={child} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function ItineraryDay({ day }: { day: TourItineraryDay }) {
  return (
    <div>
      {day.subtitle ? (
        <p className="text-primary mb-4 text-lg font-medium whitespace-pre-line">
          {day.subtitle}
        </p>
      ) : null}
      <div className="space-y-5">
        {day.paragraphs.map((paragraph, index) => (
          <Block key={index} block={paragraph} />
        ))}
      </div>
    </div>
  );
}
