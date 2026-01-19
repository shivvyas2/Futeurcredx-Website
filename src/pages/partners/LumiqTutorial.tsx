import { motion, type Variants, type Easing } from "framer-motion";
import { ArrowRight, CheckCircle2, Code, Terminal, Zap, Database, Key, Webhook, BarChart3, ChevronRight, Copy, Play, BookOpen } from "lucide-react";
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

const LumiqTutorial = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    {
      title: "Get Your API Keys",
      description: "Sign up for a LumiqAI account and generate your API keys from the dashboard.",
      icon: Key,
      code: `# Your API keys can be found in your dashboard
# Never expose your secret key in client-side code

API_KEY=lum_pk_live_xxxxxxxxxxxxx
SECRET_KEY=lum_sk_live_xxxxxxxxxxxxx`,
      notes: [
        "Test keys start with lum_pk_test_ and lum_sk_test_",
        "Live keys start with lum_pk_live_ and lum_sk_live_",
        "Keep your secret key secure and never commit to version control"
      ]
    },
    {
      title: "Install the SDK",
      description: "Choose your preferred language and install the LumiqAI SDK.",
      icon: Terminal,
      code: `# Node.js / JavaScript
npm install @lumiqai/sdk

# Python
pip install lumiqai

# Ruby
gem install lumiqai

# Go
go get github.com/lumiqai/lumiqai-go`,
      notes: [
        "SDKs available for Node.js, Python, Ruby, Go, and PHP",
        "All SDKs support TypeScript and have full type definitions",
        "Minimum Node.js version: 16.x"
      ]
    },
    {
      title: "Initialize the Client",
      description: "Configure the SDK with your API credentials and set up your client.",
      icon: Code,
      code: `import LumiqAI from '@lumiqai/sdk';

const lumiq = new LumiqAI({
  apiKey: process.env.LUMIQ_API_KEY,
  secretKey: process.env.LUMIQ_SECRET_KEY,
  environment: 'production' // or 'sandbox' for testing
});

// Verify connection
const status = await lumiq.health.check();
console.log('Connected:', status.connected);`,
      notes: [
        "Always use environment variables for API keys",
        "Use 'sandbox' environment during development",
        "The health check confirms your credentials are valid"
      ]
    },
    {
      title: "Make Your First API Call",
      description: "Fetch a credit assessment for a business using their EIN or business ID.",
      icon: Database,
      code: `// Fetch a credit assessment
const assessment = await lumiq.credit.assess({
  businessId: 'biz_8xK2mN',
  signals: ['identity', 'registry', 'banking'],
  products: ['loc', 'card', 'term_loan']
});

console.log('Readiness Score:', assessment.readinessScore);
console.log('Eligible Products:', assessment.eligibleProducts);

// Response structure:
// {
//   assessmentId: "asmt_9yL3nP",
//   readinessScore: 78,
//   eligibleProducts: [
//     { type: "card", limit: 25000, confidence: 0.89 },
//     { type: "loc", limit: 50000, confidence: 0.72 }
//   ]
// }`,
      notes: [
        "businessId can be your internal ID or an EIN",
        "Signal types: identity, registry, banking, bureau",
        "Product types: loc, card, term_loan, invoice_factoring"
      ]
    },
    {
      title: "Set Up Webhooks",
      description: "Receive real-time notifications when credit events occur.",
      icon: Webhook,
      code: `// Register a webhook endpoint
const webhook = await lumiq.webhooks.create({
  url: 'https://your-app.com/webhooks/lumiq',
  events: [
    'assessment.completed',
    'score.changed',
    'product.approved'
  ],
  secret: 'whsec_xxxxxxxxxxxxx'
});

// Verify webhook signature in your endpoint
app.post('/webhooks/lumiq', (req, res) => {
  const signature = req.headers['x-lumiq-signature'];
  const isValid = lumiq.webhooks.verify(
    req.body,
    signature,
    webhook.secret
  );
  
  if (isValid) {
    // Process the event
    const event = req.body;
    console.log('Event type:', event.type);
  }
});`,
      notes: [
        "Webhooks support HTTPS endpoints only",
        "Always verify the webhook signature",
        "Events are retried up to 5 times on failure"
      ]
    },
    {
      title: "Monitor & Analyze",
      description: "Track your API usage and monitor performance through the dashboard.",
      icon: BarChart3,
      code: `// Fetch API usage stats
const usage = await lumiq.analytics.usage({
  startDate: '2024-01-01',
  endDate: '2024-01-31',
  groupBy: 'day'
});

console.log('Total calls:', usage.totalCalls);
console.log('Success rate:', usage.successRate);
console.log('Avg response time:', usage.avgResponseMs, 'ms');

// Usage by endpoint
usage.breakdown.forEach(endpoint => {
  console.log(\`\${endpoint.path}: \${endpoint.calls} calls\`);
});`,
      notes: [
        "Usage analytics available in real-time",
        "Set up alerts for unusual activity",
        "Export reports for billing reconciliation"
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
            className="max-w-[800px] mx-auto text-center"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-[#FFB800]" />
              <span className="text-[#FFB800] text-sm font-medium uppercase tracking-wider">Tutorial</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeUp}
              className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.02em] mb-6"
            >
              Getting Started with LumiqAI
            </motion.h1>
            
            <motion.p 
              variants={fadeUp}
              className="text-lg text-white/60 mb-10"
            >
              Follow this step-by-step guide to integrate LumiqAI into your platform. 
              Most integrations go live in under 2 weeks.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#FFB800] text-black hover:bg-[#E5A600] rounded-md px-6 py-5 text-base font-medium">
                <Play className="mr-2 h-4 w-4" />
                Watch Video Guide
              </Button>
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 rounded-md px-6 py-5 text-base bg-transparent"
                asChild
              >
                <a href="https://docs.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
                  View Full API Docs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-16 bg-[#0A0F14]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-[800px] mx-auto"
          >
            <motion.h2 variants={fadeUp} className="text-2xl font-semibold mb-6">
              Prerequisites
            </motion.h2>
            
            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-4">
              {[
                "A LumiqAI account (sign up at lumiqai.com)",
                "Node.js 16+ or Python 3.8+ installed",
                "Basic understanding of REST APIs",
                "An HTTPS endpoint for webhooks (optional)"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#141B22] border border-white/5 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-[#FFB800] flex-shrink-0" />
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tutorial Steps */}
      <section className="py-20 bg-[#0F1419]">
        <div className="container mx-auto px-[6%]">
          <div className="max-w-[1000px] mx-auto">
            {/* Step Navigation */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="flex flex-wrap gap-2 mb-12 justify-center"
            >
              {steps.map((step, i) => (
                <motion.button
                  key={i}
                  variants={fadeUp}
                  onClick={() => setActiveStep(i)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeStep === i 
                      ? 'bg-[#FFB800] text-black' 
                      : 'bg-[#141B22] text-white/60 hover:text-white hover:bg-[#1D252E]'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center text-xs">
                    {i + 1}
                  </span>
                  <span className="hidden sm:inline">{step.title}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* Active Step Content */}
            <motion.div 
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* Left - Description */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#FFB800]/10 rounded-xl flex items-center justify-center">
                    {(() => {
                      const IconComponent = steps[activeStep].icon;
                      return <IconComponent className="w-6 h-6 text-[#FFB800]" />;
                    })()}
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider">Step {activeStep + 1}</p>
                    <h3 className="text-2xl font-semibold">{steps[activeStep].title}</h3>
                  </div>
                </div>
                
                <p className="text-white/70 leading-relaxed mb-8">
                  {steps[activeStep].description}
                </p>

                <div className="space-y-3">
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-3">Key Notes</p>
                  {steps[activeStep].notes.map((note, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Zap className="w-4 h-4 text-[#FFB800] mt-0.5 flex-shrink-0" />
                      <span className="text-white/60 text-sm">{note}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Code */}
              <div className="bg-[#0D1117] rounded-xl border border-white/10 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27CA40]" />
                  </div>
                  <button 
                    onClick={() => handleCopy(steps[activeStep].code, activeStep)}
                    className="flex items-center gap-1 text-white/40 hover:text-white text-xs transition-colors"
                  >
                    <Copy className="w-3 h-3" />
                    {copiedIndex === activeStep ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="p-4 text-xs text-white/70 overflow-x-auto font-mono leading-relaxed">
                  {steps[activeStep].code}
                </pre>
              </div>
            </motion.div>

            {/* Step Navigation Buttons */}
            <div className="flex justify-between mt-12">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
              >
                Previous Step
              </Button>
              
              {activeStep < steps.length - 1 ? (
                <Button
                  className="bg-[#FFB800] text-black hover:bg-[#E5A600]"
                  onClick={() => setActiveStep(activeStep + 1)}
                >
                  Next Step
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              ) : (
                <Button
                  className="bg-[#FFB800] text-black hover:bg-[#E5A600]"
                  asChild
                >
                  <a href="https://docs.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
                    View Full Documentation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-20 bg-[#0A0F14]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold mb-6">
              Ready to Build?
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-white/60 mb-10 max-w-[500px] mx-auto">
              You've learned the basics. Now explore our full documentation or reach out to our integration team for personalized support.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#FFB800] text-black hover:bg-[#E5A600] px-6 py-5" asChild>
                <a href="https://docs.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
                  Explore API Docs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-6 py-5 bg-transparent" asChild>
                <Link to="/contact-sales">Contact Integration Team</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LumiqTutorial;
