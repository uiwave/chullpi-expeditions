import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { cn } from "cn";

interface Props {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outlet";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  label,
  href,
  variant = "primary",
  size = "md",
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "group/btn relative flex items-center justify-center overflow-hidden rounded-xl",

        // Estilos de variante
        variant === "primary" && "bg-primary",
        variant === "secondary" && "bg-secondary",
        variant === "outlet" && "border border-white bg-transparent",

        // Estilos de tamaño
        size === "sm" && "px-4 py-2.5 text-sm",
        size === "md" && "px-8.75 py-3.75 text-base",
        size === "lg" && "px-8.75 py-[18.8px] text-lg",
      )}
    >
      <div
        className={cn(
          "absolute inset-0 -translate-x-full rounded-xl transition-transform duration-300 ease-out group-hover/btn:translate-x-0",
          variant === "primary" && "bg-secondary",
          variant === "secondary" && "bg-primary",
          variant === "outlet" && "bg-white",
        )}
      />

      <div
        className={cn(
          "relative z-10 inline-flex items-center gap-2 text-white transition-colors duration-300",
          variant === "outlet" && "group-hover/btn:text-black",
        )}
      >
        <span className="font-medium">{label}</span>
        <ArrowRight className="size-5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
      </div>
    </Link>
  );
}
