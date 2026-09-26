import { cn } from "cn";

interface Props {
  badge: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function Heading({
  badge,
  title,
  description,
  centered = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mb-7.5 lg:mb-9.5",
        centered ? "text-center" : "",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-6",
          centered
            ? "items-center"
            : "items-start justify-between xl:flex-row xl:items-center",
        )}
      >
        <div className={cn("", centered ? "w-full" : "xl:w-1/2")}>
          <span className="font-decoration text-primary block text-[clamp(1.5rem,0.5rem+3.5vw,3rem)] leading-none">
            {badge}
          </span>
          <h2 className="font-heading block text-[clamp(1.875rem,-0.5rem+6vw,4.5rem)] leading-[0.95] text-white">
            {title}
          </h2>
        </div>

        {description && (
          <p className={cn("xl:text-lg", centered ? "" : "xl:w-[38%]")}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
