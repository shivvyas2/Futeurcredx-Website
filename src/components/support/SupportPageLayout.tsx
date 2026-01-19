import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, ExternalLink, CheckCircle, Code, Terminal, Copy, Check } from "lucide-react";
import { useState, ReactNode } from "react";

interface Section {
  id: string;
  title: string;
}

interface SupportPageLayoutProps {
  title: string;
  description: string;
  sections?: Section[];
  children: ReactNode;
}

export default function SupportPageLayout({
  title,
  description,
  sections,
  children,
}: SupportPageLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#2D2424]">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D2424] via-[#3A2F2F] to-[#2D2424]" />
        
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] opacity-10">
          <div className="absolute inset-0 border border-white/20 rounded-full" />
          <div className="absolute inset-10 border border-white/15 rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/support"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Support
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              {title}
            </h1>

            <p className="text-lg text-white/60 max-w-2xl">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex gap-12">
          {sections && sections.length > 0 && (
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-32">
                <nav>
                  <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                    On this page
                  </h4>
                  <ul className="space-y-1">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => scrollToSection(section.id)}
                          className="w-full text-left px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {section.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>
          )}

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div
              className="prose prose-lg max-w-none prose-invert text-white/70
                [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white
                [&_p]:text-white/70 [&_li]:text-white/70 [&_strong]:text-white
                [&_table]:text-white/70 [&_th]:text-white [&_td]:text-white/70
                [&_a]:text-amber-400 [&_a]:no-underline hover:[&_a]:underline
                [&_code]:text-amber-300 [&_code]:bg-white/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded
                [&_pre]:bg-gray-900 [&_pre]:border [&_pre]:border-white/10"
            >
              {children}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

export function CodeBlock({ language, code }: { language: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl overflow-hidden border border-white/10 my-6">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-sm text-white/50 ml-2">{language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-sm text-white/50 hover:text-white transition-colors"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto bg-gray-900">
        <code className="text-sm text-gray-300">{code}</code>
      </pre>
    </div>
  );
}
