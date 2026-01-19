import { motion } from "framer-motion";
import { User, Building2, Code, Eye } from "lucide-react";

const painPoints = [
  {
    icon: User,
    title: "Consumer Blindspots",
    description: "Consumers lack transparency into where they stand and what they qualify for.",
  },
  {
    icon: Building2,
    title: "Delayed Signals",
    description: "Banks rely on delayed or incomplete data, limiting responsible growth.",
  },
  {
    icon: Code,
    title: "Integration Friction",
    description: "Fintechs struggle to balance speed, risk, and compliance.",
  },
  {
    icon: Eye,
    title: "Limited Visibility",
    description: "Regulators operate with limited real-time visibility into emerging risk.",
  },
];

export default function WhyWeExist() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-teal-50/50 via-blue-50/50 to-indigo-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Rounded container panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 md:p-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              The Credit System Is Fragmented
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Across the financial ecosystem, critical credit signals remain siloed,
              static, or inaccessible.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white rounded-xl shadow-sm">
                    <point.icon className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{point.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl font-semibold text-gray-900">
              FuteurCredX closes the credit signal gap — responsibly and at scale.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
