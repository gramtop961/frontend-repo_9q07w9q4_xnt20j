import React, { useEffect, useRef, useState } from 'react';

function useCountUp(target = 100, duration = 1500) {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();

            const tick = (now) => {
              const progress = Math.min(1, (now - start) / duration);
              setValue(Math.floor(progress * target));
              if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

function Stat({ label, target, suffix = '' }) {
  const { value, ref } = useCountUp(target, 1600);
  return (
    <div ref={ref} className="rounded-2xl border border-emerald-900/10 bg-white p-6 text-center shadow-sm">
      <div className="font-geist text-3xl font-bold">
        {value}
        {suffix}
      </div>
      <p className="mt-1 text-sm text-emerald-700/80">{label}</p>
    </div>
  );
}

export default function StatsCounters() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold md:text-4xl">Measurable Progress</h2>
        <p className="mt-2 text-emerald-700/80">Simple indicators animating as they come into view.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Model Ensembles Tested" target={48} />
        <Stat label="Simulated Scenarios" target={120} />
        <Stat label="Avg. Resource Savings" target={18} suffix="%" />
        <Stat label="Projected Yield Lift" target={12} suffix="%" />
      </div>
    </section>
  );
}
