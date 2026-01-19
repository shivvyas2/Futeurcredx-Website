import { motion } from "framer-motion";
import { 
  Star, 
  Shield, 
  TrendingUp, 
  ChevronDown, 
  CheckCircle2, 
  Building2, 
  Users, 
  CreditCard, 
  BarChart3, 
  Smartphone,
  Eye,
  Zap,
  Target,
  Lock,
  ArrowRight,
  LineChart,
  Wallet,
  PiggyBank,
  BadgeCheck,
  Sparkles
} from "lucide-react";
import { useState, useEffect } from "react";

// Animated count-up number component
const CountUpNumber = ({ target, duration = 1.5, delay = 0 }: { target: number; duration?: number; delay?: number }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setHasStarted(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, target, duration]);

  return <>{count}</>;
};
import QRCodeModal from "@/components/QrCode";
import { Button } from "@/components/ui/button";

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/86.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg"
];

const testimonials = [
  {
    quote: "FuteurCredX transformed how I manage my business credit. The AI insights helped me understand exactly what was affecting my score. Within 3 months, my Intelliscore jumped 40 points.",
    name: "Marcus T.",
    title: "E-commerce Founder",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    quote: "Finally, a business credit app that actually works. The vendor discovery feature alone saved me countless hours of research. I've established 5 new tradelines that report monthly.",
    name: "Sarah K.",
    title: "Construction Business Owner",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    quote: "The LUMIQ AI journey engine is incredible. It's like having a credit expert in my pocket 24/7. Best investment I've made for my business credit health.",
    name: "David L.",
    title: "Restaurant Group CEO",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    rating: 5
  }
];

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

