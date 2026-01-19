import { motion, type Variants, type Easing } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Clock, Users, DollarSign, Quote, BarChart3, Zap, Building2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const easeOut: Easing = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } }
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.12 } }
};

const FintechCaseStudy = () => {
  const metrics = [
    { value: "47%", label: "Increase in Approval Rates", icon: TrendingUp },
    { value: "3.2x", label: "Faster Underwriting", icon: Clock },
    { value: "68%", label: "Reduction in Manual Review", icon: Users },
    { value: "$2.4M", label: "Additional Annual Revenue", icon: DollarSign }
  ];

  const timeline = [
    {
      phase: "Discovery",
      duration: "Week 1",
      activities: [
        "Technical requirements gathering",
        "API architecture review",
        "Security and compliance audit",
        "Integration roadmap finalized"
      ]
    },
    {
      phase: "Development",
      duration: "Weeks 2-3",
      activities: [
        "SDK integration into existing stack",
        "Webhook configuration",
        "Sandbox testing with synthetic data",
        "Edge case handling and error flows"
      ]
    },
    {
      phase: "Testing & QA",
      duration: "Week 4",
      activities: [
        "End-to-end integration testing",
        "Performance benchmarking",
        "Load testing at 10x expected volume",
        "Security penetration testing"
      ]
    },
    {
      phase: "Go-Live",
      duration: "Week 5",
      activities: [
        "Gradual traffic rollout (10% → 100%)",
        "Real-time monitoring setup",
        "Team training and documentation",
        "Post-launch optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F1419] text-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[#0A0F14] to-[#0F1419]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={stagger}
            className="max-w-[900px] mx-auto"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <Building2 className="w-5 h-5 text-[#FFB800]" />
              <span className="text-[#FFB800] text-sm font-medium uppercase tracking-wider">Case Study</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeUp}
              className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.02em] mb-6"
            >
              How Fintech Partners Integrate with LumiqAI
            </motion.h1>
            
            <motion.p 
              variants={fadeUp}
              className="text-lg text-white/60 mb-10 max-w-[700px]"
            >
              A deep dive into how leading fintech platforms leverage LumiqAI to transform their 
              credit decisioning, reduce risk, and accelerate growth.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FFB800]/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#FFB800]" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase">Time to Integrate</p>
                  <p className="text-white font-semibold">5 Weeks</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FFB800]/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-[#FFB800]" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase">Industry</p>
                  <p className="text-white font-semibold">SMB Lending</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FFB800]/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#FFB800]" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase">Company Size</p>
                  <p className="text-white font-semibold">Series B, 150 employees</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results Metrics */}
      <section className="py-16 bg-[#0A0F14]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-4 gap-6"
          >
            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#141B22] border border-white/5 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-[#FFB800]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-6 h-6 text-[#FFB800]" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-[#FFB800] mb-2">{metric.value}</p>
                <p className="text-sm text-white/60">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-[#0F1419]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-[900px] mx-auto"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold mb-8">
              The Challenge
            </motion.h2>
            
            <motion.div variants={fadeUp} className="prose prose-invert max-w-none">
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                A fast-growing SMB lending platform was experiencing bottlenecks in their underwriting process. 
                Their legacy credit assessment system relied heavily on traditional bureau scores, missing 
                valuable signals from alternative data sources.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {[
                  { title: "Limited Data Sources", desc: "Only using traditional bureau data, missing banking and payment signals" },
                  { title: "Manual Review Backlog", desc: "60% of applications required manual review, causing 3-5 day delays" },
                  { title: "High Decline Rates", desc: "35% of creditworthy applicants declined due to thin credit files" },
                  { title: "Integration Complexity", desc: "Existing infrastructure made adding new data sources difficult" }
                ].map((item, i) => (
                  <div key={i} className="bg-[#141B22] border border-white/5 rounded-xl p-6">
                    <h4 className="text-base font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-white/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-[#0A0F14]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-[900px] mx-auto"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold mb-8">
              The LumiqAI Solution
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-white/70 text-lg leading-relaxed mb-10">
              By integrating LumiqAI's credit intelligence API, the platform gained access to enriched 
              business credit signals, real-time decisioning, and explainable AI—all through a single API endpoint.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-4">
              {[
                { 
                  title: "Multi-Signal Credit Assessment", 
                  desc: "Combined bureau data with banking patterns, vendor payments, and business registry signals for a complete credit picture." 
                },
                { 
                  title: "Automated Decisioning Engine", 
                  desc: "Rules-based + ML-powered decisioning reduced manual review from 60% to 18% of applications." 
                },
                { 
                  title: "Explainable AI Outputs", 
                  desc: "Every decision includes clear reasoning, supporting compliance and building customer trust." 
                },
                { 
                  title: "Real-Time Webhooks", 
                  desc: "Instant notifications on credit events enable proactive customer engagement and risk management." 
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-[#141B22] border border-white/5 rounded-xl p-6">
                  <CheckCircle2 className="w-6 h-6 text-[#FFB800] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-white/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-[#0F1419]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-[900px] mx-auto"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold mb-12 text-center">
              Implementation Timeline
            </motion.h2>

            <motion.div variants={fadeUp} className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[22px] md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFB800] to-[#FFB800]/20" />
              
              <div className="space-y-8">
                {timeline.map((phase, i) => (
                  <div key={i} className={`relative flex items-start gap-6 md:gap-12 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Dot */}
                    <div className="absolute left-[22px] md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#FFB800] rounded-full ring-4 ring-[#0F1419]" />
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-[calc(50%-3rem)] ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                      <div className="bg-[#141B22] border border-white/5 rounded-xl p-6">
                        <div className={`flex items-center gap-3 mb-4 ${i % 2 === 1 ? 'md:justify-end' : ''}`}>
                          <span className="text-[#FFB800] font-medium">{phase.duration}</span>
                          <span className="text-white/40">•</span>
                          <span className="text-white font-semibold">{phase.phase}</span>
                        </div>
                        <ul className={`space-y-2 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                          {phase.activities.map((activity, j) => (
                            <li key={j} className={`flex items-center gap-2 text-sm text-white/60 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                              <Zap className="w-3 h-3 text-[#FFB800] flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-[#0A0F14]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-[800px] mx-auto text-center"
          >
            <motion.div variants={fadeUp}>
              <Quote className="w-12 h-12 text-[#FFB800]/30 mx-auto mb-6" />
              
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                "LumiqAI transformed our underwriting from a bottleneck into a competitive advantage. 
                We're approving more creditworthy businesses while actually reducing our risk exposure."
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-[#FFB800]/10 rounded-full flex items-center justify-center">
                  <span className="text-[#FFB800] font-bold">VP</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold">VP of Credit</p>
                  <p className="text-sm text-white/50">Series B Fintech Lender</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 bg-[#0F1419]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-[900px] mx-auto"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold mb-12 text-center">
              Key Takeaways
            </motion.h2>

            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Start with Sandbox",
                  desc: "Test thoroughly with synthetic data before going live. Our sandbox mirrors production exactly."
                },
                {
                  title: "Gradual Rollout",
                  desc: "Start with 10% of traffic and scale up. This catches edge cases before they become problems."
                },
                {
                  title: "Leverage Webhooks",
                  desc: "Real-time notifications enable proactive customer engagement and faster response times."
                }
              ].map((item, i) => (
                <div key={i} className="bg-[#141B22] border border-white/5 rounded-xl p-6">
                  <div className="w-10 h-10 bg-[#FFB800]/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-[#FFB800] font-bold">{i + 1}</span>
                  </div>
                  <h4 className="text-base font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0A0F14] to-[#0F1419] border-t border-white/5">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-[700px] mx-auto text-center"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold mb-6">
              Ready to Transform Your Credit Decisioning?
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-white/60 mb-10">
              Join the growing list of fintech platforms using LumiqAI to approve more customers, 
              reduce risk, and accelerate growth.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#FFB800] text-black hover:bg-[#E5A600] px-6 py-5" asChild>
                <Link to="/contact-sales">
                  Talk to Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-6 py-5 bg-transparent" asChild>
                <Link to="/partners/lumiq-tutorial">
                  Start the Tutorial
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FintechCaseStudy;
