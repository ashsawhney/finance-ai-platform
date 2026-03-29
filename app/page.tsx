import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Private • Simple • Vercel-ready</div>
            <h1>Your personal finance dashboard, made simple.</h1>
            <p>
              A clean personal version of your product idea. Use it to capture your
              core financial picture, review simple insights, and get a live site up
              quickly on GitHub and Vercel.
            </p>
            <div className="actions">
              <a className="button primary" href="/dashboard">Open Dashboard</a>
              <a className="button secondary" href="/profile">Set Up Profile</a>
            </div>
          </div>

          <div className="card">
            <h3>What this version includes</h3>
            <ul className="list">
              <li>Simple landing page</li>
              <li>Personal dashboard</li>
              <li>Manual financial profile page</li>
              <li>Upload placeholder page</li>
              <li>No missing dependencies</li>
              <li>Clean deployment path to Vercel</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Why this version works</h2>
          <div className="feature-grid">
            <div className="card">
              <h3>Low friction</h3>
              <p>
                No database, no auth, and no external APIs yet. This keeps deployment
                simple and reduces the chance of errors.
              </p>
            </div>
            <div className="card">
              <h3>Personal first</h3>
              <p>
                Start with your own use case, validate what matters, then add AI,
                uploads, storage, and integrations later.
              </p>
            </div>
            <div className="card">
              <h3>Deployable now</h3>
              <p>
                Push this code to GitHub, import to Vercel, and you will have a live
                product shell immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
