"use client";

import { useEffect, useRef } from "react";

const certifications = [
  { src: "/images/certifications/perulogo.png", name: "Perú" },
  { src: "/images/certifications/gerceturlogo.png", name: "GERCETUR" },
  { src: "/images/certifications/promperulogo.png", name: "PromPerú" },
  { src: "/images/certifications/safetravelslogo.png", name: "Safe Travels" },
  {
    src: "/images/certifications/seguridadturisticalogo.png",
    name: "Seguridad Turística",
  },
  { src: "/images/certifications/tripadvisorlogo.png", name: "TripAdvisor" },
];

export default function CertificationsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        track.scrollLeft += e.deltaY;
      }
    };

    track.addEventListener("wheel", onWheel, { passive: false });
    return () => track.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section pt-0">
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide py-4"
        >
          {certifications.map((certification) => (
            <div
              key={certification.name}
              className="shrink-0 w-[calc((100%-1.5rem)/2)] sm:w-[calc((100%-3rem)/3)] md:w-[calc((100%-4.5rem)/4)] lg:w-[calc((100%-6rem)/5)]"
            >
              <div className="flex h-24 items-center justify-center rounded-lg bg-white p-4">
                <img
                  src={certification.src}
                  alt={certification.name}
                  className="max-h-full w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
