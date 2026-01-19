import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, UserPlus, Link2, Settings, TrendingUp, BarChart3, CreditCard, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Setup your Account",
    description: "Creating your account is quick and easy. Start by providing your basic information and connect your business identity.",
    color: "from-violet-500 to-purple-600",
    visual: "account",
  },
  {
    number: "02",
    icon: Link2,
    title: "Connect Your Data",
    description: "Link your business banking, bureau data, and other financial signals. We securely aggregate and normalize everything.",
    color: "from-blue-500 to-indigo-600",
    visual: "connect",
  },
  {
    number: "03",
    icon: Settings,
    title: "Set Your Preferences",
    description: "Customize your credit intelligence by setting your goals, preferred products, and notification preferences.",
    color: "from-teal-500 to-emerald-600",
    visual: "preferences",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Track & Improve",
    description: "Monitor your credit health, track progress toward qualification, and receive personalized recommendations.",
    color: "from-amber-500 to-orange-600",
    visual: "track",
  },
];

function StepVisual({ type }: { type: string }) {
  if (type === "account") {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden w-full max-w-sm">
        <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-5 py-4">
          <h4 className="text-white font-semibold">Create Account</h4>
        </div>
        <div className="p-5 space-y-4">
          <div>
            <label className="text-xs text-gray-500 block mb-1">Business Name</label>
            <div className="h-10 bg-gray-100 rounded-lg flex items-center px-3">
              <span className="text-gray-600 text-sm">Acme Corp LLC</span>
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Email Address</label>
            <div className="h-10 bg-gray-100 rounded-lg flex items-center px-3">
              <span className="text-gray-600 text-sm">owner@acmecorp.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-emerald-600 text-sm">
            <CheckCircle2 className="w-4 h-4" />
            <span>EIN Verified</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "connect") {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden w-full max-w-sm">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-4">
          <h4 className="text-white font-semibold">Connect Data Sources</h4>
        </div>
        <div className="p-5 space-y-3">
          {[
            { name: "Business Bureau", status: "Connected", icon: Shield },
            { name: "Bank Account", status: "Connected", icon: CreditCard },
            { name: "Revenue Data", status: "Pending", icon: BarChart3 },
          ].map((source) => (
            <div key={source.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <source.icon className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{source.name}</span>
              </div>
              <span className={`text-xs font-medium ${source.status === 'Connected' ? 'text-emerald-600' : 'text-amber-600'}`}>
                {source.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "preferences") {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden w-full max-w-sm">
        <div className="bg-gradient-to-r from-teal-500 to-emerald-600 px-5 py-4">
          <h4 className="text-white font-semibold">Your Preferences</h4>
        </div>
        <div className="p-5 space-y-4">
          <div>
            <span className="text-xs text-gray-500 block mb-2">Credit Goal</span>
            <div className="flex gap-2">
              {['Line of Credit', 'Business Card', 'Term Loan'].map((goal, i) => (
                <span key={goal} className={`px-3 py-1.5 rounded-full text-xs font-medium ${i === 0 ? 'bg-teal-100 text-teal-700' : 'bg-gray-100 text-gray-600'}`}>
                  {goal}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs text-gray-500 block mb-2">Target Amount</span>
            <div className="h-10 bg-gray-100 rounded-lg flex items-center px-3">
              <span className="text-gray-900 font-semibold">$50,000 - $100,000</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Weekly score alerts</span>
            <div className="w-10 h-6 bg-teal-500 rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "track") {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden w-full max-w-sm">
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-4">
          <h4 className="text-white font-semibold">Your Progress</h4>
        </div>
        <div className="p-5 space-y-4">
          <div className="text-center">
            <span className="text-4xl font-bold text-gray-900">742</span>
            <span className="text-emerald-500 text-sm ml-2">+28</span>
            <p className="text-xs text-gray-500 mt-1">Business Credit Score</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Qualification Progress</span>
              <span className="text-amber-600 font-medium">78%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[78%] bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
            <span className="text-sm font-medium text-amber-800">Next: Pay down utilization by 10%</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function TimelineStep({ step, index, isLast }: { step: typeof steps[0]; index: number; isLast: boolean }) {
  const stepRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start end", "center center"],
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const dotScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1]);
  const dotOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const contentY = useTransform(scrollYProgress, [0, 0.3, 1], [50, 0, 0]);

  return (
    <div ref={stepRef} className="relative grid lg:grid-cols-[1fr,auto,1fr] gap-8 lg:gap-12 min-h-[400px]">
      {/* Left: Content (on even) / Visual (on odd) */}
      <motion.div 
        style={{ opacity: contentOpacity, y: contentY }}
        className={`flex items-center ${index % 2 === 0 ? 'lg:justify-end' : 'lg:order-3 lg:justify-start'}`}
      >
        {index % 2 === 0 ? (
          <div className="max-w-md text-left lg:text-right">
            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${step.color} text-white mb-4`}>
              Step {step.number}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ) : (
          <StepVisual type={step.visual} />
        )}
      </motion.div>

      {/* Center: Timeline */}
      <div className="hidden lg:flex flex-col items-center relative">
        {/* Vertical line background */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-gray-200" />
        
        {/* Animated fill line */}
        <motion.div 
          style={{ height: lineHeight }}
          className={`absolute top-0 w-1 bg-gradient-to-b ${step.color} rounded-full`}
        />
        
        {/* Step dot */}
        <motion.div 
          style={{ scale: dotScale, opacity: dotOpacity }}
          className={`relative z-10 w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
        >
          <step.icon className="w-6 h-6 text-white" />
        </motion.div>
        
        {/* Connecting line to next step */}
        {!isLast && (
          <div className="flex-1 w-0.5 bg-gray-200 relative">
            <motion.div 
              style={{ height: lineHeight }}
              className={`absolute top-0 left-0 right-0 bg-gradient-to-b ${step.color}`}
            />
          </div>
        )}
      </div>

      {/* Right: Visual (on even) / Content (on odd) */}
      <motion.div 
        style={{ opacity: contentOpacity, y: contentY }}
        className={`flex items-center ${index % 2 === 0 ? 'lg:justify-start lg:order-3' : 'lg:justify-end'}`}
      >
        {index % 2 === 0 ? (
          <StepVisual type={step.visual} />
        ) : (
          <div className="max-w-md text-left">
            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${step.color} text-white mb-4`}>
              Step {step.number}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        )}
      </motion.div>

      {/* Mobile Timeline Indicator */}
      <div className="lg:hidden absolute left-0 top-0 flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
          <step.icon className="w-5 h-5 text-white" />
        </div>
        {!isLast && <div className="w-0.5 h-full bg-gray-200 mt-2" />}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            How it Works
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Steps to Seamless<br />Credit Intelligence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started quickly and effortlessly with our intuitive process. 
            Follow these easy steps to maximize your credit visibility.
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div ref={containerRef} className="space-y-16 lg:space-y-0 pl-12 lg:pl-0">
          {steps.map((step, index) => (
            <TimelineStep 
              key={step.number} 
              step={step} 
              index={index} 
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24"
        >
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-[32px] p-10 md:p-14 border border-violet-100 relative overflow-hidden">
            {/* Floating decorations */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 right-8 w-16 h-16 bg-violet-200/50 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 left-8 w-20 h-20 bg-purple-200/50 rounded-full blur-xl"
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Elevate Your Credit Intelligence?
              </h3>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Experience the efficiency and visibility of our credit intelligence platform.
                Sign up today and transform the way you understand credit.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact-sales">
                  <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-8 py-6 text-base font-semibold group">
                    Contact Sales
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
