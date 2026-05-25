import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Atom, Globe2, BarChart3, Image as ImageIcon } from "lucide-react";
import mushroom from "@/assets/mushroom-cloud.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "The Atomic Bomb — Home" },
      { name: "description", content: "A school project about the history and impact of the atomic bomb." },
    ],
  }),
});

const tiles = [
  { to: "/history", label: "History", icon: BookOpen, desc: "WWII, the Manhattan Project, and 1945." },
  { to: "/how-it-worked", label: "How It Worked", icon: Atom, desc: "A simple look at how the bomb was made." },
  { to: "/effects", label: "Effects", icon: Globe2, desc: "Human, environmental, and political impact." },
  { to: "/charts", label: "Charts", icon: BarChart3, desc: "Timeline and energy comparison graphs." },
  { to: "/gallery", label: "Gallery", icon: ImageIcon, desc: "Historical images from the era." },
] as const;

function Home() {
  return (
    <>
      <section
        className="relative text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(10,18,40,0.78), rgba(10,18,40,0.9)), url(${mushroom})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-24 sm:py-32 text-center">
          <p className="uppercase tracking-[0.25em] text-orange-300 text-xs sm:text-sm mb-4">
            A School Project
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold mb-5 tracking-tight">
            The Atomic Bomb
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-200 mb-8 leading-relaxed">
            A short look at one of the most important events of the 20th century — what
            led to the bomb, how it worked, and what it left behind.
          </p>
          <Link
            to="/history"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 hover:-translate-y-0.5 transition-all duration-200 text-white font-medium px-6 py-3 rounded-full shadow-md"
          >
            Start Reading <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0f1f44] mb-2">Explore</h2>
        <p className="text-slate-600 mb-8">Pick a section to learn more.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tiles.map(({ to, label, icon: Icon, desc }) => (
            <Link
              key={to}
              to={to}
              className="group bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-orange-300 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-[#0f1f44] text-white flex items-center justify-center mb-3 group-hover:bg-orange-500 transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-[#0f1f44] mb-1">{label}</h3>
              <p className="text-sm text-slate-600">{desc}</p>
              <span className="inline-flex items-center gap-1 mt-3 text-sm text-orange-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Open <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
