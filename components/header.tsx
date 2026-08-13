import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-white/10 bg-[#0d3137] px-6 py-5 text-white lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="max-w-64 text-sm font-bold leading-tight tracking-[-0.01em] sm:max-w-none sm:text-base">
          HealthOne Finance Transformation
        </Link>
        <Link href="/#cases" className="text-sm font-medium text-[#bcd0d0] transition hover:text-white">
          Cases
        </Link>
      </div>
    </header>
  );
}
