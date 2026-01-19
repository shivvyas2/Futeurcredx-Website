import SupportPageLayout, { CodeBlock } from "@/components/support/SupportPageLayout";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "error-codes", title: "Error Codes" },
  { id: "http-status", title: "HTTP Status Codes" },
  { id: "error-response", title: "Error Response Format" },
  { id: "handling-errors", title: "Handling Errors" },
  { id: "retry-strategies", title: "Retry Strategies" },
];

export default function ErrorHandling() {
  return (
    <SupportPageLayout
      title="Error Handling"
      description="Best practices for handling API errors, status codes, and implementing retry logic."
      sections={sections}
    >
      <section id="overview" className="mb-12">
        <h2>Overview</h2>
        <p>
          The FuteurCredX API uses conventional HTTP response codes to indicate success 
          or failure. Codes in the 2xx range indicate success, 4xx indicate client errors, 
          and 5xx indicate server errors.
        </p>
      </section>

      <section id="error-codes" className="mb-12">
        <h2>Error Codes</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Code</th>
              <th className="text-left">Description</th>
              <th className="text-left">Resolution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>invalid_request</code></td>
              <td>Malformed request syntax</td>
              <td>Check request body format</td>
            </tr>
            <tr>
              <td><code>authentication_error</code></td>
              <td>Invalid or missing API key</td>
              <td>Verify API key is correct</td>
            </tr>
            <tr>
              <td><code>authorization_error</code></td>
              <td>Insufficient permissions</td>
              <td>Check API key scope</td>
            </tr>
            <tr>
              <td><code>rate_limit_exceeded</code></td>
              <td>Too many requests</td>
              <td>Implement backoff, check limits</td>
            </tr>
            <tr>
              <td><code>resource_not_found</code></td>
              <td>Requested resource doesn't exist</td>
              <td>Verify resource ID/EIN</td>
            </tr>
            <tr>
              <td><code>business_not_found</code></td>
              <td>No credit file for business</td>
              <td>Business may lack credit history</td>
            </tr>
            <tr>
              <td><code>internal_error</code></td>
              <td>Server-side error</td>
              <td>Retry with backoff, contact support</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="http-status" className="mb-12">
        <h2>HTTP Status Codes</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Status</th>
              <th className="text-left">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>200</td><td>Success</td></tr>
            <tr><td>201</td><td>Created</td></tr>
            <tr><td>400</td><td>Bad Request - Invalid parameters</td></tr>
            <tr><td>401</td><td>Unauthorized - Invalid API key</td></tr>
            <tr><td>403</td><td>Forbidden - Insufficient permissions</td></tr>
            <tr><td>404</td><td>Not Found - Resource doesn't exist</td></tr>
            <tr><td>429</td><td>Rate Limited - Too many requests</td></tr>
            <tr><td>500</td><td>Internal Server Error</td></tr>
            <tr><td>503</td><td>Service Unavailable - Temporary outage</td></tr>
          </tbody>
        </table>
      </section>

      <section id="error-response" className="mb-12">
        <h2>Error Response Format</h2>
        <p>All error responses follow a consistent JSON structure.</p>

        <CodeBlock
          language="json"
          code={`{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "Rate limit exceeded. Please retry after 60 seconds.",
    "type": "client_error",
    "param": null,
    "details": {
      "limit": 100,
      "remaining": 0,
      "reset_at": 1705847260
    }
  },
  "request_id": "req_abc123xyz"
}`}
        />
      </section>

      <section id="handling-errors" className="mb-12">
        <h2>Handling Errors</h2>
        <p>Use typed error classes for robust error handling.</p>

        <CodeBlock
          language="typescript"
          code={`import {
  FuteurCredXError,
  AuthenticationError,
  RateLimitError,
  ValidationError,
  NotFoundError
} from '@futeurcredx/sdk';

async function getBusinessCredit(ein: string) {
  try {
    return await client.credit.getReport({ ein });
  } catch (error) {
    if (error instanceof AuthenticationError) {
      // Invalid API key
      console.error('Check your API key configuration');
      throw error;
    }
    
    if (error instanceof RateLimitError) {
      // Wait and retry
      console.log(\`Rate limited. Retry after \${error.retryAfter}s\`);
      await sleep(error.retryAfter * 1000);
      return getBusinessCredit(ein); // Retry
    }
    
    if (error instanceof NotFoundError) {
      // Business has no credit file
      console.log('Business not found in credit bureaus');
      return null;
    }
    
    if (error instanceof ValidationError) {
      // Invalid request parameters
      console.error('Invalid EIN format:', error.param);
      throw error;
    }
    
    // Unknown error
    console.error('Unexpected error:', error);
    throw error;
  }
}`}
        />
      </section>

      <section id="retry-strategies" className="mb-12">
        <h2>Retry Strategies</h2>
        <p>Implement exponential backoff for transient errors.</p>

        <CodeBlock
          language="typescript"
          code={`async function withRetry<T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  baseDelay = 1000
): Promise<T> {
  let lastError: Error;
  
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      // Don't retry client errors (except rate limits)
      if (error instanceof FuteurCredXError) {
        if (error.statusCode >= 400 && error.statusCode < 500) {
          if (!(error instanceof RateLimitError)) {
            throw error;
          }
        }
      }
      
      // Exponential backoff with jitter
      const delay = baseDelay * Math.pow(2, attempt) + Math.random() * 1000;
      console.log(\`Attempt \${attempt + 1} failed. Retrying in \${delay}ms...\`);
      await sleep(delay);
    }
  }
  
  throw lastError;
}

// Usage
const report = await withRetry(() => 
  client.credit.getReport({ ein: '12-3456789' })
);`}
        />
      </section>
    </SupportPageLayout>
  );
}
