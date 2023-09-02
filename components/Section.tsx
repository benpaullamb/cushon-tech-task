interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <section>
      <div className={`container mx-auto py-12 ${className}`}>{children}</div>
    </section>
  );
}
