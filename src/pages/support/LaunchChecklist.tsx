import SupportPageLayout from "@/components/support/SupportPageLayout";
import { CheckCircle, Shield } from "lucide-react";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "checklist", title: "Pre-Launch Checklist" },
  { id: "authentication", title: "Authentication Setup" },
  { id: "testing", title: "Testing Requirements" },
  { id: "compliance", title: "Compliance Verification" },
  { id: "go-live", title: "Go-Live Process" },
];

const checklistItems = [
  { category: "API Setup", items: [
    "API keys generated for production environment",
    "Webhook endpoints configured and tested",
    "Rate limits reviewed and adequate for expected volume",
    "Error handling implemented for all API calls",
  ]},
  { category: "Security", items: [
    "API keys stored in secure environment variables",
    "HTTPS enforced for all API communications",
    "Webhook signature verification implemented",
    "Access logs enabled and monitored",
  ]},
  { category: "Testing", items: [
    "All API endpoints tested in sandbox",
    "Edge cases handled (missing data, timeouts)",
    "Load testing completed for expected volume",
    "User acceptance testing completed",
  ]},
  { category: "Compliance", items: [
    "FCRA permissible purpose documented",
    "End-user consent flows implemented",
    "Data retention policies defined",
    "Privacy policy updated to reflect data usage",
  ]},
];

export default function LaunchChecklist() {
  return (
    <SupportPageLayout
      title="Launch Checklist"
      description="Pre-launch requirements and best practices for going live with FuteurCredX integration."
      sections={sections}
    >
      <section id="overview" className="mb-12">
        <h2>Overview</h2>
        <p>
          Before launching your FuteurCredX integration to production, complete this 
          checklist to ensure a smooth go-live. Our team is available to assist with 
          any questions during the launch process.
        </p>
      </section>

      <section id="checklist" className="mb-12">
        <h2>Pre-Launch Checklist</h2>
        
        {checklistItems.map((section) => (
          <div key={section.category} className="mb-8">
            <h3 className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-amber-400" />
              {section.category}
            </h3>
            <ul className="space-y-3">
              {section.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section id="authentication" className="mb-12">
        <h2>Authentication Setup</h2>
        <ul>
          <li>Generate production API keys in Dashboard Settings</li>
          <li>Configure IP allowlisting for additional security (optional)</li>
          <li>Set up API key rotation schedule (recommended: 90 days)</li>
          <li>Implement secure credential storage (never in client-side code)</li>
        </ul>
      </section>

      <section id="testing" className="mb-12">
        <h2>Testing Requirements</h2>
        <p>Complete the following before requesting production access:</p>
        <ul>
          <li><strong>Functional Testing</strong> - All features work as expected</li>
          <li><strong>Integration Testing</strong> - Data flows correctly between systems</li>
          <li><strong>Error Scenarios</strong> - Graceful handling of API errors</li>
          <li><strong>Performance Testing</strong> - Response times acceptable under load</li>
          <li><strong>Security Testing</strong> - No sensitive data exposed</li>
        </ul>
      </section>

      <section id="compliance" className="mb-12">
        <h2>Compliance Verification</h2>
        <p>
          Ensure your implementation meets regulatory requirements:
        </p>
        <ul>
          <li><strong>FCRA</strong> - Valid permissible purpose for credit data access</li>
          <li><strong>GLBA</strong> - Appropriate safeguards for financial data</li>
          <li><strong>CCPA/GDPR</strong> - Consumer data rights and consent</li>
          <li><strong>SOC 2</strong> - Security controls for data handling</li>
        </ul>
        <p className="mt-4 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
          ⚠️ Contact <a href="mailto:compliance@futeurcredx.com">compliance@futeurcredx.com</a> if 
          you have questions about regulatory requirements for your use case.
        </p>
      </section>

      <section id="go-live" className="mb-12">
        <h2>Go-Live Process</h2>
        <ol>
          <li><strong>Complete checklist</strong> - All items verified</li>
          <li><strong>Request review</strong> - Email integrations@futeurcredx.com</li>
          <li><strong>Technical review</strong> - Our team validates implementation</li>
          <li><strong>Production access</strong> - Live API keys activated</li>
          <li><strong>Monitoring setup</strong> - Alerts configured for anomalies</li>
          <li><strong>Launch</strong> - Go live with confidence!</li>
        </ol>
        <p className="mt-4">
          Average time from review request to production access: <strong>1-2 business days</strong>
        </p>
      </section>
    </SupportPageLayout>
  );
}
