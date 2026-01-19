import SupportPageLayout from "@/components/support/SupportPageLayout";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "score-range", title: "Score Range" },
  { id: "factors", title: "Scoring Factors" },
  { id: "comparison", title: "vs Other Scores" },
  { id: "api-access", title: "API Access" },
];

export default function IntelliscorePlus() {
  return (
    <SupportPageLayout
      title="Intelliscore Plus"
      description="Understanding Experian's commercial credit scoring model for business risk assessment."
      sections={sections}
    >
      <section id="overview" className="mb-12">
        <h2>Overview</h2>
        <p>
          Intelliscore Plus is Experian's proprietary business credit scoring model that 
          predicts the likelihood of a business becoming severely delinquent (91+ days) 
          on credit obligations within the next 12 months.
        </p>
        <p>
          This score is widely used by lenders, suppliers, and vendors to make credit 
          decisions and set credit limits for business customers.
        </p>
      </section>

      <section id="score-range" className="mb-12">
        <h2>Score Range</h2>
        <p>Intelliscore Plus ranges from 1 to 100:</p>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Range</th>
              <th className="text-left">Risk Class</th>
              <th className="text-left">Delinquency Probability</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>76-100</td>
              <td><span className="text-emerald-400">Low Risk</span></td>
              <td>1.3% - 1.9%</td>
            </tr>
            <tr>
              <td>51-75</td>
              <td><span className="text-blue-400">Low-Medium Risk</span></td>
              <td>2.3% - 6.5%</td>
            </tr>
            <tr>
              <td>26-50</td>
              <td><span className="text-amber-400">Medium Risk</span></td>
              <td>7.2% - 15.4%</td>
            </tr>
            <tr>
              <td>11-25</td>
              <td><span className="text-orange-400">High Risk</span></td>
              <td>18.2% - 33.7%</td>
            </tr>
            <tr>
              <td>1-10</td>
              <td><span className="text-red-400">Very High Risk</span></td>
              <td>41.8% - 71.6%</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="factors" className="mb-12">
        <h2>Scoring Factors</h2>
        <p>Intelliscore Plus considers over 800 commercial and owner variables:</p>
        <ul>
          <li><strong>Payment Trend</strong> - Direction of payment performance over time</li>
          <li><strong>Payment Status</strong> - Current payment behavior vs. terms</li>
          <li><strong>Utilization</strong> - How much available credit is being used</li>
          <li><strong>Trade Experiences</strong> - Number and type of credit relationships</li>
          <li><strong>Public Records</strong> - Bankruptcies, liens, judgments</li>
          <li><strong>Business Demographics</strong> - Industry, size, years in business</li>
          <li><strong>Owner Information</strong> - Principal's personal credit profile</li>
        </ul>
      </section>

      <section id="comparison" className="mb-12">
        <h2>vs Other Scores</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Score</th>
              <th className="text-left">Bureau</th>
              <th className="text-left">Range</th>
              <th className="text-left">Focus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Intelliscore Plus</td>
              <td>Experian</td>
              <td>1-100</td>
              <td>Delinquency prediction</td>
            </tr>
            <tr>
              <td>PAYDEX</td>
              <td>D&B</td>
              <td>1-100</td>
              <td>Payment performance</td>
            </tr>
            <tr>
              <td>Business Credit Risk</td>
              <td>Equifax</td>
              <td>101-992</td>
              <td>Failure prediction</td>
            </tr>
            <tr>
              <td>FSR Score</td>
              <td>FuteurCredX</td>
              <td>1-100</td>
              <td>Holistic creditworthiness</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="api-access" className="mb-12">
        <h2>API Access</h2>
        <p>Access Intelliscore Plus through the credit report endpoint:</p>
        <pre className="bg-gray-900 p-4 rounded-xl border border-white/10 overflow-x-auto">
          <code className="text-sm text-gray-300">{`const report = await client.credit.getReport({
  ein: '12-3456789',
  bureaus: ['experian']
});

const intelliscore = report.bureauScores.experian.intelliscorePlus;
console.log('Score:', intelliscore.value);      // 72
console.log('Risk Class:', intelliscore.riskClass);
console.log('Factors:', intelliscore.topFactors);`}</code>
        </pre>
      </section>
    </SupportPageLayout>
  );
}
