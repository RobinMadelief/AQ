import ArchetypeIllustration from '../components/ArchetypeIllustration.jsx'

const ARCHETYPE_PREVIEWS = [
  { id: 'skeptic',      label: 'The Skeptic',      quote: '"I\'d rather do it myself."',                color: 'text-slate-400' },
  { id: 'delegator',   label: 'The Delegator',    quote: '"Why do it myself if AI can?"',              color: 'text-sky-400' },
  { id: 'experimenter',label: 'The Experimenter',  quote: '"Have you tried this new tool?"',            color: 'text-amber-400' },
  { id: 'amplifier',   label: 'The Amplifier',    quote: '"AI helps me be more of who I am."',         color: 'text-emerald-400' },
]

export default function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col">

      {/* ── Dark Hero ─────────────────────────────────────────────────────── */}
      <div className="relative bg-[#08080e] overflow-hidden flex-1 flex flex-col">

        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-accent-600/8 rounded-full blur-[120px]" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-800/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-900/10 rounded-full blur-[80px]" />
        </div>

        {/* Subtle grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Nav */}
        <header className="relative z-10 px-6 sm:px-10 py-6 flex items-center justify-between max-w-6xl mx-auto w-full">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center shadow-lg shadow-accent-500/30">
              <span className="text-white font-black text-xs tracking-tight">AQ</span>
            </div>
            <span className="font-semibold text-white/80 text-sm tracking-tight">AI Quotient</span>
          </div>
          <span className="text-xs text-white/30 hidden sm:block tracking-wide">~10 min · Free</span>
        </header>

        {/* Hero content */}
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 sm:px-10 py-16 text-center max-w-4xl mx-auto w-full">

          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-500/12 border border-accent-500/20 text-accent-300 text-xs font-semibold rounded-full uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
              Assessment
            </span>
          </div>

          {/* Wordmark */}
          <div className="mb-3">
            <h1 className="text-[88px] sm:text-[120px] font-black text-white leading-none tracking-tighter">
              AQ<span className="text-accent-400">.</span>
            </h1>
          </div>
          <p className="text-lg sm:text-xl font-light text-white/40 tracking-[0.25em] uppercase mb-10">
            AI Quotient
          </p>

          {/* Tagline */}
          <p className="max-w-xl mx-auto text-base sm:text-lg text-white/50 leading-relaxed mb-4">
            IQ measures how you think.{' '}
            EQ measures how you connect.
          </p>
          <p className="max-w-xl mx-auto text-base sm:text-lg font-semibold text-white leading-relaxed mb-14">
            AQ measures how you grow with AI.
          </p>

          {/* Framing card */}
          <div className="max-w-2xl w-full mx-auto mb-14 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 sm:p-10 text-left backdrop-blur-sm">
            <p className="text-white/60 leading-relaxed mb-4 text-sm sm:text-base">
              This isn't a test you pass or fail. It's a mirror that reflects your current relationship with AI — how you use it, how much you rely on it, and whether it's making you more capable or slowly replacing the thinking that makes you irreplaceable.
            </p>
            <p className="text-white/45 leading-relaxed text-sm sm:text-base">
              Fifteen scenarios. Honest answers. A profile that, if we've done our job, will feel uncomfortably accurate.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={onStart}
              className="inline-flex items-center justify-center px-10 py-4 bg-accent-500 text-white font-semibold rounded-xl text-base hover:bg-accent-400 active:bg-accent-600 transition-all duration-200 shadow-xl shadow-accent-500/30 hover:shadow-accent-400/40 focus:outline-none focus:ring-4 focus:ring-accent-400/40"
            >
              Start Assessment
              <svg className="ml-2.5 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <p className="text-xs text-white/25 tracking-wide">No account required · Results stay on your device</p>
          </div>
        </main>
      </div>

      {/* ── Light section: The Four Archetypes ────────────────────────────── */}
      <section className="bg-white border-t border-slate-100 px-6 sm:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-accent-600 uppercase tracking-widest mb-3">What you'll discover</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Four archetypes. One honest mirror.</h2>
            <p className="text-slate-500 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
              Your answers reveal not just which archetype you are, but the gap between how you think about AI and how you actually use it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {ARCHETYPE_PREVIEWS.map(a => (
              <div key={a.id} className="bg-slate-50 rounded-2xl p-6 flex flex-col items-center text-center gap-4 border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-200">
                <ArchetypeIllustration archetypeId={a.id} size={72} />
                <div>
                  <p className="font-semibold text-slate-800 text-sm mb-1">{a.label}</p>
                  <p className={`text-xs font-medium ${a.color} leading-relaxed`}>{a.quote}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom strip */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-slate-100">
            <div className="flex items-center gap-6 text-xs text-slate-400 flex-wrap justify-center sm:justify-start">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                4 archetypes
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                15 scenarios
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                Domain-adapted results
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                Belief vs. behavior gap
              </span>
            </div>
            <button
              onClick={onStart}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors"
            >
              Begin the assessment
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
