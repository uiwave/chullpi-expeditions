import type { ItineraryDay } from "@/src/data/tours";

interface ItinerarySectionProps {
  itinerary: ItineraryDay[];
}

export default function ItinerarySection({ itinerary }: ItinerarySectionProps) {
  return (
    <section>
      <h2 className="font-heading text-2xl tracking-wider text-white mb-8">
        Itinerario Detallado
      </h2>

      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {itinerary.map((day) => (
            <div key={day.day} className="relative flex gap-6">
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-heading text-sm">
                {day.day}
              </div>

              <div className="flex-1 bg-surface border border-border rounded-xl p-5">
                <h3 className="font-heading text-lg tracking-wider text-white mb-2">
                  Día {day.day}: {day.title}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {day.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
