import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Atom, Zap, History, Globe } from "lucide-react";
import mushroom from "@/assets/mushroom-cloud.jpg";
import fission from "@/assets/fission.jpg";
import hiroshima from "@/assets/hiroshima.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Atomic Bomb - Chemistry Project" },
      {
        name: "description",
        content:
          "A high school chemistry project about the history, science, and effects of the atomic bomb.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-white text-slate-800" style={{ scrollBehavior: "smooth" }}>
      {/* Nav */}
      <header className="sticky top-0 z-30 bg-[#0f1f44] text-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-semibold">
            <Atom className="w-5 h-5 text-orange-400" />
            <span>Chem Project</span>
          </a>
          <nav>
            <ul className="flex flex-wrap gap-4 text-sm">
              <li><a href="#history" className="hover:text-orange-300 transition-colors">History</a></li>
              <li><a href="#chemistry" className="hover:text-orange-300 transition-colors">Chemistry</a></li>
              <li><a href="#effects" className="hover:text-orange-300 transition-colors">Effects</a></li>
              <li><a href="#conclusion" className="hover:text-orange-300 transition-colors">Conclusion</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="relative text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(15,31,68,0.75), rgba(15,31,68,0.85)), url(${mushroom})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-24 sm:py-32 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 tracking-tight">
            The Atomic Bomb
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-200 mb-8 leading-relaxed">
            A short look at the history, chemistry, and impact of one of the most
            powerful weapons ever created. Made for 10th grade chemistry.
          </p>
          <a
            href="#history"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 hover:-translate-y-0.5 transition-all duration-200 text-white font-medium px-6 py-3 rounded-full shadow-md"
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 py-16 space-y-20">
        {/* History */}
        <section id="history">
          <SectionHeader icon={<History className="w-5 h-5" />} kicker="Part 1" title="History" />
          <p className="text-slate-600 mb-8 max-w-3xl leading-relaxed">
            The atomic bomb was developed during World War II (1939–1945), a global
            conflict that involved most of the world's countries. Here are the key
            moments that led to its creation and use.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            <Card title="World War II">
              A global war between the Allies and the Axis powers. By 1945, the United
              States was looking for a way to end the war quickly.
            </Card>
            <Card title="Manhattan Project">
              A secret U.S. research program started in 1942. Led by J. Robert
              Oppenheimer, scientists worked together to build the first atomic bomb.
            </Card>
            <Card title="Hiroshima & Nagasaki">
              On August 6 and 9, 1945, the U.S. dropped two atomic bombs on Japan.
              These attacks led to Japan's surrender and the end of WWII.
            </Card>
          </div>
          <img
            src={hiroshima}
            alt="Hiroshima after the 1945 bombing"
            width={1024}
            height={640}
            loading="lazy"
            className="w-full h-auto rounded-xl mt-8 border border-slate-200 shadow-sm"
          />
        </section>

        {/* Chemistry */}
        <section id="chemistry">
          <SectionHeader icon={<Zap className="w-5 h-5" />} kicker="Part 2" title="The Chemistry" />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                The atomic bomb works through a process called{" "}
                <strong className="text-[#0f1f44]">nuclear fission</strong>. When the
                nucleus of a Uranium-235 atom is hit by a neutron, it splits into two
                smaller atoms.
              </p>
              <p>
                This split releases energy and more neutrons, which hit other uranium
                atoms and cause them to split too. This is called a{" "}
                <strong className="text-[#0f1f44]">chain reaction</strong>.
              </p>
              <p>
                A tiny amount of mass becomes a huge amount of energy, just like
                Einstein's equation says: <em>E = mc²</em>.
              </p>
              <div className="inline-block bg-red-50 border-l-4 border-red-500 px-4 py-3 rounded">
                <p className="text-sm text-red-800 m-0">
                  Just 1 kg of Uranium-235 can release the same energy as about
                  20,000 tons of TNT.
                </p>
              </div>
            </div>
            <img
              src={fission}
              alt="Diagram of nuclear fission"
              width={800}
              height={600}
              loading="lazy"
              className="w-full h-auto rounded-xl border border-slate-200 shadow-sm bg-white"
            />
          </div>
        </section>

        {/* Effects */}
        <section id="effects">
          <SectionHeader icon={<Globe className="w-5 h-5" />} kicker="Part 3" title="Effects" />
          <div className="grid sm:grid-cols-3 gap-5">
            <Card title="Human Impact" accent="red">
              The bombings killed over 200,000 people. Many died instantly, while
              others suffered from burns and radiation sickness for years.
            </Card>
            <Card title="Environmental Impact" accent="red">
              The explosions destroyed buildings and polluted the air, water, and
              soil with radiation. Some areas were unsafe for a long time.
            </Card>
            <Card title="Importance in History" accent="red">
              The atomic bomb started the nuclear age and shaped the Cold War. It
              still affects world politics today.
            </Card>
          </div>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="bg-slate-50 rounded-2xl p-8 sm:p-12 border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f1f44] mb-4">Conclusion</h2>
          <p className="text-slate-700 leading-relaxed max-w-3xl">
            The atomic bomb shows how powerful science can be. It can lead to amazing
            discoveries, but it can also cause terrible destruction. Studying it
            reminds us to use science in a responsible way and to value peace.
          </p>
        </section>
      </main>

      <footer className="bg-[#0f1f44] text-slate-300 py-8 mt-10">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm space-y-1">
          <p className="font-medium text-white">Made by Roberto Godo</p>
          <p>Middlebury, Indiana</p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({
  icon,
  kicker,
  title,
}: {
  icon: React.ReactNode;
  kicker: string;
  title: string;
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 text-orange-600 text-sm font-medium mb-2">
        {icon}
        <span className="uppercase tracking-wider">{kicker}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f44]">{title}</h2>
    </div>
  );
}

function Card({
  title,
  children,
  accent = "blue",
}: {
  title: string;
  children: React.ReactNode;
  accent?: "blue" | "red";
}) {
  const accentClass =
    accent === "red"
      ? "before:bg-red-500"
      : "before:bg-orange-400";
  return (
    <div
      className={`relative bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:rounded-t-xl ${accentClass}`}
    >
      <h3 className="font-semibold text-[#0f1f44] mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{children}</p>
    </div>
  );
}
