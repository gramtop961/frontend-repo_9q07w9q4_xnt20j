import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const FooterCTA = () => {
  return (
    <footer className="relative bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-5"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-emerald-500/10 px-4 py-2 text-emerald-300">
            <Rocket className="h-5 w-5" />
            <span className="text-sm font-semibold">Shape the future of sustainable farming</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold">
            Ready to explore AgriYield+?
          </h3>
          <p className="max-w-2xl text-white/80">
            Dive into interactive models and discover how ensemble AI can transform yield prediction and resource efficiency while supporting SDG goals.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#features"
              className="rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 font-semibold shadow focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Learn More
            </a>
            <a
              href="#sdg"
              className="rounded-lg bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-semibold shadow focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              See SDG Impact
            </a>
          </div>
        </motion.div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} AgriYield+. Built for a sustainable, data-driven future.
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
