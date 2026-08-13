type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, light = false }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className={`text-sm font-bold uppercase tracking-[0.2em] ${light ? "text-[#8de0c1]" : "text-[#267a67]"}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-[#102f35]"}`}>{title}</h2>
      {description ? <p className={`mt-5 text-base leading-7 sm:text-lg ${light ? "text-[#c8d8d8]" : "text-[#587076]"}`}>{description}</p> : null}
    </div>
  );
}
