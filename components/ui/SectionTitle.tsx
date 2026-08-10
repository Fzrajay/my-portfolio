interface SectionTitleProps {
  title: string;
  subtitle: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-20">
      <span className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold">{subtitle}</span>

      <h2 className="mt-4 text-5xl font-bold">{title}</h2>

      <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-6" />
    </div>
  );
}
