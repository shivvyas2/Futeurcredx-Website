import { motion, type Variants, type Easing } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Shield, Eye, Lock, Database, Zap, GitBranch, CheckCircle2, Code, Key, FileText, Layers, LineChart, Network, Server, Users, TrendingUp, Activity, BarChart3, ShieldCheck, Copy, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HowLumiqWorks from "@/components/lumiq/HowLumiqWorks";
import { toast } from "sonner";
const easeOut: Easing = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } }
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.12 } }
};

const floatVariants: Variants = {
  initial: { y: 0 },
  animate: { 
    y: [-8, 8, -8],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const }
  }
};

const generateApiKey = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let key = 'sk_live_';
  for (let i = 0; i < 32; i++) {
    key += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return key;
};

const LumiqAI = () => {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateKey = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const newKey = generateApiKey();
      setApiKey(newKey);
      setIsGenerating(false);
      toast.success("API key generated successfully!", {
        description: "Your new API key is ready to use."
      });
    }, 800);
  };

  const handleCopyKey = () => {
    if (apiKey) {
      navigator.clipboard.writeText(apiKey);
      toast.success("API key copied to clipboard!");
    }
  };

  const maskKey = (key: string) => {
    return key.slice(0, 12) + '••••••••••••••••••••';
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#0B0D12]">
      
      {/* ============================================= */}
      {/* SECTION 1: HERO - Enterprise + Institutions Fusion */}
      {/* ============================================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/lumiq-hero-bg.jpg')" }}
        />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="container mx-auto px-6 md:px-[8%] relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={stagger}
              className="relative"
            >
              {/* Eyebrow Badge */}
              <motion.div 
                variants={fadeUp}
                className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8"
              >
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-emerald-400 font-medium tracking-wide">
                  AI-Powered SMB Intelligence Layer
                </span>
              </motion.div>
              
              {/* Main Headline */}
              <motion.h1 
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-[-0.02em] mb-6 text-white"
              >
                Credit Intelligence
                <br />
                <span className="text-[#F5A623]">for Business Banking</span>
              </motion.h1>
              
              {/* Yellow accent bar */}
              <motion.div 
                variants={fadeUp}
                className="w-24 h-1 bg-[#F5A623] rounded-full mb-8"
              />
              
              {/* Subtext */}
              <motion.p 
                variants={fadeUp}
                className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl mb-10"
              >
                LumiqAI combines credit intelligence and AI to help financial institutions control their SMB lending exposure and unlock growth — with explainable, compliant decisioning.
              </motion.p>
              
              {/* CTA Row */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
                <Link to="/contact-sales">
                  <Button className="bg-white text-[#0a0f0a] hover:bg-gray-100 rounded-full px-8 py-6 text-base font-semibold shadow-lg group">
                    Contact Sales
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="https://docs.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
                  <Button className="border border-gray-700 bg-transparent text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-semibold">
                    View Documentation
                  </Button>
                </a>
              </motion.div>
              
              {/* Compliance Badges */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 text-gray-500">
                {[
                  { icon: ShieldCheck, label: "SOC 2 Ready" },
                  { icon: CheckCircle2, label: "FCRA Aligned" },
                  { icon: Eye, label: "Explainable AI" },
                  { icon: Lock, label: "Zero Trust" }
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <badge.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{badge.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Floating Product Cards Stack */}
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[600px] w-full">
                {/* Credit Intelligence Card - Main - Bottom Left */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-24 left-0 z-20"
                >
                  <div className="bg-[#1a2420]/90 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-6 w-[280px] shadow-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-emerald-400" />
                        <span className="text-white font-semibold text-sm">Credit Intelligence</span>
                      </div>
                      <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        Live
                      </span>
                    </div>
                    
                    {/* Score Display */}
                    <div className="flex items-baseline gap-3 mb-5">
                      <span className="text-4xl font-bold text-white">742</span>
                      <div className="flex items-center gap-1 text-emerald-400 text-sm">
                        <TrendingUp className="w-4 h-4" />
                        <span>+12</span>
                      </div>
                      <span className="text-gray-500 text-xs">vs last month</span>
                    </div>
                    
                    {/* Progress Bars */}
                    <div className="space-y-3 mb-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400 text-xs">Payment History</span>
                          <span className="text-emerald-400 font-medium text-xs">Excellent</span>
                        </div>
                        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full w-[92%] bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400 text-xs">Credit Utilization</span>
                          <span className="text-teal-400 font-medium text-xs">Good</span>
                        </div>
                        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full w-[72%] bg-gradient-to-r from-teal-500 to-teal-400 rounded-full" />
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-[10px] text-gray-600 text-center">Updated: Today</p>
                  </div>
                </motion.div>

                {/* Decisioning Summary Card - Top Right */}
                <motion.div
                  animate={{ y: [-3, 5, -3] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-16 right-0 z-30"
                >
                  <div className="bg-[#1a1d24]/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-5 w-[260px] shadow-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-semibold text-sm">Decisioning Summary</span>
                      </div>
                      <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        Live
                      </span>
                    </div>
                    
                    <div className="space-y-2.5">
                      <div className="flex justify-between">
                        <span className="text-gray-500 text-xs">Recommended Action</span>
                        <span className="text-emerald-400 font-semibold text-sm">Approve</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 text-xs">Confidence</span>
                        <span className="text-white font-semibold text-sm">High (86%)</span>
                      </div>
                      <div>
                        <span className="text-gray-500 text-xs block mb-2">Key Signals</span>
                        <div className="flex flex-wrap gap-1.5">
                          {['Verified', 'Stable', 'Growing'].map((signal, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-800 text-gray-300 text-[10px] rounded-md">
                              {signal}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Eligible Products Pill - Top Center */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-0 right-24 z-40"
                >
                  <div className="bg-white rounded-xl px-4 py-3 shadow-xl flex items-center gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 block">Eligible Products</span>
                      <span className="text-lg font-bold text-gray-900">3 of 5</span>
                    </div>
                  </div>
                </motion.div>

                {/* Risk Assessment Badge - Left Center */}
                <motion.div
                  animate={{ y: [-2, 4, -2] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="absolute top-1/2 -translate-y-1/2 left-0 z-30"
                >
                  <div className="bg-[#1a2420]/95 backdrop-blur-xl border border-emerald-500/30 rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 block">Risk Assessment</span>
                      <span className="text-emerald-400 font-bold text-sm">Low Risk</span>
                    </div>
                  </div>
                </motion.div>

                {/* Score History Mini Chart - Bottom Right */}
                <motion.div
                  animate={{ y: [3, -4, 3] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  className="absolute bottom-8 right-0 z-20"
                >
                  <div className="bg-[#1a2430]/95 backdrop-blur-xl border border-blue-500/20 rounded-xl p-4 w-[180px] shadow-xl">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white text-xs font-medium">Score History</span>
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                        <span className="w-2 h-2 bg-emerald-400/50 rounded-full" />
                      </div>
                    </div>
                    {/* Mini bar chart */}
                    <div className="flex items-end gap-1 h-10">
                      {[60, 65, 58, 70, 75, 72, 80, 78, 85, 82, 88, 90].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-gradient-to-t from-teal-500 to-cyan-400 rounded-sm opacity-80"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-[9px] text-gray-500">
                      <span>Jan</span>
                      <span>Jun</span>
                      <span>Dec</span>
                    </div>
                  </div>
                </motion.div>

                {/* Glow effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-teal-500/10 rounded-full blur-[80px] pointer-events-none" />
              </div>
            </motion.div>
          </div>
          
          {/* KPI Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 pt-12 border-t border-gray-800/50"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "+47%", label: "Conversion increase" },
                { value: "+23%", label: "Accurate approvals" },
                { value: "85%", label: "Faster decisions" },
                { value: "<200ms", label: "Scoring latency" }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="text-center md:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-white mb-1"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 2: USE CASE */}
      {/* ============================================= */}
      <section className="relative py-20 overflow-hidden">
        {/* Dark fabric background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/dark-fabric-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 md:px-[8%] relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Explore by Use Case
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center items-stretch gap-6"
          >
            {[
              {
                name: "Financial Institutions",
                href: "https://institutions.futeurcredx.com/",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.75m-.75 3h.75" />
                  </svg>
                )
              },
              {
                name: "Fintech Enterprises",
                href: "https://enterprise.futeurcredx.com/",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-center px-12 py-8 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white hover:shadow-[0_0_60px_20px_rgba(255,255,255,0.15)] min-w-[240px] h-[140px]"
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center text-gray-400 group-hover:text-gray-900 transition-colors duration-300 mb-4">
                  {item.icon}
                </div>
                
                {/* Name */}
                <h3 className="text-white group-hover:text-gray-900 font-semibold text-lg transition-colors duration-300 text-center">
                  {item.name}
                </h3>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 3: VALUE CARDS GRID */}
      {/* ============================================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-[8%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-[-0.02em] mb-6"
            >
              A Unified Credit Intelligence Engine
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              className="text-lg text-[#4A5568] max-w-[720px] mx-auto"
            >
              LumiqAI sits between raw financial signals and downstream financial products, ingesting, normalizing, scoring, and governing credit intelligence across the lifecycle.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { 
                icon: GitBranch, 
                title: "Unified Signal Graph", 
                desc: "Normalize and connect bureau, cashflow, identity, and behavioral signals into a governed intelligence layer." 
              },
              { 
                icon: Zap, 
                title: "Continuous Intelligence", 
                desc: "Move from one-time snapshots to continuously updated readiness and risk signals across the lifecycle." 
              },
              { 
                icon: Eye, 
                title: "Explainable Decision Outputs", 
                desc: "Every decision pathway is transparent, logged, and defensible — built for model risk and audit scrutiny." 
              },
              { 
                icon: Shield, 
                title: "Policy + Compliance Controls", 
                desc: "Enforce consent, minimization, access controls, and decision constraints — without slowing product velocity." 
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group bg-white border border-[#E6E8EF] rounded-2xl p-8 hover:border-[#4F7CFF]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#4F7CFF]/10 to-[#14b8a6]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-[#4F7CFF]" />
                </div>
                <h4 className="text-lg font-bold mb-3 text-[#0B0D12]">{item.title}</h4>
                <p className="text-sm text-[#4A5568] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 4: KPI BAND / NUMBERS */}
      {/* ============================================= */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-6 md:px-[8%]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-6">
                Enterprise-grade performance
              </h2>
              <p className="text-lg text-[#4A5568] leading-relaxed">
                LumiqAI is designed for the throughput, latency, and reliability demands of production credit systems serving millions of decisions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: "99.9%", label: "Decision pipeline uptime", sublabel: "(target SLA)" },
                { value: "<200ms", label: "Median scoring latency", sublabel: "(p50)" },
                { value: "30+", label: "Signal categories supported", sublabel: "(extensible)" },
                { value: "1–4 weeks", label: "Typical integration window", sublabel: "" }
              ].map((kpi, i) => (
                <div key={i} className="bg-white border border-[#E6E8EF] rounded-2xl p-6 shadow-sm">
                  <div className="text-3xl md:text-4xl font-bold text-[#0B0D12] mb-2">{kpi.value}</div>
                  <div className="text-sm text-[#4A5568] leading-snug">
                    {kpi.label}
                    {kpi.sublabel && <span className="text-[#9CA3AF]"> {kpi.sublabel}</span>}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <p className="text-xs text-[#9CA3AF] mt-8 text-center italic">
            Metrics shown are reference benchmarks and depend on configuration, data sources, and deployment model.
          </p>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 5: HOW IT WORKS - FLOWZY-STYLE TIMELINE */}
      {/* ============================================= */}
      <HowLumiqWorks />

      {/* ============================================= */}
      {/* SECTION 6: TWO-AUDIENCE USE CASE SPLIT - XORA STYLE */}
      {/* ============================================= */}
      <section className="py-24 bg-[#FBFBFD]">
        <div className="container mx-auto px-6 md:px-[8%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-[-0.02em] mb-6 text-[#0B0D12]"
            >
              Two Execution Contexts. One Intelligence Core.
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              className="text-lg text-[#4A5568] max-w-[640px] mx-auto"
            >
              LumiqAI is explicitly designed for the two dominant financial system architectures.
            </motion.p>
          </motion.div>

          {/* XORA-STYLE TWO BOXES */}
          <div className="relative">
            {/* Main Container with subtle gradient border effect */}
            <div className="grid lg:grid-cols-2 gap-0 relative">
              {/* Left Box - Fintechs */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -4 }}
                className="relative bg-white border border-[#E8E8E8] rounded-3xl lg:rounded-r-none p-10 md:p-12 group hover:shadow-2xl hover:border-[#D1D5DB] transition-all duration-500 flex flex-col"
              >
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 rounded-3xl lg:rounded-r-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(139,92,246,0.05) 100%)' }} />
                
                {/* Icon Circle */}
                <motion.div 
                  className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300"
                >
                  <Zap className="w-7 h-7 text-white" />
                </motion.div>
                
                {/* Label */}
                <p className="relative z-10 text-xs tracking-[0.15em] text-[#6B7280] font-medium uppercase mb-4">
                  Fintechs & Embedded Platforms
                </p>
                
                {/* Headline */}
                <h3 className="relative z-10 text-2xl md:text-3xl font-bold mb-6 text-[#0B0D12] leading-tight">
                  Credit Intelligence for Velocity-Driven Platforms
                </h3>
                
                {/* Bullet Points */}
                <div className="relative z-10 space-y-3 mb-8">
                  {[
                    "Real-time readiness + eligibility",
                    "Tiered approvals vs binary decisions",
                    "Continuous post-origination monitoring",
                    "Product-specific policy logic",
                    "Infrastructure-level compliance support"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-[#4A5568] text-sm group-hover/item:text-[#0B0D12] transition-colors duration-200">{item}</span>
                    </div>
                  ))}
                </div>
                
                {/* Footer Note */}
                <p className="relative z-10 text-sm text-[#9CA3AF] italic mb-8 pb-6 border-b border-[#E8E8E8]">
                  Designed for embedded lending, marketplaces, and SMB platforms.
                </p>
                
                {/* CTA Button */}
                <div className="mt-auto">
                  <a 
                    href="https://enterprise.futeurcredx.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center bg-[#0B0D12] text-white hover:bg-[#1a1d24] rounded-xl px-6 py-3 text-sm font-semibold group/btn transition-all duration-300 hover:shadow-lg"
                  >
                    Explore Use Case
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              {/* Center Vertical Divider */}
              <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-[#E8E8E8] to-transparent transform -translate-x-1/2 z-10" />

              {/* Right Box - Banks */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.15 }}
                whileHover={{ y: -4 }}
                className="relative bg-white border border-[#E8E8E8] border-l-0 lg:border-l rounded-3xl lg:rounded-l-none p-10 md:p-12 mt-4 lg:mt-0 group hover:shadow-2xl hover:border-[#D1D5DB] transition-all duration-500 flex flex-col"
              >
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 rounded-3xl lg:rounded-l-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(239,68,68,0.05) 100%)' }} />
                
                {/* Icon Circle */}
                <motion.div 
                  className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#EF4444] flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300"
                >
                  <Shield className="w-7 h-7 text-white" />
                </motion.div>
                
                {/* Label */}
                <p className="relative z-10 text-xs tracking-[0.15em] text-[#6B7280] font-medium uppercase mb-4">
                  Banks & Regulated Institutions
                </p>
                
                {/* Headline */}
                <h3 className="relative z-10 text-2xl md:text-3xl font-bold mb-6 text-[#0B0D12] leading-tight">
                  Credit Intelligence for Regulated Balance Sheets
                </h3>
                
                {/* Bullet Points */}
                <div className="relative z-10 space-y-3 mb-8">
                  {[
                    "Enhanced pre-qualification and engagement",
                    "Readiness insights before application",
                    "Portfolio-level risk visibility",
                    "Explainable, auditable decision outputs",
                    "Incremental exposure vs all-or-nothing lending"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#EF4444] flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-[#4A5568] text-sm group-hover/item:text-[#0B0D12] transition-colors duration-200">{item}</span>
                    </div>
                  ))}
                </div>
                
                {/* Footer Note */}
                <p className="relative z-10 text-sm text-[#9CA3AF] italic mb-8 pb-6 border-b border-[#E8E8E8]">
                  Built for model risk management, audit, and regulatory posture.
                </p>
                
                {/* CTA Button */}
                <div className="mt-auto">
                  <a 
                    href="https://institutions.futeurcredx.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center bg-[#0B0D12] text-white hover:bg-[#1a1d24] rounded-xl px-6 py-3 text-sm font-semibold group/btn transition-all duration-300 hover:shadow-lg"
                  >
                    Explore Use Case
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* COMMON NODALITIES - Shared between both use cases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12"
            >
              <div className="bg-white border border-[#E8E8E8] rounded-2xl p-8 md:p-10">
                <div className="text-center mb-8">
                  <p className="text-xs tracking-[0.15em] text-[#9CA3AF] font-medium uppercase mb-2">
                    Shared Across Both Contexts
                  </p>
                  <h4 className="text-xl md:text-2xl font-bold text-[#0B0D12]">
                    Common Intelligence Modalities
                  </h4>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {[
                    { icon: Database, label: "Multi-Bureau Fusion", desc: "Unified credit signals" },
                    { icon: Eye, label: "Explainable Outputs", desc: "Transparent reasoning" },
                    { icon: Lock, label: "Zero Trust Security", desc: "Enterprise-grade" },
                    { icon: GitBranch, label: "Flexible Policy Logic", desc: "Configurable rules" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="group bg-[#FAFAFA] hover:bg-white border border-[#E8E8E8] hover:border-[#D1D5DB] rounded-xl p-5 text-center transition-all duration-300 hover:shadow-lg cursor-default"
                    >
                      <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-white border border-[#E8E8E8] flex items-center justify-center group-hover:border-[#3B82F6] group-hover:bg-[#3B82F6]/5 transition-all duration-300">
                        <item.icon className="w-5 h-5 text-[#374151] group-hover:text-[#3B82F6] transition-colors duration-300" />
                      </div>
                      <h5 className="text-sm font-semibold text-[#0B0D12] mb-1">{item.label}</h5>
                      <p className="text-xs text-[#9CA3AF]">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 7: DEVELOPER SECTION */}
      {/* ============================================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-[8%]">
          <div className="bg-gradient-to-br from-[#0B0D12] to-[#1a1f2e] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden relative">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#4F7CFF]/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-[#14b8a6]/10 to-transparent rounded-full blur-3xl" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
              {/* Left: Text + Steps */}
              <div>
                <p className="text-sm tracking-[0.12em] text-[#4F7CFF] font-semibold uppercase mb-4">
                  For Developers
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Integrate in days, not quarters
                </h2>
                <p className="text-lg text-[#A5ACBD] mb-10 leading-relaxed">
                  Use LumiqAI APIs to ingest signals, generate governed outputs, and push decisions into your existing stack.
                </p>

                {/* 3-Step Flow */}
                <div className="space-y-6 mb-10">
                  {[
                    { num: "1", title: "Create an API Key", desc: "Generate secure credentials in your dashboard" },
                    { num: "2", title: "Connect Data Sources", desc: "Link bureau, cashflow, and identity feeds" },
                    { num: "3", title: "Request a Decision Output", desc: "Get real-time intelligence via REST API" }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 bg-[#4F7CFF] rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{step.title}</h4>
                        <p className="text-sm text-[#A5ACBD]">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive API Key Card */}
                <div className="bg-[#1a1f2e] border border-[#2A3145] rounded-xl p-5 mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Key className="w-5 h-5 text-[#4F7CFF]" />
                      <span className="text-white font-medium">API Key</span>
                    </div>
                    {apiKey && (
                      <span className="text-xs text-emerald-400 flex items-center gap-1">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        Active
                      </span>
                    )}
                  </div>
                  
                  <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-3 mb-4">
                    <code className="text-sm text-[#A5ACBD] font-mono block break-all">
                      {apiKey ? maskKey(apiKey) : 'sk_live_••••••••••••••••••••••••'}
                    </code>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      onClick={handleGenerateKey}
                      disabled={isGenerating}
                      className="bg-[#4F7CFF] text-white hover:bg-[#3d6ae8] rounded-lg px-4 py-2 text-sm flex items-center gap-2"
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <RefreshCw className="w-4 h-4" />
                          {apiKey ? 'Regenerate Key' : 'Generate Key'}
                        </>
                      )}
                    </Button>
                    {apiKey && (
                      <Button 
                        onClick={handleCopyKey}
                        className="bg-white/10 text-white hover:bg-white/20 rounded-lg px-4 py-2 text-sm flex items-center gap-2"
                      >
                        <Copy className="w-4 h-4" />
                        Copy
                      </Button>
                    )}
                  </div>
                </div>

                {/* Dev CTAs */}
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://docs.futeurcredx.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-white text-[#0B0D12] hover:bg-white/90 rounded-full px-6 py-5">
                      Read the Docs
                    </Button>
                  </a>
                  <Link to="/contact-sales">
                    <Button className="border border-[#2A3145] bg-transparent text-white hover:bg-white/10 rounded-full px-6 py-5">
                      Contact Sales
                    </Button>
                  </Link>
                  <a 
                    href="https://docs.futeurcredx.com/api-reference" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="border border-[#4F7CFF] bg-transparent text-[#4F7CFF] hover:bg-[#4F7CFF]/10 rounded-full px-6 py-5">
                      View API Reference
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right: Code Snippet */}
              <div className="bg-[#0d1117] border border-[#30363d] rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363d]">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
                  <span className="ml-4 text-xs text-[#8b949e]">Terminal</span>
                </div>
                <pre className="p-5 text-sm font-mono text-[#c9d1d9] overflow-x-auto">
                  <code>{`curl -X POST https://api.lumiq.ai/v1/decision \\
  -H "Authorization: Bearer $LUMIQ_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "entity_type": "business",
    "signals": ["bureau","cashflow","identity"],
    "product": "credit_line",
    "policy_version": "v1"
  }'`}</code>
                </pre>
                <div className="border-t border-[#30363d] p-5">
                  <p className="text-xs text-[#8b949e] mb-2">Response</p>
                  <pre className="text-sm font-mono text-[#7ee787] overflow-x-auto">
                    <code>{`{
  "decision": "approve_tier_2",
  "limit": 75000,
  "confidence": 0.86,
  "explanations": ["cashflow_stability", "low_delinquency_risk"]
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ============================================= */}
      {/* SECTION 9: FINAL CTA */}
      {/* ============================================= */}
      <section className="relative py-24 overflow-hidden">
        {/* Slate texture background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/lumiq-cta-slate.jpg')" }}
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="container mx-auto px-6 md:px-[8%] relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-[48px] font-bold tracking-[-0.02em] mb-6 text-white drop-shadow-lg"
            >
              Credit infrastructure for the next decade
            </motion.h2>
            
            <motion.p 
              variants={fadeUp}
              className="text-lg text-white/90 leading-relaxed mb-10 drop-shadow-md"
            >
              Deploy governed credit intelligence that scales across fintech speed and institutional rigor.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Link to="/contact-sales">
                <Button className="bg-white text-[#0B0D12] hover:bg-white/90 rounded-full px-8 py-6 text-base font-semibold shadow-xl hover:shadow-2xl transition-shadow">
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LumiqAI;
