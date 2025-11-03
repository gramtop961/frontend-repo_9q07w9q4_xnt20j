import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Activity, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Develop ensemble AI models for yield & resource prediction.',
    desc: 'Blend tree-based methods, gradient boosting, and neural nets to capture complex patterns across soil, weather, and crop data.',
    icon: Brain,
    color: 'bg-emerald-600',
  },
  {
    title: 'Simulate real-time agricultural insights.',
    desc: 'Stream sensor and satellite signals to drive adaptive recommendations on irrigation, fertilization, and harvesting.',
    icon: Activity,
    color: 'bg-teal-600',
  },
  {
    title: 'Validate models with real or synthetic datasets.',
    desc: 'Benchmark against historical records and generate privacy-safe synthetic data to stress-test scenarios.',
    icon: CheckCircle2,
    color: 'bg-sky-600',
  },
];

const FeatureTimeline = () => {
  return (
    <section id="features" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">How AgriYield+ Works</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            A streamlined journey from model design to live insights and evidence-backed validation.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 h-full w-px bg-gradient-to-b from-emerald-200 via-emerald-300 to-emerald-200 hidden sm:block" />

          <div className="flex flex-col gap-8">
            {steps.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative grid grid-cols-[auto,1fr] sm:grid-cols-2 items-start gap-4 sm:gap-8`}
              >
                {/* Icon */}
                <div className="col-span-1 flex items-center sm:justify-center">
                  <div className={`h-12 w-12 ${s.color} text-white rounded-full grid place-items-center shadow-lg`}>
                    <s.icon className="h-6 w-6" />
                  </div>
                </div>
                {/* Content */}
                <div className="col-span-1 rounded-xl border border-emerald-100 bg-white p-5 sm:p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-gray-600">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTimeline;
