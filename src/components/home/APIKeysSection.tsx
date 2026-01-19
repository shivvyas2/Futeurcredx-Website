import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function APIKeysSection() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="gradient-api rounded-3xl p-10 md:p-16 overflow-hidden relative"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                Want access to credit intelligence rails?
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Integrate LumiqAI in weeks — not quarters. Secure endpoints,
                governed outputs, auditable decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/enterprise">
                  <Button className="bg-white text-indigo-700 hover:bg-white/90 btn-pill text-base shadow-lg">
                    Request API Access <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href="https://docs.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 btn-pill text-base bg-transparent">
                    Read the Docs
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Code Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-sm text-gray-400 font-mono">api.futeurcredx.com</span>
              </div>
              
              {/* Code content */}
              <div className="p-6 font-mono text-sm space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">GET</span>
                  <span className="text-gray-300">/v1/readiness/score</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">POST</span>
                  <span className="text-gray-300">/v1/prequal/offers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">GET</span>
                  <span className="text-gray-300">/v1/decision/trace</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">GET</span>
                  <span className="text-gray-300">/v1/portfolio/monitor</span>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <div className="text-gray-500 mb-2"># Response</div>
                  <pre className="text-gray-300">
{`{
  "status": "success",
  "readiness_score": 742,
  "confidence": 0.94
}`}
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
