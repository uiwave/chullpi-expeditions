import { useTranslations } from "next-intl";
import Heading from "@/components/uiwave/Heading";
import Image from "next/image";

export default function GallerySection() {
  const t = useTranslations("home.gallery");

  return (
    <section className="relative w-full overflow-hidden">
      <div className="uw-container relative z-10 pt-16 pb-16 lg:pt-24 lg:pb-24">
        <Heading
          subtitle={t("subtitle")}
          title={t("title")}
          className="text-center"
        />
        <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          <div className="flex flex-col justify-center sm:col-span-1">
            <figure className="group relative aspect-3/4 w-full overflow-hidden rounded-3xl shadow-sm sm:aspect-4/5">
              <Image
                src="/images/Tour-a-Machu-Picchu-03.webp"
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
            </figure>
          </div>

          <div className="flex flex-col gap-4 lg:gap-5">
            <figure className="group relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-sm">
              <Image
                src="/images/Tour-a-Machu-Picchu-03.webp"
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
            </figure>
            <figure className="group relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-sm">
              <Image
                src="/images/Tour-a-Machu-Picchu-03.webp"
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
            </figure>
          </div>
          <div className="flex flex-col justify-center">
            <figure className="group relative aspect-1/2 min-h-[380px] w-full overflow-hidden rounded-3xl shadow-md lg:min-h-[460px]">
              <Image
                src="/images/Tour-a-Machu-Picchu-03.webp"
                alt=""
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
            </figure>
          </div>
          <div className="flex flex-col gap-4 lg:gap-5">
            <figure className="group relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-sm">
              <Image
                src="/images/Tour-a-Machu-Picchu-03.webp"
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
            </figure>
            <figure className="group relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-sm">
              <Image
                src="/images/Tour-a-Machu-Picchu-03.webp"
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
            </figure>
          </div>
          <div className="flex flex-col justify-center sm:col-span-1">
            <figure className="group relative aspect-3/4 w-full overflow-hidden rounded-3xl shadow-sm sm:aspect-4/5">
              <Image
                src="/images/Tour-a-Machu-Picchu-03.webp"
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
