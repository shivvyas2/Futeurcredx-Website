import SupportPageLayout from "@/components/support/SupportPageLayout";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "navigation", title: "Navigation" },
  { id: "api-keys", title: "API Keys" },
  { id: "webhooks", title: "Webhooks" },
  { id: "team-management", title: "Team Management" },
  { id: "billing", title: "Billing & Usage" },
];

export default function DashboardGuide() {
  return (
    <SupportPageLayout
      title="Dashboard Guide"
      description="Navigate and configure your FuteurCredX Dashboard for maximum productivity."
      sections={sections}
    >
      <section id="overview" className="mb-12">
        <h2>Overview</h2>
        <p>
          The FuteurCredX Dashboard is your central hub for managing API integrations, 
          monitoring usage, configuring webhooks, and accessing credit reports. 
          Access it at <a href="https://dashboard.futeurcredx.com" target="_blank" rel="noopener noreferrer">dashboard.futeurcredx.com</a>.
        </p>
      </section>

      <section id="navigation" className="mb-12">
        <h2>Navigation</h2>
        <p>The dashboard is organized into the following sections:</p>
        <ul>
          <li><strong>Home</strong> - Quick stats, recent activity, and alerts</li>
          <li><strong>Credit Reports</strong> - Search and view business credit data</li>
          <li><strong>API Logs</strong> - Request history and debugging</li>
          <li><strong>Webhooks</strong> - Event notification configuration</li>
          <li><strong>Settings</strong> - API keys, team, billing, and preferences</li>
        </ul>
      </section>

      <section id="api-keys" className="mb-12">
        <h2>API Keys</h2>
        <p>Manage your API keys under Settings → API Keys:</p>
        <ul>
          <li><strong>Generate New Key</strong> - Create test or live API keys</li>
          <li><strong>Restrict Scope</strong> - Limit keys to specific endpoints</li>
          <li><strong>Roll Key</strong> - Generate new key, old key expires in 24h</li>
          <li><strong>Revoke Key</strong> - Immediately disable a compromised key</li>
          <li><strong>View Usage</strong> - API calls per key over time</li>
        </ul>
        <p className="mt-4 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
          💡 <strong>Tip:</strong> Create separate API keys for each environment 
          (development, staging, production) to simplify debugging and rotation.
        </p>
      </section>

      <section id="webhooks" className="mb-12">
        <h2>Webhooks</h2>
        <p>Configure real-time event notifications under Settings → Webhooks:</p>
        <ul>
          <li><strong>Add Endpoint</strong> - Register your webhook URL</li>
          <li><strong>Select Events</strong> - Choose which events to receive</li>
          <li><strong>View Secret</strong> - Access your signing secret</li>
          <li><strong>Test Webhook</strong> - Send a test event to your endpoint</li>
          <li><strong>View Logs</strong> - See delivery attempts and responses</li>
        </ul>
      </section>

      <section id="team-management" className="mb-12">
        <h2>Team Management</h2>
        <p>Invite team members and manage permissions under Settings → Team:</p>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Role</th>
              <th className="text-left">Permissions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Owner</td>
              <td>Full access, billing, delete account</td>
            </tr>
            <tr>
              <td>Admin</td>
              <td>Manage team, API keys, webhooks</td>
            </tr>
            <tr>
              <td>Developer</td>
              <td>View and create API keys, view logs</td>
            </tr>
            <tr>
              <td>Viewer</td>
              <td>View reports and logs only</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="billing" className="mb-12">
        <h2>Billing & Usage</h2>
        <p>Monitor usage and manage billing under Settings → Billing:</p>
        <ul>
          <li><strong>Current Plan</strong> - View plan details and limits</li>
          <li><strong>Usage</strong> - API calls, reports pulled, storage used</li>
          <li><strong>Invoices</strong> - Download past invoices</li>
          <li><strong>Payment Method</strong> - Update card or ACH details</li>
          <li><strong>Upgrade Plan</strong> - Scale up as your needs grow</li>
        </ul>
        <p className="mt-4">
          Usage resets on the 1st of each month. Overage charges apply if you 
          exceed your plan's included volume.
        </p>
      </section>
    </SupportPageLayout>
  );
}
