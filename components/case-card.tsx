type CaseCardProps = {
  title: string;
  number: string;
  href?: string;
};

export function CaseCard({ title, number, href }: CaseCardProps) {
  const content = (
    <>
      <span className="text-sm font-bold tracking-[0.15em] text-[#62a991]">{number}</span>
      <div>
        <div aria-hidden="true" className="mb-5 h-px w-12 bg-[#b8d9cd] transition-all duration-300 group-hover:w-20" />
        <h3 className="text-xl font-semibold leading-snug tracking-[-0.02em] text-[#153a40]">{title}</h3>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="group flex min-h-64 flex-col justify-between rounded-2xl border border-[#dbe4e3] bg-white p-7 shadow-[0_14px_45px_rgba(13,49,55,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#8bcab5] hover:shadow-[0_20px_55px_rgba(13,49,55,0.1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#267a67]">
        {content}
      </Link>
    );
  }

  return (
    <article className="group flex min-h-64 flex-col justify-between rounded-2xl border border-[#dbe4e3] bg-white p-7 shadow-[0_14px_45px_rgba(13,49,55,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#8bcab5] hover:shadow-[0_20px_55px_rgba(13,49,55,0.1)]">
      {content}
    </article>
  );
}
import Link from "next/link";
