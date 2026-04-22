import skepticImg from '../assets/skeptic.png'
import { APP_VERSION } from '../version.js'
import delegatorImg from '../assets/delegator.png'
import experimenterImg from '../assets/experimenter.png'
import amplifierImg from '../assets/amplifier.png'
import architectImg from '../assets/architect.png'

const ARCHETYPE_PREVIEWS = [
  { id: 'skeptic',       label: 'The Skeptic',      quote: '"I\'d rather do it myself."',               img: skepticImg },
  { id: 'delegator',    label: 'The Delegator',    quote: '"Why do it myself if AI can?"',             img: delegatorImg },
  { id: 'experimenter', label: 'The Experimenter', quote: '"Have you tried this new tool?"',           img: experimenterImg },
  { id: 'amplifier',    label: 'The Amplifier',    quote: '"AI helps me be more of who I am."',       img: amplifierImg },
  { id: 'architect',    label: 'The Architect',    quote: '"I don\'t just use AI. I build with it."', img: architectImg },
]

export default function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#6B1020' }}>

      {/* ── Nav ─────────────────────────────────────────────────────────────── */}
      <header
        className="px-6 sm:px-10 py-4 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}
      >
        <span style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: 'italic', fontWeight: 400, fontSize: 16, color: '#ffffff' }}>
          Archetypes.ai
        </span>
        <div className="hidden sm:flex items-center gap-3">
          <span className="text-xs tracking-wide" style={{ color: 'rgba(255,255,255,0.45)' }}>~10 min · Free</span>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: 'sans-serif' }}>{APP_VERSION}</span>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <div className="px-6 sm:px-10 py-20 flex flex-col items-center text-center">

        {/* Primary heading */}
        <h1
          className="mx-auto"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 'clamp(56px, 16vw, 220px)',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1.05,
            letterSpacing: '-0.015em',
            color: '#ffffff',
            marginBottom: 28,
            width: '100%',
          }}
        >
          Archetypes.ai
        </h1>

        <p
          className="max-w-2xl mx-auto"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 26,
            fontStyle: 'italic',
            lineHeight: 1.3,
            color: '#ffffff',
            marginBottom: 28,
          }}
        >
          <span style={{ fontWeight: 400 }}>Discover your </span>
          <span style={{ fontWeight: 700 }}>AI personality.</span>
        </p>

        {/* Divider between tagline and intro */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', maxWidth: 480, width: '100%', marginBottom: 28 }} />

        {/* Intro text — no box */}
        <p
          className="max-w-[480px] mx-auto text-sm sm:text-base leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.82)', marginBottom: 36 }}
        >
          AI is changing how people work, learn, and think. This assessment helps you understand where you stand and where you could go. Fifteen questions. One personal profile. No right answers.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <button onClick={onStart} className="btn-landing">
            Start Assessment
            <svg className="ml-2.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <p className="text-xs tracking-wide" style={{ color: 'rgba(255,255,255,0.45)' }}>No account required · Results stay on your device</p>
        </div>
      </div>

      {/* ── Five Archetypes ──────────────────────────────────────────────────── */}
      <section className="px-6 sm:px-10 py-16">
        <div className="max-w-[960px] mx-auto">
          <div className="text-center mb-12">
            <div className="section-label justify-center mb-3">What you'll discover</div>
            <h2 className="font-bold mb-3" style={{ fontSize: '1.5rem', color: '#ffffff' }}>Five archetypes. One personal profile.</h2>
            <p className="max-w-lg mx-auto text-sm sm:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Your answers reveal not just which archetype you are, but the gap between how you think about AI and how you actually use it.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
            {ARCHETYPE_PREVIEWS.map(a => (
              <div
                key={a.id}
                className="flex flex-col items-center text-center gap-4 p-6"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 4 }}
              >
                <div style={{ background: '#F5EFE6', borderRadius: 12, width: 80, height: 80, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <img src={a.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: '#ffffff' }}>{a.label}</p>
                  <p className="text-xs font-medium leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{a.quote}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom strip */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10" style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-start">
              {['5 archetypes', '15 questions', 'Domain-adapted results', 'Belief vs. behavior gap'].map(item => (
                <span key={item} className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.4)', display: 'inline-block' }} />
                  {item}
                </span>
              ))}
            </div>
            <button
              onClick={onStart}
              className="inline-flex items-center gap-2"
              style={{
                border: '1px solid rgba(255,255,255,0.45)',
                background: 'transparent',
                color: 'rgba(255,255,255,0.85)',
                borderRadius: 999,
                padding: '9px 24px',
                fontSize: 12,
                fontWeight: 400,
                cursor: 'pointer',
              }}
            >
              Start assessment
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
