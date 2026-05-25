import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import bomber from "@/assets/bomber.jpg";
import scientists from "@/assets/scientists.jpg";
import hiroshima from "@/assets/hiroshima.jpg";
import { PageHeader, NextPage } from "@/components/page-parts";

export const Route = createFileRoute("/history")({
  component: HistoryPage,
  head: () => ({
    meta: [
      { title: "History — The Atomic Bomb" },
      { name: "description", content: "WWII context, the Manhattan Project, and the bombings of Hiroshima and Nagasaki." },
    ],
  }),
});

const timeline = [
  { year: "1939", title: "WWII Begins", text: "Germany invades Poland, starting World War II." },
  { year: "1942", title: "Manhattan Project", text: "The U.S. starts a secret project to build the bomb." },
  { year: "1945", title: "Trinity Test", text: "The first nuclear bomb is tested in New Mexico." },
  { year: "Aug 6, 1945", title: "Hiroshima", text: "The U.S. drops the first atomic bomb on Hiroshima." },
  { year: "Aug 9, 1945", title: "Nagasaki", text: "A second bomb is dropped on Nagasaki." },
  { year: "Sept 2, 1945", title: "WWII Ends", text: "Japan surrenders. The war is officially over." },
];

function HistoryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <PageHeader kicker="Part 1" title="History" subtitle="From the start of WWII to the bombings of 1945." />

      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {[
          { img: bomber, title: "World War II", text: "A global conflict from 1939 to 1945. By 1945, the war in Europe was over but the war with Japan continued." },
          { img: scientists, title: "Manhattan Project", text: "A secret U.S. research program led by J. Robert Oppenheimer that built the first atomic bomb." },
          { img: hiroshima, title: "Hiroshima & Nagasaki", text: "Two bombs were dropped on Japan in August 1945, leading to the end of the war." },
        ].map((c) => (
          <div
            key={c.title}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            <img src={c.img} alt={c.title} width={1024} height={640} loading="lazy" className="w-full h-40 object-cover" />
            <div className="p-5">
              <h3 className="font-semibold text-[#0f1f44] mb-1">{c.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{c.text}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#0f1f44] mb-4">Timeline</h2>
      <ol className="relative border-l-2 border-slate-200 ml-3 space-y-6">
        {timeline.map((t) => (
          <li key={t.year} className="pl-6 relative">
            <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-orange-500 ring-4 ring-white" />
            <p className="text-xs uppercase tracking-wider text-orange-600 font-semibold">{t.year}</p>
            <h3 className="font-semibold text-[#0f1f44]">{t.title}</h3>
            <p className="text-sm text-slate-600">{t.text}</p>
          </li>
        ))}
      </ol>

      <NextPage to="/how-it-worked" label="How It Worked" />
    </div>
  );
}
