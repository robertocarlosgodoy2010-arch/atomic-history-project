import { createFileRoute } from "@tanstack/react-router";
import { Users, Trees, Flag } from "lucide-react";
import { PageHeader, NextPage } from "@/components/page-parts";

export const Route = createFileRoute("/effects")({
  component: EffectsPage,
  head: () => ({
    meta: [
      { title: "Effects — The Atomic Bomb" },
      { name: "description", content: "Human, environmental, and political effects of the atomic bomb." },
    ],
  }),
});

const stats = [
  { value: "200,000+", label: "Estimated deaths in Hiroshima & Nagasaki" },
  { value: "13 km²", label: "Area destroyed in Hiroshima" },
  { value: "5+ years", label: "Long-term health effects after exposure" },
];

const cards = [
  {
    icon: Users,
    title: "Human Impact",
    text: "The bombings killed over 200,000 people. Many died right away, while others suffered from burns and radiation sickness for years after.",
    color: "bg-red-50 text-red-600 border-red-200",
  },
  {
    icon: Trees,
    title: "Environmental Damage",
    text: "The explosions destroyed cities and polluted the air, water, and soil. Some areas were unsafe for a long time after.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  {
    icon: Flag,
    title: "Political Consequences",
    text: "The bomb started the nuclear age and shaped the Cold War between the U.S. and the Soviet Union. It still affects world politics today.",
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
];

function EffectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <PageHeader kicker="Part 3" title="Effects" subtitle="What the bomb left behind." />

      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#0f1f44] text-white rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-200">
            <p className="text-3xl font-bold text-orange-400">{s.value}</p>
            <p className="text-sm text-slate-200 mt-2 leading-relaxed">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {cards.map((c) => (
          <div key={c.title} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <div className={`w-10 h-10 rounded-full border flex items-center justify-center mb-3 ${c.color}`}>
              <c.icon className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-[#0f1f44] mb-1">{c.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-[#0f1f44] mb-2">A Short Reflection</h2>
        <p className="text-slate-700 leading-relaxed">
          The atomic bomb showed how powerful new technology can be — and how important it is to
          think carefully about how we use it. Learning about it helps us understand history and
          why peace matters.
        </p>
      </div>

      <NextPage to="/charts" label="Charts" />
    </div>
  );
}
