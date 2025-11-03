import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Cloud } from 'lucide-react';

// Simple counter hook using requestAnimationFrame
function useCounter(target, duration = 1200) {
  const [value, setValue] = useState(0);
  const startRef = useRef(null);

  useEffect(() => {
    let raf;
    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}

const SDGCard = ({ icon: Icon, title, subtitle, color, goal }) => {
  const count = useCounter(goal, 900);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl border border-emerald-100 bg-white p-6 shadow-sm hover:shadow-md"
    >
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-20 blur-2xl"
           style={{ background: color }}
      />
      <div className="flex items-start gap-4">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -6, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="grid h-12 w-12 place-items-center rounded-lg text-white"
          style={{ background: color }}
        >
          <Icon className="h-6 w-6" />
        </motion.div>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-extrabold text-gray-900">{count}</span>
            <span className="text-sm font-semibold text-gray-500">SDG</span>
          </div>
          <h3 className="mt-1 text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
};

const SDGHighlights = () => {
  return (
    <section id="sdg" className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 sm:mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            SDG Focus Areas
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Empowering sustainable agriculture with AI to reduce waste, boost yields, and protect our climate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SDGCard
            icon={Leaf}
            title="Zero Hunger"
            subtitle="Improve yield forecasts and planning to support food security."
            color="linear-gradient(135deg,#22c55e,#16a34a)"
            goal={2}
          />
          <SDGCard
            icon={Recycle}
            title="Responsible Consumption"
            subtitle="Optimize inputs like water and fertilizer to minimize waste."
            color="linear-gradient(135deg,#10b981,#0ea5e9)"
            goal={12}
          />
          <SDGCard
            icon={Cloud}
            title="Climate Action"
            subtitle="Model climate impacts and support resilient farming strategies."
            color="linear-gradient(135deg,#22d3ee,#0ea5e9)"
            goal={13}
          />
        </div>
      </div>
    </section>
  );
};

export default SDGHighlights;
