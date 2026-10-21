import Image from "next/image";
interface PageHeaderProps {
  title: string;
}

export default function HeroSection({ title }: PageHeaderProps) {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden py-34 text-white">
      <Image
        src="/images/bg/breadcumb-bg.jpg"
        alt=""
        fill
        priority
        quality={85}
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />

      <div className="absolute inset-0 -z-10 bg-black/10" />

      <div className="uw-container relative z-10 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center">
          <h1 className="font-heading mb-3 text-[clamp(2rem,1.5rem+2.5vw,4rem)] leading-tight font-bold tracking-tight">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
