import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, Tooltip,
} from 'recharts'
import ArchetypeIllustration from '../components/ArchetypeIllustration.jsx'
import { ARCHETYPES } from '../data/archetypes.js'

// ── Custom radar tooltip ──────────────────────────────────────────────────────
function RadarTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  const { subject } = payload[0].payload
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 shadow-xl text-xs">
      <p className="font-semibold text-white mb-2">{subject}</p>
      {payload.map(p => (
        <p key={p.name} style={{ color: p.color }} className="font-medium">
          {p.name}: {p.value}%
        </p>
      ))}
    </div>
  )
}

// ── Custom legend ─────────────────────────────────────────────────────────────
function RadarLegend() {
  return (
    <div className="flex items-center justify-center gap-6 mt-4">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-accent-500" />
        <span className="text-xs text-slate-500 font-medium">How you think</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-emerald-500" />
        <span className="text-xs text-slate-500 font-medium">How you act</span>
      </div>
    </div>
  )
}

// ── Archetype distribution bar ────────────────────────────────────────────────
function DistributionBar({ label, counts, total, colorMap }) {
  const order = ['amplifier', 'experimenter', 'skeptic', 'delegator']
  return (
    <div>
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{label}</p>
      <div className="space-y-2.5">
        {order.map(key => {
          const count = counts[key] || 0
          const pct = total > 0 ? Math.round((count / total) * 100) : 0
          const arch = ARCHETYPES[key]
          return (
            <div key={key} className="flex items-center gap-3">
              <span className="text-xs text-slate-500 w-24 flex-shrink-0">{arch.name.replace('The ', '')}</span>
              <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${pct}%`, backgroundColor: colorMap[key] }}
                />
              </div>
              <span className="text-xs font-semibold text-slate-500 w-8 text-right">{pct}%</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ARCHETYPE_COLORS = {
  amplifier:    '#10b981',
  experimenter: '#f59e0b',
  skeptic:      '#64748b',
  delegator:    '#0ea5e9',
}

// ── Animated section wrapper ──────────────────────────────────────────────────
function RevealSection({ children, delay = 0, className = '' }) {
  return (
    <div
      className={`opacity-anim-start animate-fade-up ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// ── Main ResultsPage ──────────────────────────────────────────────────────────
export default function ResultsPage({ results, selectedDomains, onRestart }) {
  const {
    archetype,
    beliefCounts,
    behaviorCounts,
    archetypeCounts,
    archetypeRadarData,
    gapCallout,
    totalAnswered,
    beliefArchetype,
    behaviorArchetype,
    beliefArchetypeData,
    behaviorArchetypeData,
  } = results

  // Pick domain-adapted next steps
  const nextSteps = (() => {
    for (const domain of selectedDomains) {
      if (archetype.nextSteps[domain]) return archetype.nextSteps[domain]
    }
    return archetype.nextSteps.default
  })()

  const perceptionTotal = Object.values(beliefCounts).reduce((a, b) => a + b, 0)
  const behaviorTotal   = Object.values(behaviorCounts).reduce((a, b) => a + b, 0)

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header className="bg-white border-b border-slate-200 px-6 py-5 sticky top-0 z-20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-accent-600 rounded-lg flex items-center justify-center shadow-sm shadow-accent-500/20">
              <span className="text-white font-black text-xs">AQ</span>
            </div>
            <span className="font-semibold text-slate-800 text-sm">Your Results</span>
          </div>
          <button onClick={onRestart} className="btn-secondary text-sm py-2 px-4">
            Retake
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6">

        {/* ── Gap Callout ─────────────────────────────────────────────────── */}
        <RevealSection delay={80}>
          <div className="relative bg-[#08080e] rounded-2xl overflow-hidden">
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-600/10 rounded-full blur-[80px]" />
            </div>

            <div className="relative z-10 px-8 sm:px-12 py-12 sm:py-16 text-center">
              <p className="text-xs font-semibold text-accent-400 uppercase tracking-widest mb-8">
                Your AQ Profile
              </p>

              {gapCallout.hasGap ? (
                <>
                  <p className="text-3xl sm:text-5xl font-black text-white leading-tight mb-2 tracking-tight">
                    You think like{' '}
                    <span className="text-accent-400">{gapCallout.beliefLabel}.</span>
                  </p>
                  <p className="text-3xl sm:text-5xl font-black leading-tight tracking-tight mb-10"
                     style={{ color: ARCHETYPE_COLORS[behaviorArchetype] || '#94a3b8' }}>
                    But you act like {gapCallout.behaviorLabel}.
                  </p>
                </>
              ) : (
                <p className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-10">
                  Consistent{' '}
                  <span className="text-accent-400">{gapCallout.beliefLabel}.</span>
                </p>
              )}

              <p className="text-white/45 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                {gapCallout.subtext}
              </p>

              {/* Archetype pill row */}
              {gapCallout.hasGap && (
                <div className="flex items-center justify-center gap-3 mt-10 flex-wrap">
                  <div className="flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-2">
                    <div className="w-2 h-2 rounded-full bg-accent-400" />
                    <span className="text-xs text-white/60 font-medium">Belief: {gapCallout.beliefLabel}</span>
                  </div>
                  <svg className="w-4 h-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ARCHETYPE_COLORS[behaviorArchetype] }} />
                    <span className="text-xs text-white/60 font-medium">Behavior: {gapCallout.behaviorLabel}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </RevealSection>

        {/* ── Radar Chart ─────────────────────────────────────────────────── */}
        <RevealSection delay={220}>
          <div className="card p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-1">Belief vs. Behavior</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Each axis represents one archetype. The gap between the two shapes is your key insight.
              </p>
            </div>
            <div className="h-72 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={archetypeRadarData} margin={{ top: 16, right: 24, bottom: 8, left: 24 }}>
                  <PolarGrid stroke="#e2e8f0" strokeDasharray="0" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fontSize: 12, fill: '#475569', fontWeight: 600 }}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 100]}
                    tick={{ fontSize: 9, fill: '#94a3b8' }}
                    tickCount={4}
                    axisLine={false}
                  />
                  <Radar
                    name="How you think"
                    dataKey="belief"
                    stroke="#6366f1"
                    fill="#6366f1"
                    fillOpacity={0.18}
                    strokeWidth={2}
                    dot={{ fill: '#6366f1', r: 4, strokeWidth: 0 }}
                  />
                  <Radar
                    name="How you act"
                    dataKey="behavior"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.15}
                    strokeWidth={2}
                    dot={{ fill: '#10b981', r: 4, strokeWidth: 0 }}
                  />
                  <Tooltip content={<RadarTooltip />} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <RadarLegend />
          </div>
        </RevealSection>

        {/* ── Primary Archetype Card ───────────────────────────────────────── */}
        <RevealSection delay={360}>
          <div className="card overflow-hidden">
            {/* Archetype header */}
            <div className={`${archetype.bgClass} border-b ${archetype.borderClass} px-6 sm:px-8 py-8`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex-shrink-0">
                  <ArchetypeIllustration archetypeId={archetype.id} size={96} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1.5">Your Primary Archetype</p>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-1">{archetype.name}</h2>
                  <p className={`text-base font-semibold ${archetype.colorClass} mb-4`}>{archetype.tagline}</p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{archetype.intro}</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="px-6 sm:px-8 py-6 bg-white border-b border-slate-100">
              <blockquote className="text-lg sm:text-xl font-medium text-slate-700 italic pl-5 border-l-4 border-accent-400 leading-relaxed">
                {archetype.quote}
              </blockquote>
            </div>

            {/* Strengths + Blind Spot */}
            <div className="px-6 sm:px-8 py-8 grid sm:grid-cols-2 gap-8 bg-white">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">Strengths</h3>
                <ul className="space-y-3.5">
                  {archetype.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">Blind Spot</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{archetype.blindSpot}</p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="px-6 sm:px-8 py-8 bg-slate-50 border-t border-slate-100">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1.5">
                Next Steps
              </h3>
              {selectedDomains.length > 0 && (
                <p className="text-xs text-slate-400 mb-5">
                  Tailored to your selected domains: {selectedDomains.join(', ')}
                </p>
              )}
              <ol className="space-y-4">
                {nextSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-slate-700 leading-relaxed">
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full ${archetype.accentClass} text-white flex items-center justify-center text-xs font-bold`}>
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </RevealSection>

        {/* ── Belief + Behavior Breakdown ──────────────────────────────────── */}
        <RevealSection delay={480}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card p-6">
              <DistributionBar
                label="How you think (belief)"
                counts={beliefCounts}
                total={perceptionTotal}
                colorMap={ARCHETYPE_COLORS}
              />
              <p className="text-xs text-slate-400 mt-4 pt-4 border-t border-slate-100 leading-relaxed">
                From the 5 philosophical questions — reveals your mindset and attitude toward AI.
              </p>
            </div>
            <div className="card p-6">
              <DistributionBar
                label="How you act (behavior)"
                counts={behaviorCounts}
                total={behaviorTotal}
                colorMap={ARCHETYPE_COLORS}
              />
              <p className="text-xs text-slate-400 mt-4 pt-4 border-t border-slate-100 leading-relaxed">
                From the 10 scenario questions — reveals what you actually do with AI in practice.
              </p>
            </div>
          </div>
        </RevealSection>

        {/* ── All Four Archetypes ──────────────────────────────────────────── */}
        <RevealSection delay={580}>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4 px-1">The Four Archetypes</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {Object.values(ARCHETYPES).map(a => {
                const isYou = a.id === archetype.id
                return (
                  <div
                    key={a.id}
                    className={`rounded-2xl p-5 flex items-start gap-4 border transition-all duration-200
                      ${isYou
                        ? `${a.bgClass} border-2 ${a.borderClass} shadow-sm`
                        : 'bg-white border-slate-200'
                      }`}
                  >
                    <div className="flex-shrink-0">
                      <ArchetypeIllustration archetypeId={a.id} size={52} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-bold text-slate-800 text-sm">{a.name}</span>
                        {isYou && (
                          <span className="px-2 py-0.5 bg-accent-100 text-accent-700 text-xs font-bold rounded-full">You</span>
                        )}
                        {a.id === beliefArchetype && a.id !== archetype.id && (
                          <span className="px-2 py-0.5 bg-accent-50 text-accent-600 text-xs font-medium rounded-full border border-accent-200">Belief</span>
                        )}
                        {a.id === behaviorArchetype && a.id !== archetype.id && (
                          <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-xs font-medium rounded-full border border-emerald-200">Behavior</span>
                        )}
                      </div>
                      <p className={`text-xs font-semibold ${a.colorClass} mb-1.5`}>{a.tagline}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{a.strengths[0]}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </RevealSection>

        {/* ── Restart CTA ─────────────────────────────────────────────────── */}
        <RevealSection delay={660}>
          <div className="text-center py-8">
            <p className="text-sm text-slate-500 mb-4">Retake with a different context or domain selection.</p>
            <button onClick={onRestart} className="btn-secondary">
              Start Over
            </button>
          </div>
        </RevealSection>

      </div>
    </div>
  )
}
