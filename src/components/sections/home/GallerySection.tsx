import { useTranslations } from "next-intl";
import Heading from "@/components/uiwave/Heading";
import Image from "next/image";

const GALLERY_IMAGES = [
  {
    src: "/images/Tour-a-Machu-Picchu-03.webp",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw",
  },
  {
    src: "/images/Montana-de-colores-06.webp",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw",
  },
  {
    src: "/images/Tour-a-Waqrapukara-04.webp",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw",
  },
  {
    src: "/images/Canon-del-Colca-y-Aguas-Termales-de-La-Calera-03.webp",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw",
  },
  {
    src: "/images/City-Tour-Cusco-03.webp",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw",
  },
  {
    src: "/images/Tour-Huacachina-Buggy-Sandboarding-02.webp",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw",
  },
  {
    src: "/images/Isla-Uros-–-Taquile-–-Amantani-02.webp",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw",
  },
] as const;

function GalleryImage({
  image,
  className,
  priority,
}: {
  image: (typeof GALLERY_IMAGES)[number];
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={`group relative w-full overflow-hidden rounded-3xl shadow-sm ${className ?? ""}`}
    >
      <Image
        src={image.src}
        alt=""
        fill
        priority={priority}
        sizes={image.sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
      />
    </figure>
  );
}

export default function GallerySection() {
  const t = useTranslations("home.gallery");

  return (
    <section className="relative w-full overflow-hidden bg-[#F4F9FA] py-12 lg:py-20">
      <div className="uw-container relative z-10">
        <Heading
          subtitle={t("subtitle")}
          title={t("title")}
          className="text-center"
        />
        <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          <div className="flex flex-col justify-center sm:col-span-1">
            <GalleryImage
              image={GALLERY_IMAGES[0]}
              className="aspect-3/4 sm:aspect-4/5"
            />
          </div>

          <div className="flex flex-col gap-4 lg:gap-5">
            <GalleryImage image={GALLERY_IMAGES[1]} className="aspect-4/3" />
            <GalleryImage image={GALLERY_IMAGES[2]} className="aspect-4/3" />
          </div>
          <div className="flex flex-col justify-center">
            <GalleryImage
              image={GALLERY_IMAGES[3]}
              priority
              className="aspect-1/2 min-h-[380px] shadow-md lg:min-h-[460px]"
            />
          </div>
          <div className="flex flex-col gap-4 lg:gap-5">
            <GalleryImage image={GALLERY_IMAGES[4]} className="aspect-4/3" />
            <GalleryImage image={GALLERY_IMAGES[5]} className="aspect-4/3" />
          </div>
          <div className="flex flex-col justify-center sm:col-span-1">
            <GalleryImage
              image={GALLERY_IMAGES[6]}
              className="aspect-3/4 sm:aspect-4/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
