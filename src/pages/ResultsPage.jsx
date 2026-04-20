import { useState } from 'react'
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
    <div className="px-4 py-3 text-xs" style={{ backgroundColor: '#1a3a2a', border: '1px solid #e8e8e4', borderRadius: 4 }}>
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
        <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#2d9e5f' }} />
        <span className="text-xs font-medium" style={{ color: '#888780' }}>How you think</span>
      </div>
      <div className="flex items-center gap-2">
        <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#1a3a2a' }} />
        <span className="text-xs font-medium" style={{ color: '#888780' }}>How you act</span>
      </div>
    </div>
  )
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

// ── Compact archetype card (row of 4) ────────────────────────────────────────
function ArchetypeCompactCard({ a, isYou, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center p-5 text-center cursor-pointer transition-all duration-150 w-full bg-white"
      style={isYou
        ? { borderRadius: 4, border: '1px solid #e8e8e4', borderLeft: '3px solid #2d9e5f', backgroundColor: '#f7fbf8' }
        : { borderRadius: 4, border: '1px solid #e8e8e4' }
      }
    >
      {isYou && (
        <p className="text-[9px] uppercase font-semibold mb-1" style={{ letterSpacing: '0.12em', color: '#2d9e5f' }}>
          your result
        </p>
      )}
      <ArchetypeIllustration archetypeId={a.id} size={72} />
      <h3 className="font-bold text-sm mt-3 mb-2" style={{ color: '#1a3a2a' }}>{a.name}</h3>
      <p className="text-xs italic leading-relaxed" style={{ color: '#888780' }}>{a.tagline}</p>
    </button>
  )
}

// ── Learning resources list ───────────────────────────────────────────────────
const LEARNING_RESOURCES = {
  skeptic: [
    {
      type: 'Article',
      title: 'Get started with Claude',
      author: 'Anthropic',
      why: 'The simplest way to take your first real step with AI.',
      url: 'https://support.claude.com/en/articles/8114491-get-started-with-claude',
    },
    {
      type: 'Course',
      title: 'Elements of AI',
      author: 'University of Helsinki',
      why: 'No math, no coding, no overwhelm. Just a clear introduction to what AI actually is.',
      url: 'https://elementsofai.com',
    },
    {
      type: 'Guide',
      title: 'How to create AI agents',
      author: 'Zapier',
      why: 'A plain-English introduction to what agents do and how to build one without writing any code.',
      url: 'https://zapier.com/blog/how-to-create-ai-agents',
    },
  ],
  delegator: [
    {
      type: 'Tool',
      title: 'Try vibe coding',
      author: 'Lovable',
      why: 'Describe what you want to build and watch it appear. Free to start, no coding required. This is what intentional delegation looks like.',
      url: 'https://lovable.dev',
    },
    {
      type: 'Tutorial',
      title: 'Prompt Engineering Interactive Tutorial',
      author: 'Anthropic',
      why: 'Learn to direct AI with precision instead of just accepting whatever it gives you.',
      url: 'https://github.com/anthropics/prompt-eng-interactive-tutorial',
    },
    {
      type: 'Guide',
      title: 'Learn Prompting',
      author: 'LearnPrompting.org',
      why: 'Free, open source, cited by OpenAI and Google. The practical guide to getting better results from any AI tool.',
      url: 'https://learnprompting.org',
    },
  ],
  experimenter: [
    {
      type: 'Course',
      title: 'Introduction to Agent Skills',
      author: 'Anthropic',
      why: 'Learn to build reusable agents step by step instead of jumping between tools.',
      url: 'https://anthropic.skilljar.com/introduction-to-agent-skills',
    },
    {
      type: 'Course',
      title: 'AI Agents Course',
      author: 'Hugging Face',
      why: 'Free, hands-on, community-driven. Build real agents with LlamaIndex and LangGraph.',
      url: 'https://huggingface.co/learn/agents-course',
    },
    {
      type: 'Tutorial',
      title: 'Getting started with n8n',
      author: 'n8n',
      why: 'Pick one use case and build one agent. Go deep for 30 days.',
      url: 'https://n8n.io/get-started',
    },
  ],
  amplifier: [
    {
      type: 'Guide',
      title: 'Lovable Agent Mode',
      author: 'Lovable',
      why: 'Build full apps autonomously. The tool that turns your vision into a working product with minimal hand-holding.',
      url: 'https://docs.lovable.dev/features/agent-mode',
    },
    {
      type: 'Guide',
      title: 'Building Effective Agents',
      author: 'Anthropic',
      why: "Written by Anthropic's own engineers. The real thing for people ready to build seriously.",
      url: 'https://www.anthropic.com/research/building-effective-agents',
    },
    {
      type: 'Course',
      title: 'MCP Course',
      author: 'Hugging Face',
      why: 'Free, cutting edge, and genuinely advanced. Build a production-ready application with Anthropic, Slack, and GitHub integration.',
      url: 'https://huggingface.co/mcp-course',
    },
  ],
}

