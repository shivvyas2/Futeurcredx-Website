import { motion } from "framer-motion";
import { ArrowRight, User, Building2, Code, Network } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: User,
    title: "Consumers",
    description: "Credit visibility and pathways to qualification.",
    cta: "Explore FuteurCredX",
    link: "/futeurcredx-app",
    tag: "Visibility",
    bgColor: "bg-teal-50",
    accentColor: "#14b8a6",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    pattern: "circles",
    external: false,
  },
  {
    icon: Building2,
    title: "Banks & Institutions",
    description: "Drive engagement and compliant lending decisions.",
    cta: "Learn More",
    link: "https://institutions.futeurcredx.com/",
    tag: "Engagement",
    bgColor: "bg-blue-50",
    accentColor: "#3b82f6",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    pattern: "squares",
    external: true,
  },
  {
    icon: Code,
    title: "Fintechs & Platforms",
    description: "API-first credit decisioning infrastructure.",
    cta: "Explore",
    link: "https://enterprise.futeurcredx.com/",
    tag: "API",
    bgColor: "bg-violet-50",
    accentColor: "#8b5cf6",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    pattern: "waves",
    external: true,
  },
  {
    icon: Network,
    title: "Partners",
    description: "Credit intelligence for embedded finance.",
    cta: "View Solutions",
    link: "/partners/ecosystem",
    tag: "Ecosystems",
    bgColor: "bg-amber-50",
    accentColor: "#f59e0b",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    pattern: "dots",
    external: false,
  },
];

function CardPattern({ pattern, color }: { pattern: string; color: string }) {
  if (pattern === "circles") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <circle cx="160" cy="40" r="60" fill={color} />
        <circle cx="180" cy="120" r="40" fill={color} opacity="0.5" />
        <circle cx="140" cy="160" r="25" fill={color} opacity="0.3" />
      </svg>
    );
  }
  
  if (pattern === "squares") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <rect x="120" y="20" width="70" height="70" rx="12" fill={color} transform="rotate(15 155 55)" />
        <rect x="150" y="100" width="45" height="45" rx="8" fill={color} opacity="0.6" transform="rotate(-10 172 122)" />
        <rect x="100" y="140" width="30" height="30" rx="6" fill={color} opacity="0.4" transform="rotate(25 115 155)" />
      </svg>
    );
  }
  
  if (pattern === "waves") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <path d="M100,20 Q130,50 160,40 T220,60" stroke={color} strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M80,60 Q110,90 140,80 T200,100" stroke={color} strokeWidth="6" fill="none" opacity="0.6" strokeLinecap="round" />
        <path d="M60,100 Q90,130 120,120 T180,140" stroke={color} strokeWidth="4" fill="none" opacity="0.4" strokeLinecap="round" />
        <path d="M40,140 Q70,170 100,160 T160,180" stroke={color} strokeWidth="3" fill="none" opacity="0.3" strokeLinecap="round" />
      </svg>
    );
  }
  
  if (pattern === "dots") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.2]" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <circle cx="140" cy="30" r="8" fill={color} />
        <circle cx="170" cy="50" r="6" fill={color} />
        <circle cx="155" cy="75" r="10" fill={color} />
        <circle cx="180" cy="90" r="5" fill={color} />
        <circle cx="130" cy="60" r="4" fill={color} />
        <circle cx="165" cy="110" r="7" fill={color} />
        <circle cx="145" cy="130" r="5" fill={color} />
        <circle cx="175" cy="140" r="8" fill={color} />
        <circle cx="125" cy="100" r="6" fill={color} />
        <circle cx="155" cy="160" r="4" fill={color} />
        <circle cx="185" cy="170" r="6" fill={color} />
      </svg>
    );
  }
  
  return null;
}

export default function SolutionsByAudience() {
  return (
    <section className="py-16 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Built for Every Stakeholder
          </h2>
          <p className="text-gray-500 text-sm">
            Credit intelligence tailored to each participant in the financial ecosystem.
          </p>
        </motion.div>

        {/* Cards Row - 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10,
              }}
              className="group relative cursor-pointer h-full"
            >
              {solution.external ? (
                <a href={solution.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <CardContent solution={solution} />
                </a>
              ) : (
                <Link to={solution.link} className="block h-full">
                  <CardContent solution={solution} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CardContent({ solution }: { solution: typeof solutions[0] }) {
  return (
    <div className={`${solution.bgColor} rounded-2xl p-5 h-full transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-200/50 overflow-hidden relative flex flex-col`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <CardPattern pattern={solution.pattern} color={solution.accentColor} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Tag - small */}
        <span className="inline-block px-2 py-0.5 bg-white/80 backdrop-blur-sm text-gray-600 text-[10px] font-medium rounded-full mb-4 uppercase tracking-wider self-start">
          {solution.tag}
        </span>
        
        {/* Icon */}
        <div className={`w-10 h-10 ${solution.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm`}>
          <solution.icon className={`w-5 h-5 ${solution.iconColor}`} />
        </div>
        
        {/* Title */}
        <h3 className="text-base font-semibold text-gray-900 mb-2 leading-tight">
          {solution.title}
        </h3>
        
        {/* Description - fixed height area */}
        <p className="text-gray-600 text-xs leading-relaxed mb-4 flex-grow">
          {solution.description}
        </p>
        
        {/* CTA Link - always at bottom */}
        <div className="flex items-center gap-1.5 text-gray-700 text-xs font-medium group-hover:text-gray-900 transition-colors mt-auto">
          <span>{solution.cta}</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
}
