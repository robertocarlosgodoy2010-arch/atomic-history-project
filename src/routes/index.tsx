import { createFileRoute } from "@tanstack/react-router";
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
    <div className="min-h-screen bg-white text-slate-800 font-serif">
      {/* Nav */}
      <header className="bg-[#1a2a4f] text-white">
        <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h2 className="text-lg font-semibold">Chemistry Project</h2>
          <nav>
            <ul className="flex flex-wrap gap-4 text-sm">
              <li><a href="#title" className="hover:underline">Home</a></li>
              <li><a href="#history" className="hover:underline">History</a></li>
              <li><a href="#chemistry" className="hover:underline">Chemistry</a></li>
              <li><a href="#effects" className="hover:underline">Effects</a></li>
              <li><a href="#conclusion" className="hover:underline">Conclusion</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10">
        {/* Title */}
        <section id="title" className="mb-12">
          <h1 className="text-4xl font-bold text-[#1a2a4f] mb-4">The Atomic Bomb</h1>
          <p className="text-base leading-relaxed mb-6">
            The atomic bomb is one of the most powerful weapons ever created. It changed
            the way wars are fought and made people around the world think about science,
            peace, and responsibility. This project explains a little about its history,
            how it works, and the effects it had on people and the environment.
          </p>
          <img
            src={mushroom}
            alt="Mushroom cloud from an atomic explosion"
            width={1024}
            height={640}
            className="w-full h-auto border border-gray-300"
          />
        </section>

        {/* History */}
        <section id="history" className="mb-12">
          <h2 className="text-2xl font-bold text-[#1a2a4f] border-b border-gray-300 pb-2 mb-4">
            History
          </h2>
          <p className="mb-4 leading-relaxed">
            World War II was a global conflict that lasted from 1939 to 1945. It involved
            most of the world's countries and caused millions of deaths. Near the end of
            the war, the United States developed a new and very powerful weapon: the
            atomic bomb.
          </p>
          <h3 className="text-xl font-semibold mb-2">The Manhattan Project</h3>
          <p className="mb-4 leading-relaxed">
            The Manhattan Project was a secret research program started by the United
            States in 1942. Scientists like J. Robert Oppenheimer worked together to build
            the first atomic bomb. The project took several years and cost billions of
            dollars.
          </p>
          <h3 className="text-xl font-semibold mb-2">Hiroshima and Nagasaki</h3>
          <p className="mb-4 leading-relaxed">
            On August 6, 1945, the United States dropped an atomic bomb on the Japanese
            city of Hiroshima. Three days later, a second bomb was dropped on Nagasaki.
            These bombings caused massive destruction and led to Japan's surrender,
            ending World War II.
          </p>
          <img
            src={hiroshima}
            alt="Hiroshima after the bombing in 1945"
            width={1024}
            height={640}
            loading="lazy"
            className="w-full h-auto border border-gray-300"
          />
        </section>

        {/* Chemistry */}
        <section id="chemistry" className="mb-12">
          <h2 className="text-2xl font-bold text-[#1a2a4f] border-b border-gray-300 pb-2 mb-4">
            Chemistry
          </h2>
          <p className="mb-4 leading-relaxed">
            The atomic bomb works through a process called <strong>nuclear fission</strong>.
            Fission happens when the nucleus of a heavy atom, like Uranium-235, is hit by
            a neutron and splits into two smaller atoms. This releases a large amount of
            energy and more neutrons.
          </p>
          <p className="mb-4 leading-relaxed">
            The new neutrons then hit other uranium atoms, causing them to split too. This
            is called a <strong>chain reaction</strong>. In an atomic bomb, the chain
            reaction happens very fast and produces an enormous explosion.
          </p>
          <p className="mb-4 leading-relaxed">
            A small amount of uranium can release a huge amount of energy because of
            Einstein's famous equation, E = mc². This means that even a tiny bit of mass
            can be turned into a lot of energy.
          </p>
          <img
            src={fission}
            alt="Diagram of nuclear fission"
            width={800}
            height={600}
            loading="lazy"
            className="w-full max-w-md mx-auto h-auto border border-gray-300 bg-white"
          />
        </section>

        {/* Effects */}
        <section id="effects" className="mb-12">
          <h2 className="text-2xl font-bold text-[#1a2a4f] border-b border-gray-300 pb-2 mb-4">
            Effects
          </h2>
          <h3 className="text-xl font-semibold mb-2">Human Impact</h3>
          <p className="mb-4 leading-relaxed">
            The atomic bombings of Hiroshima and Nagasaki killed over 200,000 people.
            Many died instantly, while others suffered from burns, radiation sickness,
            and long-term health problems like cancer.
          </p>
          <h3 className="text-xl font-semibold mb-2">Environmental Effects</h3>
          <p className="mb-4 leading-relaxed">
            The explosions destroyed buildings, started fires, and polluted the air,
            water, and soil with radiation. The land took many years to recover, and some
            areas were unsafe for a long time.
          </p>
          <h3 className="text-xl font-semibold mb-2">Importance in History</h3>
          <p className="mb-4 leading-relaxed">
            The atomic bomb changed the world. It started the nuclear age and led to the
            Cold War between the United States and the Soviet Union. Today, countries
            still discuss nuclear weapons and try to prevent their use.
          </p>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-12">
          <h2 className="text-2xl font-bold text-[#1a2a4f] border-b border-gray-300 pb-2 mb-4">
            Conclusion
          </h2>
          <p className="leading-relaxed">
            The atomic bomb is an example of how powerful science can be. It can be used
            for great discoveries, but it can also cause terrible destruction. Learning
            about the atomic bomb helps us understand history and reminds us to use
            science in a responsible way.
          </p>
        </section>
      </main>

      <footer className="bg-gray-100 border-t border-gray-300 py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-600">
          <p>Made by Roberto Godo</p>
          <p>Middlebury, Indiana</p>
        </div>
      </footer>
    </div>
  );
}
