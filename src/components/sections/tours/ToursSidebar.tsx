import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { TourCategory, RecentPost } from "@/types";
import { ROUTES } from "@/config/routes";

interface ToursSidebarProps {
  categories: TourCategory[];
  recentPosts: RecentPost[];
}

export default function ToursSidebar({
  categories,
  recentPosts,
}: ToursSidebarProps) {
  return (
    <aside className="lg:col-span-4 xl:col-span-3 flex flex-col gap-8 w-full">
      {/* Widget 1: Categorías */}
      <div className="bg-white dark:bg-secondary/10 rounded-2xl p-6 border border-border/60 shadow-xs">
        <div className="relative mb-6 pb-2">
          <h2 className="font-heading font-bold text-secondary text-xl">
            Categories
          </h2>
          <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary rounded-full" />
        </div>

        <ul className="space-y-3.5" role="list">
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link
                href={`${ROUTES.TOURS}?category=${cat.slug}`}
                className="flex items-center justify-between text-foreground hover:text-primary transition-colors py-1 group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-primary font-bold text-lg leading-none group-hover:scale-125 transition-transform">
                    ❖
                  </span>
                  <span className="text-sm sm:text-base font-medium">
                    {cat.name}
                  </span>
                </div>
                <span className="text-xs text-foreground/60 font-medium">
                  ({cat.count})
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Widget 2: Recent Posts */}
      <div className="bg-white dark:bg-secondary/10 rounded-2xl p-6 border border-border/60 shadow-xs">
        <div className="relative mb-6 pb-2">
          <h2 className="font-heading font-bold text-secondary text-xl">
            Recent Posts
          </h2>
          <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary rounded-full" />
        </div>

        <div className="flex flex-col gap-4">
          {recentPosts.map((post) => (
            <article key={post.id} className="flex items-center gap-3.5 group">
              <div className="relative size-16 rounded-xl overflow-hidden shrink-0">
                <Image
                  src={`/images/${post.image}`}
                  alt={post.title}
                  fill
                  sizes="64px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-foreground/60 mb-1">
                  {post.date}
                </span>
                <h3 className="font-heading font-semibold text-secondary text-sm line-clamp-2 group-hover:text-primary transition-colors leading-snug">
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