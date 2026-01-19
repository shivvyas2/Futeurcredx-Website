import { motion } from "framer-motion";

export default function PlatformStatement() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          One Platform. Multiple Execution Layers.
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
          FuteurCredX operates a unified credit intelligence core that supports
          distinct execution layers — from consumer visibility to enterprise-grade
          decisioning infrastructure.
        </p>

        {/* Intelligence Core Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4"
        >
          {/* App Layer Node */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-teal-100 to-teal-50 border-2 border-teal-200 flex flex-col items-center justify-center p-4 shadow-sm">
              <span className="text-3xl mb-1">📱</span>
              <span className="text-sm font-semibold text-teal-800">App Layer</span>
            </div>
            <span className="mt-3 px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">
              Visibility
            </span>
          </div>

          {/* Connector */}
          <div className="hidden md:flex items-center">
            <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-indigo-400 rounded-full" />
          </div>
          <div className="md:hidden w-1 h-8 bg-gradient-to-b from-teal-400 to-indigo-400 rounded-full" />

          {/* Center Core */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500 to-teal-500 flex flex-col items-center justify-center p-4 shadow-lg">
              <span className="text-2xl mb-1">🧠</span>
              <span className="text-sm font-bold text-white text-center">FuteurCredX</span>
              <span className="text-xs text-white/80">Intelligence Core</span>
            </div>
          </div>

          {/* Connector */}
          <div className="hidden md:flex items-center">
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full" />
          </div>
          <div className="md:hidden w-1 h-8 bg-gradient-to-b from-indigo-400 to-violet-400 rounded-full" />

          {/* LumiqAI Layer Node */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-indigo-100 to-indigo-50 border-2 border-indigo-200 flex flex-col items-center justify-center p-4 shadow-sm">
              <span className="text-3xl mb-1">⚡</span>
              <span className="text-sm font-semibold text-indigo-800">LumiqAI Layer</span>
            </div>
            <span className="mt-3 px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
              Decisioning
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
