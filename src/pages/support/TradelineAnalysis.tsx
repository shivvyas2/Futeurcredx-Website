import SupportPageLayout from "@/components/support/SupportPageLayout";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "what-are-tradelines", title: "What Are Tradelines" },
  { id: "types", title: "Types of Tradelines" },
  { id: "reporting", title: "Bureau Reporting" },
  { id: "analysis", title: "Tradeline Analysis" },
  { id: "optimization", title: "Optimization Strategies" },
];

export default function TradelineAnalysis() {
  return (
    <SupportPageLayout
      title="Tradeline Analysis"
      description="Understanding business tradelines, their impact on credit, and optimization strategies."
      sections={sections}
    >
      <section id="overview" className="mb-12">
        <h2>Overview</h2>
        <p>
          Tradelines are credit accounts that appear on your business credit report. 
          They include credit cards, loans, lines of credit, and trade accounts with 
          vendors. The quality and diversity of your tradelines significantly impacts 
          your business credit scores.
        </p>
      </section>

      <section id="what-are-tradelines" className="mb-12">
        <h2>What Are Tradelines</h2>
        <p>
          Each tradeline contains detailed information about a credit relationship:
        </p>
        <ul>
          <li><strong>Creditor Name</strong> - The lender or vendor</li>
          <li><strong>Account Type</strong> - Revolving, installment, or trade</li>
          <li><strong>Credit Limit / High Credit</strong> - Maximum credit extended</li>
          <li><strong>Current Balance</strong> - Amount currently owed</li>
          <li><strong>Payment Terms</strong> - Net 30, Net 60, revolving, etc.</li>
          <li><strong>Payment History</strong> - On-time, 30/60/90 day late patterns</li>
          <li><strong>Date Opened / Closed</strong> - Account age</li>
          <li><strong>Days Beyond Terms (DBT)</strong> - Average days past due</li>
        </ul>
      </section>

      <section id="types" className="mb-12">
        <h2>Types of Tradelines</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Type</th>
              <th className="text-left">Examples</th>
              <th className="text-left">Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Revolving Credit</td>
              <td>Business credit cards, lines of credit</td>
              <td>Highest impact - shows credit management</td>
            </tr>
            <tr>
              <td>Installment Loans</td>
              <td>Equipment financing, term loans</td>
              <td>High impact - shows payment consistency</td>
            </tr>
            <tr>
              <td>Trade Credit</td>
              <td>Net 30/60/90 vendor accounts</td>
              <td>Medium impact - builds profile</td>
            </tr>
            <tr>
              <td>Leases</td>
              <td>Equipment leases, vehicle leases</td>
              <td>Medium impact - shows obligations</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="reporting" className="mb-12">
        <h2>Bureau Reporting</h2>
        <p>
          Not all creditors report to all bureaus. Understanding reporting patterns is crucial:
        </p>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Vendor</th>
              <th className="text-left">D&B</th>
              <th className="text-left">Experian</th>
              <th className="text-left">Equifax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Uline</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Grainger</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Quill</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Staples Business</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Dell Business</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="analysis" className="mb-12">
        <h2>Tradeline Analysis</h2>
        <p>
          Our LUMIQ engine analyzes your tradelines across multiple dimensions:
        </p>
        <pre className="bg-gray-900 p-4 rounded-xl border border-white/10 overflow-x-auto">
          <code className="text-sm text-gray-300">{`const analysis = await client.credit.analyzeTradelines({
  ein: '12-3456789'
});

console.log('Total Tradelines:', analysis.count);
console.log('Average Age:', analysis.averageAge, 'months');
console.log('Utilization:', analysis.utilization, '%');
console.log('On-Time Rate:', analysis.onTimeRate, '%');
console.log('Recommendations:', analysis.recommendations);`}</code>
        </pre>
      </section>

      <section id="optimization" className="mb-12">
        <h2>Optimization Strategies</h2>
        <ul>
          <li><strong>Diversify</strong> - Aim for 5-10 tradelines across different types</li>
          <li><strong>Pay Early</strong> - PAYDEX rewards paying before terms</li>
          <li><strong>Keep Accounts Open</strong> - Account age matters</li>
          <li><strong>Use Reporting Vendors</strong> - Verify they report to bureaus</li>
          <li><strong>Monitor Regularly</strong> - Catch errors and fraud early</li>
          <li><strong>Request Limit Increases</strong> - Lowers utilization ratio</li>
        </ul>
      </section>
    </SupportPageLayout>
  );
}
