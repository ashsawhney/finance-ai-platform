import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DashboardPage() {
  return (
    <main>
      <Navbar />
      <div className="container">
        <section className="page-header">
          <h1 className="page-title">Personal Dashboard</h1>
          <p className="muted">
            A simple summary view to help you think about your financial position.
          </p>
        </section>

        <section className="kpi-grid">
          <div className="card">
            <div className="kpi-label">Net Worth</div>
            <div className="kpi-value">$120,000</div>
            <div className="small-note">Assets minus liabilities</div>
          </div>
          <div className="card">
            <div className="kpi-label">Monthly Savings</div>
            <div className="kpi-value">$2,500</div>
            <div className="small-note">Income less expenses</div>
          </div>
          <div className="card">
            <div className="kpi-label">Savings Rate</div>
            <div className="kpi-value">24%</div>
            <div className="small-note">Share of income saved</div>
          </div>
          <div className="card">
            <div className="kpi-label">Debt Level</div>
            <div className="kpi-value">Low</div>
            <div className="small-note">Based on sample data</div>
          </div>
        </section>

        <section className="dashboard-grid">
          <div className="card">
            <h2>Net worth trend</h2>
            <p>Placeholder chart for a simple personal version.</p>
            <div className="chart-placeholder" aria-label="sample chart">
              <div className="bar" style={{ height: "35%" }} />
              <div className="bar" style={{ height: "48%" }} />
              <div className="bar" style={{ height: "52%" }} />
              <div className="bar" style={{ height: "67%" }} />
              <div className="bar" style={{ height: "73%" }} />
              <div className="bar" style={{ height: "84%" }} />
            </div>
          </div>

          <div className="card">
            <h2>Simple recommendations</h2>
            <ul className="list">
              <li>Maintain at least 6 months of emergency savings.</li>
              <li>Keep reviewing recurring expenses for easy reductions.</li>
              <li>Direct extra surplus toward long-term investments.</li>
              <li>Review protection gaps such as life and health cover.</li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
