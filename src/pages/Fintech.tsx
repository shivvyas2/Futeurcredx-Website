import { motion, type Variants, type Easing } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  TrendingUp,
  Code,
  Shield,
  BarChart3,
  Zap,
  Bell,
  Target,
  ArrowRight,
  Award,
  Clock,
  Database,
  Gauge,
  CheckCircle2,
  ChartLine,
  Lock,
  AlertTriangle,
  FileText,
  Hourglass,
  Rocket,
  Monitor,
  Layers,
} from "lucide-react";

const easeOut: Easing = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } }
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.12 } }
};

const FintechPage = () => {
  const [activeCompany, setActiveCompany] = useState<number | null>(null);
  const [showExpanded, setShowExpanded] = useState(false);

  const companies = [
    { 
      name: "Brex", 
      logo: "/fintech-logos/Brex.png", 
      arr: "$300M ARR", 
      current: "12%", 
      projected: "19%", 
      improvement: "+58%", 
      potential: "$174M",
      dropoffBefore: "67%",
      dropoffAfter: "9%",
      approvalBefore: "12%",
      approvalAfter: "42%",
      speedBefore: "14 days",
      speedAfter: "2-6 sec"
    },
    { 
      name: "Ramp", 
      logo: "/fintech-logos/Ramp.jpeg", 
      arr: "$200M ARR", 
      current: "15%", 
      projected: "24%", 
      improvement: "+60%", 
      potential: "$120M",
      dropoffBefore: "62%",
      dropoffAfter: "11%",
      approvalBefore: "15%",
      approvalAfter: "48%",
      speedBefore: "10 days",
      speedAfter: "3-8 sec"
    },
    { 
      name: "Mercury", 
      logo: "/fintech-logos/mercury.png", 
      arr: "$120M ARR", 
      current: "8%", 
      projected: "14%", 
      improvement: "+75%", 
      potential: "$90M",
      dropoffBefore: "71%",
      dropoffAfter: "8%",
      approvalBefore: "8%",
      approvalAfter: "38%",
      speedBefore: "21 days",
      speedAfter: "4-10 sec"
    }
  ];

  const lumiqProducts = [
    {
      icon: Target,
      title: "LUMIQ AI Conversion Engine™",
      desc: "Real-time credit scoring for higher completions",
      screenshot: "/screenshots/conversion-dashboard.jpg",
      metrics: [
        { label: "Impact", value: "+47% conversion rate" },
        { label: "Setup", value: "Single API call" },
        { label: "Analytics", value: "Full journey tracking" }
      ]
    },
    {
      icon: FileText,
      title: "LUMIQ AI Underwriting Assistant™",
      desc: "Multi-bureau intelligence for smarter decisions",
      screenshot: "/screenshots/underwriting-dashboard.jpg",
      metrics: [
        { label: "Impact", value: "+23% accurate approvals" },
        { label: "Setup", value: "Real-time APIs" },
        { label: "Analytics", value: "-60% false positives" }
      ]
    },
    {
      icon: BarChart3,
      title: "LUMIQ AI Engagement Dashboard™",
      desc: "Credit health monitoring for retention",
      screenshot: "/screenshots/engagement-dashboard.jpg",
      metrics: [
        { label: "Impact", value: "3.2x platform usage" },
        { label: "Setup", value: "White-label widgets" },
        { label: "Analytics", value: "-85% churn rate" }
      ]
    },
    {
      icon: Gauge,
      title: "LUMIQ AI Risk Intelligence™",
      desc: "Predictive monitoring for portfolio health",
      screenshot: "/screenshots/risk-dashboard.jpg",
      metrics: [
        { label: "Impact", value: "-30% default rates" },
        { label: "Setup", value: "Automated alerts" },
        { label: "Analytics", value: "Real-time scoring" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1612] text-[#F5F0EB]">
      {/* HERO - UI8 Inspired with Floating Cards */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background with gradient overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/60.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1612] via-[#1A1612]/95 to-[#1A1612]/50" />
        
        <div className="container mx-auto px-[6%] py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={stagger}
            >
              <motion.div 
                variants={fadeUp}
                className="inline-flex items-center gap-2 bg-[#C9A87C]/10 border border-[#C9A87C]/30 rounded-full px-4 py-2 mb-6"
              >
                <TrendingUp className="w-4 h-4 text-[#C9A87C]" />
                <span className="text-sm text-[#C9A87C] font-medium">Revenue Optimization Alert</span>
              </motion.div>
              
              <motion.h1 
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05] tracking-[-0.02em] mb-6"
              >
                Brex, Ramp, Mercury:
                <br />
                <span className="text-[#C9A87C]">You're Leaving Money on the Table</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeUp}
                className="text-lg text-[#B8AFA6] leading-relaxed max-w-[520px] mb-8"
              >
                Every major fintech that added credit visibility saw 40%+ revenue growth.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
                <Link to="/request-demo">
                  <Button className="bg-[#C9A87C] text-[#1A1612] hover:bg-[#D4B88A] rounded-full px-8 py-6 text-base font-semibold">
                    Request Pilot
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="https://docs.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-[#3D362D] text-[#F5F0EB] hover:bg-[#252019] rounded-full px-8 py-6 text-base font-semibold bg-transparent">
                    <Code className="mr-2 h-4 w-4" />
                    View API Docs
                  </Button>
                </a>
              </motion.div>

              {/* Hero Metrics Band */}
              <motion.div variants={fadeUp} className="flex gap-8">
                {[
                  { value: "+47%", label: "Conversion increase" },
                  { value: "+23%", label: "Accurate approvals" },
                  { value: "85%", label: "Faster decisions" }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <p className="text-3xl font-bold text-[#C9A87C]">{item.value}</p>
                    <p className="text-xs text-[#8A8178]">{item.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* UI8-Inspired Floating Card Stack */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[520px]">
                {/* Main Decisioning Card */}
                <motion.div 
                  className="absolute top-0 right-0 w-[320px] bg-[#252019] border border-[#3D362D] rounded-2xl p-6 shadow-2xl z-30"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-[#C9A87C]" />
                      <span className="font-semibold">Decisioning Summary</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-green-400">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Live
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-[#8A8178]">Recommended Action</span>
                      <span className="text-green-400 font-semibold">Approve</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-[#8A8178]">Confidence</span>
                      <span className="font-semibold">High (86%)</span>
                    </div>
                    <div>
                      <span className="text-sm text-[#8A8178] block mb-2">Key Signals</span>
                      <div className="flex gap-2">
                        {["Verified", "Stable", "Growing"].map((signal) => (
                          <span key={signal} className="bg-[#C9A87C]/10 text-[#C9A87C] text-xs px-3 py-1 rounded-full">
                            {signal}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="bg-[#1A1612] text-xs px-2 py-1 rounded text-[#8A8178]">Identity match</span>
                      <span className="bg-[#1A1612] text-xs px-2 py-1 rounded text-[#8A8178]">Registry active</span>
                      <span className="bg-[#1A1612] text-xs px-2 py-1 rounded text-[#8A8178]">Low risk flags</span>
                    </div>
                  </div>
                </motion.div>

                {/* Credit Intelligence Card */}
                <motion.div 
                  className="absolute top-20 -left-8 w-[280px] bg-[#2D251D] border border-[#3D362D] rounded-xl p-5 shadow-lg z-20"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <ChartLine className="w-4 h-4 text-[#C9A87C]" />
                    <span className="text-sm font-semibold">Credit Intelligence</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#1A1612] rounded-lg p-3">
                      <p className="text-xs text-[#8A8178] mb-1">Business Credit</p>
                      <p className="text-xl font-bold">Score <span className="text-[#C9A87C]">72</span></p>
                      <p className="text-xs text-[#8A8178]">Tradelines <span className="text-[#F5F0EB]">4</span></p>
                      <p className="text-xs text-green-400">Trend ↑</p>
                    </div>
                    <div className="bg-[#1A1612] rounded-lg p-3">
                      <p className="text-xs text-[#8A8178] mb-1">Personal Credit</p>
                      <p className="text-xl font-bold">Score <span className="text-[#C9A87C]">694</span></p>
                      <p className="text-xs text-[#8A8178]">Utilization <span className="text-[#F5F0EB]">28%</span></p>
                      <p className="text-xs text-[#8A8178]">Inquiries <span className="text-[#F5F0EB]">2</span></p>
                    </div>
                  </div>
                  <p className="text-[10px] text-[#8A8178] text-center mt-3">Updated: Today</p>
                </motion.div>

                {/* Approval Readiness Card */}
                <motion.div 
                  className="absolute bottom-20 left-4 w-[200px] bg-[#252019] border border-[#3D362D] rounded-xl p-4 shadow-lg z-10"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <p className="text-xs text-[#8A8178] mb-3">Approval Readiness</p>
                  <div className="flex gap-1 mb-3">
                    {["Verify", "Stabilize", "Build"].map((step, i) => (
                      <div key={step} className="flex-1 text-center">
                        <div className="w-6 h-6 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-1">
                          <CheckCircle2 className="w-3 h-3 text-green-400" />
                        </div>
                        <span className="text-[8px] text-[#8A8178]">{step}</span>
                      </div>
                    ))}
                    {["Qualify", "Unlock"].map((step, i) => (
                      <div key={step} className="flex-1 text-center">
                        <div className="w-6 h-6 mx-auto bg-[#C9A87C]/20 rounded-full flex items-center justify-center mb-1">
                          <span className="text-[10px] text-[#C9A87C]">{i + 4}</span>
                        </div>
                        <span className="text-[8px] text-[#8A8178]">{step}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#1A1612] rounded p-2">
                    <p className="text-[10px] text-[#8A8178]">Next unlock</p>
                    <p className="text-xs font-semibold">Corporate Card / LOC</p>
                    <p className="text-[10px] text-green-400">Est. readiness: On track</p>
                  </div>
                </motion.div>

                {/* API Response Card */}
                <motion.div 
                  className="absolute bottom-0 right-8 w-[220px] bg-[#1A1612] border border-[#3D362D] rounded-xl p-4 shadow-lg z-10"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                >
                  <div className="text-xs font-mono text-[#C9A87C] mb-2">API Response</div>
                  <div className="text-[10px] font-mono text-[#8A8178] space-y-1 bg-[#0D0B0A] rounded p-2">
                    <p className="text-[#F5F0EB]">{"{"}</p>
                    <p className="pl-2">"decision": <span className="text-green-400">"approve"</span>,</p>
                    <p className="pl-2">"confidence": <span className="text-[#C9A87C]">0.86</span>,</p>
                    <p className="pl-2">"signals": [...],</p>
                    <p className="pl-2">"readiness": <span className="text-green-400">"qualify"</span>,</p>
                    <p className="pl-2">"next_product": <span className="text-green-400">"card_or_loc"</span></p>
                    <p className="text-[#F5F0EB]">{"}"}</p>
                  </div>
                  <p className="text-[10px] text-[#8A8178] mt-2 text-center">Embeddable in your stack.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UNDERWRITING SIGNALS SECTION */}
      <section className="py-20 bg-[#141110]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-[1100px] mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4">
                Underwriting Starts With Signals
              </h2>
              <p className="text-[#B8AFA6] max-w-[700px] mx-auto">
                Real-time fundability visibility + explainable approval paths powered by deeper business signals.
              </p>
            </motion.div>

            {/* Signal Comparison - Toggle View */}
            <motion.div variants={fadeUp} className="mb-8">
              <div className="flex justify-center mb-6">
                <button
                  onClick={() => setShowExpanded(!showExpanded)}
                  className="px-4 py-2 bg-[#252019] border border-[#3D362D] rounded-full text-sm text-[#C9A87C] hover:bg-[#2D251D] transition-colors"
                >
                  Click to toggle view
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
                  <div className="flex items-center gap-2 text-red-400 mb-4">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-sm font-medium">Status Quo</span>
                  </div>
                  <p className="text-lg font-semibold mb-4">Revenue + Owner FICO only</p>
                  <div className="space-y-3 text-sm text-[#8A8178]">
                    <div className="flex items-center gap-2">
                      <span className="text-red-400">✕</span>
                      Shallow signal depth
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-400">✕</span>
                      67% application drop-off
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-400">✕</span>
                      Days to decision
                    </div>
                  </div>
                </div>

                <div className="bg-[#C9A87C]/5 border border-[#C9A87C]/20 rounded-2xl p-6">
                  <div className="flex items-center gap-2 text-[#C9A87C] mb-4">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-medium">LumiqAI + FuteurCredX Edge</span>
                  </div>
                  <p className="text-lg font-semibold mb-4">Expanded Business Trust Signals + Instant Unlock Gravity</p>
                  <div className="space-y-3 text-sm">
                    {[
                      { label: "Identity", icon: Lock, status: "REQUIRED" },
                      { label: "Registry", icon: FileText, status: "REQUIRED" },
                      { label: "Banking Behavior", icon: Database, status: "OPTIONAL / CONDITIONAL" },
                      { label: "Business Credit File", icon: ChartLine, status: "ELIGIBLE" },
                      { label: "Deposit Stability", icon: Shield, status: "OPTIONAL" },
                      { label: "Missing Signal Flags", icon: Bell, status: "AUTOMATED DETECTION" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <item.icon className="w-4 h-4 text-[#C9A87C]" />
                          <span className="text-[#B8AFA6]">{item.label}</span>
                        </div>
                        <span className="text-[10px] bg-[#C9A87C]/10 text-[#C9A87C] px-2 py-1 rounded">{item.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Impact Metrics with descriptions */}
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                { label: "Application Drop-off", before: "67%", after: "5%", trend: "↓", desc: "Users don't churn when they can see approval odds + unlock paths upfront." },
                { label: "Fundability", before: "0%", after: "40%+ retained", trend: "↑", desc: "Users don't churn when they can see approval odds + unlock paths upfront." },
                { label: "Decision Time", before: "Days", after: "Seconds", trend: "↓", desc: "Users don't churn when they can see approval odds + unlock paths upfront." }
              ].map((item, i) => (
                <div key={i} className="bg-[#1F1A16] border border-[#2D261F] rounded-xl p-5">
                  <p className="text-sm text-[#8A8178] mb-2">{item.label} <span className="text-[#C9A87C]">{item.trend}</span></p>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-lg text-red-400 line-through">{item.before}</span>
                    <ArrowRight className="w-4 h-4 text-[#C9A87C]" />
                    <span className="text-2xl font-bold text-green-400">{item.after}</span>
                  </div>
                  <p className="text-xs text-[#8A8178]">{item.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Explainability Section */}
            <motion.div variants={fadeUp} className="bg-[#1F1A16] border border-[#2D261F] rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-8 h-8 bg-[#C9A87C]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C9A87C] text-sm font-bold">i</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Explainability That Funds, Not Just Scores</h3>
                  <p className="text-sm text-[#8A8178]">
                    We add signal depth. Fintech keeps their underwriting. Users keep their patience. You keep the customers.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  {[
                    "Decline reason codes generated in real-time",
                    "Unlock path shown instantly in-app",
                    "No underwriting model rewrite needed",
                    "More approvals retained over time",
                    "Revenue signals enriched when missing"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#B8AFA6]">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Lock, label: "Identity + Registry", status: "Required" },
                    { icon: Database, label: "Banking + Deposit Behavior", status: "Optional / Conditional" },
                    { icon: ChartLine, label: "Business Credit + Bureau File", status: "Eligible" },
                    { icon: Target, label: "Fundability Output", status: "Realtime % + Reason Codes" }
                  ].map((item, i) => (
                    <div key={i} className="bg-[#252019] border border-[#3D362D] rounded-lg p-3 text-center">
                      <item.icon className="w-5 h-5 text-[#C9A87C] mx-auto mb-2" />
                      <p className="text-xs font-medium mb-1">{item.label}</p>
                      <p className="text-[10px] text-[#8A8178]">{item.status}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <Link to="/lumiq-ai">
                  <Button variant="outline" className="border-[#C9A87C]/30 text-[#C9A87C] hover:bg-[#C9A87C]/10 rounded-full">
                    Learn How It Works
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ENTERPRISE TRUST LAYER */}
      <section className="py-20 bg-[#1A1612]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-[1100px] mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#C9A87C]/10 border border-[#C9A87C]/30 rounded-full px-4 py-2 mb-4">
                <Shield className="w-4 h-4 text-[#C9A87C]" />
                <span className="text-sm text-[#C9A87C]">ENTERPRISE TRUST LAYER</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4">
                Built for sponsor-constrained decisioning.
              </h2>
              <p className="text-[#B8AFA6] max-w-[700px] mx-auto">
                LumiqAI governs uncertainty before approval: stage + confidence, sponsor-aligned guardrails, and auditable decision trails.
              </p>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-8">
              {["SOC2 + SOC3 aligned", "ISO27001 roadmap", "Reason codes + reviewer trails", "Sponsor-safe exposure"].map((badge) => (
                <span key={badge} className="bg-[#252019] border border-[#3D362D] rounded-full px-4 py-2 text-sm text-[#B8AFA6]">
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="text-center text-[#8A8178] text-sm mb-10">
              This is a control layer. Not an underwriting override.
            </motion.p>

            {/* Sponsor Governance Console */}
            <motion.div variants={fadeUp} className="bg-[#1F1A16] border border-[#2D261F] rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold">Sponsor Governance Console</h3>
                <span className="bg-[#C9A87C]/10 text-[#C9A87C] text-xs px-3 py-1 rounded-full">READY FOR REVIEW</span>
              </div>
              <p className="text-sm text-[#8A8178] mb-6">Click a tab to preview the artifacts procurement actually reviews.</p>
              
              {/* Tabs */}
              <div className="flex gap-2 mb-6 flex-wrap">
                {["Policy Guardrails", "Audit Trail", "Consent + Data", "Integration"].map((tab, i) => (
                  <button 
                    key={tab}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${i === 0 ? 'bg-[#C9A87C] text-[#1A1612]' : 'bg-[#252019] text-[#B8AFA6] hover:bg-[#2D251D]'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Staged Exposure Ladder */}
                <div className="bg-[#252019] border border-[#3D362D] rounded-xl p-5">
                  <h4 className="text-sm font-semibold mb-4">Staged Exposure Ladder</h4>
                  <div className="space-y-3">
                    {[
                      { stage: 0, label: "Identity + Registry", status: "Required" },
                      { stage: 1, label: "Banking Signals", status: "Optional" },
                      { stage: 2, label: "Trade / Bureau Signals", status: "Conditional" },
                      { stage: 3, label: "Sponsor-Safe Offer", status: "Eligible" }
                    ].map((item) => (
                      <div key={item.stage} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#C9A87C]/20 rounded-full flex items-center justify-center">
                          <span className="text-xs text-[#C9A87C]">{item.stage}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">{item.label}</p>
                        </div>
                        <span className="text-[10px] text-[#8A8178]">{item.status}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-[#8A8178] mt-4">Exposure increases only when sponsor constraints are satisfied.</p>
                </div>

                {/* Guardrail Rules */}
                <div className="bg-[#252019] border border-[#3D362D] rounded-xl p-5">
                  <h4 className="text-sm font-semibold mb-4">Guardrail Rules (examples)</h4>
                  <div className="space-y-3 text-sm text-[#B8AFA6]">
                    <p>Revenue Missing → Require Banking or Time-in-Business</p>
                    <p>Sponsor Policy Thresholds → Enforced at Every Stage</p>
                    <p>High-Risk Flags → Freeze Exposure + Request Unlock Actions</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-6 justify-center">
                <Link to="/request-demo">
                  <Button className="bg-[#C9A87C] text-[#1A1612] hover:bg-[#D4B88A] rounded-full">
                    Request a Pilot
                  </Button>
                </Link>
                <a href="https://docs.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-[#3D362D] text-[#F5F0EB] hover:bg-[#252019] rounded-full bg-transparent">
                    View Technical Docs
                  </Button>
                </a>
              </div>
              <p className="text-xs text-[#8A8178] text-center mt-4">Typical integration: 1–2 weeks. No underwriting rewrite.</p>
            </motion.div>

            <motion.p variants={fadeUp} className="text-center text-lg text-[#B8AFA6] italic">
              Fintechs lose applicants because signals are shallow. We make signals deep + decisions fast.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* REVENUE POTENTIAL - Interactive Fintech Cards */}
      <section className="py-20 bg-[#141110]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-[1100px] mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4">
                Your Revenue Potential with Credit Intelligence
              </h2>
              <p className="text-[#B8AFA6]">Conservative projections based on proven fintech implementations.</p>
            </motion.div>

            {/* Interactive Fintech Cards */}
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6 mb-10">
              {companies.map((company, i) => (
                <div 
                  key={i} 
                  className={`relative bg-[#1F1A16] border rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${activeCompany === i ? 'border-[#C9A87C] ring-2 ring-[#C9A87C]/20' : 'border-[#2D261F] hover:border-[#C9A87C]/30'}`}
                  onClick={() => setActiveCompany(activeCompany === i ? null : i)}
                >
                  {activeCompany !== i ? (
                    // Front Card
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2">
                          <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{company.name}</h3>
                          <p className="text-sm text-[#C9A87C]">{company.arr}</p>
                        </div>
                      </div>
                      <div className="bg-[#252019] border border-[#3D362D] rounded-lg p-3 mb-4">
                        <p className="text-xs text-[#8A8178] mb-1">Current Underwriting</p>
                        <div className="flex gap-2">
                          {["FICO", "Revenue", "Manual Review"].map((tag) => (
                            <span key={tag} className="bg-[#1A1612] text-[10px] px-2 py-1 rounded">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-[#8A8178] mb-1">Application Conversion</p>
                        <p className="text-lg font-semibold">{company.current} → <span className="text-green-400">{company.projected}</span></p>
                        <p className="text-xs text-green-400">{company.improvement} improvement</p>
                      </div>
                      <div className="bg-[#C9A87C]/10 border border-[#C9A87C]/20 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-[#C9A87C]">{company.potential}</p>
                        <p className="text-xs text-[#8A8178]">additional ARR potential</p>
                      </div>
                      <p className="text-xs text-[#C9A87C] text-center mt-4">Click to inspect underwriting depth</p>
                    </div>
                  ) : (
                    // Expanded Card
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <img src={company.logo} alt={company.name} className="w-8 h-8 object-contain" />
                        <h4 className="font-bold">Underwriting Depth Upgrade</h4>
                      </div>
                      <div className="space-y-2 mb-4 text-sm">
                        {[
                          "Owner FICO → Base signal",
                          "Business Credit File → Tradelines + limits",
                          "Deposit Stability → 6–12 mo trend",
                          "Banking Behavior → Bounced ACH + avg balance",
                          "Unlock Path AI → Fastest qualification route"
                        ].map((item, j) => (
                          <p key={j} className="text-[#B8AFA6]">{item}</p>
                        ))}
                      </div>
                      <div className="w-full bg-[#252019] rounded-full h-2 mb-4">
                        <div className="bg-gradient-to-r from-[#C9A87C] to-green-400 h-2 rounded-full" style={{ width: '0%' }}></div>
                      </div>
                      <p className="text-[10px] text-[#8A8178] text-center mb-4">0% → 100% CERTAINTY</p>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-[#8A8178]">Drop-off Reduction</span>
                          <span>{company.dropoffBefore} → <span className="text-green-400">{company.dropoffAfter}</span></span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#8A8178]">Approval Retention</span>
                          <span>{company.approvalBefore} → <span className="text-green-400">{company.approvalAfter}</span></span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#8A8178]">Decision Speed</span>
                          <span>{company.speedBefore} → <span className="text-green-400">{company.speedAfter}</span></span>
                        </div>
                      </div>
                      <p className="text-xs text-[#C9A87C] text-center mt-4">Click to flip back</p>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Combined Impact */}
            <motion.div variants={fadeUp} className="bg-[#1F1A16] border border-[#2D261F] rounded-2xl p-6">
              <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
                <span className="bg-[#252019] px-3 py-1 rounded text-xs text-[#8A8178]">UPSTREAM IMPACT</span>
                <span className="text-[#C9A87C]">+</span>
                <span className="bg-[#252019] px-3 py-1 rounded text-xs text-[#8A8178]">POLICY-ALIGNED ROI</span>
              </div>
              <h3 className="font-bold text-xl text-center mb-2">Combined Fintech Market Impact</h3>
              <p className="text-sm text-[#8A8178] text-center mb-8 max-w-[600px] mx-auto">
                Lift generated before approval through readiness + staged exposure. ROI compounds when 'not yet' becomes guided progression.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "$384M+", label: "Additional ARR potential", sub: "Sponsor-safe gating" },
                  { value: "47%", label: "Average conversion increase", sub: "No 'black box'" },
                  { value: "90%", label: "Customer satisfaction boost", sub: "Audit-aligned" },
                  { value: "92%", label: "Sponsor-safe funnel accuracy", sub: "Generated by turning declines into staged progression pipelines" }
                ].map((item, i) => (
                  <div key={i} className="bg-[#252019] border border-[#3D362D] rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-[#C9A87C] mb-1">{item.value}</p>
                    <p className="text-xs text-[#F5F0EB] mb-1">{item.label}</p>
                    <p className="text-[10px] text-[#8A8178]">{item.sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ROI Section */}
            <motion.div variants={fadeUp} className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                { title: "Year-1 ROI", value: "580%", desc: "ROI in first year", sub: "Driven by higher approvals + retention. Stays sponsor-aligned—no override." },
                { title: "Revenue / 10K MAU", value: "$2.4M", desc: "Additional revenue per 10K MAU", sub: "Monetization happens before approval. Pipeline converts 'decline' to progression." },
                { title: "Time to Break-Even", value: "4 weeks", desc: "Time to break even", sub: "Shortens due to visible progress. Less churn + faster repeat attempts." }
              ].map((item, i) => (
                <div key={i} className="bg-[#1F1A16] border border-[#2D261F] rounded-xl p-5">
                  <p className="text-xs text-[#8A8178] mb-2">{item.title}</p>
                  <p className="text-3xl font-bold text-[#C9A87C] mb-1">{item.value}</p>
                  <p className="text-sm mb-2">{item.desc}</p>
                  <p className="text-xs text-[#8A8178]">{item.sub}</p>
                </div>
              ))}
            </motion.div>
            <motion.p variants={fadeUp} className="text-xs text-[#8A8178] text-center mt-4">
              Estimates are directional and depend on sponsor policy + platform mix.
            </motion.p>
            <motion.p variants={fadeUp} className="text-center text-lg text-[#B8AFA6] mt-8 italic">
              Approve less by luck. Approve more by design.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* LUMIQ PRODUCTS - With Screenshots */}
      <section className="py-20 bg-[#1A1612]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-[1200px] mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#C9A87C]/10 border border-[#C9A87C]/30 rounded-full px-4 py-2 mb-4">
                <Rocket className="w-4 h-4 text-[#C9A87C]" />
                <span className="text-sm text-[#C9A87C]">Fintech-Optimized APIs</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4">
                LUMIQ AI™ — Built for Modern Fintechs
              </h2>
              <p className="text-[#B8AFA6] max-w-[600px] mx-auto">
                Drop-in credit intelligence that integrates with your existing stack in hours, not months.
              </p>
            </motion.div>

            {/* Product Cards with Screenshots - UI8 Inspired */}
            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6">
              {lumiqProducts.map((product, i) => (
                <div key={i} className="bg-[#1F1A16] border border-[#2D261F] rounded-2xl overflow-hidden hover:border-[#C9A87C]/30 transition-all group">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-[#C9A87C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <product.icon className="w-5 h-5 text-[#C9A87C]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{product.title}</h3>
                        <p className="text-sm text-[#8A8178]">{product.desc}</p>
                      </div>
                    </div>
                    
                    {/* Screenshot */}
                    <div className="relative rounded-xl overflow-hidden mb-4 bg-[#252019] border border-[#3D362D]">
                      <img 
                        src={product.screenshot} 
                        alt={product.title}
                        className="w-full h-[180px] object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A16] to-transparent opacity-50" />
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2">
                      {product.metrics.map((metric, j) => (
                        <div key={j} className="bg-[#252019] border border-[#3D362D] rounded-lg p-3 text-center">
                          <p className="text-[10px] text-[#8A8178] mb-1">{metric.label}</p>
                          <p className="text-xs font-medium text-[#C9A87C]">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center mt-8">
              <Link to="/request-demo">
                <Button className="bg-[#C9A87C] text-[#1A1612] hover:bg-[#D4B88A] rounded-full px-8">
                  Request Pilot
                </Button>
              </Link>
              <a href="https://docs.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-[#3D362D] text-[#F5F0EB] hover:bg-[#252019] rounded-full bg-transparent">
                  View Docs
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INTEGRATION SECTION - UI8 Inspired */}
      <section className="py-20 bg-[#141110]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-[1100px] mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#C9A87C]/10 border border-[#C9A87C]/30 rounded-full px-4 py-2 mb-4">
                <Hourglass className="w-4 h-4 text-[#C9A87C]" />
                <span className="text-sm text-[#C9A87C]">Simple Integration Example</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4">
                Integration So Simple,<br /> Your Developers Will Thank You
              </h2>
            </motion.div>

            {/* Integration Features - UI8 Style */}
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: Hourglass, title: "15-Minute Setup", desc: "RESTful APIs with comprehensive documentation" },
                { icon: Monitor, title: "Any Tech Stack", desc: "React, Vue, Angular, or pure JavaScript" },
                { icon: Rocket, title: "Production Ready", desc: "99.9% uptime SLA, enterprise security" }
              ].map((item, i) => (
                <div key={i} className="bg-[#1F1A16] border border-[#2D261F] rounded-2xl p-6 text-center hover:border-[#C9A87C]/30 transition-colors">
                  <div className="w-14 h-14 bg-[#C9A87C]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-[#C9A87C]" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-[#8A8178]">{item.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Code Block */}
            <motion.div variants={fadeUp} className="bg-[#1F1A16] border border-[#2D261F] rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#252019] border-b border-[#3D362D]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-xs font-mono text-[#8A8178] ml-2">lumiq-integration.js</span>
              </div>
              <pre className="p-6 text-sm font-mono text-[#B8AFA6] overflow-x-auto">
{`// Add to your application form
const creditScore = await lumiq.getScore({
  businessId: application.businessId,
  includeFactors: true
});

// Display real-time credit visibility
<CreditScoreWidget
  score={creditScore.lumiq_score}
  factors={creditScore.factors}
  recommendations={creditScore.recommendations}
  onImprove={() => showCreditJourney()}
/>

// Instant pre-qualification
const preQual = await lumiq.prequalify({
  score: creditScore.lumiq_score,
  products: ['line_of_credit', 'term_loan']
});

// Result: 47% higher conversion rates`}
              </pre>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#1A1612] border-t border-[#2D261F]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-[700px] mx-auto"
          >
            <motion.h2 
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold tracking-[-0.02em] mb-6"
            >
              Don't Leave 47% More Revenue
              <br /><span className="text-[#C9A87C]">On The Table</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeUp}
              className="text-lg text-[#B8AFA6] mb-4"
            >
              Every day without credit intelligence is money lost to competitors who get it.
            </motion.p>
            
            <motion.p 
              variants={fadeUp}
              className="text-sm text-[#8A8178] mb-8"
            >
              Join the fintechs already using LUMIQ AI to dominate their markets.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-10">
              <Link to="/request-demo">
                <Button className="bg-[#C9A87C] text-[#1A1612] hover:bg-[#D4B88A] rounded-full px-10 py-6 text-base font-semibold">
                  <Gauge className="mr-2 h-4 w-4" />
                  Request Pilot
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="https://docs.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-[#3D362D] text-[#F5F0EB] hover:bg-[#252019] rounded-full px-8 py-6 text-base font-semibold bg-transparent">
                  <Code className="mr-2 h-4 w-4" />
                  View Technical Docs
                </Button>
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-8">
              {[
                { icon: Zap, label: "Instant Setup" },
                { icon: Shield, label: "Enterprise Security" },
                { icon: Award, label: "580% ROI" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-[#8A8178]">
                  <item.icon className="w-4 h-4 text-[#C9A87C]" />
                  {item.label}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FintechPage;
