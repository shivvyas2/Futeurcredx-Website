import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Database, Zap, Shield, Server, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Ingest Signals",
    description: "Connect bureau, bank transactions, KYB/KYC, identity, and platform data through one normalized pipeline.",
    bullets: ["Modular connectors + partner feeds", "Normalization + deduplication", "Consent-aware collection"],
    color: "from-blue-500 to-indigo-600",
    visual: "ingest",
  },
  {
    number: "02",
    icon: Zap,
    title: "Generate Intelligence",
    description: "Turn raw data into readiness, risk, and eligibility outputs — continuously updated, not static.",
    bullets: ["Product-specific scoring", "Tiered outcomes vs binary declines", "Explainability artifacts"],
    color: "from-emerald-500 to-teal-600",
    visual: "generate",
  },
  {
    number: "03",
    icon: Shield,
    title: "Govern and Audit",
    description: "Every model, rule, and decision is logged with traceability for compliance, internal audit, and regulators.",
    bullets: ["Decision trace logs", "Role-based access controls", "Policy constraints + versioning"],
    color: "from-violet-500 to-purple-600",
    visual: "govern",
  },
  {
    number: "04",
    icon: Server,
    title: "Deploy Anywhere",
    description: "LumiqAI supports fintech velocity and bank-grade rigor without rewriting core systems.",
    bullets: ["API-first integration", "Event-driven outputs", "Execution-agnostic architecture"],
    color: "from-amber-500 to-orange-600",
    visual: "deploy",
  },
];

