import LegalPageLayout from "@/components/legal/LegalPageLayout";

const sections = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "services", title: "Description of Services" },
  { id: "eligibility", title: "Eligibility" },
  { id: "account", title: "Account Registration" },
  { id: "usage", title: "Acceptable Use" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "data-accuracy", title: "Data Accuracy" },
  { id: "payment", title: "Payment Terms" },
  { id: "termination", title: "Termination" },
  { id: "disclaimers", title: "Disclaimers" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "governing-law", title: "Governing Law" },
  { id: "contact", title: "Contact Us" },
];

export default function TermsOfService() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="January 2026"
      sections={sections}
    >
      <section id="acceptance" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
        <p>
          Welcome to FuteurCredX. These Terms of Service ("Terms") govern your access to and use of 
          the FuteurCredX website, mobile applications, APIs, and all related services (collectively, 
          the "Services") provided by FuteurCredX Inc. ("FuteurCredX," "we," "us," or "our").
        </p>
        <p className="mt-4">
          By accessing or using our Services, you agree to be bound by these Terms and our Privacy 
          Policy. If you do not agree to these Terms, you may not access or use our Services.
        </p>
        <p className="mt-4">
          We reserve the right to modify these Terms at any time. We will notify you of any material 
          changes by posting the updated Terms on our website. Your continued use of the Services 
          after such changes constitutes your acceptance of the new Terms.
        </p>
      </section>

      <section id="services" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Description of Services</h2>
        <p>FuteurCredX provides credit intelligence and visibility services, including:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Personal and business credit score monitoring and analysis</li>
          <li>Credit report aggregation from major credit bureaus</li>
          <li>Credit readiness assessments and improvement recommendations</li>
          <li>LumiqAI enterprise APIs for credit decisioning</li>
          <li>Integration services for financial institutions and fintechs</li>
          <li>Educational content about credit management</li>
        </ul>
        <p className="mt-4">
          Our Services are designed to provide visibility into your credit profiles and help you 
          understand and improve your creditworthiness. We do not directly issue credit, loans, 
          or make lending decisions.
        </p>
      </section>

      <section id="eligibility" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Eligibility</h2>
        <p>To use our Services, you must:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Be at least 18 years of age</li>
          <li>Be a legal resident of the United States</li>
          <li>Have the legal capacity to enter into binding contracts</li>
          <li>Provide accurate and complete registration information</li>
          <li>Not be prohibited from using financial services under applicable law</li>
        </ul>
        <p className="mt-4">
          For business accounts, you must have the authority to bind the business entity to these Terms.
        </p>
      </section>

      <section id="account" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Account Registration</h2>
        <p>
          To access certain features of our Services, you must create an account. When you create 
          an account, you agree to:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Provide accurate, current, and complete information</li>
          <li>Maintain and promptly update your account information</li>
          <li>Keep your password secure and confidential</li>
          <li>Notify us immediately of any unauthorized access to your account</li>
          <li>Accept responsibility for all activities under your account</li>
        </ul>
        <p className="mt-4">
          We reserve the right to suspend or terminate accounts that violate these Terms or engage 
          in fraudulent or suspicious activity.
        </p>
      </section>

      <section id="usage" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Acceptable Use</h2>
        <p>You agree not to use our Services to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Violate any applicable laws, regulations, or third-party rights</li>
          <li>Submit false, misleading, or fraudulent information</li>
          <li>Impersonate another person or entity</li>
          <li>Access accounts or data belonging to others without authorization</li>
          <li>Interfere with or disrupt the Services or servers</li>
          <li>Attempt to gain unauthorized access to any systems or networks</li>
          <li>Use automated means to scrape or collect data without permission</li>
          <li>Transmit viruses, malware, or other harmful code</li>
          <li>Engage in any activity that could damage our reputation or Services</li>
        </ul>
      </section>

      <section id="intellectual-property" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
        <p>
          All content, features, and functionality of our Services, including but not limited to 
          text, graphics, logos, icons, images, audio clips, software, and the overall design and 
          arrangement thereof, are the exclusive property of FuteurCredX or our licensors and are 
          protected by copyright, trademark, and other intellectual property laws.
        </p>
        <p className="mt-4">
          "FuteurCredX," "FuteurCred," "LumiqAI," and related logos are trademarks of FuteurCredX Inc. 
          You may not use our trademarks without our prior written consent.
        </p>
        <p className="mt-4">
          We grant you a limited, non-exclusive, non-transferable license to access and use our 
          Services for personal or internal business purposes in accordance with these Terms.
        </p>
      </section>

      <section id="data-accuracy" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Data Accuracy</h2>
        <p>
          While we strive to provide accurate credit information, we rely on data from third-party 
          sources including credit bureaus and financial institutions. We do not guarantee the 
          accuracy, completeness, or timeliness of any information provided through our Services.
        </p>
        <p className="mt-4">
          If you believe any information in your credit report is inaccurate, you should dispute 
          it directly with the relevant credit bureau. We can provide guidance on how to initiate 
          the dispute process.
        </p>
      </section>

      <section id="payment" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
        <p>
          Certain features of our Services may require payment. By subscribing to paid Services, 
          you agree to:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Pay all applicable fees as described at the time of purchase</li>
          <li>Provide valid payment information</li>
          <li>Authorize recurring charges for subscription services</li>
          <li>Be responsible for all taxes associated with your purchases</li>
        </ul>
        <p className="mt-4">
          Subscription fees are billed in advance and are non-refundable except as required by law 
          or as otherwise stated in our refund policy. You may cancel your subscription at any time, 
          but no refunds will be provided for the current billing period.
        </p>
      </section>

      <section id="termination" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Termination</h2>
        <p>
          You may terminate your account at any time by contacting us or through your account settings. 
          We may suspend or terminate your access to the Services immediately, without prior notice, 
          if we believe you have violated these Terms or for any other reason at our sole discretion.
        </p>
        <p className="mt-4">
          Upon termination, your right to use the Services will immediately cease. We may retain 
          certain information as required by law or for legitimate business purposes.
        </p>
      </section>

      <section id="disclaimers" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Disclaimers</h2>
        <p className="uppercase font-semibold">
          THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
          EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF 
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>
        <p className="mt-4">
          We do not warrant that the Services will be uninterrupted, secure, or error-free. 
          We do not provide financial, legal, or tax advice. You should consult with qualified 
          professionals for advice specific to your situation.
        </p>
      </section>

      <section id="liability" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
        <p className="uppercase font-semibold">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, FUTEURCREDX SHALL NOT BE LIABLE FOR ANY 
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF 
          PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, 
          USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
        </p>
        <p className="mt-4">
          In no event shall our total liability exceed the greater of (a) the amount you paid 
          to us for the Services in the twelve months prior to the claim, or (b) one hundred 
          dollars ($100).
        </p>
      </section>

      <section id="indemnification" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless FuteurCredX and its officers, 
          directors, employees, agents, and affiliates from and against any claims, liabilities, 
          damages, losses, and expenses, including reasonable attorneys' fees, arising out of or 
          in any way connected with your access to or use of the Services or your violation of 
          these Terms.
        </p>
      </section>

      <section id="governing-law" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the 
          State of Delaware, without regard to its conflict of law provisions. Any disputes 
          arising from these Terms or the Services shall be resolved exclusively in the state 
          or federal courts located in New York County, New York.
        </p>
      </section>

      <section id="contact" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us:
        </p>
        <div className="mt-4 p-6 bg-white/5 border border-white/10 rounded-xl">
          <p className="font-semibold text-white">FuteurCredX Inc.</p>
          <p className="text-white/60 mt-2">
            17 State Street, FL 40<br />
            New York, NY 10004<br />
            United States
          </p>
          <p className="mt-4 text-white/70">
            <strong className="text-white">Email:</strong>{" "}
            <a href="mailto:legal@futeurcredx.com" className="text-amber-400 hover:text-amber-300">legal@futeurcredx.com</a>
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
