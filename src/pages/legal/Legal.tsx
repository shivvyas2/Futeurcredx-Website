import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ChevronRight, ArrowUpRight } from "lucide-react";

const legalDocuments = [
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal information across our platform and services.",
    lastUpdated: "January 2026",
    link: "/legal/privacy-policy",
    accentColor: "from-amber-500/20 to-orange-500/20",
    hoverGlow: "group-hover:shadow-amber-500/20",
  },
  {
    id: "terms-of-service",
    title: "Terms of Service",
    description: "The terms and conditions governing your use of FuteurCredX products and services.",
    lastUpdated: "January 2026",
    link: "/legal/terms-of-service",
    accentColor: "from-rose-500/20 to-pink-500/20",
    hoverGlow: "group-hover:shadow-rose-500/20",
  },
  {
    id: "data-processing",
    title: "Data Processing Agreement",
    description: "Our commitments for processing personal data on behalf of business customers under GDPR and CCPA.",
    lastUpdated: "January 2026",
    link: "/legal/data-processing",
    accentColor: "from-emerald-500/20 to-teal-500/20",
    hoverGlow: "group-hover:shadow-emerald-500/20",
  },
  {
    id: "cookie-policy",
    title: "Cookie Policy",
    description: "Information about how we use cookies and similar tracking technologies on our websites.",
    lastUpdated: "January 2026",
    link: "/legal/cookie-policy",
    accentColor: "from-blue-500/20 to-cyan-500/20",
    hoverGlow: "group-hover:shadow-blue-500/20",
  },
  {
    id: "glba-compliance",
    title: "GLBA Compliance",
    description: "Our compliance with the Gramm-Leach-Bliley Act for financial data protection and privacy.",
    lastUpdated: "January 2026",
    link: "/legal/glba-compliance",
    accentColor: "from-violet-500/20 to-purple-500/20",
    hoverGlow: "group-hover:shadow-violet-500/20",
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use Policy",
    description: "Guidelines for appropriate use of FuteurCredX services and prohibited activities.",
    lastUpdated: "January 2026",
    link: "/legal/acceptable-use",
    accentColor: "from-orange-500/20 to-red-500/20",
    hoverGlow: "group-hover:shadow-orange-500/20",
  },
];

export default function Legal() {
  return (
    <div className="min-h-screen bg-[#2D2424] text-white">
      {/* Hero Section - Brown theme */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D2424] via-[#3A2F2F] to-[#2D2424]" />
        
        {/* Decorative circles */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] opacity-10">
          <div className="absolute inset-0 border border-white/20 rounded-full" />
          <div className="absolute inset-12 border border-white/15 rounded-full" />
          <div className="absolute inset-24 border border-white/10 rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-sm text-white/70">Legal & Compliance</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-[-0.03em] mb-6">
              Transparency
              <br />
              <span className="text-white/60">You Can Trust</span>
            </h1>
            
            <p className="text-xl text-white/60 leading-relaxed max-w-xl mb-10">
              At FuteurCredX, we believe in clear, accessible legal documentation. 
              Review our policies and understand how we protect your data and rights.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:legal@futeurcredx.com"
                className="inline-flex items-center gap-2 bg-white text-[#2D2424] px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors"
              >
                Contact Legal Team
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/5 transition-colors"
              >
                General Inquiries
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Documents Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D2424] via-[#352A2A] to-[#2D2424]" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-white mb-3">
              Legal Documentation
            </h2>
            <p className="text-white/50 text-lg">
              All the policies and agreements that govern our relationship with you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {legalDocuments.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link
                  to={doc.link}
                  className={`group relative block p-5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:shadow-lg ${doc.hoverGlow}`}
                >
                  {/* Animated gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${doc.accentColor} rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                  
                  {/* Pulsing dot indicator */}
                  <div className="absolute top-5 right-5 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 group-hover:opacity-100" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400/50 group-hover:bg-amber-400" />
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-medium text-white mb-2 pr-8 group-hover:text-amber-100 transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4 line-clamp-2">
                    {doc.description}
                  </p>

                  {/* Footer with arrow animation */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/40">
                      Updated {doc.lastUpdated}
                    </span>
                    <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[#2D2424]" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
                Have Questions About
                <br />
                <span className="text-white/60">Our Policies?</span>
              </h2>
              <p className="text-lg text-white/50 mb-10 max-w-md">
                Our legal and compliance team is here to help. Reach out for any 
                clarifications or specific requirements for your organization.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:legal@futeurcredx.com"
                  className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.06] hover:border-white/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white group-hover:text-amber-100 transition-colors">Legal Inquiries</p>
                    <p className="text-sm text-white/50">legal@futeurcredx.com</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-amber-400 transition-colors" />
                </a>

                <a
                  href="mailto:data@futeurcredx.com"
                  className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.06] hover:border-white/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white group-hover:text-emerald-100 transition-colors">Data Privacy</p>
                    <p className="text-sm text-white/50">data@futeurcredx.com</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-emerald-400 transition-colors" />
                </a>

                <a
                  href="mailto:support@futeurcredx.com"
                  className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.06] hover:border-white/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white group-hover:text-blue-100 transition-colors">General Support</p>
                    <p className="text-sm text-white/50">support@futeurcredx.com</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-blue-400 transition-colors" />
                </a>
              </div>
            </motion.div>

            {/* Right - Corporate HQ Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative bg-gradient-to-br from-[#3A2F2F] to-[#2D2424] rounded-2xl overflow-hidden border border-white/10 group hover:border-white/20 transition-all">
                {/* Image placeholder with gradient overlay */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-[#3A2F2F] to-[#2D2424]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* NYC Skyline silhouette placeholder */}
                    <svg className="w-full h-32 text-white/10" viewBox="0 0 400 100" fill="currentColor">
                      <rect x="20" y="40" width="25" height="60" />
                      <rect x="50" y="20" width="20" height="80" />
                      <rect x="75" y="50" width="30" height="50" />
                      <rect x="110" y="10" width="25" height="90" />
                      <rect x="140" y="35" width="20" height="65" />
                      <rect x="165" y="5" width="30" height="95" />
                      <rect x="200" y="25" width="25" height="75" />
                      <rect x="230" y="45" width="20" height="55" />
                      <rect x="255" y="15" width="35" height="85" />
                      <rect x="295" y="30" width="25" height="70" />
                      <rect x="325" y="50" width="20" height="50" />
                      <rect x="350" y="40" width="30" height="60" />
                    </svg>
                  </div>
                  {/* Animated gradient shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Corporate Headquarters</h3>
                  </div>

                  <div className="space-y-4">
                    <p className="text-2xl font-semibold text-white">FuteurCredX Inc.</p>
                    <p className="text-white/60 text-lg leading-relaxed">
                      17 State Street, FL 40
                      <br />
                      New York, NY 10004
                      <br />
                      United States
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-sm text-white/40 mb-4">
                      For official legal correspondence, please use the above address 
                      or email legal@futeurcredx.com
                    </p>
                    
                    {/* Interactive map link */}
                    <a
                      href="https://maps.google.com/?q=17+State+Street+New+York+NY+10004"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
                    >
                      <span>View on Map</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
