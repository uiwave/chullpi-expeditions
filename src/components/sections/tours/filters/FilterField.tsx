import { ChevronDown, type LucideIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterFieldProps {
  icon: LucideIcon;
  label: string;
  value?: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  allLabel: string;
  options: { value: string; label: string }[];
}

export function FilterField({
  icon: Icon,
  label,
  value,
  onValueChange,
  placeholder,
  allLabel,
  options,
}: FilterFieldProps) {
  return (
    <div className="group relative flex flex-col gap-2 px-5 py-4 lg:flex-1">
      <div className="flex items-center gap-2">
        <Icon className="text-primary size-6 shrink-0" />
        <span className="font-heading text-2xl tracking-[1px] text-white">
          {label}
        </span>
      </div>
      <div className="relative w-full">
        <select
          value={value ?? ""}
          onChange={(e) => onValueChange(e.target.value)}
          className="flex h-auto w-full cursor-pointer appearance-none items-center justify-between gap-2 rounded-sm border border-white/10 px-4 py-3 text-base font-extralight text-white transition-colors focus:ring-0 focus:outline-none [&>option]:bg-white [&>option]:text-black"
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          <option value="todos">{allLabel}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-white opacity-100" />
      </div>
    </div>
  );
}
