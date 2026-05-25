import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function PageHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 mb-2">
        {kicker}
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-[#0f1f44]">{title}</h1>
      {subtitle && <p className="text-slate-600 mt-2 max-w-2xl">{subtitle}</p>}
    </div>
  );
}

type NextTo = "/history" | "/how-it-worked" | "/effects" | "/charts" | "/gallery" | "/";

export function NextPage({ to, label }: { to: NextTo; label: string }) {
  return (
    <div className="mt-12 flex justify-end">
      <Link
        to={to}
        className="inline-flex items-center gap-2 bg-[#0f1f44] hover:bg-[#1a2f5f] hover:-translate-y-0.5 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 shadow-sm"
      >
        Next: {label} <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
