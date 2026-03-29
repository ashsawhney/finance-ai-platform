import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand">
          <span className="brand-badge" />
          <span>Finance AI Platform</span>
        </Link>

        <nav className="nav-links">
          <Link href="/#features">Features</Link>
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        <div className="cta-row">
          <Link className="btn btn-secondary" href="/pricing">
            Pricing
          </Link>
          <Link className="btn btn-primary" href="/dashboard">
            View Product
          </Link>
        </div>
      </div>
    </header>
  );
}
