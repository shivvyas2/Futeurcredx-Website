import { motion } from "framer-motion";
import { Smartphone, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    icon: Smartphone,
    title: "FuteurCredX App",
    description:
      "Consumer credit visibility and readiness intelligence — designed to help individuals understand where they stand and what's next.",
    link: "/futeurcredx-app",
    image: "/enterprisesubhero/1.jpg",
  },
  {
    icon: Cpu,
    title: "LumiqAI",
    description:
      "Enterprise-grade credit intelligence APIs powering banks, fintechs, and platforms at scale.",
    link: "/lumiq-ai",
    image: "/enterprisesubhero/2.png",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-white/50 mb-4">
            Our Products
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Two Execution Layers. One Intelligence Core.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
              </div>

              {/* Content */}
              <div className="relative p-8 min-h-[400px] flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {product.title}
                  </h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <Link
                  to={product.link}
                  className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-white/60 mt-12 text-lg"
        >
          Each product is purpose-built, while sharing the same underlying
          intelligence layer.
        </motion.p>
      </div>
    </section>
  );
}
