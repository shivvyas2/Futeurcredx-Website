import LegalPageLayout from "@/components/legal/LegalPageLayout";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "permitted-use", title: "Permitted Use" },
  { id: "prohibited-conduct", title: "Prohibited Conduct" },
  { id: "api-usage", title: "API Usage Guidelines" },
  { id: "data-restrictions", title: "Data Restrictions" },
  { id: "security", title: "Security Requirements" },
  { id: "reporting", title: "Reporting Violations" },
  { id: "enforcement", title: "Enforcement" },
  { id: "contact", title: "Contact Us" },
];

export default function AcceptableUse() {
  return (
    <LegalPageLayout
      title="Acceptable Use Policy"
      lastUpdated="January 2026"
      sections={sections}
    >
      <section id="introduction" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p>
          This Acceptable Use Policy ("AUP") governs your use of FuteurCredX's websites, 
          applications, APIs, and services (collectively, the "Services"). This AUP is 
          part of our Terms of Service and applies to all users of our Services.
        </p>
        <p className="mt-4">
          By using our Services, you agree to comply with this AUP. Violation of this 
          policy may result in suspension or termination of your access to the Services.
        </p>
      </section>

      <section id="permitted-use" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Permitted Use</h2>
        <p>You may use our Services to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Access your own credit information and scores</li>
          <li>Monitor and manage your personal or business credit profile</li>
          <li>Receive credit improvement recommendations and insights</li>
          <li>Integrate credit data into your applications via our APIs (with proper authorization)</li>
          <li>Access credit intelligence for legitimate lending and business decisions</li>
          <li>Generate reports for permissible purposes under the Fair Credit Reporting Act (FCRA)</li>
        </ul>
      </section>

      <section id="prohibited-conduct" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Prohibited Conduct</h2>
        <p>You may NOT use our Services to:</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Illegal Activities</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Violate any applicable laws, regulations, or third-party rights</li>
          <li>Engage in fraud, identity theft, or impersonation</li>
          <li>Conduct money laundering or financing of terrorism</li>
          <li>Obtain or use credit information for impermissible purposes under FCRA</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Unauthorized Access</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access accounts or data belonging to others without authorization</li>
          <li>Circumvent security controls or authentication mechanisms</li>
          <li>Probe, scan, or test vulnerabilities without written permission</li>
          <li>Gain unauthorized access to systems, networks, or data</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Harmful Activities</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Transmit viruses, malware, or other malicious code</li>
          <li>Conduct denial-of-service attacks or other disruptive activities</li>
          <li>Interfere with the proper functioning of the Services</li>
          <li>Overload our infrastructure with excessive requests</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Data Misuse</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Scrape, harvest, or collect data without permission</li>
          <li>Resell, redistribute, or sublicense data without authorization</li>
          <li>Use data for purposes not disclosed or authorized</li>
          <li>Aggregate data in ways that circumvent our data licensing terms</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Abuse of Services</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Create multiple accounts to circumvent limitations or restrictions</li>
          <li>Share account credentials with unauthorized parties</li>
          <li>Use the Services in a manner that could harm our reputation</li>
          <li>Submit false, misleading, or fraudulent information</li>
        </ul>
      </section>

      <section id="api-usage" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">API Usage Guidelines</h2>
        <p>If you use our APIs, you must:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Authenticate all requests using valid API credentials</li>
          <li>Respect rate limits and usage quotas</li>
          <li>Cache responses appropriately to minimize redundant requests</li>
          <li>Implement proper error handling and retry logic</li>
          <li>Keep API credentials secure and confidential</li>
          <li>Notify us immediately if credentials are compromised</li>
          <li>Comply with all API documentation and guidelines</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Rate Limits</h3>
        <p>API rate limits vary by plan:</p>
        <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li><strong className="text-white">Starter:</strong> 100 requests per minute</li>
            <li><strong className="text-white">Professional:</strong> 1,000 requests per minute</li>
            <li><strong className="text-white">Enterprise:</strong> Custom limits per agreement</li>
          </ul>
        </div>
        <p className="mt-4">
          Exceeding rate limits may result in throttling or temporary suspension of API access.
        </p>
      </section>

      <section id="data-restrictions" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Data Restrictions</h2>
        <p>
          Data obtained through our Services is subject to strict usage restrictions:
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Permissible Purposes</h3>
        <p>Credit data may only be used for purposes permitted under FCRA, including:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Credit transactions initiated by the consumer</li>
          <li>Employment screening (with consumer consent)</li>
          <li>Insurance underwriting</li>
          <li>Legitimate business needs in transactions with the consumer</li>
          <li>Account review for existing credit relationships</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Data Protection</h3>
        <p>You must:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Store data securely using industry-standard encryption</li>
          <li>Limit access to authorized personnel only</li>
          <li>Delete data when no longer needed for the permitted purpose</li>
          <li>Notify us of any data breaches promptly</li>
        </ul>
      </section>

      <section id="security" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Security Requirements</h2>
        <p>All users must maintain appropriate security measures:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Use strong, unique passwords for your accounts</li>
          <li>Enable multi-factor authentication when available</li>
          <li>Keep software and systems updated with security patches</li>
          <li>Monitor accounts for unauthorized activity</li>
          <li>Report security incidents immediately</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Enterprise Users</h3>
        <p>Organizations using our APIs must additionally:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Implement a formal information security program</li>
          <li>Conduct regular security assessments</li>
          <li>Train employees on data protection practices</li>
          <li>Maintain audit logs of data access</li>
          <li>Complete our security questionnaire upon request</li>
        </ul>
      </section>

      <section id="reporting" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Reporting Violations</h2>
        <p>
          If you become aware of any violation of this AUP or suspicious activity, 
          please report it immediately to:
        </p>
        <div className="mt-4 p-6 bg-white/5 border border-white/10 rounded-xl">
          <p className="font-semibold text-white">Security Team</p>
          <p className="mt-2 text-white/70">
            <strong className="text-white">Email:</strong>{" "}
            <a href="mailto:security@futeurcredx.com" className="text-amber-400 hover:text-amber-300">security@futeurcredx.com</a>
          </p>
          <p className="mt-2 text-white/60">
            For urgent security incidents, please include "URGENT" in the subject line.
          </p>
        </div>
        <p className="mt-4">
          We take all reports seriously and will investigate promptly. Reports may be 
          submitted anonymously, though providing contact information helps us follow up.
        </p>
      </section>

      <section id="enforcement" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Enforcement</h2>
        <p>
          We reserve the right to take any action we deem appropriate in response to 
          violations of this AUP, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Warning or notification of policy violation</li>
          <li>Temporary suspension of account access</li>
          <li>Permanent termination of accounts</li>
          <li>Removal of content or data</li>
          <li>Reporting to law enforcement authorities</li>
          <li>Pursuit of legal remedies</li>
        </ul>
        <p className="mt-4">
          We may take enforcement action without prior notice if we believe immediate 
          action is necessary to protect our Services, users, or third parties.
        </p>
      </section>

      <section id="contact" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>
          If you have questions about this Acceptable Use Policy, please contact us:
        </p>
        <div className="mt-4 p-6 bg-white/5 border border-white/10 rounded-xl">
          <p className="font-semibold text-white">FuteurCredX Inc.</p>
          <p className="text-white/60 mt-2">
            17 State Street, FL 40<br />
            New York, NY 10004<br />
            United States
          </p>
          <p className="mt-4 text-white/70">
            <strong className="text-white">General:</strong>{" "}
            <a href="mailto:support@futeurcredx.com" className="text-amber-400 hover:text-amber-300">support@futeurcredx.com</a>
          </p>
          <p className="mt-2 text-white/70">
            <strong className="text-white">Security:</strong>{" "}
            <a href="mailto:security@futeurcredx.com" className="text-amber-400 hover:text-amber-300">security@futeurcredx.com</a>
          </p>
          <p className="mt-2 text-white/70">
            <strong className="text-white">Legal:</strong>{" "}
            <a href="mailto:legal@futeurcredx.com" className="text-amber-400 hover:text-amber-300">legal@futeurcredx.com</a>
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
