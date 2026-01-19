import { motion } from "framer-motion";

export default function CompanySection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
          Company
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
          A Long-Term Platform Company
        </h2>

        {/* Premium mission card with gradient border */}
        <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-indigo-500 to-teal-500 shadow-lg">
          <div className="bg-white rounded-2xl p-8 md:p-10">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
              Our Mission
            </p>
            <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed">
              Make credit intelligence more transparent, actionable, and aligned
              with real-world decision-making.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
