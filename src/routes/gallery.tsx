import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import mushroom from "@/assets/mushroom-cloud.jpg";
import bomber from "@/assets/bomber.jpg";
import scientists from "@/assets/scientists.jpg";
import hiroshima from "@/assets/hiroshima.jpg";
import treaty from "@/assets/treaty.jpg";
import fission from "@/assets/fission.jpg";
import { PageHeader } from "@/components/page-parts";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — The Atomic Bomb" },
      { name: "description", content: "A small collection of historical images related to the atomic bomb." },
    ],
  }),
});

const images = [
  { src: mushroom, caption: "The mushroom cloud from an atomic explosion." },
  { src: bomber, caption: "A WWII era U.S. bomber aircraft." },
  { src: scientists, caption: "Scientists working in a 1940s laboratory." },
  { src: hiroshima, caption: "Hiroshima after the 1945 bombing." },
  { src: treaty, caption: "The end of WWII — Japan's surrender ceremony." },
  { src: fission, caption: "Diagram of a fission reaction." },
];

function GalleryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <PageHeader kicker="Part 5" title="Gallery" subtitle="Historical images from the era." />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <figure
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="overflow-hidden">
              <img
                src={img.src}
                alt={img.caption}
                width={1024}
                height={640}
                loading="lazy"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0f1f44]/90 to-transparent text-white text-xs sm:text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#0f1f44] hover:bg-[#1a2f5f] hover:-translate-y-0.5 text-white px-6 py-3 rounded-full transition-all duration-200 shadow-sm"
        >
          Back to Home <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
