import { cn } from "cn";

interface Props {
  subtitle: string;
  title: string;
  description?: string;
  className?: string;
}

export default function Heading({
  subtitle,
  title,
  description,
  className,
}: Props) {
  return (
    <div className={cn("mb-8", className)}>
      <span className="font-decoration text-secondary block text-[clamp(1.5rem,1.2rem+1.5vw,2.5rem)] leading-none">
        {subtitle}
      </span>
      <h2 className="font-heading text-secondary mb-4 text-[clamp(1.75rem,1.254rem+2.116vw,3rem)] leading-snug font-bold">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-pretty whitespace-pre-line">{description}</p>
      )}
    </div>
  );
}
