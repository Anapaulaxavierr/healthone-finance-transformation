type InfoCardProps = {
  title: string;
  description?: string;
  decision?: string;
  number?: string;
  dark?: boolean;
};

export function InfoCard({ title, description, decision, number, dark = false }: InfoCardProps) {
  return (
    <article className={`rounded-2xl border p-6 sm:p-7 ${dark ? "border-white/10 bg-white/[0.06]" : "border-[#dbe4e3] bg-white shadow-[0_14px_45px_rgba(13,49,55,0.05)]"}`}>
      {number ? <span className="mb-8 block text-xs font-bold tracking-[0.18em] text-[#62a991]">{number}</span> : null}
      <h3 className={`text-xl font-semibold leading-snug tracking-[-0.02em] ${dark ? "text-white" : "text-[#153a40]"}`}>{title}</h3>
      {description ? <p className={`mt-3 text-sm leading-6 ${dark ? "text-[#c8d8d8]" : "text-[#587076]"}`}>{description}</p> : null}
      {decision ? (
        <div className={`mt-6 border-t pt-5 ${dark ? "border-white/10" : "border-[#e2e9e8]"}`}>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#62a991]">Decisão apoiada</p>
          <p className={`mt-2 text-sm leading-6 ${dark ? "text-[#e6eeee]" : "text-[#36575d]"}`}>{decision}</p>
        </div>
      ) : null}
    </article>
  );
}
