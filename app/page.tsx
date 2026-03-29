import Link from "next/link";

const features = [
  {
    title: "Unify your finances",
    description:
      "Bring assets, liabilities, income, expenses, investments, and financial documents into one private view.",
  },
  {
    title: "See what matters quickly",
    description:
      "Track net worth, savings rate, debt exposure, and financial health with an executive-style dashboard.",
  },
  {
    title: "Get practical recommendations",
    description:
      "Translate your financial position into clear next steps you can understand and act on.",
  },
];

const steps = [
  "Upload your documents or enter your numbers manually.",
  "Structure your profile into a clear financial picture.",
  "Calculate metrics such as net worth, savings rate, and debt ratio.",
  "Turn analysis into focused recommendations and forward-looking scenarios.",
];

const pricing = [
  {
    name: "Personal",
    price: "$19",
    suffix: "/month",
    items: ["Dashboard", "Scenario planning", "Recommendation engine", "Private personal use"],
  },
  {
    name: "Pro",
    price: "$49",
    suffix: "/month",
    items: ["Everything in Personal", "AI copilot", "Monthly summaries", "Advanced projections"],
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Private by design • Vercel-ready • AI-powered</div>
            <h1>Your private AI financial copilot.</h1>
            <p className="lead">
              Upload your financial documents, structure your financial picture, and get clear, practical
              recommendations to help secure your future.
            </p>
            <div className="cta-row" style={{ marginTop: 28 }}>
              <Link className="btn btn-primary" href="/dashboard">
                View Product
              </Link>
              <Link className="btn btn-secondary" href="/#pricing">
                See Pricing
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <div className="metric-grid">
              <div className="stat-card">
                <div className="stat-label">Net worth</div>
                <div className="stat-value">$1.24M</div>
                <div className="stat-change">+6.4% this quarter</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Savings rate</div>
                <div className="stat-value">28%</div>
                <div className="stat-change">Healthy trajectory</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Debt ratio</div>
                <div className="stat-value">14%</div>
                <div className="stat-change">Low risk profile</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Projection</div>
                <div className="stat-value">$2.1M</div>
                <div className="stat-change">10-year outlook</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <div className="section-header">
            <h2>Built for clarity, not complexity.</h2>
            <p>
              This product starter is designed to feel premium from day one, while giving you a clean base to wire in
              real financial data, AI extraction, recommendations, and scenario modeling.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <div className="card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How it works</h2>
            <p>
              A simple flow that turns fragmented financial information into a structured, useful, and future-focused
              personal operating system.
            </p>
          </div>
          <div className="steps">
            {steps.map((step, index) => (
              <div className="card" key={step}>
                <div className="step-number">{index + 1}</div>
                <h3>Step {index + 1}</h3>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="container">
          <div className="section-header">
            <h2>Simple pricing structure</h2>
            <p>
              Start as a private personal product today, then extend it later into a SaaS-ready financial planning
              application if you choose.
            </p>
          </div>
          <div className="pricing-grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            {pricing.map((plan) => (
              <div className="price-card" key={plan.name}>
                <div className="badge">{plan.name}</div>
                <div className="price">
                  {plan.price} <small>{plan.suffix}</small>
                </div>
                <ul className="list">
                  {plan.items.map((item) => (
                    <li key={item}>
                      <span>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-banner">
          <div className="section-header" style={{ marginBottom: 18 }}>
            <h2>Ready to make it live on GitHub and Vercel?</h2>
            <p>
              This starter gives you a deployable product shell now, so you can launch the experience quickly and then
              layer in real data, auth, AI, and recommendations next.
            </p>
          </div>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/dashboard">
              Open Demo Dashboard
            </Link>
            <Link className="btn btn-secondary" href="/pricing">
              Review Plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
