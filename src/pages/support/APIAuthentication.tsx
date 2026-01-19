import SupportPageLayout, { CodeBlock } from "@/components/support/SupportPageLayout";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "api-keys", title: "API Keys" },
  { id: "authentication-methods", title: "Authentication Methods" },
  { id: "request-signing", title: "Request Signing" },
  { id: "token-refresh", title: "Token Refresh" },
  { id: "security-best-practices", title: "Security Best Practices" },
];

export default function APIAuthentication() {
  return (
    <SupportPageLayout
      title="API Authentication"
      description="Learn how to securely authenticate your requests to the FuteurCredX API."
      sections={sections}
    >
      <section id="overview" className="mb-12">
        <h2>Overview</h2>
        <p>
          FuteurCredX uses industry-standard authentication mechanisms to secure API access. 
          All API requests must be authenticated using one of the supported methods.
        </p>
        <ul>
          <li><strong>API Key Authentication</strong> - For server-to-server integrations</li>
          <li><strong>OAuth 2.0</strong> - For user-delegated access</li>
          <li><strong>JWT Bearer Tokens</strong> - For session-based authentication</li>
        </ul>
      </section>

      <section id="api-keys" className="mb-12">
        <h2>API Keys</h2>
        <p>
          API keys are the simplest way to authenticate server-side requests. Generate keys 
          in your <a href="https://dashboard.futeurcredx.com/settings/api">Dashboard</a>.
        </p>

        <h3>Key Types</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Type</th>
              <th className="text-left">Prefix</th>
              <th className="text-left">Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Test Key</td>
              <td><code>test_</code></td>
              <td>Sandbox environment, synthetic data</td>
            </tr>
            <tr>
              <td>Live Key</td>
              <td><code>live_</code></td>
              <td>Production environment, real data</td>
            </tr>
            <tr>
              <td>Restricted Key</td>
              <td><code>rk_</code></td>
              <td>Limited scope, specific endpoints only</td>
            </tr>
          </tbody>
        </table>

        <CodeBlock
          language="bash"
          code={`# Include API key in Authorization header
curl -X GET https://api.futeurcredx.com/v1/credit/report \\
  -H "Authorization: Bearer live_sk_xxxxxxxxxxxxx" \\
  -H "Content-Type: application/json"`}
        />
      </section>

      <section id="authentication-methods" className="mb-12">
        <h2>Authentication Methods</h2>

        <h3>Bearer Token (Recommended)</h3>
        <CodeBlock
          language="typescript"
          code={`// Most common method
const response = await fetch('https://api.futeurcredx.com/v1/credit/report', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});`}
        />

        <h3>Query Parameter (Not Recommended)</h3>
        <p className="text-amber-400">
          ⚠️ Only use for testing. API keys in URLs may be logged.
        </p>
        <CodeBlock
          language="bash"
          code={`# Avoid in production
curl "https://api.futeurcredx.com/v1/health?api_key=YOUR_API_KEY"`}
        />
      </section>

      <section id="request-signing" className="mb-12">
        <h2>Request Signing</h2>
        <p>
          For enhanced security, you can sign requests using HMAC-SHA256. This prevents 
          replay attacks and ensures request integrity.
        </p>

        <CodeBlock
          language="typescript"
          code={`import crypto from 'crypto';

function signRequest(payload: string, secret: string, timestamp: number): string {
  const message = \`\${timestamp}.\${payload}\`;
  return crypto
    .createHmac('sha256', secret)
    .update(message)
    .digest('hex');
}

// Include in request headers
const timestamp = Date.now();
const signature = signRequest(JSON.stringify(body), apiSecret, timestamp);

fetch('https://api.futeurcredx.com/v1/credit/report', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'X-Signature': signature,
    'X-Timestamp': timestamp.toString()
  }
});`}
        />
      </section>

      <section id="token-refresh" className="mb-12">
        <h2>Token Refresh</h2>
        <p>
          OAuth access tokens expire after 1 hour. Use refresh tokens to obtain new access tokens.
        </p>

        <CodeBlock
          language="typescript"
          code={`// Refresh an expired access token
const newTokens = await client.auth.refreshToken({
  refreshToken: 'your_refresh_token',
  clientId: 'your_client_id',
  clientSecret: 'your_client_secret'
});

console.log('New access token:', newTokens.accessToken);
console.log('Expires in:', newTokens.expiresIn, 'seconds');`}
        />
      </section>

      <section id="security-best-practices" className="mb-12">
        <h2>Security Best Practices</h2>
        <ul>
          <li><strong>Never expose API keys in client-side code</strong> - Use server-side proxies</li>
          <li><strong>Rotate keys regularly</strong> - Generate new keys every 90 days</li>
          <li><strong>Use environment variables</strong> - Never hardcode keys in source code</li>
          <li><strong>Implement IP allowlisting</strong> - Restrict API access to known IPs</li>
          <li><strong>Monitor API usage</strong> - Set up alerts for unusual activity</li>
          <li><strong>Use the minimum required scope</strong> - Create restricted keys when possible</li>
        </ul>

        <CodeBlock
          language="bash"
          code={`# Store API key in environment variable
export FUTEURCREDX_API_KEY="live_sk_xxxxxxxxxxxxx"

# Access in your application
const apiKey = process.env.FUTEURCREDX_API_KEY;`}
        />
      </section>
    </SupportPageLayout>
  );
}
