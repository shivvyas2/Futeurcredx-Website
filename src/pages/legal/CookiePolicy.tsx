import LegalPageLayout from "@/components/legal/LegalPageLayout";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "what-are-cookies", title: "What Are Cookies" },
  { id: "types", title: "Types of Cookies We Use" },
  { id: "third-party", title: "Third-Party Cookies" },
  { id: "manage", title: "Managing Cookies" },
  { id: "do-not-track", title: "Do Not Track" },
  { id: "updates", title: "Updates to This Policy" },
  { id: "contact", title: "Contact Us" },
];

export default function CookiePolicy() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      lastUpdated="January 2026"
      sections={sections}
    >
      <section id="introduction" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p>
          This Cookie Policy explains how FuteurCredX Inc. ("FuteurCredX," "we," "us," or "our") 
          uses cookies and similar tracking technologies when you visit our websites, applications, 
          and services. This policy should be read alongside our Privacy Policy, which explains 
          how we collect and use your personal information.
        </p>
        <p className="mt-4">
          By continuing to use our websites, you consent to the use of cookies as described in 
          this policy. You can manage your cookie preferences through your browser settings.
        </p>
      </section>

      <section id="what-are-cookies" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your device (computer, smartphone, 
          or tablet) when you visit a website. They are widely used to make websites work more 
          efficiently and to provide information to website owners.
        </p>
        <p className="mt-4">
          We also use similar technologies such as:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Pixels (Web Beacons):</strong> Small graphics embedded in web pages or 
          emails that track page views and email opens</li>
          <li><strong>Local Storage:</strong> Data stored in your browser for longer periods</li>
          <li><strong>Session Storage:</strong> Temporary data stored during your browsing session</li>
          <li><strong>Device Fingerprinting:</strong> Collecting device attributes for identification</li>
        </ul>
      </section>

      <section id="types" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Essential Cookies</h3>
        <p>
          These cookies are necessary for the website to function properly. They enable core 
          functionality such as security, network management, and account access. You cannot 
          opt out of these cookies.
        </p>
        <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
          <p className="text-sm text-white"><strong>Examples:</strong></p>
          <ul className="list-disc pl-6 text-sm mt-2 space-y-1 text-white/70">
            <li>Session cookies for user authentication</li>
            <li>Security cookies for fraud prevention</li>
            <li>Load balancing cookies for performance</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Analytics Cookies</h3>
        <p>
          These cookies help us understand how visitors interact with our website by collecting 
          and reporting information anonymously. This helps us improve our website and services.
        </p>
        <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
          <p className="text-sm text-white"><strong>Examples:</strong></p>
          <ul className="list-disc pl-6 text-sm mt-2 space-y-1 text-white/70">
            <li>Google Analytics cookies</li>
            <li>Mixpanel for product analytics</li>
            <li>Amplitude for user behavior tracking</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Functional Cookies</h3>
        <p>
          These cookies enable enhanced functionality and personalization, such as remembering 
          your preferences and settings.
        </p>
        <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
          <p className="text-sm text-white"><strong>Examples:</strong></p>
          <ul className="list-disc pl-6 text-sm mt-2 space-y-1 text-white/70">
            <li>Language preference cookies</li>
            <li>Theme preference (light/dark mode)</li>
            <li>Dashboard customization settings</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Marketing Cookies</h3>
        <p>
          These cookies track your online activity to help advertisers deliver more relevant 
          advertising or to limit how many times you see an ad.
        </p>
        <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
          <p className="text-sm text-white"><strong>Examples:</strong></p>
          <ul className="list-disc pl-6 text-sm mt-2 space-y-1 text-white/70">
            <li>LinkedIn Insight Tag</li>
            <li>Google Ads remarketing</li>
            <li>Facebook Pixel</li>
          </ul>
        </div>
      </section>

      <section id="third-party" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
        <p>
          Some cookies on our website are placed by third parties. These third parties may 
          include analytics providers, advertising networks, and social media platforms.
        </p>
        <p className="mt-4">
          We work with the following third-party services that may place cookies:
        </p>
        <table className="w-full mt-4 border-collapse">
          <thead>
            <tr className="bg-white/5">
              <th className="text-left p-3 border border-white/10 text-white">Provider</th>
              <th className="text-left p-3 border border-white/10 text-white">Purpose</th>
              <th className="text-left p-3 border border-white/10 text-white">Privacy Policy</th>
            </tr>
          </thead>
          <tbody className="text-white/70">
            <tr>
              <td className="p-3 border border-white/10">Google Analytics</td>
              <td className="p-3 border border-white/10">Website analytics</td>
              <td className="p-3 border border-white/10">
                <a href="https://policies.google.com/privacy" className="text-amber-400 hover:text-amber-300">View</a>
              </td>
            </tr>
            <tr>
              <td className="p-3 border border-white/10">Intercom</td>
              <td className="p-3 border border-white/10">Customer support chat</td>
              <td className="p-3 border border-white/10">
                <a href="https://www.intercom.com/legal/privacy" className="text-amber-400 hover:text-amber-300">View</a>
              </td>
            </tr>
            <tr>
              <td className="p-3 border border-white/10">Stripe</td>
              <td className="p-3 border border-white/10">Payment processing</td>
              <td className="p-3 border border-white/10">
                <a href="https://stripe.com/privacy" className="text-amber-400 hover:text-amber-300">View</a>
              </td>
            </tr>
            <tr>
              <td className="p-3 border border-white/10">HubSpot</td>
              <td className="p-3 border border-white/10">Marketing automation</td>
              <td className="p-3 border border-white/10">
                <a href="https://legal.hubspot.com/privacy-policy" className="text-amber-400 hover:text-amber-300">View</a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="manage" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
        <p>
          Most web browsers allow you to control cookies through their settings. You can:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>View what cookies are stored and delete them individually</li>
          <li>Block third-party cookies</li>
          <li>Block cookies from specific websites</li>
          <li>Block all cookies</li>
          <li>Delete all cookies when you close your browser</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Browser-Specific Instructions</h3>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies</li>
          <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
          <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
          <li><strong>Edge:</strong> Settings → Privacy → Cookies</li>
        </ul>

        <p className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-400">
          <strong>Note:</strong> Blocking or deleting cookies may affect the functionality of 
          our website and your ability to access certain features.
        </p>
      </section>

      <section id="do-not-track" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Do Not Track</h2>
        <p>
          Some browsers include a "Do Not Track" (DNT) feature that signals to websites that 
          you do not want to be tracked. There is currently no industry standard for how 
          websites should respond to DNT signals.
        </p>
        <p className="mt-4">
          At this time, we do not respond to DNT signals. However, you can manage your 
          tracking preferences through your cookie settings and the opt-out mechanisms 
          described in this policy.
        </p>
      </section>

      <section id="updates" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes in our 
          practices or for operational, legal, or regulatory reasons. We will notify you 
          of any material changes by posting the updated policy on our website with a new 
          "Last updated" date.
        </p>
      </section>

      <section id="contact" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>
          If you have any questions about our use of cookies, please contact us:
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
            <a href="mailto:data@futeurcredx.com" className="text-amber-400 hover:text-amber-300">data@futeurcredx.com</a>
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
