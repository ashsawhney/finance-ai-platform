const kpis = [
  { label: "Net worth", value: "$1.24M", detail: "+6.4% vs last quarter" },
  { label: "Savings rate", value: "28%", detail: "Above target" },
  { label: "Debt ratio", value: "14%", detail: "Low exposure" },
  { label: "Financial score", value: "82", detail: "Strong position" },
];

const bars = [42, 54, 60, 68, 74, 86, 92];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const insights = [
  "Increase monthly investing by $1,500 to materially improve the 10-year outlook.",
  "Emergency fund coverage is healthy, but insurance protection appears light relative to assets.",
  "Cash drag looks high versus long-term goals, which suggests an allocation review may be worthwhile.",
];

export default function DashboardPage() {
  return (
    <main className="dashboard-shell">
      <div className="container">
        <div className="dashboard-hero">
          <div>
            <h1>Financial Overview</h1>
            <p>
              A premium dashboard layout with mock data so you can deploy the product shell now and connect real data
              later.
            </p>
          </div>
          <div className="cta-row">
            <a className="btn btn-secondary" href="/pricing">
              Pricing
            </a>
            <a className="btn btn-primary" href="mailto:hello@example.com">
              Request Demo
            </a>
          </div>
        </div>

        <div className="kpi-grid">
          {kpis.map((kpi) => (
            <div className="card" key={kpi.label}>
              <div className="stat-label">{kpi.label}</div>
              <div className="stat-value">{kpi.value}</div>
              <div className="stat-change">{kpi.detail}</div>
            </div>
          ))}
        </div>

        <div className="chart-layout">
          <div className="card">
            <div className="section-header" style={{ marginBottom: 12 }}>
              <h2 style={{ fontSize: "1.5rem" }}>Net worth trend</h2>
              <p>Mock projection to demonstrate the product experience before real integrations are added.</p>
            </div>
            <div className="chart">
              {bars.map((bar, index) => (
                <div className="bar-wrap" key={months[index]}>
                  <div className="bar" style={{ height: `${bar * 2}px` }} />
                  <div className="axis-label">{months[index]}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="section-header" style={{ marginBottom: 12 }}>
              <h2 style={{ fontSize: "1.5rem" }}>Top insights</h2>
              <p>Examples of the recommendation layer this product is designed to support.</p>
            </div>
            <div className="insight-list">
              {insights.map((insight, index) => (
                <div className="insight-item" key={insight}>
                  <div className="badge" style={{ marginBottom: 10 }}>Priority {index + 1}</div>
                  <div>{insight}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="info-grid">
          <div className="card">
            <h3>Scenario planning</h3>
            <p>
              If monthly investing increases by $1,500 and the portfolio compounds at 7% annually, projected wealth in
              10 years increases materially. This block is ready to be connected to real projection logic.
            </p>
          </div>
          <div className="card">
            <h3>Next build phase</h3>
            <p>
              Add Supabase auth, file uploads, AI extraction, recommendation rules, and persistent financial profiles.
              The UI shell is already structured for that next step.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