function StepVisual({ type, color }: { type: string; color: string }) {
  if (type === "ingest") {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden w-full max-w-sm">
        <div className={`bg-gradient-to-r ${color} px-5 py-4`}>
          <h4 className="text-white font-semibold">Signal Ingestion</h4>
        </div>
        <div className="p-5 space-y-3">
          {[
            { name: "Credit Bureau", status: "Live", percent: 100 },
            { name: "Bank Transactions", status: "Live", percent: 100 },
            { name: "Identity Data", status: "Processing", percent: 78 },
            { name: "Revenue Signals", status: "Pending", percent: 0 },
          ].map((source) => (
            <div key={source.name} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{source.name}</span>
                <span className={`text-xs font-medium ${source.status === 'Live' ? 'text-emerald-600' : source.status === 'Processing' ? 'text-blue-600' : 'text-gray-400'}`}>
                  {source.status}
                </span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-500`}
                  style={{ width: `${source.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "generate") {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden w-full max-w-sm">
        <div className={`bg-gradient-to-r ${color} px-5 py-4`}>
          <h4 className="text-white font-semibold">Intelligence Output</h4>
        </div>
        <div className="p-5 space-y-4">
          <div className="text-center pb-4 border-b border-gray-100">
            <span className="text-5xl font-bold text-gray-900">742</span>
            <span className="text-emerald-500 text-sm ml-2">+28</span>
            <p className="text-xs text-gray-500 mt-1">Composite Credit Score</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Risk Tier", value: "Low" },
              { label: "Eligibility", value: "3/5" },
              { label: "Readiness", value: "High" },
            ].map((item) => (
              <div key={item.label} className="text-center p-2 bg-gray-50 rounded-lg">
                <span className="text-xs text-gray-500 block">{item.label}</span>
                <span className="text-sm font-bold text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-emerald-600 text-sm bg-emerald-50 p-2 rounded-lg">
            <CheckCircle2 className="w-4 h-4" />
            <span>Continuous monitoring active</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "govern") {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden w-full max-w-sm">
        <div className={`bg-gradient-to-r ${color} px-5 py-4`}>
          <h4 className="text-white font-semibold">Audit Trail</h4>
        </div>
        <div className="p-5 space-y-3">
          {[
            { time: "09:42:31", action: "Decision logged", status: "approve", id: "DEC-2847" },
            { time: "09:42:30", action: "Policy check passed", status: "pass", id: "POL-112" },
            { time: "09:42:29", action: "Model v3.2 executed", status: "run", id: "MDL-89" },
            { time: "09:42:28", action: "Signals normalized", status: "done", id: "SIG-441" },
          ].map((log, i) => (
            <div key={i} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
              <span className="text-[10px] text-gray-400 font-mono w-16">{log.time}</span>
              <span className="flex-1 text-sm text-gray-700">{log.action}</span>
              <span className="text-[10px] text-gray-400 font-mono">{log.id}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 text-violet-600 text-xs mt-2">
            <Shield className="w-3 h-3" />
            <span>Full traceability enabled</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "deploy") {
    return (
      <div className="bg-[#0d1117] rounded-2xl shadow-xl border border-gray-800 overflow-hidden w-full max-w-sm">
        <div className="bg-[#161b22] px-4 py-3 border-b border-gray-800 flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <span className="text-xs text-gray-500 ml-2">api-response.json</span>
        </div>
        <div className="p-4">
          <pre className="text-xs font-mono text-gray-300 leading-relaxed">
{`{
  "decision_id": "dec_2847a",
  "outcome": "approve",
  "confidence": 0.94,
  "tier": "qualified",
  "products_eligible": [
    "line_of_credit",
    "business_card"
  ],
  "explainability": {
    "primary_factors": [
      "strong_payment_history",
      "stable_revenue_trend"
    ]
  },
  "latency_ms": 147
}`}
          </pre>
        </div>
        <div className="px-4 pb-4 flex items-center gap-2 text-amber-500 text-xs">
          <Zap className="w-3 h-3" />
          <span>147ms response time</span>
        </div>
      </div>
    );
  }

  return null;
}

function TimelineStep({ step, index, isLast }: { step: typeof steps[0]; index: number; isLast: boolean }) {
  const stepRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start end", "center center"],
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const dotScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1]);
  const dotOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const contentY = useTransform(scrollYProgress, [0, 0.3, 1], [50, 0, 0]);

  return (
    <div ref={stepRef} className="relative grid lg:grid-cols-[1fr,auto,1fr] gap-8 lg:gap-12 min-h-[450px]">
      {/* Left: Content (on even) / Visual (on odd) */}
      <motion.div 
        style={{ opacity: contentOpacity, y: contentY }}
        className={`flex items-center ${index % 2 === 0 ? 'lg:justify-end' : 'lg:order-3 lg:justify-start'}`}
      >
        {index % 2 === 0 ? (
          <div className="max-w-md text-left lg:text-right">
            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${step.color} text-white mb-4`}>
              Step {step.number}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {step.description}
            </p>
            <ul className="space-y-2">
              {step.bullets.map((bullet, j) => (
                <li key={j} className="flex items-center gap-2 lg:justify-end">
                  <span className="text-gray-600 text-sm">{bullet}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <StepVisual type={step.visual} color={step.color} />
        )}
      </motion.div>

      {/* Center: Timeline */}
      <div className="hidden lg:flex flex-col items-center relative">
        {/* Vertical line background */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-gray-200" />
        
        {/* Animated fill line */}
        <motion.div 
          style={{ height: lineHeight }}
          className={`absolute top-0 w-1 bg-gradient-to-b ${step.color} rounded-full`}
        />
        
        {/* Step dot */}
        <motion.div 
          style={{ scale: dotScale, opacity: dotOpacity }}
          className={`relative z-10 w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
        >
          <step.icon className="w-6 h-6 text-white" />
        </motion.div>
        
        {/* Connecting line to next step */}
        {!isLast && (
          <div className="flex-1 w-0.5 bg-gray-200 relative">
            <motion.div 
              style={{ height: lineHeight }}
              className={`absolute top-0 left-0 right-0 bg-gradient-to-b ${step.color}`}
            />
          </div>
        )}
      </div>

      {/* Right: Visual (on even) / Content (on odd) */}
      <motion.div 
        style={{ opacity: contentOpacity, y: contentY }}
        className={`flex items-center ${index % 2 === 0 ? 'lg:justify-start lg:order-3' : 'lg:justify-end'}`}
      >
        {index % 2 === 0 ? (
          <StepVisual type={step.visual} color={step.color} />
        ) : (
          <div className="max-w-md text-left">
            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${step.color} text-white mb-4`}>
              Step {step.number}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {step.description}
            </p>
            <ul className="space-y-2">
              {step.bullets.map((bullet, j) => (
                <li key={j} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>

      {/* Mobile Timeline Indicator */}
      <div className="lg:hidden absolute left-0 top-0 flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
          <step.icon className="w-5 h-5 text-white" />
        </div>
        {!isLast && <div className="w-0.5 h-full bg-gray-200 mt-2" />}
      </div>
    </div>
  );
}

export default function HowLumiqWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            How it Works
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            How LumiqAI Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From signal ingestion to governed decisions — a complete intelligence pipeline.
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div ref={containerRef} className="space-y-16 lg:space-y-0 pl-12 lg:pl-0">
          {steps.map((step, index) => (
            <TimelineStep 
              key={step.number} 
              step={step} 
              index={index} 
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
