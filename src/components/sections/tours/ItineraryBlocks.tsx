import { CircleCheck, CircleX } from "lucide-react";
import { cn } from "cn";
import type { ItineraryBlock } from "@/types/Tour";

export type CheckVariant = "default" | "included" | "excluded";

const VARIANTS: Record<
  CheckVariant,
  { Icon: typeof CircleCheck; color: string }
> = {
  default: { Icon: CircleCheck, color: "text-primary" },
  included: { Icon: CircleCheck, color: "text-[#27AE60]" },
  excluded: { Icon: CircleX, color: "text-[#EB5757]" },
};

interface BlockProps {
  block: ItineraryBlock;
  variant: CheckVariant;
  size: "base" | "lg";
  textClassName: string;
}

function Block({ block, variant, size, textClassName }: BlockProps) {
  const { Icon, color } = VARIANTS[variant];
  const textSize = size === "lg" ? "text-lg" : "text-base";
  const iconTop = size === "lg" ? "top-1" : "top-0.5";

  return (
    <div>
      {block.text ? (
        <p
          className={cn(
            textClassName,
            textSize,
            "leading-relaxed whitespace-pre-line",
          )}
        >
          {block.text}
        </p>
      ) : null}
      {block.items?.length ? (
        <ul className="mt-2.5 space-y-2.5">
          {block.items.map((item) => (
            <li
              key={item}
              className={cn(
                textClassName,
                "relative pl-10",
                textSize,
                "leading-relaxed",
              )}
            >
              <Icon
                className={cn("absolute left-0 size-6", iconTop, color)}
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
            <Block
              key={index}
              block={child}
              variant={variant}
              size={size}
              textClassName={textClassName}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

interface ItineraryBlocksProps {
  blocks: ItineraryBlock[];
  variant?: CheckVariant;
  size?: "base" | "lg";
  textClassName?: string;
  className?: string;
}

export default function ItineraryBlocks({
  blocks,
  variant = "default",
  size = "base",
  textClassName = "text-foreground",
  className,
}: ItineraryBlocksProps) {
  return (
    <div className={cn("space-y-5", className)}>
      {blocks.map((block, index) => (
        <Block
          key={index}
          block={block}
          variant={variant}
          size={size}
          textClassName={textClassName}
        />
      ))}
    </div>
  );
}
