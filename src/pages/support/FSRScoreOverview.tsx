import SupportPageLayout from "@/components/support/SupportPageLayout";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "score-range", title: "Score Range" },
  { id: "calculation", title: "How It's Calculated" },
  { id: "factors", title: "Key Factors" },
  { id: "improving", title: "Improving Your FSR Score" },
  { id: "api-access", title: "Accessing via API" },
];

export default function FSRScoreOverview() {
  return (
    <SupportPageLayout
      title="FSR Score Overview"
      description="Understanding the Financial Stability Risk Score - our proprietary business credit metric."
      sections={sections}
    >
      <section id="overview" className="mb-12">
        <h2>Overview</h2>
        <p>
          The FSR (Financial Stability Risk) Score is FuteurCredX's proprietary business 
          credit metric that provides a holistic view of a business's creditworthiness. 
          Unlike traditional bureau scores, FSR aggregates data from multiple sources to 
          provide a more complete picture.
        </p>
        <p>
          The FSR Score is powered by our LUMIQ AI engine, which analyzes payment patterns, 
          credit utilization, tradeline health, and market signals in real-time.
        </p>
      </section>

      <section id="score-range" className="mb-12">
        <h2>Score Range</h2>
        <p>The FSR Score ranges from 1 to 100:</p>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Range</th>
              <th className="text-left">Rating</th>
              <th className="text-left">Risk Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>80-100</td>
              <td><span className="text-emerald-400 font-semibold">Excellent</span></td>
              <td>Low Risk</td>
            </tr>
            <tr>
              <td>60-79</td>
              <td><span className="text-blue-400 font-semibold">Good</span></td>
              <td>Low-Medium Risk</td>
            </tr>
            <tr>
              <td>40-59</td>
              <td><span className="text-amber-400 font-semibold">Fair</span></td>
              <td>Medium Risk</td>
            </tr>
            <tr>
              <td>20-39</td>
              <td><span className="text-orange-400 font-semibold">Poor</span></td>
              <td>High Risk</td>
            </tr>
            <tr>
              <td>1-19</td>
              <td><span className="text-red-400 font-semibold">Critical</span></td>
              <td>Very High Risk</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="calculation" className="mb-12">
        <h2>How It's Calculated</h2>
        <p>
          The FSR Score is calculated using a weighted combination of factors from multiple 
          data sources:
        </p>
        <ul>
          <li><strong>Experian Business</strong> - Intelliscore Plus, payment trends</li>
          <li><strong>Dun & Bradstreet</strong> - PAYDEX, Delinquency Predictor</li>
          <li><strong>Equifax Business</strong> - Business Credit Risk Score</li>
          <li><strong>Public Records</strong> - Liens, judgments, bankruptcies</li>
          <li><strong>Industry Data</strong> - Sector-specific risk factors</li>
        </ul>
        <p>
          Our LUMIQ AI engine applies machine learning models trained on millions of 
          business credit events to produce a predictive score that updates in real-time.
        </p>
      </section>

      <section id="factors" className="mb-12">
        <h2>Key Factors</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Factor</th>
              <th className="text-left">Weight</th>
              <th className="text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Payment History</td>
              <td>35%</td>
              <td>On-time payment track record</td>
            </tr>
            <tr>
              <td>Credit Utilization</td>
              <td>25%</td>
              <td>Current usage vs. available credit</td>
            </tr>
            <tr>
              <td>Tradeline Diversity</td>
              <td>15%</td>
              <td>Mix of credit types and vendors</td>
            </tr>
            <tr>
              <td>Credit Age</td>
              <td>10%</td>
              <td>Length of credit history</td>
            </tr>
            <tr>
              <td>Public Records</td>
              <td>10%</td>
              <td>Liens, judgments, bankruptcies</td>
            </tr>
            <tr>
              <td>Recent Activity</td>
              <td>5%</td>
              <td>New accounts, inquiries</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="improving" className="mb-12">
        <h2>Improving Your FSR Score</h2>
        <ul>
          <li><strong>Pay on time or early</strong> - Payment history is the largest factor</li>
          <li><strong>Keep utilization low</strong> - Aim for under 30% of available credit</li>
          <li><strong>Diversify tradelines</strong> - Mix of revolving, installment, and trade credit</li>
          <li><strong>Monitor reports</strong> - Dispute errors promptly</li>
          <li><strong>Limit new inquiries</strong> - Space out credit applications</li>
          <li><strong>Resolve public records</strong> - Pay off liens and judgments</li>
        </ul>
      </section>

      <section id="api-access" className="mb-12">
        <h2>Accessing via API</h2>
        <p>
          The FSR Score is included in all credit report responses. You can also fetch 
          just the score for faster lookups.
        </p>
        <pre className="bg-gray-900 p-4 rounded-xl border border-white/10 overflow-x-auto">
          <code className="text-sm text-gray-300">{`// Get FSR Score only
const score = await client.credit.getFSRScore({
  ein: '12-3456789'
});

console.log('FSR Score:', score.value);      // 78
console.log('Rating:', score.rating);         // "Good"
console.log('Risk Level:', score.riskLevel); // "low-medium"
console.log('Last Updated:', score.updatedAt);`}</code>
        </pre>
      </section>
    </SupportPageLayout>
  );
}
