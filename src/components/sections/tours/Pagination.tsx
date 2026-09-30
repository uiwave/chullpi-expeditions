import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

interface Props {
  page: number;
  totalPages: number;
  total: number;
  perPage: number;
  query: Record<string, string>;
}

function buildHref(query: Record<string, string>, page: number): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value) params.set(key, value);
  }
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `/tours?${qs}` : "/tours";
}

function getPageItems(page: number, totalPages: number): (number | "gap")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const items: (number | "gap")[] = [1];
  const start = Math.max(2, page - 1);
  const end = Math.min(totalPages - 1, page + 1);
  if (start > 2) items.push("gap");
  for (let i = start; i <= end; i++) items.push(i);
  if (end < totalPages - 1) items.push("gap");
  items.push(totalPages);
  return items;
}

const baseClasses =
  "font-heading inline-flex min-h-11 min-w-11 items-center justify-center gap-1 rounded-xl border px-3 text-sm tracking-[2px] uppercase transition-colors";

export default async function Pagination({
  page,
  totalPages,
  total,
  perPage,
  query,
}: Props) {
  const t = await getTranslations("tours.pagination");

  const from = total === 0 ? 0 : (page - 1) * perPage + 1;
  const to = Math.min(page * perPage, total);
  const items = getPageItems(page, totalPages);

  return (
    <nav
      aria-label={t("label")}
      className="mt-10 flex flex-col items-center justify-between gap-5 sm:flex-row"
    >
      <p className="text-muted-foreground text-sm">
        {t("showing", { from, to, total })}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <Link
          href={buildHref(query, page - 1)}
          aria-disabled={page <= 1}
          tabIndex={page <= 1 ? -1 : undefined}
          className={`${baseClasses} border-border text-primary ${
            page <= 1
              ? "pointer-events-none opacity-40"
              : "hover:bg-primary hover:text-primary-foreground"
          }`}
        >
          <ChevronLeft className="size-4" />
          <span className="hidden sm:inline">{t("previous")}</span>
        </Link>

        {items.map((item, index) =>
          item === "gap" ? (
            <span
              key={`gap-${index}`}
              className="text-muted-foreground min-w-11 text-center text-sm"
            >
              …
            </span>
          ) : (
            <Link
              key={item}
              href={buildHref(query, item)}
              aria-label={t("page", { page: item })}
              aria-current={item === page ? "page" : undefined}
              className={`${baseClasses} ${
                item === page
                  ? "bg-primary text-primary-foreground border-transparent"
                  : "border-border text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {item}
            </Link>
          ),
        )}

        <Link
          href={buildHref(query, page + 1)}
          aria-disabled={page >= totalPages}
          tabIndex={page >= totalPages ? -1 : undefined}
          className={`${baseClasses} border-border text-primary ${
            page >= totalPages
              ? "pointer-events-none opacity-40"
              : "hover:bg-primary hover:text-primary-foreground"
          }`}
        >
          <span className="hidden sm:inline">{t("next")}</span>
          <ChevronRight className="size-4" />
        </Link>
      </div>
    </nav>
  );
}
