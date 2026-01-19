import SupportPageLayout, { CodeBlock } from "@/components/support/SupportPageLayout";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "configuration", title: "Endpoint Configuration" },
  { id: "event-types", title: "Event Types" },
  { id: "payload-structure", title: "Payload Structure" },
  { id: "verification", title: "Signature Verification" },
  { id: "retry-logic", title: "Retry Logic" },
  { id: "testing", title: "Testing Webhooks" },
];

export default function WebhooksSetup() {
  return (
    <SupportPageLayout
      title="Webhooks Setup"
      description="Configure real-time event notifications for credit changes, alerts, and system updates."
      sections={sections}
    >
      <section id="overview" className="mb-12">
        <h2>Overview</h2>
        <p>
          Webhooks allow you to receive real-time notifications when events occur in your 
          FuteurCredX account. Instead of polling the API, webhooks push data to your 
          server as soon as events happen.
        </p>
        <ul>
          <li>Real-time credit score changes</li>
          <li>New tradeline activity</li>
          <li>Alert triggers and notifications</li>
          <li>Report generation completion</li>
        </ul>
      </section>

      <section id="configuration" className="mb-12">
        <h2>Endpoint Configuration</h2>
        <p>
          Register webhook endpoints via the Dashboard or API. Your endpoint must be 
          HTTPS and publicly accessible.
        </p>

        <CodeBlock
          language="typescript"
          code={`// Create a webhook endpoint
const webhook = await client.webhooks.create({
  url: 'https://yourapp.com/webhooks/futeurcredx',
  events: ['credit.score.changed', 'tradeline.added'],
  secret: 'whsec_xxxxxxxxxxxxx', // Auto-generated if not provided
  metadata: {
    environment: 'production'
  }
});

console.log('Webhook ID:', webhook.id);
console.log('Secret:', webhook.secret); // Store securely!`}
        />

        <h3>Endpoint Requirements</h3>
        <ul>
          <li>Must use HTTPS (TLS 1.2 or higher)</li>
          <li>Must respond with 2xx status within 30 seconds</li>
          <li>Should return response quickly, process asynchronously</li>
        </ul>
      </section>

      <section id="event-types" className="mb-12">
        <h2>Event Types</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Event</th>
              <th className="text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>credit.score.changed</code></td>
              <td>Business credit score changed by 5+ points</td>
            </tr>
            <tr>
              <td><code>credit.report.ready</code></td>
              <td>Requested credit report is ready</td>
            </tr>
            <tr>
              <td><code>tradeline.added</code></td>
              <td>New tradeline appeared on report</td>
            </tr>
            <tr>
              <td><code>tradeline.updated</code></td>
              <td>Existing tradeline data changed</td>
            </tr>
            <tr>
              <td><code>tradeline.closed</code></td>
              <td>Tradeline marked as closed</td>
            </tr>
            <tr>
              <td><code>alert.triggered</code></td>
              <td>Custom alert condition met</td>
            </tr>
            <tr>
              <td><code>inquiry.detected</code></td>
              <td>New credit inquiry detected</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="payload-structure" className="mb-12">
        <h2>Payload Structure</h2>
        <p>
          All webhook payloads follow a consistent structure with event metadata and data.
        </p>

        <CodeBlock
          language="json"
          code={`{
  "id": "evt_1234567890",
  "type": "credit.score.changed",
  "created": 1705847200,
  "data": {
    "ein": "12-3456789",
    "businessName": "Acme Corp",
    "previousScore": 72,
    "currentScore": 78,
    "bureau": "experian",
    "scoreType": "intelliscorePlus"
  },
  "metadata": {
    "webhookId": "wh_xxxxx",
    "attempt": 1
  }
}`}
        />
      </section>

      <section id="verification" className="mb-12">
        <h2>Signature Verification</h2>
        <p>
          Always verify webhook signatures to ensure requests are from FuteurCredX 
          and haven't been tampered with.
        </p>

        <CodeBlock
          language="typescript"
          code={`import crypto from 'crypto';

function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string,
  timestamp: string
): boolean {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(\`\${timestamp}.\${payload}\`)
    .digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(\`v1=\${expectedSignature}\`)
  );
}

// In your webhook handler
app.post('/webhooks/futeurcredx', (req, res) => {
  const signature = req.headers['x-futeurcredx-signature'];
  const timestamp = req.headers['x-futeurcredx-timestamp'];
  
  if (!verifyWebhookSignature(req.rawBody, signature, WEBHOOK_SECRET, timestamp)) {
    return res.status(401).send('Invalid signature');
  }
  
  // Process the webhook...
  res.status(200).send('OK');
});`}
        />
      </section>

      <section id="retry-logic" className="mb-12">
        <h2>Retry Logic</h2>
        <p>
          If your endpoint fails to respond with a 2xx status, we retry with exponential backoff.
        </p>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Attempt</th>
              <th className="text-left">Delay</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Immediate</td></tr>
            <tr><td>2</td><td>5 minutes</td></tr>
            <tr><td>3</td><td>30 minutes</td></tr>
            <tr><td>4</td><td>2 hours</td></tr>
            <tr><td>5</td><td>24 hours</td></tr>
          </tbody>
        </table>
        <p>After 5 failed attempts, the webhook is disabled and you'll receive an email notification.</p>
      </section>

      <section id="testing" className="mb-12">
        <h2>Testing Webhooks</h2>
        <p>
          Use our CLI or Dashboard to send test events to your endpoint.
        </p>

        <CodeBlock
          language="bash"
          code={`# Using FuteurCredX CLI
futeurcredx webhooks trigger credit.score.changed \\
  --endpoint wh_xxxxx \\
  --data '{"ein": "12-3456789", "currentScore": 85}'

# Or use ngrok for local testing
ngrok http 3000
# Then update your webhook URL in the Dashboard`}
        />
      </section>
    </SupportPageLayout>
  );
}
