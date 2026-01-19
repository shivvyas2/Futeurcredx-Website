import { motion } from "framer-motion";
import { TrendingUp, CreditCard, CheckCircle2, Bell, Zap, BarChart3 } from "lucide-react";

const kpis = [
  {
    value: "33.3M",
    label: "SMBs in the U.S.",
    description: "Target ecosystem ready for credit visibility",
  },
  {
    value: "25%",
    label: "higher conversion",
    description: "Increase sign-ups with unified credit intelligence",
  },
  {
    value: "< 2 wks",
    label: "integration path",
    description: "Get up and running in days, not months",
  },
  {
    value: "24/7",
    label: "continuous monitoring",
    description: "Real-time decisioning outputs around the clock",
  },
];

const floatingCards = [
  {
    icon: "💳",
    brand: "Chase",
    title: "Credit line approved",
    time: "2m ago",
    color: "bg-blue-500",
  },
  {
    icon: "📊",
    brand: "LumiqAI",
    title: "Business score: 742 ↑",
    time: "Just now",
    color: "bg-emerald-500",
  },
  {
    icon: "✅",
    brand: "FuteurCredX",
    title: "You're pre-qualified!",
    time: "1hr ago",
    color: "bg-violet-500",
  },
  {
    icon: "🎯",
    brand: "Ramp",
    title: "New offer available",
    time: "Now",
    color: "bg-amber-500",
  },
];

export default function KPIBand() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-violet-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Floating Cards + Wave Background */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* Wave/Flow Lines Background */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 500 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Gradient definitions */}
              <defs>
                <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="wave2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="wave3" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.25" />
                </linearGradient>
              </defs>
              
              {/* Animated wave paths */}
              <motion.path
                d="M-50,100 Q100,50 200,100 T400,100 T600,100"
                stroke="url(#wave1)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <motion.path
                d="M-50,150 Q150,100 250,150 T450,150 T650,150"
                stroke="url(#wave2)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.2, ease: "easeOut", delay: 0.1 }}
              />
              <motion.path
                d="M-50,200 Q100,250 200,200 T400,200 T600,200"
                stroke="url(#wave1)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.4, ease: "easeOut", delay: 0.2 }}
              />
              
              {/* More flowing lines */}
              <motion.path
                d="M50,300 C150,250 200,350 300,300 S450,250 550,300"
                stroke="url(#wave3)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
              />
              <motion.path
                d="M0,380 C100,330 180,430 280,380 S420,330 520,380"
                stroke="url(#wave2)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.6, ease: "easeOut", delay: 0.4 }}
              />
              <motion.path
                d="M20,450 C120,400 200,500 300,450 S450,400 550,450"
                stroke="url(#wave1)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.7, ease: "easeOut", delay: 0.5 }}
              />
              <motion.path
                d="M-20,520 C80,470 160,570 260,520 S400,470 500,520"
                stroke="url(#wave3)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.8, ease: "easeOut", delay: 0.6 }}
              />
            </svg>

            {/* Floating Notification Cards */}
            {floatingCards.map((card, index) => (
              <motion.div
                key={card.brand}
                initial={{ opacity: 0, x: -30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                animate={{
                  y: [0, index % 2 === 0 ? -8 : 8, 0],
                }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  zIndex: 50
                }}
                className="absolute bg-white rounded-2xl shadow-lg border border-gray-100 p-4 cursor-pointer transition-all duration-300"
                style={{
                  top: `${[60, 180, 320, 460][index]}px`,
                  left: `${[20, 80, 40, 100][index]}px`,
                  zIndex: 10 + index,
                }}
              >
                <div className="flex items-center gap-3 min-w-[220px]">
                  <div className={`w-10 h-10 ${card.color} rounded-xl flex items-center justify-center text-lg`}>
                    {card.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-900">{card.brand}</span>
                      <span className="text-xs text-gray-400">{card.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{card.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute bottom-20 left-1/2 -translate-x-1/2"
            >
              <div className="relative">
                <div className="w-32 h-20 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <BarChart3 className="w-8 h-8 mx-auto" />
                  </div>
                </div>
                <motion.div 
                  className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Title + KPI Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Purple Gradient Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight mb-8">
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-violet-500 bg-clip-text text-transparent">
                A network that gets
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-violet-500 bg-clip-text text-transparent">
                more powerful daily
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-lg">
              When you build on FuteurCredX's credit intelligence infrastructure,
              every product and solution is made better through new data, 
              insights, and continuously refined models. Your services improve
              each day without you having to do a thing.
            </p>

            {/* KPI Grid - 2x2 */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              {kpis.map((kpi, index) => (
                <motion.div
                  key={kpi.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group"
                >
                  {/* Large purple number */}
                  <motion.div 
                    className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent mb-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {kpi.value}
                  </motion.div>
                  
                  {/* Label */}
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {kpi.label}
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {kpi.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Footnote */}
            <p className="mt-10 text-xs text-gray-400 border-t border-gray-100 pt-6">
              * Metrics shown are reference benchmarks and will be updated with verified production data.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
