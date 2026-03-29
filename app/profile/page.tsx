import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProfilePage() {
  return (
    <main>
      <Navbar />
      <div className="container">
        <section className="page-header">
          <h1 className="page-title">Financial Profile</h1>
          <p className="muted">
            Manually capture your core financial data in a simple personal setup.
          </p>
        </section>

        <div className="card">
          <div className="form-grid">
            <div>
              <label className="label">Assets</label>
              <input className="input" placeholder="e.g. 250000" />
            </div>
            <div>
              <label className="label">Liabilities</label>
              <input className="input" placeholder="e.g. 130000" />
            </div>
            <div>
              <label className="label">Monthly Income</label>
              <input className="input" placeholder="e.g. 18000" />
            </div>
            <div>
              <label className="label">Monthly Expenses</label>
              <input className="input" placeholder="e.g. 12000" />
            </div>
            <div>
              <label className="label">Investments</label>
              <input className="input" placeholder="e.g. 50000" />
            </div>
            <div>
              <label className="label">Emergency Fund</label>
              <input className="input" placeholder="e.g. 30000" />
            </div>
          </div>

          <div style={{ marginTop: 18 }}>
            <label className="label">Notes</label>
            <textarea className="textarea" placeholder="Add goals, concerns, or planning notes here." />
          </div>

          <div className="actions">
            <a className="button primary" href="/dashboard">Save and View Dashboard</a>
            <a className="button secondary" href="/upload">Go to Upload</a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
