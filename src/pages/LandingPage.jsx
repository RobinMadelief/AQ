import ArchetypeIllustration from '../components/ArchetypeIllustration.jsx'

const ARCHETYPE_PREVIEWS = [
  { id: 'skeptic',      label: 'The Skeptic',      quote: '"I\'d rather do it myself."' },
  { id: 'delegator',   label: 'The Delegator',    quote: '"Why do it myself if AI can?"' },
  { id: 'experimenter',label: 'The Experimenter',  quote: '"Have you tried this new tool?"' },
  { id: 'amplifier',   label: 'The Amplifier',    quote: '"AI helps me be more of who I am."' },
]

export default function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#fafaf8' }}>

      {/* ── Nav ────────────────────────────────────────────────────────────── */}
      <header className="bg-white px-6 sm:px-10 py-4 flex items-center justify-between" style={{ borderBottom: '1px solid #e8e8e4' }}>
        <div className="flex items-center gap-3">
          <span style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: 'italic', fontWeight: 400, fontSize: 18, color: '#1a3a2a' }}>Archetypes.ai</span>
        </div>
        <span className="text-xs hidden sm:block tracking-wide" style={{ color: '#888780' }}>~10 min · Free</span>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <div className="px-6 sm:px-10 py-20 flex flex-col items-center text-center" style={{ backgroundColor: '#f7f9f7', borderBottom: '1px solid #dde8e0' }}>

        {/* Wordmark */}
        <h1 className="font-black leading-none tracking-tighter mb-10" style={{ fontSize: 'clamp(48px, 10vw, 96px)', color: '#0a1a10' }}>
          Archetypes.ai
        </h1>

        {/* Tagline */}
        <h2
          className="max-w-2xl mx-auto"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 'clamp(36px, 6vw, 58px)',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1.1,
            letterSpacing: '-0.8px',
            color: '#0a1a10',
            marginBottom: 14,
          }}
        >
          Discover your AI personality.
        </h2>

        <p
          className="max-w-2xl mx-auto"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 15,
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: 1.6,
            letterSpacing: '0.04em',
            color: '#5a7a66',
            marginBottom: 28,
          }}
        >
          Know your type. Grow with AI.
        </p>

        {/* Framing card */}
        <div className="max-w-2xl w-full mx-auto mb-12 p-8 sm:p-10 text-left bg-white" style={{ border: '1px solid #e8e8e4', borderRadius: 4 }}>
          <p className="leading-relaxed text-sm sm:text-base" style={{ color: '#5f5e5a' }}>
            AI is changing how people work, learn, and think. This assessment helps you understand where you stand and where you could go. Fifteen questions. A personal profile. No right answers.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={onStart}
            className="btn-primary"
          >
            Start Assessment
            <svg className="ml-2.5 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <p className="text-xs tracking-wide" style={{ color: '#888780' }}>No account required · Results stay on your device</p>
        </div>
      </div>

      {/* ── Four Archetypes ────────────────────────────────────────────────── */}
      <section className="px-6 sm:px-10 py-16" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-label justify-center mb-3">What you'll discover</div>
            <h2 className="font-bold mb-3" style={{ fontSize: '1.5rem', color: '#1a3a2a' }}>Four archetypes. One honest mirror.</h2>
            <p className="max-w-lg mx-auto text-sm sm:text-base leading-relaxed" style={{ color: '#888780' }}>
              Your answers reveal not just which archetype you are, but the gap between how you think about AI and how you actually use it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {ARCHETYPE_PREVIEWS.map(a => (
              <div
                key={a.id}
                className="flex flex-col items-center text-center gap-4 p-6 bg-white"
                style={{ border: '1px solid #e8e8e4', borderRadius: 4 }}
              >
                <ArchetypeIllustration archetypeId={a.id} size={72} />
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: '#1a3a2a' }}>{a.label}</p>
                  <p className="text-xs font-medium leading-relaxed" style={{ color: '#888780' }}>{a.quote}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom strip */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10" style={{ borderTop: '1px solid #e8e8e4' }}>
            <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-start">
              {['4 archetypes', '15 scenarios', 'Domain-adapted results', 'Belief vs. behavior gap'].map(item => (
                <span key={item} className="flex items-center gap-1.5 text-xs" style={{ color: '#888780' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#2d9e5f', display: 'inline-block' }} />
                  {item}
                </span>
              ))}
            </div>
            <button
              onClick={onStart}
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: '#2d9e5f' }}
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
