import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ProductDeck() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Two Execution Layers. One Intelligence Core.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl">
          {/* Large Card - LumiqAI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:row-span-2 group relative bg-white rounded-2xl border border-gray-200 p-8 card-hover overflow-hidden"
          >
            {/* Gradient border on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-teal-500 rounded-xl">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">LumiqAI™</h3>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Enterprise-grade credit intelligence APIs for banks, fintechs,
                and platforms. Deploy decisioning infrastructure in weeks, not quarters.
              </p>

              {/* Code snippet mock */}
              <div className="bg-gray-900 rounded-xl p-4 mb-6 font-mono text-sm overflow-hidden">
                <div className="flex gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <code className="text-gray-400">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">score</span> ={" "}
                  <span className="text-yellow-400">await</span>{" "}
                  <span className="text-green-400">lumiq</span>
                  <span className="text-white">.readiness.get(</span>
                  <span className="text-orange-400">userId</span>
                  <span className="text-white">);</span>
                </code>
              </div>

              {/* Mini node graph */}
              <div className="flex items-center justify-center gap-2 mb-6 py-4">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-xs text-indigo-700 font-medium">
                  Input
                </div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-teal-500" />
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-teal-500 flex items-center justify-center text-xs text-white font-medium text-center">
                  LumiqAI<br/>Core
                </div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-teal-500 to-green-500" />
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-xs text-teal-700 font-medium">
                  Output
                </div>
              </div>

              <Link to="/lumiq-ai">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 btn-pill">
                  Explore LumiqAI <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Card 2 - FuteurCredX App */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative bg-white rounded-2xl border border-gray-200 p-8 card-hover overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">FuteurCredX App</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Credit visibility and readiness intelligence for consumers and SMB
                owners. Understand where you stand and what's next.
              </p>

              {/* Phone mock placeholder */}
              <div className="relative h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center">
                <div className="w-16 h-28 bg-gray-900 rounded-xl border-4 border-gray-800 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
              </div>

              <Link to="/futeurcredx-app">
                <Button variant="outline" className="border-gray-200 text-gray-900 hover:bg-gray-50 btn-pill">
                  Explore FuteurCredX <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
