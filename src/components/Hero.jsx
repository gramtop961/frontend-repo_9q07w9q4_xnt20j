import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      {/* Gradient accent overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_10%,rgba(16,185,129,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-sm font-semibold">
              Aligned with Global Sustainable Development Goals
            </span>
            <h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-gray-900">
              AgriYield+
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-xl">
              Ensemble Machine Learning for Precision Agriculture and Resource Optimization.
              Interactively explore a sustainable, data-driven future for farms and the planet.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#sdg"
                className="inline-flex items-center rounded-lg bg-emerald-600 text-white px-5 py-3 font-semibold shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Explore SDG Impact
              </a>
              <a
                href="#features"
                className="inline-flex items-center rounded-lg bg-white text-emerald-700 px-5 py-3 font-semibold shadow border border-emerald-200 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                See How It Works
              </a>
            </div>
          </motion.div>
        </div>

        {/* Spline Scene */}
        <div className="order-1 lg:order-2 relative h-[360px] sm:h-[420px] lg:h-[560px] w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 rounded-xl overflow-hidden shadow-xl"
          >
            <Spline
              scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
