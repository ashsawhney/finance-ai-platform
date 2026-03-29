import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      
      <Navbar />

      {/* HERO */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-5xl font-semibold tracking-tight">
            Your private AI financial copilot
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Upload your financial documents, structure your financial picture,
            and get clear, practical recommendations to secure your future.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/dashboard"
              className="rounded-xl bg-white px-6 py-3 font-medium text-slate-900"
            >
              Get Started
            </a>

            <a
              href="#features"
              className="rounded-xl border border-white/20 px-6 py-3"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-6 py-20 border-t border-white/10">
        <div className="mx-auto max-w-5xl grid md:grid-cols-3 gap-6">

          <div className="rounded-xl border border-white/10 p-6">
            <h3 className="text-lg font-semibold mb-2">Unify your finances</h3>
            <p className="text-slate-400 text-sm">
              Bring assets, liabilities, income, and investments into one view.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 p-6">
            <h3 className="text-lg font-semibold mb-2">Clear insights</h3>
            <p className="text-slate-400 text-sm">
              Understand your net worth, savings rate, and financial health instantly.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 p-6">
            <h3 className="text-lg font-semibold mb-2">Actionable advice</h3>
            <p className="text-slate-400 text-sm">
              Get practical recommendations to improve your financial future.
            </p>
          </div>

        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-6 py-20 border-t border-white/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold mb-8">Simple Pricing</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold mb-2">Personal</h3>
              <p className="text-slate-400 text-sm mb-4">
                Private use for individuals
              </p>
              <p className="text-2xl font-bold">Free</p>
            </div>

            <div className="rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <p className="text-slate-400 text-sm mb-4">
                Advanced planning & AI insights
              </p>
              <p className="text-2xl font-bold">$10/mo</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
