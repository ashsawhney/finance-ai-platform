export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="/" className="brand">Finance AI Personal</a>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/upload">Upload</a>
          <a href="/profile">Profile</a>
        </nav>
      </div>
    </header>
  );
}
