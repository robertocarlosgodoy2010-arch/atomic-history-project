import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { PageHeader, NextPage } from "@/components/page-parts";

export const Route = createFileRoute("/charts")({
  component: ChartsPage,
  head: () => ({
    meta: [
      { title: "Charts — The Atomic Bomb" },
      { name: "description", content: "Simple charts showing the timeline, energy comparison, and effects of the atomic bomb." },
    ],
  }),
});

const energyData = [
  { name: "TNT (1 ton)", value: 1 },
  { name: "Largest WWII bomb", value: 11 },
  { name: "Hiroshima bomb", value: 15000 },
  { name: "Nagasaki bomb", value: 21000 },
];

const timelineData = [
  { year: "1939", events: 1 },
  { year: "1941", events: 2 },
  { year: "1942", events: 4 },
  { year: "1943", events: 5 },
  { year: "1944", events: 6 },
  { year: "1945", events: 10 },
];

const effectsData = [
  { name: "Immediate deaths", value: 120000 },
  { name: "Later deaths (radiation)", value: 80000 },
  { name: "Injured survivors", value: 150000 },
];
const COLORS = ["#0f1f44", "#f97316", "#94a3b8"];

function ChartsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <PageHeader kicker="Part 4" title="Charts" subtitle="A few simple graphs to put the numbers in perspective." />

      <div className="grid lg:grid-cols-2 gap-6">
        <ChartCard
          title="Energy Comparison"
          note="In tons of TNT equivalent. The atomic bombs released thousands of times more energy than normal WWII bombs."
        >
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={energyData} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#475569" }} interval={0} angle={-12} textAnchor="end" height={60} />
              <YAxis tick={{ fontSize: 11, fill: "#475569" }} />
              <Tooltip cursor={{ fill: "rgba(15,31,68,0.05)" }} />
              <Bar dataKey="value" fill="#f97316" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Manhattan Project Activity"
          note="Roughly how many major events happened each year leading up to 1945."
        >
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" tick={{ fontSize: 11, fill: "#475569" }} />
              <YAxis tick={{ fontSize: 11, fill: "#475569" }} />
              <Tooltip />
              <Line type="monotone" dataKey="events" stroke="#0f1f44" strokeWidth={2.5} dot={{ r: 4, fill: "#f97316" }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Estimated Effects on People"
          note="Approximate breakdown of those affected in Hiroshima and Nagasaki."
        >
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={effectsData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={85} label={{ fontSize: 11 }}>
                {effectsData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Legend wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Did You Know?"
          note=""
        >
          <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <li className="flex gap-2"><span className="text-orange-500 font-bold">›</span> The Hiroshima bomb was nicknamed "Little Boy".</li>
            <li className="flex gap-2"><span className="text-orange-500 font-bold">›</span> The Nagasaki bomb was nicknamed "Fat Man".</li>
            <li className="flex gap-2"><span className="text-orange-500 font-bold">›</span> The Manhattan Project employed over 120,000 people.</li>
            <li className="flex gap-2"><span className="text-orange-500 font-bold">›</span> The total cost was about $2 billion in 1945 (roughly $30+ billion today).</li>
          </ul>
        </ChartCard>
      </div>

      <NextPage to="/gallery" label="Gallery" />
    </div>
  );
}

function ChartCard({ title, note, children }: { title: string; note: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
      <h3 className="font-semibold text-[#0f1f44] mb-1">{title}</h3>
      {note && <p className="text-xs text-slate-500 mb-3">{note}</p>}
      {children}
    </div>
  );
}