export default function FuteurCredXApp() {
  return (
    <div className="min-h-screen bg-white">
      {/* ========== HERO SECTION ========== */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/futeurcredx-hero-bg.jpg')" }}
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            
            {/* LEFT SIDE - iPhone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative flex items-center justify-center lg:justify-start"
            >
              {/* iPhone mockup image */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-8 bg-gradient-to-br from-amber-200/40 via-orange-200/30 to-transparent rounded-[4rem] blur-3xl" />
                
                <img 
                  src="/mobile/futeurcredx-hero-mockup.png" 
                  alt="FuteurCredX App - Business Credit Scores"
                  className="relative z-10 w-[320px] md:w-[380px] h-auto drop-shadow-2xl"
                />
                
                {/* Floating notification badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.4 }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100 z-20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-700">Score Updated!</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* RIGHT SIDE - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-left"
            >
              {/* Social Proof Bar */}
              <div className="flex items-center gap-4 mb-8 flex-wrap">
                {/* Avatars Stack */}
                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    {avatars.map((avatar, i) => (
                      <img 
                        key={i}
                        src={avatar} 
                        alt="User"
                        className="w-9 h-9 rounded-full border-2 border-white shadow-sm"
                      />
                    ))}
                  </div>
                </div>
                
                {/* Rating Stars Only */}
                <div className="flex">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF9500] text-[#FF9500]" />
                  ))}
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6 drop-shadow-lg">
                Take Control of Your{" "}
                <span className="bg-gradient-to-r from-[#FFD700] to-[#FF6B35] bg-clip-text text-transparent">
                  Business Credit
                </span>{" "}
                Journey
              </h1>
              
              <p className="text-lg text-white/90 max-w-xl leading-relaxed mb-8 drop-shadow">
                FuteurCredX shows you the business credit scores that lenders actually check—D&B PAYDEX, Experian Intelliscore, and FSR ratings. Apply for business loans right from the app.
              </p>

              {/* Store Badges */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
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

              {/* Credit Score Cards - FSR & Intelliscore */}
              <div className="flex flex-wrap gap-4">
                {/* FSR Score Card */}
                <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100 min-w-[200px]">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">FSR Score</p>
                      <p className="text-xs text-gray-500">Financial Stability</p>
                    </div>
                    <img src="/Dark-Experian.png" alt="Experian" className="h-5 object-contain" />
                  </div>
                  <p className="text-4xl font-bold text-gray-900 mb-2">30</p>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-1">
                    <div className="h-full w-[30%] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-yellow-500 rounded-full" />
                    </div>
                  </div>
                  <p className="text-xs text-yellow-600 font-medium">Medium Risk (Class 3)</p>
                </div>
                
                {/* Intelliscore Card */}
                <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100 min-w-[200px]">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Intelliscore</p>
                      <p className="text-xs text-gray-500">Commercial Credit</p>
                    </div>
                    <img src="/Dark-Experian.png" alt="Experian" className="h-5 object-contain" />
                  </div>
                  <p className="text-4xl font-bold text-gray-900 mb-2">53</p>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-1">
                    <div className="h-full w-[53%] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-blue-500 rounded-full" />
                    </div>
                  </div>
                  <p className="text-xs text-blue-600 font-medium">Low-Medium Risk</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ========== DOWNLOAD ON ANY DEVICE ========== */}
      <section className="relative py-20 overflow-hidden">
        {/* Dark fabric background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/dark-fabric-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Looking for another device?
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                name: "FuteurCredX for iOS",
                type: "Mobile App",
                href: "https://apps.apple.com/us/app/futeurcredx/id6736497241",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                    <path d="M15.942 4.606l.89-1.574a1.98 1.98 0 0 1 2.738-.753c.962.562 1.286 1.816.737 2.799l-8.581 15.187h6.207c2.012 0 3.139 2.417 2.265 4.092H2.001C.891 24.357 0 23.447 0 22.311s.891-2.046 2.001-2.046h5.102l6.531-11.573-2.04-3.62c-.55-.984-.225-2.226.737-2.799.962-.562 2.177-.23 2.738.753l.874 1.579zM8.224 26.465L6.3 29.877a1.98 1.98 0 0 1-2.738.753c-.962-.562-1.286-1.816-.737-2.799l1.429-2.529c1.616-.511 2.93-.118 3.969 1.163zm16.569-6.188h5.206c1.11 0 2.001.911 2.001 2.046s-.891 2.046-2.001 2.046h-2.892l1.952 3.462c.55.984.225 2.226-.737 2.799-.962.562-2.177.23-2.738-.753L18.191 16.78c-1.677-2.956-.478-5.924.704-6.93l5.899 10.427z" fill="currentColor"></path>
                  </svg>
                )
              },
              {
                name: "FuteurCredX for Mac",
                type: "Desktop App",
                href: "https://apps.apple.com/us/app/futeurcredx/id6736497241",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32">
                    <path fill="currentColor" d="M13.206 9.21c1.256 0 3.645-1.733 6.111-1.475 1.155.037 2.286.342 3.302.891s1.891 1.329 2.553 2.275c-1.043.641-1.907 1.536-2.512 2.601s-.93 2.266-.946 3.49c.001 1.378.408 2.725 1.171 3.874s1.845 2.047 3.115 2.583c-.5 1.621-1.253 3.152-2.231 4.537-1.312 1.963-2.687 3.881-4.872 3.918-2.122.048-2.835-1.25-5.268-1.25-2.458 0-3.218 1.214-5.254 1.299-2.081.076-3.67-2.096-5.031-4.04-2.718-3.972-4.835-11.194-1.997-16.107a7.8 7.8 0 0 1 6.564-4.003c2.081-.044 4.015 1.406 5.295 1.406zM19.342 0a7.15 7.15 0 0 1-1.636 5.122c-.57.709-1.294 1.28-2.117 1.669s-1.723.586-2.633.577c-.058-.892.061-1.786.349-2.632s.74-1.627 1.33-2.298C15.842 1.061 17.522.191 19.342 0z"></path>
                  </svg>
                )
              },
              {
                name: "FuteurCredX for Android",
                type: "Mobile App",
                href: "https://play.google.com/store/apps/details?id=com.futeur.futeurCred&pli=1",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="31" viewBox="0 0 33 31">
                    <path fill="currentColor" d="M26.5 15v16h-20V15h20zm-24 0a2 2 0 0 1 2 2h0v10a2 2 0 1 1-4 0h0V17a2 2 0 0 1 2-2zm28 0a2 2 0 0 1 2 2h0v10a2 2 0 1 1-4 0h0V17a2 2 0 0 1 2-2zM23.668.446c.304-.462.924-.584 1.386-.278a1 1 0 0 1 .278 1.386h0l-2.506 3.76C25.052 7.148 26.5 9.89 26.5 13h0-20c0-3.11 1.448-5.852 3.674-7.686h0l-2.506-3.76A1 1 0 0 1 7.946.168a1 1 0 0 1 1.386.278h0l2.506 3.758C13.236 3.46 14.806 3 16.5 3s3.264.46 4.662 1.204h0z"></path>
                  </svg>
                )
              },
              {
                name: "FuteurCredX on Web",
                type: "Web App",
                href: "https://app.futeurcredx.com/signin",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                    <path d="M31 1H1a1 1 0 0 0-1 1v23a1 1 0 0 0 1 1h13v3H9a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2h-5v-3h13a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 23H2V3h28v21z" fill="currentColor"></path>
                  </svg>
                )
              },
              {
                name: "FuteurCredX for iPad",
                type: "Tablet App",
                href: "https://apps.apple.com/us/app/futeurcredx/id6736497241",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                    <path d="M26 0H6a3 3 0 0 0-3 3v26a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm1 29a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v26zm-11-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" fill="currentColor"></path>
                  </svg>
                )
              }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-transparent border border-transparent transition-all duration-300 hover:bg-white hover:shadow-[0_0_60px_20px_rgba(255,255,255,0.15)]"
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center text-gray-400 group-hover:text-gray-900 transition-colors duration-300 mb-4">
                  {item.icon}
                </div>
                
                {/* Name */}
                <span className="text-white group-hover:text-gray-900 font-semibold text-base text-center transition-colors duration-300 mb-1">
                  {item.name}
                </span>
                
                {/* Type */}
                <span className="text-gray-500 group-hover:text-gray-500 text-sm transition-colors duration-300">
                  {item.type}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PERSONAL CREDIT VISIBILITY SECTION ========== */}
      <section className="py-24 bg-gradient-to-br from-[#E8F4EC] via-[#D4E8DC] to-[#C0DCC8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#2D8B4E] text-sm font-semibold uppercase tracking-widest">Personal Credit Visibility</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
              Personal Credit Is Easy to See
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Every major bank gives you free access to your personal credit score. Chase, Capital One, Wells Fargo—they all show it.
            </p>
          </motion.div>

          {/* 5 iPhone Mockups Side by Side */}
          <div className="relative flex items-end justify-center gap-4 md:gap-6 h-[500px] md:h-[580px]">
            
            {/* Phone 1 - Chase Email (Left edge) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="hidden lg:block relative -ml-16"
            >
              <img 
                src="/mobile/chase-email.png" 
                alt="Chase Credit Journey Email"
                className="w-48 h-[380px] object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Phone 2 - Capital One Email (Second from left) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="hidden md:block relative"
            >
              <img 
                src="/mobile/capital-one-email.png" 
                alt="Capital One CreditWise Alert"
                className="w-52 h-[420px] object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Phone 3 - Chase Consumer App (CENTER - Largest, elevated) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-10 -mt-8"
            >
              <img 
                src="/mobile/chase-consumer.png" 
                alt="Chase Mobile App - Credit Journey"
                className="w-60 md:w-64 h-[480px] md:h-[520px] object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Phone 4 - Wells Fargo App (Second from right) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="hidden md:block relative"
            >
              <img 
                src="/mobile/wells-fargo-app.png" 
                alt="Wells Fargo Mobile App - FICO Score"
                className="w-52 h-[420px] object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Phone 5 - Wells Fargo Email (Right edge) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block relative -mr-16"
            >
              <img 
                src="/mobile/wells-fargo-email.png" 
                alt="Wells Fargo FICO Score Email"
                className="w-48 h-[380px] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 text-lg">
              Personal credit monitoring is solved. <span className="font-semibold text-gray-900">But what about your business credit?</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== FUTEURCREDX BUSINESS CREDIT SECTION ========== */}
      <section id="business-credit-visibility" className="py-24 bg-gradient-to-br from-[#FF6B35]/10 via-[#FF9500]/5 to-[#4F7CFF]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-[#FF6B35] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              Only FuteurCredX
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
              Business Credit Visibility
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              The scores lenders actually check when you apply for business funding. No other app shows these.
            </p>
          </motion.div>

          {/* 5 iPhone Mockups Side by Side - Business Credit */}
          <div className="relative flex items-end justify-center gap-4 md:gap-6 h-[500px] md:h-[580px]">
            
            {/* Phone 1 - Left edge - Experian Summary */}
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

            {/* Phone 2 - Second from left - FSR Score */}
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

            {/* Phone 3 - CENTER (Largest, elevated) - FuteurCredX App */}
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

            {/* Phone 4 - Second from right - Intelliscore */}
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

            {/* Phone 5 - Right edge - Experian Details */}
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

      {/* ========== IMPACT ON BUSINESS OWNERS SECTION ========== */}
      <section className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Impact on Business Owners
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              See the measurable ways FuteurCredX turns credit confusion into actionable insights.
            </p>
          </motion.div>

          {/* Three Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Card 1 - Business Credit Scores */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200/50"
            >
              {/* Blue header with description */}
              <div className="bg-[#4F7CFF] p-6 min-h-[140px]">
                <p className="text-white text-lg leading-relaxed">
                  See the two business credit scores banks check when underwriting your loan applications—before you apply.
                </p>
              </div>
              
              {/* Card content */}
              <div className="p-6 bg-white flex-1 flex flex-col">
                {/* Header row */}
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-gray-400" />
                  <span className="font-semibold text-gray-900">Business Scores</span>
                </div>
                
                {/* FSR Score with animated meter */}
                <div className="flex-1 flex flex-col justify-center mb-4">
                  <div className="flex flex-col items-center mb-2">
                    <img src="/logos/experian-logo.svg" alt="Experian" className="h-6 mb-1" />
                    <span className="text-sm font-medium text-gray-700">FSR Score</span>
                  </div>
                  <div className="relative flex items-center justify-center py-2">
                    <svg className="w-52 h-28" viewBox="0 0 160 80">
                      <path d="M20 70 A60 60 0 0 1 140 70" fill="none" stroke="#E5E7EB" strokeWidth="14" strokeLinecap="round" />
                      <motion.path 
                        d="M20 70 A60 60 0 0 1 80 10" 
                        fill="none" 
                        stroke="#4F7CFF" 
                        strokeWidth="14" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                      />
                    </svg>
                    <div className="absolute bottom-2 text-center">
                      <motion.span 
                        className="text-4xl font-bold text-gray-900"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                      >
                        <CountUpNumber target={30} duration={1.5} delay={0.3} />
                      </motion.span>
                      <p className="text-xs text-gray-400">OUT OF 100</p>
                    </div>
                  </div>
                </div>
                
                {/* Intelliscore with animated meter */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex flex-col items-center mb-2">
                    <img src="/logos/experian-logo.svg" alt="Experian" className="h-6 mb-1" />
                    <span className="text-sm font-medium text-gray-700">Intelliscore Plus</span>
                  </div>
                  <div className="relative flex items-center justify-center py-2">
                    <svg className="w-52 h-28" viewBox="0 0 160 80">
                      <path d="M20 70 A60 60 0 0 1 140 70" fill="none" stroke="#E5E7EB" strokeWidth="14" strokeLinecap="round" />
                      <motion.path 
                        d="M20 70 A60 60 0 0 1 100 15" 
                        fill="none" 
                        stroke="#FF9500" 
                        strokeWidth="14" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                      />
                    </svg>
                    <div className="absolute bottom-2 text-center">
                      <motion.span 
                        className="text-4xl font-bold text-gray-900"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                      >
                        <CountUpNumber target={53} duration={1.5} delay={0.5} />
                      </motion.span>
                      <p className="text-xs text-gray-400">OUT OF 100</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Real-Time Notifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200/50"
            >
              {/* Blue header with description */}
              <div className="bg-[#4F7CFF] p-6 min-h-[140px]">
                <p className="text-white text-lg leading-relaxed">
                  Real-time alerts keep you aware of every change to your business credit profile—so nothing catches you off guard.
                </p>
              </div>
              
              {/* Card content */}
              <div className="p-6 bg-white flex-1 flex flex-col">
                {/* Header row */}
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-gray-400" />
                  <span className="font-semibold text-gray-900">Notifications</span>
                </div>
                
                {/* Notification items with staggered animation */}
                <div className="flex-1 flex flex-col justify-between gap-3">
                  <motion.div 
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                    className="flex items-center gap-3 p-4 bg-red-50 rounded-xl border border-red-100 shadow-sm"
                  >
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-red-600 rotate-180" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Intelliscore Dropped</p>
                      <p className="text-sm text-gray-500">-5 points • Just now</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
                    className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100 shadow-sm"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Eye className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">New Credit Inquiry</p>
                      <p className="text-sm text-gray-500">American Express • 2h ago</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.7, duration: 0.4, ease: "easeOut" }}
                    className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100 shadow-sm"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Commercial Auto Loan Added</p>
                      <p className="text-sm text-gray-500">Tradeline reported • 1d ago</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.9, duration: 0.4, ease: "easeOut" }}
                    className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100 shadow-sm"
                  >
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Payment Missed</p>
                      <p className="text-sm text-gray-500">Net-30 account • 3d ago</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Pre-Approved Offers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200/50"
            >
              {/* Blue header with description */}
              <div className="bg-[#4F7CFF] p-6 min-h-[140px]">
                <p className="text-white text-lg leading-relaxed">
                  LumiqAI soft-pulls your business credit and shows you pre-approved products with one-tap apply.
                </p>
              </div>
              
              {/* Card content */}
              <div className="p-6 bg-white flex-1 flex flex-col">
                {/* Header row */}
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-gray-400" />
                  <span className="font-semibold text-gray-900">Pre-Approved</span>
                </div>
                
                {/* Pre-approved items */}
                <div className="flex-1 flex flex-col justify-between gap-3">
                  <div className="p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <BadgeCheck className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-semibold text-green-700">Pre-Approved</span>
                    </div>
                    <p className="font-semibold text-gray-900 mb-1">Commercial Mortgage</p>
                    <p className="text-sm text-gray-500">Up to $2.5M • 6.2% APR</p>
                    <button className="mt-3 text-sm font-medium text-green-600 flex items-center gap-1">
                      Apply Now <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <BadgeCheck className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-700">Eligible</span>
                    </div>
                    <p className="font-semibold text-gray-900 mb-1">Credit Line Increase</p>
                    <p className="text-sm text-gray-500">Business Credit Card • +$15,000</p>
                    <button className="mt-3 text-sm font-medium text-blue-600 flex items-center gap-1">
                      Request <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <BadgeCheck className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-semibold text-purple-700">Pre-Approved</span>
                    </div>
                    <p className="font-semibold text-gray-900 mb-1">Line of Credit</p>
                    <p className="text-sm text-gray-500">Up to $100K • Draw anytime</p>
                    <button className="mt-3 text-sm font-medium text-purple-600 flex items-center gap-1">
                      Apply Now <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== FEATURES SECTION (Atoks Style with iPhone + 4 Cards) ========== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm italic text-gray-500 mb-4 block">
              Benefits
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Know Before You Apply
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See your approval odds, compare products, and apply with confidence—never waste a hard inquiry again.
            </p>
          </motion.div>

          {/* Main Grid: 2 Left Cards | iPhone | 2 Right Cards */}
          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center min-h-[600px]">
            
            {/* Left Column - 2 Cards */}
            <div className="flex flex-col gap-6">
              {/* Card 1 - 45% Less Rejections */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-red-600 rotate-180" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">45% Less Rejections</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  SMB owners who understand their business credit profile before applying experience 45% fewer loan rejections—because they know what lenders will check.
                </p>
              </motion.div>

              {/* Card 2 - Prequalify First */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Know Before You Apply</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pre-qualify for business credit cards, lines of credit, and loans without hurting your score—soft pull only, no surprises.
                </p>
              </motion.div>
            </div>

            {/* Center - iPhone Mockup with Gradient Background */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="relative flex items-center justify-center"
            >
              {/* Gradient blob behind phone */}
              <div className="absolute inset-0 -top-12 -bottom-12">
                <div className="absolute w-full h-full bg-gradient-to-br from-[#FFD4BC] via-[#FFB088] to-[#FF9966] rounded-[3rem] transform -rotate-3"></div>
              </div>
              
              {/* iPhone Frame - Image already contains phone frame */}
              <div className="relative z-10">
                <img 
                  src="/mobile/know-before-apply.png" 
                  alt="FuteurCredX App - Know Before You Apply"
                  className="w-72 h-auto drop-shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Right Column - 2 Cards */}
            <div className="flex flex-col gap-6">
              {/* Card 3 - AI-Powered Matching */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI-Powered Matching</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  LUMIQ AI analyzes your complete credit picture and matches you with products where you have the highest approval odds.
                </p>
              </motion.div>

              {/* Card 4 - Real-Time Monitoring */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Real-Time Monitoring</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Get instant alerts when your business credit changes, new inquiries hit your file, or tradelines are added—stay one step ahead.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* ========== FAQ SECTION (Solo Style) ========== */}
      <FAQSection />

      {/* ========== CTA SECTION (Atoks Style - Grid with Phone) ========== */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/futeurcredx-app-cta-bg.jpg')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Crosshair decorations */}
        <div className="absolute top-8 right-1/4 text-white/20">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <line x1="16" y1="0" x2="16" y2="32" stroke="currentColor" strokeWidth="1"/>
            <line x1="0" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
        <div className="absolute top-1/3 right-8 text-white/20">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <line x1="16" y1="0" x2="16" y2="32" stroke="currentColor" strokeWidth="1"/>
            <line x1="0" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
        <div className="absolute bottom-1/4 right-16 text-white/20">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <line x1="16" y1="0" x2="16" y2="32" stroke="currentColor" strokeWidth="1"/>
            <line x1="0" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
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
                  <CheckCircle2 className="w-5 h-5 text-white/50" />
                  <span>Bank-Level Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white/50" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white/50" />
                  <span>Cancel Anytime</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Phone with Hand Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Phone mockup - image already contains phone frame */}
              <div className="relative">
                <img 
                  src="/mobile/fsr-score.png" 
                  alt="FuteurCredX App - FSR Score Overview"
                  className="w-72 h-auto drop-shadow-2xl"
                />
                
                {/* Floating decoration - bottom right */}
                <div className="absolute -bottom-8 -right-12 w-32 h-32 pointer-events-none opacity-40">
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="#FFFFFF"/>
                    <circle cx="50" cy="50" r="30" fill="#FFFFFF"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
