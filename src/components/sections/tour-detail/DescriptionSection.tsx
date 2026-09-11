interface DescriptionSectionProps {
  description: string;
}

export default function DescriptionSection({ description }: DescriptionSectionProps) {
  return (
    <section>
      <h2 className="font-heading text-2xl tracking-wider text-white mb-4">
        Sobre este Tour
      </h2>
      <p className="text-foreground leading-relaxed text-lg">
        {description}
      </p>
    </section>
  );
}
