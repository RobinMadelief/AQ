import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, Tooltip,
} from 'recharts'
import ArchetypeIllustration from '../components/ArchetypeIllustration.jsx'
import { ARCHETYPES } from '../data/archetypes.js'

// Custom radar tooltip
function RadarTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  const { fullDomain, score } = payload[0].payload
  return (
    <div className="bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-md text-sm">
      <p className="font-semibold text-slate-800">{fullDomain}</p>
      <p className="text-accent-600 font-bold">{score}/100</p>
    </div>
  )
}

// Archetype distribution bar
function DistributionBar({ archetypeCounts, total }) {
  const order = ['amplifier', 'experimenter', 'skeptic', 'delegator']
  const colors = {
    amplifier: 'bg-emerald-500',
    experimenter: 'bg-amber-400',
    skeptic: 'bg-slate-400',
    delegator: 'bg-sky-400',
  }
  return (
    <div className="space-y-2">
      {order.map(key => {
        const count = archetypeCounts[key] || 0
        const pct = total > 0 ? Math.round((count / total) * 100) : 0
        const arch = ARCHETYPES[key]
        return (
          <div key={key} className="flex items-center gap-3">
            <span className="text-xs text-slate-500 w-24 flex-shrink-0">{arch.name.replace('The ', '')}</span>
            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${colors[key]} transition-all duration-700`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="text-xs font-semibold text-slate-600 w-8 text-right">{pct}%</span>
          </div>
        )
      })}
    </div>
  )
}

export default function ResultsPage({ results, selectedDomains, onRestart }) {
  const { archetype, archetypeCounts, radarData, totalAnswered } = results

  // Pick domain-adapted next steps
  const nextSteps = (() => {
    for (const domain of selectedDomains) {
      if (archetype.nextSteps[domain]) return archetype.nextSteps[domain]
    }
    return archetype.nextSteps.default
  })()

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">AQ</span>
            </div>
            <span className="font-semibold text-slate-800 text-sm">Your Results</span>
          </div>
          <button onClick={onRestart} className="btn-secondary text-sm py-2 px-4">
            Retake
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">

        {/* ── Archetype Hero Card ─────────────────────────────────────────── */}
        <div className={`card overflow-hidden`}>
          <div className={`${archetype.bgClass} border-b ${archetype.borderClass} px-8 py-8`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-shrink-0">
                <ArchetypeIllustration archetypeId={archetype.id} size={100} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Your Archetype</p>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-1">{archetype.name}</h1>
                <p className={`text-base font-medium ${archetype.colorClass} mb-4`}>{archetype.tagline}</p>
                <p className="text-slate-600 leading-relaxed text-sm">{archetype.intro}</p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="px-8 py-6 bg-white border-b border-slate-100">
            <blockquote className="text-lg font-medium text-slate-700 italic pl-4 border-l-4 border-accent-400">
              {archetype.quote}
            </blockquote>
          </div>

          {/* Strengths + Blind Spot */}
          <div className="px-8 py-6 grid sm:grid-cols-2 gap-8 bg-white">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">Strengths</h3>
              <ul className="space-y-3">
                {archetype.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">Blind Spot</h3>
              <p className="text-sm text-slate-700 leading-relaxed">{archetype.blindSpot}</p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="px-8 py-6 bg-slate-50 border-t border-slate-100">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Next Steps
              {selectedDomains.length > 0 && (
                <span className="ml-2 normal-case font-normal text-slate-400">
                  — tailored to {selectedDomains[0]}
                </span>
              )}
            </h3>
            <ol className="space-y-3">
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

        {/* ── Two-column: Radar + Distribution ───────────────────────────── */}
        <div className="grid sm:grid-cols-2 gap-6">

          {/* Radar chart */}
          <div className="card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-6">Domain Profile</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis
                    dataKey="domain"
                    tick={{ fontSize: 11, fill: '#64748b', fontWeight: 500 }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    tick={{ fontSize: 9, fill: '#94a3b8' }}
                    tickCount={4}
                  />
                  <Radar
                    name="Score"
                    dataKey="score"
                    stroke="#6366f1"
                    fill="#6366f1"
                    fillOpacity={0.15}
                    strokeWidth={2}
                    dot={{ fill: '#6366f1', r: 3 }}
                  />
                  <Tooltip content={<RadarTooltip />} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-400 text-center mt-2">
              Higher scores indicate more Amplifier-aligned AI use in that domain
            </p>
          </div>

          {/* Answer distribution */}
          <div className="card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-6">Answer Pattern</h3>
            <DistributionBar archetypeCounts={archetypeCounts} total={totalAnswered} />
            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="text-xs text-slate-500 leading-relaxed">
                Your answers span multiple archetypes — that's normal. The primary archetype reflects your dominant pattern, not a box you're locked in.
              </p>
            </div>
            {/* Archetype legend */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              {Object.values(ARCHETYPES).map(a => (
                <div key={a.id} className="flex items-center gap-2">
                  <ArchetypeIllustration archetypeId={a.id} size={28} />
                  <span className="text-xs text-slate-600 font-medium">{a.name.replace('The ', '')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── All archetype summary cards ─────────────────────────────────── */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">The Four Archetypes</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.values(ARCHETYPES).map(a => (
              <div
                key={a.id}
                className={`card p-5 flex items-start gap-4 ${a.id === archetype.id ? `${a.bgClass} border-2 ${a.borderClass}` : ''}`}
              >
                <ArchetypeIllustration archetypeId={a.id} size={48} />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-slate-800 text-sm">{a.name}</span>
                    {a.id === archetype.id && (
                      <span className="px-2 py-0.5 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full">You</span>
                    )}
                  </div>
                  <p className={`text-xs font-medium ${a.colorClass} mb-1.5`}>{a.tagline}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{a.strengths[0]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restart CTA */}
        <div className="text-center py-6">
          <p className="text-sm text-slate-500 mb-4">Retake the assessment with a different context or domains.</p>
          <button onClick={onRestart} className="btn-secondary">
            Start Over
          </button>
        </div>
      </div>
    </div>
  )
}
