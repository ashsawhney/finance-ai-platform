import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function UploadPage() {
  return (
    <main>
      <Navbar />
      <div className="container">
        <section className="page-header">
          <h1 className="page-title">Upload Documents</h1>
          <p className="muted">
            This simple version includes a placeholder upload experience for future expansion.
          </p>
        </section>

        <div className="card upload-box">
          <h2>Document upload placeholder</h2>
          <p>
            Later, this page can be connected to storage and AI extraction. For now, it acts as
            a clean product shell.
          </p>
          <div className="actions" style={{ justifyContent: "center" }}>
            <a className="button secondary" href="/profile">Go to Profile</a>
            <a className="button primary" href="/dashboard">View Dashboard</a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
