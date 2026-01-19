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

const FintechSolution = () => {
  const [activeCompany, setActiveCompany] = useState<number | null>(null);
  const [showExpanded, setShowExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const governanceTabs = [
    {
      name: "Policy Guardrails",
      content: {
        title: "Policy Guardrails",
        description: "Define and enforce sponsor-aligned risk boundaries",
        items: [
          { stage: 0, label: "Identity + Registry", status: "Required" },
          { stage: 1, label: "Banking Signals", status: "Optional" },
          { stage: 2, label: "Trade / Bureau Signals", status: "Conditional" },
          { stage: 3, label: "Sponsor-Safe Offer", status: "Eligible" }
        ],
        rules: [
          "Revenue Missing → Require Banking or Time-in-Business",
          "Sponsor Policy Thresholds → Enforced at Every Stage",
          "High-Risk Flags → Freeze Exposure + Request Unlock Actions"
        ],
        footer: "Exposure increases only when sponsor constraints are satisfied."
      }
    },
    {
      name: "Audit Trail",
      content: {
        title: "Decision Audit Trail",
        description: "Full transparency into every decisioning step",
        items: [
          { stage: 1, label: "Application Received", status: "Logged", time: "2024-01-15 09:23:41" },
          { stage: 2, label: "Identity Verified", status: "Passed", time: "2024-01-15 09:23:44" },
          { stage: 3, label: "Credit Signals Pulled", status: "Complete", time: "2024-01-15 09:23:47" },
          { stage: 4, label: "Decision Rendered", status: "Approved", time: "2024-01-15 09:23:48" }
        ],
        rules: [
          "Every signal pull timestamped and logged",
          "Reason codes generated for all outcomes",
          "Reviewer-accessible audit exports"
        ],
        footer: "Complete audit history exportable for sponsor review."
      }
    },
    {
      name: "Consent + Data",
      content: {
        title: "Consent & Data Governance",
        description: "User consent management and data handling policies",
        items: [
          { stage: 1, label: "User Consent Captured", status: "Required" },
          { stage: 2, label: "Data Encryption (AES-256)", status: "Active" },
          { stage: 3, label: "Retention Policy (7 years)", status: "Compliant" },
          { stage: 4, label: "CCPA/GDPR Controls", status: "Enabled" }
        ],
        rules: [
          "Explicit consent before any data pull",
          "Right to deletion honored within 30 days",
          "Data minimization principles enforced"
        ],
        footer: "All data handling complies with SOC2 and sponsor requirements."
      }
    },
    {
      name: "Integration",
      content: {
        title: "Integration Specifications",
        description: "Technical requirements and API configurations",
        items: [
          { stage: 1, label: "REST API Endpoints", status: "v2.1 Stable" },
          { stage: 2, label: "Webhook Callbacks", status: "Configured" },
          { stage: 3, label: "SDK Support", status: "JS, Python, Go" },
          { stage: 4, label: "Sandbox Environment", status: "Available" }
        ],
        rules: [
          "Average response time: < 200ms",
          "99.9% uptime SLA guaranteed",
          "Rate limits: 10K requests/minute"
        ],
        footer: "Full API documentation available in developer portal."
      }
    }
  ];

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
                <a href="https://enterprise.futeurcredx.com/risk-and-control" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#C9A87C] text-[#1A1612] hover:bg-[#D4B88A] rounded-full px-8 py-6 text-base font-semibold">
                    Request Pilot
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="https://docs.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-[#3D362D] text-[#F5F0EB] hover:bg-[#252019] rounded-full px-8 py-6 text-base font-semibold bg-transparent">
                    <Code className="mr-2 h-4 w-4" />
                    View API Docs
                  </Button>
                </a>
                <a href="https://enterprise.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-[#3D362D] text-[#F5F0EB] hover:bg-[#252019] rounded-full px-8 py-6 text-base font-semibold bg-transparent">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
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

            {/* UI8-Inspired Card Grid - Non-overlapping Layout */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Main Decisioning Card */}
                <motion.div 
                  className="col-span-2 bg-[#252019] border border-[#3D362D] rounded-2xl p-5 shadow-2xl"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-[#C9A87C]" />
                      <span className="font-semibold">Decisioning Summary</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-green-400">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Live
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <span className="text-xs text-[#8A8178]">Recommended Action</span>
                      <p className="text-green-400 font-semibold">Approve</p>
                    </div>
                    <div>
                      <span className="text-xs text-[#8A8178]">Confidence</span>
                      <p className="font-semibold">High (86%)</p>
                    </div>
                    <div>
                      <span className="text-xs text-[#8A8178] block mb-1">Key Signals</span>
                      <div className="flex gap-1 flex-wrap">
                        {["Verified", "Stable", "Growing"].map((signal) => (
                          <span key={signal} className="bg-[#C9A87C]/10 text-[#C9A87C] text-[10px] px-2 py-0.5 rounded-full">
                            {signal}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Credit Intelligence Card */}
                <motion.div 
                  className="bg-[#2D251D] border border-[#3D362D] rounded-xl p-4 shadow-lg"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <ChartLine className="w-4 h-4 text-[#C9A87C]" />
                    <span className="text-sm font-semibold">Credit Intelligence</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#1A1612] rounded-lg p-2">
                      <p className="text-[10px] text-[#8A8178] mb-1">Business Credit</p>
                      <p className="text-lg font-bold">Score <span className="text-[#C9A87C]">72</span></p>
                      <p className="text-[10px] text-green-400">Trend ↑</p>
                    </div>
                    <div className="bg-[#1A1612] rounded-lg p-2">
                      <p className="text-[10px] text-[#8A8178] mb-1">Personal Credit</p>
                      <p className="text-lg font-bold">Score <span className="text-[#C9A87C]">694</span></p>
                      <p className="text-[10px] text-[#8A8178]">Util: 28%</p>
                    </div>
                  </div>
                </motion.div>

                {/* Approval Readiness Card */}
                <motion.div 
                  className="bg-[#252019] border border-[#3D362D] rounded-xl p-4 shadow-lg"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <p className="text-xs text-[#8A8178] mb-2">Approval Readiness</p>
                  <div className="flex gap-1 mb-2">
                    {["Verify", "Stabilize", "Build"].map((step) => (
                      <div key={step} className="flex-1 text-center">
                        <div className="w-5 h-5 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-1">
                          <CheckCircle2 className="w-3 h-3 text-green-400" />
                        </div>
                        <span className="text-[8px] text-[#8A8178]">{step}</span>
                      </div>
                    ))}
                    {["Qualify", "Unlock"].map((step, i) => (
                      <div key={step} className="flex-1 text-center">
                        <div className="w-5 h-5 mx-auto bg-[#C9A87C]/20 rounded-full flex items-center justify-center mb-1">
                          <span className="text-[9px] text-[#C9A87C]">{i + 4}</span>
                        </div>
                        <span className="text-[8px] text-[#8A8178]">{step}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#1A1612] rounded p-2">
                    <p className="text-[10px] text-green-400">Est. readiness: On track</p>
                  </div>
                </motion.div>

                {/* API Response Card */}
                <motion.div 
                  className="col-span-2 bg-[#1A1612] border border-[#3D362D] rounded-xl p-4 shadow-lg"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                >
                  <div className="text-xs font-mono text-[#C9A87C] mb-2">API Response</div>
                  <div className="text-[10px] font-mono text-[#8A8178] bg-[#0D0B0A] rounded p-3 grid grid-cols-2 gap-x-4">
                    <div>
                      <p>"decision": <span className="text-green-400">"approve"</span>,</p>
                      <p>"confidence": <span className="text-[#C9A87C]">0.86</span>,</p>
                      <p>"signals": <span className="text-[#F5F0EB]">[...]</span>,</p>
                    </div>
                    <div>
                      <p>"readiness": <span className="text-green-400">"qualify"</span>,</p>
                      <p>"next_product": <span className="text-green-400">"card_or_loc"</span>,</p>
                      <p>"latency_ms": <span className="text-[#C9A87C]">47</span></p>
                    </div>
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

            {/* Interactive Toggle Switch */}
            <motion.div variants={fadeUp} className="flex justify-center mb-8">
              <div className="bg-[#252019] border border-[#3D362D] rounded-full p-1 flex">
                <button
                  onClick={() => setShowExpanded(false)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${!showExpanded 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                    : 'text-[#8A8178] hover:text-[#B8AFA6]'}`}
                >
                  <span className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Status Quo
                  </span>
                </button>
                <button
                  onClick={() => setShowExpanded(true)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${showExpanded 
                    ? 'bg-[#C9A87C] text-[#1A1612]' 
                    : 'text-[#8A8178] hover:text-[#B8AFA6]'}`}
                >
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    With LumiqAI
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Dynamic Content Based on Toggle */}
            <motion.div 
              variants={fadeUp} 
              className="mb-8"
            >
              <motion.div
                key={showExpanded ? 'lumiq' : 'status'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {!showExpanded ? (
                  // Status Quo View
                  <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center gap-2 text-red-400 mb-4">
                          <AlertTriangle className="w-5 h-5" />
                          <span className="font-semibold">Current Industry Standard</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Revenue + Owner FICO only</h3>
                        <p className="text-[#B8AFA6] mb-6">
                          Most fintech underwriting relies on just two signals, leaving 67% of qualified applicants in the dark.
                        </p>
                        <div className="space-y-4">
                          {[
                            { icon: AlertTriangle, label: "Shallow signal depth", desc: "Only 2 data points considered" },
                            { icon: Clock, label: "67% application drop-off", desc: "Users abandon when they can't see progress" },
                            { icon: AlertTriangle, label: "Days to decision", desc: "Manual review bottlenecks" },
                            { icon: AlertTriangle, label: "Binary outcomes only", desc: "Approve or decline, no middle ground" }
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 bg-red-500/5 rounded-lg p-3">
                              <item.icon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium text-red-300">{item.label}</p>
                                <p className="text-xs text-[#8A8178]">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-6">
                        {/* Main Circle */}
                        <div className="w-44 h-44 rounded-full border-4 border-red-500/30 flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-5xl font-bold text-red-400">15%</p>
                            <p className="text-sm text-[#8A8178]">Conversion Rate</p>
                          </div>
                        </div>
                        {/* Badge below - not absolute */}
                        <div className="bg-red-500/20 px-4 py-2 rounded-full">
                          <p className="text-xs text-red-400 font-medium">850 lost per 1K apps</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // LumiqAI View
                  <div className="bg-[#C9A87C]/5 border border-[#C9A87C]/20 rounded-2xl p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center gap-2 text-[#C9A87C] mb-4">
                          <Zap className="w-5 h-5" />
                          <span className="font-semibold">LumiqAI + FuteurCredX Edge</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Expanded Business Trust Signals</h3>
                        <p className="text-[#B8AFA6] mb-6">
                          6+ signal layers with real-time fundability visibility and explainable unlock paths.
                        </p>
                        <div className="space-y-3">
                          {[
                            { icon: Lock, label: "Identity Verification", status: "REQUIRED", active: true },
                            { icon: FileText, label: "Business Registry", status: "REQUIRED", active: true },
                            { icon: Database, label: "Banking Behavior", status: "CONDITIONAL", active: true },
                            { icon: ChartLine, label: "Business Credit File", status: "ELIGIBLE", active: false },
                            { icon: Shield, label: "Deposit Stability", status: "OPTIONAL", active: false },
                            { icon: Bell, label: "Missing Signal Flags", status: "AUTO-DETECT", active: true }
                          ].map((item, i) => (
                            <motion.div 
                              key={i} 
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                                item.active ? 'bg-[#C9A87C]/10 border border-[#C9A87C]/20' : 'bg-[#252019] border border-[#3D362D]'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                  item.active ? 'bg-[#C9A87C]/20' : 'bg-[#3D362D]'
                                }`}>
                                  <item.icon className={`w-4 h-4 ${item.active ? 'text-[#C9A87C]' : 'text-[#8A8178]'}`} />
                                </div>
                                <span className={item.active ? 'text-[#F5F0EB]' : 'text-[#8A8178]'}>{item.label}</span>
                              </div>
                              <span className={`text-[10px] px-2 py-1 rounded ${
                                item.status === 'REQUIRED' ? 'bg-green-500/10 text-green-400' :
                                item.status === 'AUTO-DETECT' ? 'bg-blue-500/10 text-blue-400' :
                                'bg-[#C9A87C]/10 text-[#C9A87C]'
                              }`}>{item.status}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-6">
                        {/* Main Circle */}
                        <div className="relative">
                          <motion.div 
                            className="absolute -top-3 -right-3 bg-[#C9A87C] text-[#1A1612] px-3 py-1 rounded-full text-xs font-bold z-10"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            2.5x
                          </motion.div>
                          <div className="w-44 h-44 rounded-full border-4 border-[#C9A87C]/50 flex items-center justify-center bg-[#C9A87C]/5">
                            <div className="text-center">
                              <p className="text-5xl font-bold text-[#C9A87C]">38%</p>
                              <p className="text-sm text-[#8A8178]">Conversion Rate</p>
                            </div>
                          </div>
                        </div>
                        {/* Badge below - not absolute */}
                        <div className="bg-green-500/20 px-4 py-2 rounded-full">
                          <p className="text-xs text-green-400 font-medium">+153% improvement</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>

            {/* Impact Metrics - Always visible */}
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                { label: "Application Drop-off", before: "67%", after: "5%", trend: "↓", desc: "Users stay when they see approval odds + unlock paths upfront." },
                { label: "Qualified Retained", before: "0%", after: "40%+", trend: "↑", desc: "Soft declines become guided progression pipelines." },
                { label: "Decision Time", before: "Days", after: "Seconds", trend: "↓", desc: "Real-time signals eliminate manual review bottlenecks." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="bg-[#1F1A16] border border-[#2D261F] rounded-xl p-5 hover:border-[#C9A87C]/30 transition-colors"
                  whileHover={{ y: -4 }}
                >
                  <p className="text-sm text-[#8A8178] mb-2">{item.label} <span className="text-[#C9A87C]">{item.trend}</span></p>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-lg text-red-400 line-through">{item.before}</span>
                    <ArrowRight className="w-4 h-4 text-[#C9A87C]" />
                    <span className="text-2xl font-bold text-green-400">{item.after}</span>
                  </div>
                  <p className="text-xs text-[#8A8178]">{item.desc}</p>
                </motion.div>
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
                {governanceTabs.map((tab, i) => (
                  <button 
                    key={tab.name}
                    onClick={() => setActiveTab(i)}
                    className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${activeTab === i ? 'bg-[#C9A87C] text-[#1A1612] font-medium' : 'bg-[#252019] text-[#B8AFA6] hover:bg-[#2D251D]'}`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>

              {/* Dynamic Content Based on Active Tab */}
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {/* Left Column - Items */}
                <div className="bg-[#252019] border border-[#3D362D] rounded-xl p-5">
                  <h4 className="text-sm font-semibold mb-4">{governanceTabs[activeTab].content.title}</h4>
                  <p className="text-xs text-[#8A8178] mb-4">{governanceTabs[activeTab].content.description}</p>
                  <div className="space-y-3">
                    {governanceTabs[activeTab].content.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          item.status === 'Passed' || item.status === 'Complete' || item.status === 'Approved' || item.status === 'Active' || item.status === 'Enabled' || item.status === 'Compliant'
                            ? 'bg-green-500/20' 
                            : item.status === 'Required' 
                              ? 'bg-red-500/20' 
                              : 'bg-[#C9A87C]/20'
                        }`}>
                          {item.status === 'Passed' || item.status === 'Complete' || item.status === 'Approved' || item.status === 'Active' || item.status === 'Enabled' || item.status === 'Compliant' ? (
                            <CheckCircle2 className="w-3 h-3 text-green-400" />
                          ) : (
                            <span className="text-xs text-[#C9A87C]">{item.stage}</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">{item.label}</p>
                          {'time' in item && <p className="text-[10px] text-[#8A8178]">{item.time}</p>}
                        </div>
                        <span className={`text-[10px] px-2 py-1 rounded ${
                          item.status === 'Passed' || item.status === 'Complete' || item.status === 'Approved' || item.status === 'Active' || item.status === 'Enabled' || item.status === 'Compliant'
                            ? 'bg-green-500/10 text-green-400' 
                            : item.status === 'Required' 
                              ? 'bg-red-500/10 text-red-400' 
                              : 'bg-[#C9A87C]/10 text-[#C9A87C]'
                        }`}>{item.status}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-[#8A8178] mt-4">{governanceTabs[activeTab].content.footer}</p>
                </div>

                {/* Right Column - Rules/Details */}
                <div className="bg-[#252019] border border-[#3D362D] rounded-xl p-5">
                  <h4 className="text-sm font-semibold mb-4">
                    {activeTab === 0 ? 'Guardrail Rules' : activeTab === 1 ? 'Audit Capabilities' : activeTab === 2 ? 'Compliance Controls' : 'Technical Specs'}
                  </h4>
                  <div className="space-y-3">
                    {governanceTabs[activeTab].content.rules.map((rule, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#C9A87C] rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-[#B8AFA6]">{rule}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Additional Visual based on tab */}
                  {activeTab === 1 && (
                    <div className="mt-4 p-3 bg-[#1A1612] rounded-lg">
                      <p className="text-[10px] text-[#8A8178] mb-2">Export Format</p>
                      <div className="flex gap-2">
                        {['CSV', 'JSON', 'PDF'].map(format => (
                          <span key={format} className="bg-[#252019] text-[10px] px-2 py-1 rounded text-[#C9A87C]">{format}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 2 && (
                    <div className="mt-4 p-3 bg-[#1A1612] rounded-lg">
                      <p className="text-[10px] text-[#8A8178] mb-2">Certifications</p>
                      <div className="flex gap-2 flex-wrap">
                        {['SOC2', 'GDPR', 'CCPA'].map(cert => (
                          <span key={cert} className="bg-green-500/10 text-[10px] px-2 py-1 rounded text-green-400">{cert}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 3 && (
                    <div className="mt-4 p-3 bg-[#0D0B0A] rounded-lg font-mono text-[10px]">
                      <p className="text-[#8A8178]">// Quick Start</p>
                      <p className="text-[#C9A87C]">npm install @lumiq/sdk</p>
                      <p className="text-[#8A8178] mt-2">// Initialize</p>
                      <p className="text-green-400">lumiq.init(API_KEY)</p>
                    </div>
                  )}
                </div>
              </motion.div>

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
              <a href="https://enterprise.futeurcredx.com/risk-and-control" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#C9A87C] text-[#1A1612] hover:bg-[#D4B88A] rounded-full px-8">
                  Request Pilot
                </Button>
              </a>
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
              <a href="https://enterprise.futeurcredx.com/risk-and-control" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#C9A87C] text-[#1A1612] hover:bg-[#D4B88A] rounded-full px-10 py-6 text-base font-semibold">
                  <Gauge className="mr-2 h-4 w-4" />
                  Request Pilot
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
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

export default FintechSolution;