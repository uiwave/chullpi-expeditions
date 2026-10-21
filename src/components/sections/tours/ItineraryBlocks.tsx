import { CircleCheck } from "lucide-react";
import { cn } from "cn";
import type { ItineraryBlock } from "@/types/Tour";

function Block({ block }: { block: ItineraryBlock }) {
  return (
    <div>
      {block.text ? (
        <p className="text-foreground text-base leading-relaxed whitespace-pre-line">
          {block.text}
        </p>
      ) : null}
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

export default function ItineraryBlocks({
  blocks,
  className,
}: {
  blocks: ItineraryBlock[];
  className?: string;
}) {
  return (
    <div className={cn("space-y-5", className)}>
      {blocks.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </div>
  );
}
