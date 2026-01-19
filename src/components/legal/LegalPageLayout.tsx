import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

interface Section {
  id: string;
  title: string;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  sections: Section[];
  children: ReactNode;
}

const sidebarLinks = [
  { title: "Privacy Policy", path: "/legal/privacy-policy" },
  { title: "Terms of Service", path: "/legal/terms-of-service" },
  { title: "Data Processing Agreement", path: "/legal/data-processing" },
  { title: "Cookie Policy", path: "/legal/cookie-policy" },
  { title: "GLBA Compliance", path: "/legal/glba-compliance" },
  { title: "Acceptable Use Policy", path: "/legal/acceptable-use" },
];

export default function LegalPageLayout({
  title,
  lastUpdated,
  sections,
  children,
}: LegalPageLayoutProps) {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((s) => ({
        id: s.id,
        element: document.getElementById(s.id),
      }));

      for (const section of sectionElements.reverse()) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

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
      {/* Hero Header - Brown theme */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D2424] via-[#3A2F2F] to-[#2D2424]" />
        
        {/* Decorative circles */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] opacity-10">
          <div className="absolute inset-0 border border-white/20 rounded-full" />
          <div className="absolute inset-10 border border-white/15 rounded-full" />
          <div className="absolute inset-20 border border-white/10 rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/legal"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Legal
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
              {title}
            </h1>

            <p className="text-white/50 text-lg">
              Last updated: <span className="font-medium text-white/70">{lastUpdated}</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content with Sidebar */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex gap-12">
          {/* Sticky Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-32">
              {/* Page sections */}
              <nav className="mb-10">
                <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                  On this page
                </h4>
                <ul className="space-y-1">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                          activeSection === section.id
                            ? "text-amber-400 bg-amber-500/10 font-medium"
                            : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Other legal docs */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                  Other Documents
                </h4>
                <ul className="space-y-1">
                  {sidebarLinks
                    .filter((link) => link.path !== location.pathname)
                    .map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className="flex items-center justify-between px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {link.title}
                          <ChevronRight className="w-4 h-4 text-white/30" />
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div
              className="prose prose-lg max-w-none prose-invert text-white/70
                [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white
                [&_p]:text-white/70 [&_li]:text-white/70 [&_strong]:text-white
                [&_table]:text-white/70 [&_th]:text-white [&_td]:text-white/70
                [&_a]:text-amber-400 [&_a]:no-underline hover:[&_a]:underline"
            >
              {children}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
