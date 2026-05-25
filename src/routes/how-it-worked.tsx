import { createFileRoute } from "@tanstack/react-router";
import fission from "@/assets/fission.jpg";
import { PageHeader, NextPage } from "@/components/page-parts";

export const Route = createFileRoute("/how-it-worked")({
  component: HowPage,
  head: () => ({
    meta: [
      { title: "How It Worked — The Atomic Bomb" },
      { name: "description", content: "A simple explanation of how the atomic bomb worked." },
    ],
  }),
});

function HowPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <PageHeader kicker="Part 2" title="How It Worked" subtitle="A short and simple explanation." />

      <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            The bomb worked using a process called <strong className="text-[#0f1f44]">nuclear fission</strong>.
            Inside the bomb, a special kind of uranium was split apart, which released a huge amount of energy.
          </p>
          <p>
            Once the splitting started, it spread on its own — one atom splitting caused others to split too.
            This is called a <strong className="text-[#0f1f44]">chain reaction</strong>, and it happened in less than a second.
          </p>
          <p>
            Even a small amount of material released energy equal to thousands of tons of TNT.
          </p>
        </div>
        <img
          src={fission}
          alt="Simple fission diagram"
          width={800}
          height={600}
          loading="lazy"
          className="w-full h-auto rounded-2xl border border-slate-200 shadow-sm bg-white"
        />
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { step: "1", title: "Trigger", text: "A small explosion pushed pieces of uranium together." },
          { step: "2", title: "Chain Reaction", text: "Atoms split and caused other atoms to split too." },
          { step: "3", title: "Energy Release", text: "A massive amount of heat and light was released." },
        ].map((s) => (
          <div key={s.step} className="bg-slate-50 rounded-2xl border border-slate-200 p-5 hover:border-orange-300 hover:-translate-y-1 transition-all duration-200">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center mb-3">
              {s.step}
            </div>
            <h3 className="font-semibold text-[#0f1f44] mb-1">{s.title}</h3>
            <p className="text-sm text-slate-600">{s.text}</p>
          </div>
        ))}
      </div>

      <NextPage to="/effects" label="Effects" />
    </div>
  );
}
