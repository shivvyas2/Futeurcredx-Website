import SupportPageLayout, { CodeBlock } from "@/components/support/SupportPageLayout";

const sections = [
  { id: "installation", title: "Installation" },
  { id: "initialization", title: "Initialization" },
  { id: "authentication", title: "Authentication" },
  { id: "credit-reports", title: "Fetching Credit Reports" },
  { id: "webhooks", title: "Webhook Events" },
  { id: "error-handling", title: "Error Handling" },
];

export default function WebSDKIntegration() {
  return (
    <SupportPageLayout
      title="Web SDK Integration"
      description="Complete guide to integrating the FuteurCredX JavaScript/TypeScript SDK into your web application."
      sections={sections}
    >
      <section id="installation" className="mb-12">
        <h2>Installation</h2>
        <p>
          Install the FuteurCredX SDK using your preferred package manager. The SDK supports 
          both JavaScript and TypeScript out of the box.
        </p>
        
        <CodeBlock
          language="bash"
          code={`# Using npm
npm install @futeurcredx/sdk

# Using yarn
yarn add @futeurcredx/sdk

# Using pnpm
pnpm add @futeurcredx/sdk`}
        />

        <p>
          The SDK requires Node.js 16+ for server-side usage or any modern browser for 
          client-side integration.
        </p>
      </section>

      <section id="initialization" className="mb-12">
        <h2>Initialization</h2>
        <p>
          Initialize the SDK with your API key. You can find your API key in the 
          <a href="https://dashboard.futeurcredx.com/settings/api" target="_blank" rel="noopener noreferrer"> Dashboard Settings</a>.
        </p>

        <CodeBlock
          language="typescript"
          code={`import { FuteurCredX } from '@futeurcredx/sdk';

// Initialize with your API key
const client = new FuteurCredX({
  apiKey: process.env.FUTEURCREDX_API_KEY,
  environment: 'production', // or 'sandbox' for testing
});

// Test the connection
const status = await client.health.check();
console.log('API Status:', status.healthy); // true`}
        />

        <h3>Configuration Options</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Option</th>
              <th className="text-left">Type</th>
              <th className="text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>apiKey</code></td>
              <td>string</td>
              <td>Your FuteurCredX API key (required)</td>
            </tr>
            <tr>
              <td><code>environment</code></td>
              <td>'production' | 'sandbox'</td>
              <td>API environment (default: 'production')</td>
            </tr>
            <tr>
              <td><code>timeout</code></td>
              <td>number</td>
              <td>Request timeout in ms (default: 30000)</td>
            </tr>
            <tr>
              <td><code>retries</code></td>
              <td>number</td>
              <td>Number of retry attempts (default: 3)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="authentication" className="mb-12">
        <h2>Authentication</h2>
        <p>
          The SDK supports multiple authentication methods for different use cases.
        </p>

        <h3>API Key Authentication</h3>
        <p>Best for server-side applications with full API access.</p>
        <CodeBlock
          language="typescript"
          code={`const client = new FuteurCredX({
  apiKey: 'your_api_key_here'
});`}
        />

        <h3>OAuth 2.0 (User-Delegated Access)</h3>
        <p>Best for applications acting on behalf of users.</p>
        <CodeBlock
          language="typescript"
          code={`const client = new FuteurCredX({
  clientId: 'your_client_id',
  clientSecret: 'your_client_secret',
  redirectUri: 'https://yourapp.com/callback'
});

// Generate authorization URL
const authUrl = client.auth.getAuthorizationUrl({
  scope: ['credit:read', 'reports:read'],
  state: 'random_state_string'
});

// Exchange code for tokens
const tokens = await client.auth.exchangeCode(code);`}
        />
      </section>

      <section id="credit-reports" className="mb-12">
        <h2>Fetching Credit Reports</h2>
        <p>
          Retrieve comprehensive business credit reports from multiple bureaus.
        </p>

        <CodeBlock
          language="typescript"
          code={`// Get a business credit report
const report = await client.credit.getReport({
  ein: '12-3456789',
  bureaus: ['experian', 'dnb', 'equifax'],
  includeTradelines: true,
  includeRiskFactors: true
});

// Access the FSR Score
console.log('FSR Score:', report.fsrScore);
console.log('Risk Level:', report.riskLevel);

// Iterate through tradelines
report.tradelines.forEach(tradeline => {
  console.log(\`\${tradeline.creditor}: \${tradeline.balance}\`);
});`}
        />

        <h3>Report Response Structure</h3>
        <CodeBlock
          language="typescript"
          code={`interface CreditReport {
  ein: string;
  businessName: string;
  fsrScore: number;
  riskLevel: 'low' | 'medium' | 'high';
  bureauScores: {
    experian: { intelliscorePlus: number };
    dnb: { paydex: number };
    equifax: { businessScore: number };
  };
  tradelines: Tradeline[];
  riskFactors: RiskFactor[];
  inquiries: Inquiry[];
  publicRecords: PublicRecord[];
}`}
        />
      </section>

      <section id="webhooks" className="mb-12">
        <h2>Webhook Events</h2>
        <p>
          Subscribe to real-time events for credit score changes, new tradelines, 
          and other important updates.
        </p>

        <CodeBlock
          language="typescript"
          code={`// Register a webhook endpoint
await client.webhooks.create({
  url: 'https://yourapp.com/webhooks/futeurcredx',
  events: [
    'credit.score.changed',
    'tradeline.added',
    'tradeline.updated',
    'alert.triggered'
  ],
  secret: 'your_webhook_secret'
});

// Verify webhook signature (in your endpoint)
const isValid = client.webhooks.verify(
  payload,
  signature,
  'your_webhook_secret'
);`}
        />
      </section>

      <section id="error-handling" className="mb-12">
        <h2>Error Handling</h2>
        <p>
          The SDK throws typed errors for different failure scenarios.
        </p>

        <CodeBlock
          language="typescript"
          code={`import { FuteurCredXError, RateLimitError, AuthenticationError } from '@futeurcredx/sdk';

try {
  const report = await client.credit.getReport({ ein: '12-3456789' });
} catch (error) {
  if (error instanceof RateLimitError) {
    console.log('Rate limited. Retry after:', error.retryAfter);
  } else if (error instanceof AuthenticationError) {
    console.log('Invalid API key');
  } else if (error instanceof FuteurCredXError) {
    console.log('API Error:', error.message, error.code);
  }
}`}
        />
      </section>
    </SupportPageLayout>
  );
}
