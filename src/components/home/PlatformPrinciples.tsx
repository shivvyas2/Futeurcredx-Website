import { motion } from "framer-motion";
import { Layers, Brain, ShieldCheck, Scale } from "lucide-react";

const principles = [
  {
    icon: Layers,
    title: "Signal Depth",
    description:
      "Beyond traditional bureau data, incorporating broader indicators of readiness and stability.",
  },
  {
    icon: Brain,
    title: "Unified Intelligence",
    description:
      "One platform serving multiple stakeholders without fragmentation or duplication.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-Native Design",
    description:
      "Architected from the ground up for regulated environments — not retrofitted.",
  },
  {
    icon: Scale,
    title: "Scalable Trust",
    description:
      "From individual consumers to global financial institutions.",
  },
];

export default function PlatformPrinciples() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
      {/* Subtle gradient fog */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-teal-900/20" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-indigo-400 mb-4">
            The FuteurCredX Platform
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Credit Intelligence, Re-Architected
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-2">
            Our platform is built on four foundational principles:
          </p>
          <p className="text-sm text-gray-500">
            Four principles that make LumiqAI operational in regulated environments.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="p-3 bg-gradient-to-br from-indigo-500/20 to-teal-500/20 rounded-xl w-fit mb-4 group-hover:from-indigo-500/30 group-hover:to-teal-500/30 transition-colors">
                <principle.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {principle.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
