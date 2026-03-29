"use client";

import { FormEvent, useState } from "react";

export default function PricingPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);
    setStatus(response.ok ? "success" : "error");
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <main className="dashboard-shell">
      <div className="container">
        <div className="section-header">
          <h1 className="page-title">Pricing and demo request</h1>
          <p className="page-subtitle">
            This page is ready to go live as part of the product shell. The form posts to an API route and can later be
            wired to email, CRM, or a database.
          </p>
        </div>

        <div className="pricing-grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))", marginBottom: 24 }}>
          <div className="price-card">
            <div className="badge">Personal</div>
            <div className="price">$19 <small>/ month</small></div>
            <ul className="list">
              <li><span>✓</span>Private dashboard</li>
              <li><span>✓</span>Scenario planner</li>
              <li><span>✓</span>Financial recommendations</li>
              <li><span>✓</span>Personal use</li>
            </ul>
          </div>

          <div className="price-card">
            <div className="badge">Pro</div>
            <div className="price">$49 <small>/ month</small></div>
            <ul className="list">
              <li><span>✓</span>Everything in Personal</li>
              <li><span>✓</span>AI copilot</li>
              <li><span>✓</span>Advanced insights</li>
              <li><span>✓</span>Monthly reports</li>
            </ul>
          </div>
        </div>

        <div className="form-card">
          <h2 style={{ marginTop: 0 }}>Request a demo</h2>
          <p className="page-subtitle" style={{ marginBottom: 20 }}>
            Use this form to test a contact flow on your live site.
          </p>

          <form onSubmit={onSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" required placeholder="Ash Sawhney" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="ash@example.com" />
              </div>
              <div className="field">
                <label htmlFor="plan">Plan</label>
                <select id="plan" name="plan" defaultValue="Personal">
                  <option>Personal</option>
                  <option>Pro</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" placeholder="Optional" />
              </div>
            </div>

            <div className="field" style={{ marginTop: 16 }}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell us what you want this product to do for you." />
            </div>

            <div className="cta-row" style={{ marginTop: 18 }}>
              <button className="btn btn-primary" disabled={loading} type="submit">
                {loading ? "Submitting..." : "Submit request"}
              </button>
            </div>

            {status === "success" && <div className="notice success">Demo request submitted successfully.</div>}
            {status === "error" && <div className="notice error">Something went wrong. Please try again.</div>}
          </form>
        </div>
      </div>
    </main>
  );
}
