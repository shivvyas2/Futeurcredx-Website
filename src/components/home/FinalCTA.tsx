import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-[#2D2424] relative overflow-hidden">
      {/* Floating decorations */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-20 h-20 bg-[#C9B896]/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-[15%] w-32 h-32 bg-[#C9B896]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[10%] w-16 h-16 bg-[#C9B896]/15 rounded-full blur-xl"
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#C9B896]/20 text-[#C9B896] rounded-full px-4 py-1.5 text-sm font-medium mb-8 border border-[#C9B896]/30">
            <span className="w-1.5 h-1.5 bg-[#C9B896] rounded-full animate-pulse" />
            Get Started Today
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Credit Intelligence for the{" "}
            <span className="text-[#C9B896]">
              Modern Economy
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the next generation of credit visibility and decisioning.
            Whether you're a consumer, institution, or platform — we have a solution for you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/lumiq-ai">
              <Button className="bg-[#C9B896] text-[#2D2424] hover:bg-[#D4C5A9] rounded-full px-8 py-6 text-base font-semibold shadow-lg group">
                Explore LumiqAI
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/futeurcredx-app">
              <Button variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-semibold">
                Explore FuteurCredX
              </Button>
            </Link>
          </div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-sm text-white/50"
          >
            Trusted by leading financial institutions and fintechs
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
