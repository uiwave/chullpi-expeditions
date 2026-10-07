import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/config/routes";

interface TourCategory {
  id: string;
  name: string;
  slug: string;
  count: number;
}

interface RecentPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  image: string;
}
interface ToursSidebarProps {
  categories: TourCategory[];
  recentPosts: RecentPost[];
}

export default function ToursSidebar({
  categories,
  recentPosts,
}: ToursSidebarProps) {
  return (
    <aside className="flex w-full flex-col gap-8 lg:col-span-4 xl:col-span-3">
      {/* Widget 1: Categorías */}
      <div className="dark:bg-secondary/10 border-border/60 rounded-2xl border bg-white p-6 shadow-xs">
        <div className="relative mb-6 pb-2">
          <h2 className="font-heading text-secondary text-xl font-bold">
            Categories
          </h2>
          <span className="bg-primary absolute bottom-0 left-0 h-0.5 w-12 rounded-full" />
        </div>

        <ul className="space-y-3.5" role="list">
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link
                href={`${ROUTES.TOURS}?category=${cat.slug}`}
                className="text-foreground hover:text-primary group flex items-center justify-between py-1 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-primary text-lg leading-none font-bold transition-transform group-hover:scale-125">
                    ❖
                  </span>
                  <span className="text-sm font-medium sm:text-base">
                    {cat.name}
                  </span>
                </div>
                <span className="text-foreground/60 text-xs font-medium">
                  ({cat.count})
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Widget 2: Recent Posts */}
      <div className="dark:bg-secondary/10 border-border/60 rounded-2xl border bg-white p-6 shadow-xs">
        <div className="relative mb-6 pb-2">
          <h2 className="font-heading text-secondary text-xl font-bold">
            Recent Posts
          </h2>
          <span className="bg-primary absolute bottom-0 left-0 h-0.5 w-12 rounded-full" />
        </div>

        <div className="flex flex-col gap-4">
          {recentPosts.map((post) => (
            <article key={post.id} className="group flex items-center gap-3.5">
              <div className="relative size-16 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={`/images/${post.image}`}
                  alt={post.title}
                  fill
                  sizes="64px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-foreground/60 mb-1 text-xs">
                  {post.date}
                </span>
                <h3 className="font-heading text-secondary group-hover:text-primary line-clamp-2 text-sm leading-snug font-semibold transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
}
