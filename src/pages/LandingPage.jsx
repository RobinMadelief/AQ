export default function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <header className="px-6 py-5 flex items-center justify-between max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs tracking-tight">AQ</span>
          </div>
          <span className="font-semibold text-slate-800 text-sm tracking-tight">AI Quotient</span>
        </div>
        <span className="text-xs text-slate-400 hidden sm:block">~10 minutes · Free</span>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center max-w-3xl mx-auto w-full">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-6">
            Assessment
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
            AQ
            <span className="text-accent-600">.</span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-slate-600 leading-relaxed mb-3">
            AI Quotient
          </p>
          <p className="text-base sm:text-lg text-slate-500 font-light leading-relaxed max-w-xl mx-auto">
            IQ measures how you think. EQ measures how you connect.{' '}
            <span className="text-slate-700 font-medium">AQ measures how you grow with AI.</span>
          </p>
        </div>

        <div className="max-w-2xl w-full mb-12">
          <div className="card p-8 text-left">
            <p className="text-slate-600 leading-relaxed mb-4">
              This isn't a test you pass or fail. It's a mirror that reflects your current relationship with AI — how you use it, how much you rely on it, and whether it's making you more capable or slowly replacing the thinking that makes you irreplaceable.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Fifteen scenarios. Honest answers. A profile that, if we've done our job, will feel uncomfortably accurate.
            </p>
          </div>
        </div>

        <button onClick={onStart} className="btn-primary text-lg px-10 py-4">
          Start Assessment
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        <p className="mt-6 text-xs text-slate-400">No account required · Results stay on your device</p>
      </main>

      {/* Footer strip */}
      <footer className="px-6 py-8 border-t border-slate-100">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <span>4 archetypes</span>
            <span>·</span>
            <span>15 scenarios</span>
            <span>·</span>
            <span>Domain-adapted results</span>
          </div>
          <p className="text-xs text-slate-400">Built to provoke honest reflection, not reward AI adoption.</p>
        </div>
      </footer>
    </div>
  )
}
