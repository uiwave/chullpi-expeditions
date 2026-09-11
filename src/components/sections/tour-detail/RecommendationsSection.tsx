import { AlertTriangle } from "lucide-react";

interface RecommendationsSectionProps {
  recommendations: string[];
}

export default function RecommendationsSection({ recommendations }: RecommendationsSectionProps) {
  return (
    <section>
      <h2 className="font-heading text-2xl tracking-wider text-white mb-4 flex items-center gap-2">
        <AlertTriangle className="w-6 h-6 text-primary" />
        Recomendaciones
      </h2>

      <div className="bg-surface border border-border rounded-xl p-5">
        <ul className="space-y-2.5">
          {recommendations.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-foreground">
              <span className="text-primary mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
