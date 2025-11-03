import React from 'react';
import { LineChart, Activity, Database } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Develop ensemble AI models for yield & resource prediction',
    desc: 'Blend tree-based, neural, and probabilistic models to forecast yield, water, and nutrient needs at field and crop level.',
    Icon: LineChart,
  },
  {
    id: 2,
    title: 'Simulate real-time agricultural insights',
    desc: 'Stream environmental and sensor data to deliver adaptive recommendations across seasons and micro-climates.',
    Icon: Activity,
  },
  {
    id: 3,
    title: 'Validate with real or synthetic datasets',
    desc: 'Benchmark models using public datasets and synthetic generators to ensure robustness and fairness.',
    Icon: Database,
  },
];

export default function FeaturesTimeline() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold md:text-4xl">Path to Impact</h2>
        <p className="mt-2 text-emerald-700/80">From research to resilient farming systems.</p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-[22px] top-0 hidden h-full w-[2px] bg-emerald-200 sm:block" />
        <ol className="space-y-6">
          {steps.map((s) => (
            <li key={s.id} className="relative">
              <div className="flex items-start gap-4">
                <div className="relative hidden sm:block">
                  <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-emerald-500 shadow ring-4 ring-emerald-200" />
                </div>
                <div className="w-full rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm transition hover:shadow-lg">
                  <div className="mb-2 inline-flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                      <s.Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-semibold md:text-lg">{s.title}</h3>
                  </div>
                  <p className="text-sm text-emerald-700/80">{s.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