// ── Your Time, Your Way section ──────────────────────────────────────────────
const TIME_DATA = {
  skeptic: {
    humanMoment: "Imagine finishing your most dreaded weekly task in half the time, with your own thinking still clearly at the center of it.",
    defaultYearly: 50,
    defaultWeekly: 1,
  },
  delegator: {
    humanMoment: "Imagine getting the same output you get today, but with your fingerprint back on every piece of it.",
    defaultYearly: 60,
    defaultWeekly: 3,
  },
  experimenter: {
    humanMoment: "Imagine one tool that you know so deeply it feels like a genuine extension of how your mind works.",
    defaultYearly: 80,
    defaultWeekly: 4,
  },
  amplifier: {
    humanMoment: "Imagine what you could build this year that simply was not possible last year.",
    defaultYearly: 200,
    defaultWeekly: 7,
  },
}

function YourTimeSection({ archetypeId }) {
  const data = TIME_DATA[archetypeId]
  const [weeklyHours, setWeeklyHours] = useState(data.defaultWeekly)
  const [yearlyHours, setYearlyHours] = useState(data.defaultYearly)

  function handleChange(raw) {
    const val = Math.max(0, Number(raw) || 0)
    setWeeklyHours(val)
    setYearlyHours(Math.min(400, Math.round((val * 46 * 0.054) / 10) * 10))
  }

  return (
    <div className="py-8">
      <div className="bg-white px-6 sm:px-8 py-8" style={{ borderRadius: 4, border: '1px solid #e8e8e4' }}>
        <div className="section-label mb-5">Your time, your way</div>
        <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: '#5f5e5a' }}>
          Research shows AI saves the average knowledge worker around an hour a day. But the people who feel that most are the ones who use it on their own terms.
        </p>
        <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: '#5f5e5a' }}>
          {data.humanMoment}
        </p>
        <p className="text-sm sm:text-base leading-relaxed mb-5" style={{ color: '#1a3a2a' }}>
          Most people in your position reclaim around{' '}
          <span className="font-semibold">{yearlyHours} hours</span> a year. What would you do with yours?
        </p>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-sm" style={{ color: '#5f5e5a' }}>Adjust based on your situation:</span>
          <input
            type="number"
            min={0}
            value={weeklyHours}
            onChange={e => handleChange(e.target.value)}
            className="w-16 text-center text-sm font-medium"
            style={{ border: '1px solid #e8e8e4', borderRadius: 4, padding: '4px 8px', color: '#1a3a2a', outline: 'none' }}
          />
          <span className="text-sm" style={{ color: '#5f5e5a' }}>hours per week using AI</span>
        </div>
        <p className="text-xs" style={{ color: '#888780' }}>Based on Federal Reserve and Adecco research, 2024.</p>
      </div>
    </div>
  )
}

