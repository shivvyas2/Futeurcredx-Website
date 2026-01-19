import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Zap, Users, BarChart3, Shield, Code, Smartphone, TrendingUp, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    badge: "Enterprise",
    title: "Credit Intelligence for Streamlined Decisions",
    description: "Maximize efficiency and reduce manual effort with our intelligent credit intelligence features designed to simplify complex financial workflows.",
    bullets: [
      { icon: Zap, title: "Real-time Scoring", desc: "Instant credit assessments." },
      { icon: Shield, title: "Compliant Outputs", desc: "Built for regulated environments." },
      { icon: TrendingUp, title: "Continuous Monitoring", desc: "Track changes over time." },
      { icon: Network, title: "API Integration", desc: "Connect with existing systems." },
    ],
    visual: "lumiq",
    ctaText: "Explore LumiqAI",
    ctaLink: "/lumiq-ai",
    align: "left",
    external: false,
  },
  {
    badge: "Consumer Platform",
    title: "Unified Dashboard for Credit Visibility",
    description: "Enhance visibility and decision-making with unified credit intelligence that centralizes all signals, insights, and recommendations.",
    bullets: [
      { icon: BarChart3, title: "Dual Credit Profiles", desc: "Dual business credit profiles." },
      { icon: Users, title: "SMB Readiness", desc: "Track qualification progress." },
      { icon: Code, title: "Actionable Insights", desc: "Clear next steps to improve." },
      { icon: Shield, title: "Secure Data", desc: "Bank-grade encryption." },
    ],
    visual: "app",
    ctaText: "Explore FuteurCredX",
    ctaLink: "/futeurcredx-app",
    align: "right",
    external: false,
  },
  {
    badge: "Institutions",
    title: "Decision Infrastructure for Scale",
    description: "Deploy enterprise-grade credit decisioning that scales from startup to Fortune 500, with full auditability and compliance controls.",
    bullets: [
      { icon: Network, title: "Signal Graph", desc: "Unified data normalization." },
      { icon: Shield, title: "Audit Trails", desc: "Every decision is traceable." },
      { icon: TrendingUp, title: "Tiered Approvals", desc: "Beyond binary decisions." },
      { icon: Zap, title: "< 200ms Latency", desc: "Real-time performance." },
    ],
    visual: "enterprise",
    ctaText: "View Enterprise",
    ctaLink: "https://enterprise.futeurcredx.com/",
    ctaText2: "View Institutions",
    ctaLink2: "https://institutions.futeurcredx.com/",
    align: "left",
    external: true,
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const isLeft = feature.align === "left";

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale }}
      className="sticky top-24"
    >
      <div className={`bg-white rounded-[32px] border border-gray-100 shadow-xl overflow-hidden`}>
        <div className={`grid lg:grid-cols-2 gap-0 ${!isLeft ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content Side */}
          <div className={`p-10 md:p-14 flex flex-col justify-center ${!isLeft ? 'lg:order-2' : ''}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 rounded-full px-4 py-1.5 text-sm font-medium mb-6 w-fit">
              <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
              {feature.badge}
            </div>
            
            {/* Title */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {feature.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {feature.description}
            </p>
            
            {/* Bullet Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {feature.bullets.map((bullet, i) => (
                <motion.div
                  key={bullet.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-violet-100 transition-colors">
                      <bullet.icon className="w-4 h-4 text-gray-700 group-hover:text-violet-700 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{bullet.title}</h4>
                      <p className="text-xs text-gray-500">{bullet.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              {feature.external ? (
                <a href={feature.ctaLink} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-6 py-5 text-sm font-semibold group">
                    {feature.ctaText}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              ) : (
                <Link to={feature.ctaLink}>
                  <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-6 py-5 text-sm font-semibold group">
                    {feature.ctaText}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              )}
              {feature.ctaLink2 && (
                <a href={feature.ctaLink2} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-100 hover:text-gray-900 rounded-full px-6 py-5 text-sm font-semibold group">
                    {feature.ctaText2}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              )}
            </div>
          </div>
          
          {/* Visual Side */}
          <div className={`relative bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 min-h-[400px] lg:min-h-[600px] ${!isLeft ? 'lg:order-1' : ''}`}>
            {/* Floating cloud decorations */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 right-8 w-16 h-16 bg-white/60 backdrop-blur-sm rounded-full shadow-lg"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 left-8 w-12 h-12 bg-white/60 backdrop-blur-sm rounded-full shadow-lg"
            />
            <motion.div
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/3 left-12 w-10 h-10 bg-white/40 backdrop-blur-sm rounded-full shadow-md"
            />

            {/* Visual Content */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              {feature.visual === "lumiq" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full max-w-md"
                >
                  {/* Dashboard Mock */}
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gray-900 px-4 py-3 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <span className="text-gray-400 text-xs ml-3 font-mono">enterprise.futeurcredx.com</span>
                    </div>
                    {/* Content */}
                    <div className="p-5 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-900">Credit Intelligence</span>
                        <span className="flex items-center gap-1 text-xs text-emerald-500">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                          Live
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 rounded-xl p-3">
                          <span className="text-2xl font-bold text-gray-900">742</span>
                          <span className="text-xs text-gray-500 block">Business Score</span>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3">
                          <span className="text-2xl font-bold text-gray-900">694</span>
                          <span className="text-xs text-gray-500 block">Personal Score</span>
                        </div>
                      </div>
                      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
                        <span className="text-sm font-semibold text-emerald-700">Decision: Approve</span>
                        <span className="text-xs text-emerald-600 block">Confidence: 86%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {feature.visual === "app" && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative flex items-center justify-center"
                >
                  <img 
                    src="/mobile/fsr-score.png" 
                    alt="FuteurCredX App - FSR Score Overview"
                    className="w-auto h-[500px] object-contain drop-shadow-2xl"
                  />
                </motion.div>
              )}

              {feature.visual === "enterprise" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full max-w-lg"
                >
                  {/* Enterprise Dashboard */}
                  <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-800 flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <span className="text-gray-400 text-xs font-mono">institutions.futeurcredx.com</span>
                    </div>
                    <div className="p-5">
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {[
                          { label: "Decisions", value: "12.4K", trend: "+23%" },
                          { label: "Approval Rate", value: "67%", trend: "+5%" },
                          { label: "Avg. Latency", value: "142ms", trend: "-12%" },
                        ].map((stat) => (
                          <div key={stat.label} className="bg-gray-800 rounded-xl p-3">
                            <span className="text-xl font-bold text-white">{stat.value}</span>
                            <span className="text-xs text-emerald-400 ml-1">{stat.trend}</span>
                            <span className="text-xs text-gray-500 block">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-gray-800 rounded-xl p-4">
                        <span className="text-sm font-semibold text-white mb-3 block">API Activity</span>
                        <div className="flex items-end gap-1 h-16">
                          {[40, 65, 45, 80, 55, 70, 85, 60, 75, 90, 65, 80].map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-gradient-to-t from-violet-500 to-violet-400 rounded-sm"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function StackingFeatureCards() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
            Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Credit Intelligence for<br />Streamlined Workflows
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Maximize efficiency and reduce manual effort with our intelligent credit
            intelligence features designed to simplify complex financial workflows.
          </p>
        </motion.div>

        {/* Stacking Cards */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
