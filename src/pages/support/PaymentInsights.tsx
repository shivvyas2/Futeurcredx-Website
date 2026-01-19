import SupportPageLayout from "@/components/support/SupportPageLayout";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "metrics", title: "Key Metrics" },
  { id: "dbt", title: "Days Beyond Terms (DBT)" },
  { id: "trends", title: "Payment Trends" },
  { id: "industry-comparison", title: "Industry Comparison" },
  { id: "api", title: "API Access" },
];

export default function PaymentInsights() {
  return (
    <SupportPageLayout
      title="Payment Insights"
      description="Analyzing payment behavior patterns and their impact on business credit health."
      sections={sections}
    >
      <section id="overview" className="mb-12">
        <h2>Overview</h2>
        <p>
          Payment insights provide deep analysis of how a business pays its obligations. 
          This data is the foundation of business credit scoring, as payment history 
          typically accounts for 35% or more of the overall score.
        </p>
        <p>
          FuteurCredX aggregates payment data from all major bureaus and provides 
          actionable insights through our LUMIQ intelligence engine.
        </p>
      </section>

      <section id="metrics" className="mb-12">
        <h2>Key Metrics</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Metric</th>
              <th className="text-left">Description</th>
              <th className="text-left">Optimal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>On-Time Rate</td>
              <td>% of payments made on or before terms</td>
              <td>≥ 95%</td>
            </tr>
            <tr>
              <td>Average DBT</td>
              <td>Average days beyond payment terms</td>
              <td>0-5 days</td>
            </tr>
            <tr>
              <td>30+ Day Late</td>
              <td>Payments 30+ days past due</td>
              <td>0%</td>
            </tr>
            <tr>
              <td>Payment Velocity</td>
              <td>Trend of payment speed over time</td>
              <td>Improving</td>
            </tr>
            <tr>
              <td>Industry Percentile</td>
              <td>Ranking vs. industry peers</td>
              <td>Top 25%</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="dbt" className="mb-12">
        <h2>Days Beyond Terms (DBT)</h2>
        <p>
          DBT measures how many days past the due date, on average, a business pays 
          its invoices. It's a key component of the D&B PAYDEX score.
        </p>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">DBT</th>
              <th className="text-left">PAYDEX Equivalent</th>
              <th className="text-left">Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Anticipate (early)</td>
              <td>100</td>
              <td><span className="text-emerald-400">Exceptional</span></td>
            </tr>
            <tr>
              <td>Prompt (on time)</td>
              <td>80</td>
              <td><span className="text-emerald-400">Excellent</span></td>
            </tr>
            <tr>
              <td>1-14 days</td>
              <td>70-79</td>
              <td><span className="text-blue-400">Good</span></td>
            </tr>
            <tr>
              <td>15-30 days</td>
              <td>50-69</td>
              <td><span className="text-amber-400">Fair</span></td>
            </tr>
            <tr>
              <td>31-60 days</td>
              <td>30-49</td>
              <td><span className="text-orange-400">Poor</span></td>
            </tr>
            <tr>
              <td>61+ days</td>
              <td>1-29</td>
              <td><span className="text-red-400">Critical</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="trends" className="mb-12">
        <h2>Payment Trends</h2>
        <p>
          Trend analysis shows the direction of payment behavior over time:
        </p>
        <ul>
          <li><strong>Improving</strong> - DBT decreasing, on-time rate increasing</li>
          <li><strong>Stable</strong> - Consistent payment behavior</li>
          <li><strong>Declining</strong> - DBT increasing, more late payments</li>
        </ul>
        <p>
          Lenders weight trends heavily - an improving trend can offset past issues, 
          while a declining trend raises red flags even with good current scores.
        </p>
      </section>

      <section id="industry-comparison" className="mb-12">
        <h2>Industry Comparison</h2>
        <p>
          Payment norms vary by industry. Construction typically has higher DBT than 
          professional services. Our analysis contextualizes your performance:
        </p>
        <pre className="bg-gray-900 p-4 rounded-xl border border-white/10 overflow-x-auto">
          <code className="text-sm text-gray-300">{`const insights = await client.credit.getPaymentInsights({
  ein: '12-3456789',
  includeIndustryBenchmarks: true
});

console.log('Your DBT:', insights.averageDBT);
console.log('Industry Avg:', insights.industryBenchmark.averageDBT);
console.log('Percentile:', insights.industryPercentile); // 78th`}</code>
        </pre>
      </section>

      <section id="api" className="mb-12">
        <h2>API Access</h2>
        <p>
          Access detailed payment insights through the dedicated endpoint:
        </p>
        <pre className="bg-gray-900 p-4 rounded-xl border border-white/10 overflow-x-auto">
          <code className="text-sm text-gray-300">{`const insights = await client.credit.getPaymentInsights({
  ein: '12-3456789',
  period: '12_months'
});

// Response structure
{
  onTimeRate: 94.2,
  averageDBT: 3,
  paymentVelocity: 'improving',
  tradelines: [
    { creditor: 'Uline', dbt: 0, status: 'current' },
    { creditor: 'Grainger', dbt: 5, status: 'current' }
  ],
  trend: {
    direction: 'improving',
    changePercent: 8.5
  }
}`}</code>
        </pre>
      </section>
    </SupportPageLayout>
  );
}