// ── Full expanded archetype card for the explore section ──────────────────────
function ArchetypeExploreCard({ a, isYou, selectedDomains }) {
  const nextSteps = (() => {
    if (isYou && selectedDomains?.length) {
      for (const domain of selectedDomains) {
        if (a.nextSteps[domain]) return a.nextSteps[domain]
      }
    }
    return a.nextSteps.default
  })()

  const resources = LEARNING_RESOURCES[a.id] || []

  return (
    <div
      className="bg-white overflow-hidden mt-4"
      style={isYou
        ? { borderRadius: 4, border: '1px solid #e8e8e4', borderLeft: '3px solid #2d9e5f' }
        : { borderRadius: 4, border: '1px solid #e8e8e4' }
      }
    >
      {/* Header */}
      <div className="px-6 sm:px-8 py-8 bg-white" style={{ borderBottom: '1px solid #e8e8e4' }}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-shrink-0">
            <ArchetypeIllustration archetypeId={a.id} size={96} />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: '#888780' }}>
              {isYou ? 'Your Archetype' : 'Archetype'}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1" style={{ color: '#0a1a10' }}>{a.name}</h2>
            <p className="text-base font-medium italic mb-4" style={{ color: '#5a7a66' }}>{a.tagline}</p>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#5f5e5a' }}>{a.intro}</p>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="px-6 sm:px-8 py-6" style={{ borderBottom: '1px solid #e8e8e4' }}>
        <blockquote
          className="text-lg sm:text-xl font-medium italic pl-5 leading-relaxed"
          style={{ color: '#5f5e5a', borderLeft: '3px solid #2d9e5f' }}
        >
          {a.quote}
        </blockquote>
      </div>

      {/* Strengths + Blind Spot */}
      <div className="px-6 sm:px-8 py-8 grid sm:grid-cols-2 gap-8" style={{ borderBottom: '1px solid #e8e8e4' }}>
        <div>
          <div className="section-label mb-5">Strengths</div>
          <ul className="space-y-3.5">
            {a.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: '#5f5e5a' }}>
                <span className="flex-shrink-0 mt-1" style={{ width: 3, height: 14, backgroundColor: '#2d9e5f', display: 'block' }} />
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="section-label mb-5">Blind Spot</div>
          <p className="text-sm leading-relaxed" style={{ color: '#5f5e5a' }}>{a.blindSpot}</p>
        </div>
      </div>

      {/* Next Steps */}
      <div className="px-6 sm:px-8 py-8" style={{ borderBottom: '1px solid #e8e8e4', backgroundColor: '#fafaf8' }}>
        <div className="section-label mb-1.5">Next Steps</div>
        {isYou && selectedDomains?.length > 0 && (
          <p className="text-xs mb-5" style={{ color: '#888780' }}>Tailored to your selected domains: {selectedDomains.join(', ')}</p>
        )}
        {(!isYou || !selectedDomains?.length) && <div className="mb-5" />}
        <ol className="space-y-4">
          {nextSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-4 text-sm leading-relaxed" style={{ color: '#5f5e5a' }}>
              <span
                className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-xs font-bold text-white"
                style={{ borderRadius: 4, backgroundColor: '#2d9e5f' }}
              >
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      {/* Learning Resources */}
      {resources.length > 0 && (
        <div className="px-6 sm:px-8 py-8">
          <div className="section-label mb-5">Learning Path</div>
          <div style={{ borderTop: '1px solid #e8e8e4' }}>
            {resources.map((r, i) => (
              <a
                key={i}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group py-4"
                style={{ borderBottom: '1px solid #e8e8e4' }}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-xs font-bold uppercase tracking-wide mt-0.5" style={{ color: '#2d9e5f' }}>
                    {r.type}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm leading-snug" style={{ color: '#1a3a2a' }}>
                      {r.title}
                      <span className="font-normal" style={{ color: '#888780' }}> by {r.author}</span>
                    </p>
                    <p className="text-xs mt-1 leading-relaxed" style={{ color: '#888780' }}>{r.why}</p>
                  </div>
                  <svg className="flex-shrink-0 w-4 h-4 mt-0.5" style={{ color: '#e8e8e4' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ── Main ResultsPage ──────────────────────────────────────────────────────────
export default function ResultsPage({ results, selectedDomains, onRestart }) {
  const [selectedArchetype, setSelectedArchetype] = useState(null)

  const {
    archetype,
    beliefCounts,
    behaviorCounts,
    archetypeRadarData,
    gapCallout,
    beliefArchetype,
    behaviorArchetype,
  } = results

  const personalNextSteps = (() => {
    for (const domain of selectedDomains) {
      if (archetype.nextSteps[domain]) return archetype.nextSteps[domain]
    }
    return archetype.nextSteps.default
  })()

  const personalResources = LEARNING_RESOURCES[archetype.id] || []

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fafaf8' }}>

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header className="bg-white sticky top-0 z-20 px-6 py-4" style={{ borderBottom: '1px solid #e8e8e4' }}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="font-semibold tracking-tight" style={{ color: '#1a3a2a', fontSize: 18 }}>Archetypes.ai</span>
            <span className="font-medium text-sm" style={{ color: '#888780' }}>Your Results</span>
          </div>
          <button onClick={onRestart} className="btn-secondary text-sm py-2 px-4">
            Retake
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* ── Archetype Hero ───────────────────────────────────────────────── */}
        <RevealSection delay={80}>
          <div className="px-1">
            <div className="section-label mb-4">Your archetype</div>
            <h1 className="leading-tight mb-3" style={{ fontSize: 48, fontWeight: 600, color: '#0a1a10' }}>
              {archetype.name}
            </h1>
            <p className="text-base italic" style={{ color: '#5a7a66' }}>{archetype.tagline}</p>
          </div>
        </RevealSection>

        {/* ── Gap Callout ─────────────────────────────────────────────────── */}
        <RevealSection delay={160}>
          <div
            className="px-6 py-6 bg-white"
            style={{ border: '1px solid #e8e8e4', borderLeft: '3px solid #2d9e5f', borderRadius: 4 }}
          >
            {gapCallout.hasGap ? (
              <>
                <p className="text-xl sm:text-2xl font-bold leading-snug mb-1" style={{ color: '#0a1a10' }}>
                  You think like <span style={{ color: '#2d9e5f' }}>{gapCallout.beliefLabel}.</span>
                </p>
                <p className="text-xl sm:text-2xl font-bold leading-snug mb-4" style={{ color: '#1a3a2a' }}>
                  But you act like {gapCallout.behaviorLabel}.
                </p>
              </>
            ) : (
              <p className="text-xl sm:text-2xl font-bold leading-snug mb-4" style={{ color: '#0a1a10' }}>
                Consistent <span style={{ color: '#2d9e5f' }}>{gapCallout.beliefLabel}.</span>
              </p>
            )}
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#5f5e5a' }}>
              {gapCallout.subtext}
            </p>
          </div>
        </RevealSection>

        {/* ── Radar Chart ─────────────────────────────────────────────────── */}
        <RevealSection delay={220}>
          <div>
            <div className="mb-4 px-1">
              <div className="section-label mb-1">Belief vs. Behavior</div>
              <p className="text-xs" style={{ color: '#888780' }}>
                Each axis represents one archetype. The gap between the two shapes is your key insight.
              </p>
            </div>
            <div style={{ minHeight: 360, height: 360 }}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={archetypeRadarData} margin={{ top: 16, right: 24, bottom: 8, left: 24 }}>
                  <PolarGrid stroke="#e8e8e4" strokeDasharray="0" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fontSize: 12, fill: '#5f5e5a', fontWeight: 600 }}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 100]}
                    tick={{ fontSize: 9, fill: '#888780' }}
                    tickCount={4}
                    axisLine={false}
                  />
                  <Radar
                    name="How you think"
                    dataKey="belief"
                    stroke="#2d9e5f"
                    fill="#2d9e5f"
                    fillOpacity={0.18}
                    strokeWidth={2}
                    dot={{ fill: '#2d9e5f', r: 4, strokeWidth: 0 }}
                  />
                  <Radar
                    name="How you act"
                    dataKey="behavior"
                    stroke="#1a3a2a"
                    fill="#1a3a2a"
                    fillOpacity={0.12}
                    strokeWidth={2}
                    dot={{ fill: '#1a3a2a', r: 4, strokeWidth: 0 }}
                  />
                  <Tooltip content={<RadarTooltip />} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <RadarLegend />
          </div>
        </RevealSection>

        {/* ── Personal Archetype Profile ───────────────────────────────────── */}
        <RevealSection delay={360}>
          {/* Illustration + intro */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 px-1">
            <div className="flex-shrink-0">
              <ArchetypeIllustration archetypeId={archetype.id} size={96} />
            </div>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#5f5e5a' }}>{archetype.intro}</p>
          </div>

          {/* Quote */}
          <div className="py-6" style={{ borderTop: '1px solid #e8e8e4', borderBottom: '1px solid #e8e8e4' }}>
            <blockquote
              className="text-lg sm:text-xl font-medium italic pl-5 leading-relaxed"
              style={{ color: '#5f5e5a', borderLeft: '3px solid #2d9e5f' }}
            >
              {archetype.quote}
            </blockquote>
          </div>

          {/* Strengths + Blind Spot */}
          <div className="py-8 grid sm:grid-cols-2 gap-8" style={{ borderBottom: '1px solid #e8e8e4' }}>
            <div>
              <div className="section-label mb-5">Strengths</div>
              <ul className="space-y-3.5">
                {archetype.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: '#5f5e5a' }}>
                    <span className="flex-shrink-0 mt-1" style={{ width: 3, height: 14, backgroundColor: '#2d9e5f', display: 'block' }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="section-label mb-5">Blind Spot</div>
              <p className="text-sm leading-relaxed" style={{ color: '#5f5e5a' }}>{archetype.blindSpot}</p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="py-8" style={{ borderBottom: '1px solid #e8e8e4' }}>
            <div className="section-label mb-1.5">Next Steps</div>
            {selectedDomains.length > 0 && (
              <p className="text-xs mb-5" style={{ color: '#888780' }}>
                Tailored to your selected domains: {selectedDomains.join(', ')}
              </p>
            )}
            {!selectedDomains.length && <div className="mb-5" />}
            <ol className="space-y-4">
              {personalNextSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-4 text-sm leading-relaxed" style={{ color: '#5f5e5a' }}>
                  <span
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-xs font-bold text-white"
                    style={{ borderRadius: 4, backgroundColor: '#2d9e5f' }}
                  >
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Your Time, Your Way */}
          <YourTimeSection archetypeId={archetype.id} />

          {/* Learning Resources */}
          {personalResources.length > 0 && (
            <div className="py-8">
              <div className="section-label mb-5">Your Learning Path</div>
              <div style={{ borderTop: '1px solid #e8e8e4' }}>
                {personalResources.map((r, i) => (
                  <a
                    key={i}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group py-4"
                    style={{ borderBottom: '1px solid #e8e8e4' }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 text-xs font-bold uppercase tracking-wide mt-0.5" style={{ color: '#2d9e5f' }}>
                        {r.type}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm leading-snug" style={{ color: '#1a3a2a' }}>
                          {r.title}
                          <span className="font-normal" style={{ color: '#888780' }}> by {r.author}</span>
                        </p>
                        <p className="text-xs mt-1 leading-relaxed" style={{ color: '#888780' }}>{r.why}</p>
                      </div>
                      <svg className="flex-shrink-0 w-4 h-4 mt-0.5" style={{ color: '#e8e8e4' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </RevealSection>

        {/* ── Explore all archetypes ───────────────────────────────────────── */}
        <RevealSection delay={480}>
          <div>
            <div className="mb-6 px-1">
              <div className="section-label mb-2">Explore all archetypes</div>
              <p className="text-sm" style={{ color: '#888780' }}>Click any card to see the full profile. Your archetype is highlighted.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
              {Object.values(ARCHETYPES).map(a => (
                <ArchetypeCompactCard
                  key={a.id}
                  a={a}
                  isYou={a.id === archetype.id}
                  isSelected={selectedArchetype === a.id}
                  onClick={() => setSelectedArchetype(prev => prev === a.id ? null : a.id)}
                />
              ))}
            </div>
            {selectedArchetype && (
              <ArchetypeExploreCard
                key={selectedArchetype}
                a={ARCHETYPES[selectedArchetype]}
                isYou={selectedArchetype === archetype.id}
                selectedDomains={selectedDomains}
              />
            )}
          </div>
        </RevealSection>

        {/* ── Restart CTA ─────────────────────────────────────────────────── */}
        <RevealSection delay={580}>
          <div className="text-center py-8">
            <p className="text-sm mb-4" style={{ color: '#888780' }}>Retake with a different context or domain selection.</p>
            <button onClick={onRestart} className="btn-secondary">
              Start Over
            </button>
          </div>
        </RevealSection>

      </div>
    </div>
  )
}
