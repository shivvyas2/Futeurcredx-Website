import { useState } from "react";
import { motion, type Variants, type Easing } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, TrendingUp, Shield, Award, Zap, DollarSign, BookOpen, Headphones, Building2, Briefcase, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const easeOut: Easing = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } }
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.12 } }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeOut } }
};

const PartnerEcosystem = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    partnerType: "",
    message: ""
  });

  return (
    <div className="min-h-screen bg-[#2D2424] text-white">
      {/* HERO */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/futeur-partners.jpg" 
            alt="" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D2424] via-[#2D2424]/95 to-[#3A2F2F]/90" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-amber-500/10 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] border border-amber-500/5 rounded-full"
          />
        </div>
        
        <div className="container mx-auto px-6 lg:px-[8%] py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={stagger}
            >
              <motion.span 
                variants={fadeUp}
                className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 text-sm font-medium rounded-full mb-6 uppercase tracking-wider border border-amber-500/20"
              >
                Partner Program
              </motion.span>
              
              <motion.h1 
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.08] tracking-[-0.02em] mb-6 text-white"
              >
                Become a FuteurCredX
                <br />
                <span className="text-amber-400">Solution Partner</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeUp}
                className="text-xl text-white/70 leading-relaxed mb-4"
              >
                Smarter Credit Intelligence. Greater Profitability.
              </motion.p>
              
              <motion.p 
                variants={fadeUp}
                className="text-base text-white/50 leading-relaxed mb-10 max-w-[540px]"
              >
                FuteurCredX is committed to democratizing credit intelligence. Join our partner ecosystem to unlock new revenue streams, deliver differentiated value, and grow with the future of financial decisioning.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Button asChild className="bg-amber-500 text-black hover:bg-amber-400 rounded-full px-8 py-6 text-base font-medium shadow-lg shadow-amber-500/20 transition-all hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105">
                  <Link to="/contact-sales">
                    Talk with our team
                  </Link>
                </Button>
                <a href="https://enterprise.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base bg-transparent hover:scale-105 transition-all">
                    View Enterprise
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="https://institutions.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base bg-transparent hover:scale-105 transition-all">
                    View Institutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </motion.div>
            </motion.div>
            
            {/* Right - Floating UI Card */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={scaleIn}
              className="relative hidden lg:block"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Main floating card */}
                <div className="bg-[#3A2F2F] rounded-3xl shadow-2xl shadow-black/30 p-6 border border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                        <Zap className="w-5 h-5 text-black" />
                      </div>
                      <span className="font-semibold text-white">Partner Dashboard</span>
                    </div>
                    <span className="text-xs text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      Live
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                      <div>
                        <p className="text-sm text-white/50">Monthly Revenue</p>
                        <p className="text-2xl font-bold text-white">$24,580</p>
                      </div>
                      <div className="text-emerald-400 text-sm font-medium bg-emerald-400/10 px-3 py-1 rounded-full">+12.5%</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
                        <p className="text-xs text-white/50 mb-1">Active Clients</p>
                        <p className="text-xl font-bold text-white">147</p>
                      </div>
                      <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                        <p className="text-xs text-white/50 mb-1">Conversion</p>
                        <p className="text-xl font-bold text-white">68%</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating badge */}
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-4 -right-4 bg-[#3A2F2F] rounded-2xl shadow-xl p-4 transform -rotate-6 border border-white/10"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-medium text-white">Certified Partner</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PARTNER TYPES */}
      <section className="py-24 bg-[#352A2A]">
        <div className="container mx-auto px-6 lg:px-[8%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span 
              variants={fadeUp}
              className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 text-sm font-medium rounded-full mb-4 uppercase tracking-wider border border-amber-500/20"
            >
              Partnership Options
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-white"
            >
              Choose Your Path
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                icon: Building2,
                title: "Reseller Partners",
                desc: "White-label our credit intelligence platform to your existing customer base. Offer comprehensive business and consumer credit monitoring as part of your financial services stack.",
                benefits: ["Revenue share on subscriptions", "White-label branding", "Dedicated account support"],
                gradient: "from-amber-400 to-orange-500"
              },
              {
                icon: Briefcase,
                title: "Referral Partners",
                desc: "Earn commissions by referring businesses to FuteurCredX. Perfect for accountants, business consultants, and financial advisors who serve SMB clients.",
                benefits: ["Per-referral commission", "No technical integration", "Marketing co-op funds"],
                gradient: "from-purple-400 to-violet-500"
              },
              {
                icon: Globe,
                title: "Strategic Partners",
                desc: "Build deeper integrations with LumiqAI for enterprise deployments. Ideal for banks, fintechs, and platforms seeking embedded credit decisioning.",
                benefits: ["Custom integration support", "Joint go-to-market", "Priority roadmap input"],
                gradient: "from-blue-400 to-cyan-500"
              },
              {
                icon: Users,
                title: "Channel Partners",
                desc: "Distribute FuteurCredX through your established sales channels. Leverage your existing relationships to bring credit intelligence to new markets.",
                benefits: ["Volume-based discounts", "Deal registration protection", "Sales enablement resources"],
                gradient: "from-emerald-400 to-teal-500"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-amber-500/30 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="space-y-2 ml-[76px]">
                  {item.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      <span className="text-sm text-white/70">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 bg-[#2D2424]">
        <div className="container mx-auto px-6 lg:px-[8%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-[900px] mx-auto"
          >
            <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-3xl p-12 border border-white/10 relative overflow-hidden">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400" />
              
              {/* Decorative glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-amber-500/10 blur-3xl" />
              
              <div className="text-center relative">
                <div className="text-amber-400 text-7xl font-serif mb-6">"</div>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10">
                  FuteurCredX offers exceptional credit intelligence solutions backed by a team that truly understands partner needs. The platform has been a reliable addition to our fintech stack for both our team and our customers.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-black font-bold text-lg">
                    SC
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-white">Sarah Chen</p>
                    <p className="text-sm text-white/50">VP of Partnerships, FinScale Capital</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROFITABILITY BENEFITS */}
      <section className="py-24 bg-[#352A2A]">
        <div className="container mx-auto px-6 lg:px-[8%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span 
              variants={fadeUp}
              className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 text-sm font-medium rounded-full mb-4 uppercase tracking-wider border border-amber-500/20"
            >
              Benefits
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-white mb-4"
            >
              Numerous Ways to Boost Profitability
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { icon: DollarSign, title: "Revenue Share", desc: "Earn industry-leading margins on every subscription. The more you grow, the higher your tier—and your take.", color: "from-emerald-400 to-green-500" },
              { icon: TrendingUp, title: "Growth Rewards", desc: "Unlock higher discounts, deal protection, and incumbent advantage for the life of the customer.", color: "from-blue-400 to-indigo-500" },
              { icon: Award, title: "Sales Accelerators", desc: "Increase profitability for your sales team with one of the industry's most lucrative margin programs.", color: "from-amber-400 to-orange-500" },
              { icon: BookOpen, title: "Enablement Resources", desc: "Access comprehensive training, certification programs, and sales playbooks to accelerate your go-to-market.", color: "from-purple-400 to-violet-500" },
              { icon: Headphones, title: "Dedicated Support", desc: "Get priority access to partner success managers, technical support, and co-selling resources.", color: "from-pink-400 to-rose-500" },
              { icon: Shield, title: "Deal Protection", desc: "Register deals for protection and pricing advantages. We invest in partners who invest in us.", color: "from-cyan-400 to-teal-500" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                className="group bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center hover:border-amber-500/30 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-white">{item.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AWARD SECTION */}
      <section className="py-20 bg-[#2D2424]">
        <div className="container mx-auto px-6 lg:px-[8%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-[900px] mx-auto"
          >
            <div className="relative bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-3xl p-12 text-center overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />
              
              <div className="relative z-10">
                <motion.div 
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6"
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Join an Award-Winning Program</h3>
                <p className="text-white/90 leading-relaxed mb-6 max-w-[600px] mx-auto">
                  FuteurCredX enables businesses with unified credit intelligence. Our partners play a vital role in introducing our solutions to SMBs, fintechs, and financial institutions across the country.
                </p>
                <p className="text-white font-medium text-lg">
                  Join the FuteurCredX Partner Program today and take your credit solutions to the next level.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-[#352A2A]">
        <div className="container mx-auto px-6 lg:px-[8%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-[800px] mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 text-sm font-medium rounded-full mb-4 uppercase tracking-wider border border-amber-500/20">
                FAQ
              </span>
              <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  { q: "What are the requirements to become a partner?", a: "We look for partners with established customer relationships in financial services, SMB technology, or accounting/advisory sectors. Technical integration capabilities are helpful but not required for all partner types." },
                  { q: "How does the revenue share model work?", a: "Partners earn a percentage of subscription revenue for referred or managed customers. Rates increase with volume and are locked in for the customer lifetime. Contact us for specific tier details." },
                  { q: "Is there a cost to join the partner program?", a: "No, there's no fee to apply or join the FuteurCredX Partner Program. We invest in partner success through training, resources, and dedicated support at no cost to you." },
                  { q: "What support do partners receive?", a: "All partners get access to the Partner Hub with training materials, sales collateral, and deal registration. Higher tiers unlock dedicated success managers, co-marketing funds, and priority technical support." },
                  { q: "Can I white-label the FuteurCredX platform?", a: "Yes, our Reseller and Strategic partner tiers include white-label options. You can brand the platform as your own while leveraging our LUMIQ AI™ engine and bureau integrations." }
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="bg-white/[0.03] border border-white/10 rounded-xl px-6 overflow-hidden hover:border-amber-500/20 transition-colors">
                    <AccordionTrigger className="text-left text-white hover:no-underline py-6 font-medium hover:text-amber-400 transition-colors">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/60 pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-24 bg-[#2D2424]">
        <div className="container mx-auto px-6 lg:px-[8%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-16 max-w-[1100px] mx-auto"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 text-sm font-medium rounded-full mb-6 uppercase tracking-wider border border-amber-500/20">
                Get Started
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] mb-6 text-white">
                Ready to Partner?
              </h2>
              <p className="text-white/60 leading-relaxed mb-10">
                Complete the form and a member of our partnerships team will reach out within 48 hours to discuss how we can work together.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Fast Application Review", desc: "Most applications reviewed within 5 business days" },
                  { title: "Onboarding Support", desc: "Dedicated onboarding specialist for new partners" },
                  { title: "Immediate Portal Access", desc: "Start accessing resources as soon as you're approved" }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-start gap-4"
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <CheckCircle2 className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="font-medium mb-1 text-white">{item.title}</p>
                      <p className="text-sm text-white/50">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <form className="bg-white/[0.03] rounded-2xl p-8 border border-white/10">
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-white/70 mb-2 block font-medium">Company Name*</label>
                      <Input 
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl"
                        placeholder="Your company"
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-white/70 mb-2 block font-medium">Contact Name*</label>
                      <Input 
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl"
                        placeholder="Your name"
                        value={formData.contactName}
                        onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-white/70 mb-2 block font-medium">Email*</label>
                      <Input 
                        type="email"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-white/70 mb-2 block font-medium">Phone</label>
                      <Input 
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-white/70 mb-2 block font-medium">Partner Type*</label>
                    <select 
                      className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5"
                      value={formData.partnerType}
                      onChange={(e) => setFormData({...formData, partnerType: e.target.value})}
                    >
                      <option value="" className="bg-[#2D2424]">Select partner type</option>
                      <option value="reseller" className="bg-[#2D2424]">Reseller Partner</option>
                      <option value="referral" className="bg-[#2D2424]">Referral Partner</option>
                      <option value="strategic" className="bg-[#2D2424]">Strategic Partner</option>
                      <option value="channel" className="bg-[#2D2424]">Channel Partner</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-white/70 mb-2 block font-medium">Tell us about your business</label>
                    <Textarea 
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[100px] rounded-xl"
                      placeholder="Describe your business and how you'd like to partner with us..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button className="w-full bg-amber-500 text-black hover:bg-amber-400 rounded-full py-6 text-base font-medium shadow-lg shadow-amber-500/20 transition-all hover:shadow-xl hover:scale-[1.02]">
                    Submit Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartnerEcosystem;
