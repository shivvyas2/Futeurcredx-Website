import { motion, type Variants, type Easing } from "framer-motion";
import { ArrowRight, Eye, Shield, Zap, TrendingUp, CheckCircle2, AlertTriangle, BarChart3, Target, Smartphone, Lock, Users, CreditCard, Building2, LineChart, X, Bell, Star, ChartLine, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const easeOut: Easing = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } }
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.12 } }
};

const ConsumerSolution = () => {
  const [activeView, setActiveView] = useState<'personal' | 'business'>('personal');

  return (
    <div className="min-h-screen bg-[#FAFBFC] text-[#0E1116]">
      {/* HERO - Reppoo-inspired with floating cards */}
      <section className="min-h-[95vh] flex items-center relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/consumers-hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#F8FAFC]/60 to-[#F1F5F9]/70" />
        
        <div className="container mx-auto px-[6%] py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={stagger}
            >
              
              <motion.h1 
                variants={fadeUp}
                className="text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.05] tracking-[-0.03em] mb-6"
              >
                Your <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">business credit</span> is invisible.
                <br />
                <span className="text-[#94A3B8]">Until now.</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeUp}
                className="text-xl text-[#64748B] leading-relaxed max-w-[540px] mb-8"
              >
                Banks show you personal credit everywhere. But business credit—D&B PAYDEX, Experian Intelliscore, FSR ratings—is completely hidden. FuteurCredX finally makes it visible.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
                <a 
                  href="https://apps.apple.com/us/app/futeurcredx/id6736497241" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img src="/badges/app-store-badge.svg" alt="Download on the App Store" className="h-14" />
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.futeur.futeurCred&pli=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img src="/badges/google-play-badge.svg" alt="Get it on Google Play" className="h-14" />
                </a>
              </motion.div>

              {/* Trust badges */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-6">
                {[
                  { icon: Shield, label: "Bank-level security" },
                  { icon: Eye, label: "Business credit monitoring" },
                  { icon: Star, label: "4.8 App Store rating" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#64748B]">
                    <item.icon className="w-4 h-4 text-[#3B82F6]" />
                    {item.label}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Floating Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[600px]">
                {/* Main Phone Mockup */}
                <motion.div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] bg-white rounded-[40px] p-3 shadow-2xl shadow-black/10 border border-[#E2E8F0] z-20"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="bg-[#0E1116] rounded-[32px] p-6 h-[520px] overflow-hidden">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-white text-sm font-medium">FuteurCredX</span>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    </div>
                    <div className="text-center mb-6">
                      <p className="text-[#94A3B8] text-xs mb-1">Your Business Credit</p>
                      <p className="text-4xl font-bold text-white">PAYDEX 78</p>
                      <p className="text-xs text-green-400">+12 this month</p>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-xl p-3 border border-[#3B82F6]/30">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-[#94A3B8]">D&B PAYDEX</span>
                          <span className="text-sm font-semibold text-[#3B82F6]">78</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full mt-2">
                          <div className="w-[78%] h-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full" />
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-[#94A3B8]">Intelliscore Plus</span>
                          <span className="text-sm font-semibold text-white">53</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full mt-2">
                          <div className="w-[53%] h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-white/5 rounded-xl">
                      <p className="text-[10px] text-[#94A3B8] mb-2">Next Actions</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-green-400" />
                          <span className="text-[10px] text-white">Add vendor tradeline</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full border border-[#94A3B8]" />
                          <span className="text-[10px] text-[#94A3B8]">Apply for net-30 account</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Left floating card - What Banks Show */}
                <motion.div 
                  className="absolute left-0 top-16 w-[200px] bg-white rounded-2xl p-4 shadow-lg border border-[#E2E8F0] z-10"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[#10B981]/10 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    </div>
                    <span className="text-xs font-medium">D&B PAYDEX</span>
                  </div>
                  <p className="text-xs text-[#64748B] mb-2">Payment history score</p>
                  <div className="flex gap-1">
                    {['78/100', 'Low Risk'].map((label) => (
                      <span key={label} className="bg-[#F1F5F9] text-[8px] px-1.5 py-0.5 rounded">{label}</span>
                    ))}
                  </div>
                </motion.div>

                {/* Right floating card - Intelliscore */}
                <motion.div 
                  className="absolute right-0 top-32 w-[200px] bg-gradient-to-br from-[#0E1116] to-[#1E293B] text-white rounded-2xl p-4 shadow-lg z-10"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-[#3B82F6]" />
                    </div>
                    <span className="text-xs font-medium">Intelliscore Plus</span>
                  </div>
                  <p className="text-xs text-white/60 mb-2">Commercial credit risk</p>
                  <p className="text-[10px] text-[#3B82F6]">Only FuteurCredX shows this →</p>
                </motion.div>

                {/* Bottom stats card */}
                <motion.div 
                  className="absolute bottom-8 left-8 right-8 bg-white rounded-2xl p-4 shadow-lg border border-[#E2E8F0]"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                >
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-[#0E1116]">2.4M+</p>
                      <p className="text-[10px] text-[#64748B]">Users</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#10B981]">+47</p>
                      <p className="text-[10px] text-[#64748B]">Avg Score Lift</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#3B82F6]">4.8★</p>
                      <p className="text-[10px] text-[#64748B]">App Rating</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE GAP - Consumer vs Business Credit Visibility */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-[1200px] mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="inline-block bg-[#FEF3C7] text-[#D97706] text-xs font-medium px-3 py-1 rounded-full mb-4">THE GAP</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-6">
                Banks perfected consumer credit visibility.
                <br />
                <span className="text-[#94A3B8]">They forgot about business owners.</span>
              </h2>
              <p className="text-xl text-[#64748B] max-w-[700px] mx-auto">
                Your personal FICO is everywhere—Chase, Wells Fargo, Capital One all show it for free. But try finding your D&B PAYDEX or Experian Intelliscore. Good luck.
              </p>
            </motion.div>

            {/* Toggle */}
            <motion.div variants={fadeUp} className="flex justify-center mb-12">
              <div className="bg-[#F1F5F9] rounded-full p-1 flex">
                <button
                  onClick={() => setActiveView('personal')}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeView === 'personal' 
                    ? 'bg-white text-[#0E1116] shadow-sm' 
                    : 'text-[#64748B] hover:text-[#0E1116]'}`}
                >
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    Personal Credit (Visible)
                  </span>
                </button>
                <button
                  onClick={() => setActiveView('business')}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeView === 'business' 
                    ? 'bg-[#0E1116] text-white shadow-sm' 
                    : 'text-[#64748B] hover:text-[#0E1116]'}`}
                >
                  <span className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-400" />
                    Business Credit (Hidden)
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Content based on toggle */}
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {activeView === 'personal' ? (
                <div className="bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5] rounded-3xl p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle2 className="w-6 h-6 text-[#10B981]" />
                        <span className="text-[#10B981] font-semibold">Banks Got This Right</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-4">Your personal credit is everywhere</h3>
                      <p className="text-[#64748B] mb-6">
                        Weekly FICO updates, score alerts, factor breakdowns, and pre-qualified offers—all free inside your banking app.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {[
                          { label: "Free FICO Access", icon: Eye },
                          { label: "Score Alerts", icon: Bell },
                          { label: "Factor Breakdown", icon: BarChart3 },
                          { label: "Pre-Qualified Offers", icon: CreditCard }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 bg-white/60 rounded-lg p-3">
                            <item.icon className="w-4 h-4 text-[#10B981]" />
                            <span className="text-sm">{item.label}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-6">
                        <div>
                          <p className="text-3xl font-bold text-[#10B981]">60M+</p>
                          <p className="text-xs text-[#64748B]">CreditWise users</p>
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-[#10B981]">7%↑</p>
                          <p className="text-xs text-[#64748B]">Week-1 retention</p>
                        </div>
                      </div>
                    </div>
                    {/* Bank app mockups */}
                    <div className="flex gap-4 justify-center">
                      {[
                        "/mobile/capital-one-email.png",
                        "/mobile/chase-consumer.png",
                        "/mobile/wells-fargo-app.png"
                      ].map((img, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.15 }}
                          className="w-[140px] bg-white rounded-2xl shadow-lg overflow-hidden"
                          style={{ transform: `rotate(${(i - 1) * 3}deg)` }}
                        >
                          <img src={img} alt="Bank app" className="w-full h-auto" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-3xl p-8 md:p-12 text-white">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <X className="w-6 h-6 text-red-400" />
                        <span className="text-red-400 font-semibold">The Blind Spot</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-4">Your business credit is invisible</h3>
                      <p className="text-[#94A3B8] mb-6">
                        No visibility, no education, no pre-qualification. You only find out your business credit score after you've been denied.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {[
                          { label: "No Score Visibility", crossed: true },
                          { label: "No Alerts", crossed: true },
                          { label: "No Guidance", crossed: true },
                          { label: "Denial = Discovery", crossed: true }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg p-3">
                            <X className="w-4 h-4 text-red-400" />
                            <span className="text-sm text-[#94A3B8]">{item.label}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-6">
                        <div>
                          <p className="text-3xl font-bold text-red-400">67%</p>
                          <p className="text-xs text-[#94A3B8]">Leave for fintechs</p>
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-red-400">$2.1B</p>
                          <p className="text-xs text-[#94A3B8]">Lost annually</p>
                        </div>
                      </div>
                    </div>
                    {/* SMB empty state mockups */}
                    <div className="flex gap-4 justify-center">
                      {[
                        "/mobile/chase-smb.png",
                        "/mobile/citi-smb.png",
                        "/mobile/wells-smb.png"
                      ].map((img, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.15 }}
                          className="w-[140px] bg-[#0F172A] rounded-2xl shadow-lg overflow-hidden border border-white/10"
                          style={{ transform: `rotate(${(i - 1) * 3}deg)` }}
                        >
                          <img src={img} alt="SMB app" className="w-full h-auto opacity-60" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========== BUSINESS CREDIT VISIBILITY SECTION (From FuteurCredXApp) ========== */}
      <section className="py-24 bg-gradient-to-br from-[#FF6B35]/10 via-[#FF9500]/5 to-[#4F7CFF]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              FuteurCredX makes it visible.<br />
              <span className="text-[#FF6B35]">Finally.</span>
            </h2>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              The app that shows you the business credit scores lenders actually check—with AI-powered guidance to improve them.
            </p>
          </motion.div>

          {/* 5 iPhone Mockups Side by Side */}
          <div className="relative flex items-end justify-center gap-4 md:gap-6 h-[500px] md:h-[580px]">
            {/* Phone 1 - Left edge */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="hidden lg:block relative -ml-16"
            >
              <img 
                src="/mobile/experian-summary.png" 
                alt="Experian Score Summary"
                className="w-48 h-[380px] object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Phone 2 - Second from left */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="hidden md:block relative"
            >
              <img 
                src="/mobile/fsr-score.png" 
                alt="FSR Score Overview"
                className="w-52 h-[420px] object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Phone 3 - CENTER (Largest, elevated) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-10 -mt-8"
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-[#FF6B35]/30 to-[#4F7CFF]/30 rounded-full blur-3xl"></div>
              <img
                src="/mobile/futeurcredx-hero-mockup.png"
                alt="FuteurCredX Business Credit Scores"
                className="relative w-60 md:w-72 h-auto drop-shadow-2xl"
              />
            </motion.div>

            {/* Phone 4 - Second from right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="hidden md:block relative"
            >
              <img 
                src="/mobile/intelliscore.png" 
                alt="Intelliscore Plus Overview"
                className="w-52 h-[420px] object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Phone 5 - Right edge */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block relative -mr-16"
            >
              <img 
                src="/mobile/experian-details.png" 
                alt="Experian Business Credit Details"
                className="w-48 h-[380px] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Store Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-4 mt-12"
          >
            <a 
              href="https://apps.apple.com/us/app/futeurcredx/id6736497241" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img src="/badges/app-store-badge.svg" alt="Download on the App Store" className="h-12" />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.futeur.futeurCred&pli=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img src="/badges/google-play-badge.svg" alt="Get it on Google Play" className="h-12" />
            </a>
          </motion.div>
        </div>
      </section>


      {/* ========== FAQ SECTION ========== */}
      <FAQSection />

      {/* ========== CTA SECTION (From FuteurCredXApp) ========== */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/consumers-cta-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/80" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Start Building A Smarter Credit Future!
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-lg">
                Join thousands of business owners already using FuteurCredX to monitor their business credit, apply for funding, and build credit smarter — all in one place.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a 
                  href="https://apps.apple.com/us/app/futeurcredx/id6736497241" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img src="/badges/app-store-badge.svg" alt="Download on the App Store" className="h-12" />
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.futeur.futeurCred&pli=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img src="/badges/google-play-badge.svg" alt="Get it on Google Play" className="h-12" />
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Bank-Level Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Cancel Anytime</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                <img 
                  src="/mobile/fsr-score.png" 
                  alt="FuteurCredX App - FSR Score Overview"
                  className="w-72 h-auto drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

// FAQ Components
const faqCategories = [
  {
    name: "The Basics",
    faqs: [
      {
        question: "What is FuteurCredX?",
        answer: "FuteurCredX is the first app designed specifically for business credit visibility. We show you the credit scores that lenders actually check when you apply for business funding—D&B PAYDEX, Experian Intelliscore Plus, and FSR ratings. No other consumer app gives you this level of insight into your business credit profile."
      },
      {
        question: "How is this different from Credit Karma?",
        answer: "Credit Karma shows personal credit scores. FuteurCredX shows business credit scores—the ones that matter when you're applying for business loans, lines of credit, or vendor accounts. These are completely separate profiles that lenders evaluate independently."
      },
      {
        question: "Is it really free to check my business credit scores?",
        answer: "Yes! Checking your business credit scores on FuteurCredX is completely free and does not affect your credit. We make money through partner recommendations when you apply for business credit products, not from charging you to see your own data."
      },
      {
        question: "What business credit scores do you show?",
        answer: "We display your D&B PAYDEX (payment history score 1-100), Experian Intelliscore Plus (risk score 1-100), Experian FSR (Financial Stability Risk 1-100), and Equifax Business Credit Score. These are the exact scores lenders pull when evaluating your business."
      }
    ]
  },
  {
    name: "Credit Building",
    faqs: [
      {
        question: "How long does it take to build business credit?",
        answer: "Most businesses can establish a business credit profile in 60-90 days by opening tradelines with Net-30 vendors that report to business credit bureaus. Building a strong score (PAYDEX 80+) typically takes 6-12 months of consistent positive payment history."
      },
      {
        question: "Does checking my business credit score lower it?",
        answer: "No. FuteurCredX uses soft inquiries to check your business credit, which do not impact your score. Only hard inquiries from actual credit applications affect your score, and even then, the impact is typically small and temporary."
      },
      {
        question: "What factors affect my business credit score?",
        answer: "The main factors are: payment history (paying vendors on time is crucial), credit utilization, length of business credit history, number of tradelines, public records (liens, judgments, bankruptcies), and company size/financials. PAYDEX specifically measures how quickly you pay invoices relative to terms."
      },
      {
        question: "Can I build business credit without a personal guarantee?",
        answer: "Yes! That's exactly what FuteurCredX helps with. Start with Net-30 vendor accounts that don't require a personal guarantee, like Uline, Grainger, or Quill. These report to business bureaus and build your business credit profile separately from your personal credit."
      }
    ]
  },
  {
    name: "Using the App",
    faqs: [
      {
        question: "Can I apply for business loans through the app?",
        answer: "Yes! FuteurCredX lets you apply for business credit cards, lines of credit, and loans directly in the app. We match you with products based on your actual business credit profile—so you know your approval odds before you apply."
      },
      {
        question: "How often are my business credit scores updated?",
        answer: "Business credit scores update when bureaus receive new information from creditors, typically monthly. We'll notify you whenever there's a significant change to your business credit profile."
      },
      {
        question: "What is the LUMIQ AI journey engine?",
        answer: "LUMIQ is our AI-powered business credit intelligence system. It analyzes your complete business credit picture, identifies the fastest path to your credit goals, and provides personalized action steps for building stronger business credit."
      },
      {
        question: "How do I dispute errors on my business credit report?",
        answer: "FuteurCredX identifies potential errors and guides you through the dispute process step-by-step. You can initiate disputes directly through the app for business credit bureaus including D&B, Experian Business, and Equifax Business."
      }
    ]
  },
  {
    name: "Security & Privacy",
    faqs: [
      {
        question: "Is my business data secure?",
        answer: "Absolutely. FuteurCredX uses AES-256 encryption, zero-knowledge vaults, and SOC 2 compliant protocols. Powered by FUTEURSECURE™, your business data is protected by bank-level security. We never sell your data to third parties."
      },
      {
        question: "How do you protect my login credentials?",
        answer: "We use bank-level 256-bit encryption for all data transmission, multi-factor authentication (MFA), biometric login options (Face ID/Touch ID), and automatic session timeouts. Your credentials are never stored in plain text."
      },
      {
        question: "Can I delete my account and data?",
        answer: "Yes. You can request complete account deletion at any time through the app settings. We'll remove all your business data from our servers within 30 days, in compliance with GDPR and CCPA regulations."
      },
      {
        question: "Who can see my business credit information?",
        answer: "Only you. Your business credit data is private and visible only to you. We do not share your credit scores, reports, or financial information with anyone without your explicit consent. When you apply for credit, you control exactly what's shared."
      }
    ]
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className={`text-base font-medium transition-colors ${isOpen ? 'text-[#FF6B35]' : 'text-gray-900 group-hover:text-[#FF6B35]'}`}>
          {question}
        </span>
        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all flex-shrink-0 ml-4 ${isOpen ? 'bg-[#FF6B35]' : 'bg-gray-100'}`}>
          <ChevronDown className={`w-4 h-4 transition-all ${isOpen ? 'text-white rotate-180' : 'text-gray-400'}`} />
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-gray-500 leading-relaxed text-sm">{answer}</p>
      </motion.div>
    </div>
  );
};

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#FAFBFC]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Everything you need to know about managing your business credit.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px,1fr] gap-12">
          {/* Category Tabs - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            {faqCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCategory(index);
                  setOpenFAQ(0);
                }}
                className={`w-full text-left px-5 py-4 rounded-xl font-medium transition-all ${
                  activeCategory === index
                    ? 'bg-white shadow-sm text-gray-900 border border-gray-100'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* FAQ Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            {faqCategories[activeCategory].faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsumerSolution;