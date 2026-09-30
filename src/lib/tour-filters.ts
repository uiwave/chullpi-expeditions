import type { Tour } from "@/types/Tour";

export interface TourFilters {
  destino?: string;
  tipo?: string;
  duracion?: string;
  precio?: string;
}

export const TOURS_PER_PAGE = 8;

const ALL_OPTION = "todos";

export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ñ/g, "n")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function isActive(value: string | undefined): value is string {
  return Boolean(value) && value !== ALL_OPTION;
}

const HOUR_OR_MINUTE = /\bhoras?\b|\bhours?\b|\bhrs?\b|\bmin\b/i;

export function parseDurationToDays(duration: string): number {
  if (HOUR_OR_MINUTE.test(duration)) return 1;
  const lower = duration.toLowerCase();
  if (lower.includes("full day") || lower.includes("dia inteiro")) return 1;
  const match = lower.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 1;
}

function isInDurationRange(days: number, range: string): boolean {
  switch (range) {
    case "full-day":
      return days === 1;
    case "2-3":
      return days >= 2 && days <= 3;
    case "4-7":
      return days >= 4 && days <= 7;
    case "8+":
      return days >= 8;
    default:
      return true;
  }
}

function isInPriceRange(price: number, range: string): boolean {
  switch (range) {
    case "0-100":
      return price >= 0 && price <= 100;
    case "100-200":
      return price > 100 && price <= 200;
    case "200-300":
      return price > 200 && price <= 300;
    case "300+":
      return price > 300;
    default:
      return true;
  }
}

export function filterTours(
  tours: Tour[],
  { destino, tipo, duracion, precio }: TourFilters,
): Tour[] {
  return tours.filter((tour) => {
    if (isActive(destino) && slugify(tour.destination) !== slugify(destino)) {
      return false;
    }
    if (isActive(tipo) && slugify(tour.typeKey) !== slugify(tipo)) {
      return false;
    }
    if (isActive(duracion)) {
      const tourDays = parseDurationToDays(tour.duration);
      if (!isInDurationRange(tourDays, duracion)) {
        return false;
      }
    }
    if (isActive(precio)) {
      if (!isInPriceRange(tour.price, precio)) {
        return false;
      }
    }
    return true;
  });
}

export function getTotalPages(total: number): number {
  return Math.max(1, Math.ceil(total / TOURS_PER_PAGE));
}

export function parsePage(value: string | undefined): number | null {
  if (value === undefined || value === "") return 1;
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 1) return null;
  return parsed;
}
