import { useState, useRef } from 'react'
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, Tooltip,
} from 'recharts'
import { ARCHETYPES } from '../data/archetypes.js'
import skepticImg from '../assets/skeptic.png'
import delegatorImg from '../assets/delegator.png'
import experimenterImg from '../assets/experimenter.png'
import amplifierImg from '../assets/amplifier.png'
import architectImg from '../assets/architect.png'

const ARCHETYPE_IMAGES = {
  skeptic: skepticImg,
  delegator: delegatorImg,
  experimenter: experimenterImg,
  amplifier: amplifierImg,
  architect: architectImg,
}

// ── Illustration box helper ───────────────────────────────────────────────────
function ArchetypeImg({ archetypeId, size, borderRadius = 14 }) {
  const src = ARCHETYPE_IMAGES[archetypeId] || skepticImg
  return (
    <div style={{
      background: '#F5EFE6',
      borderRadius,
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      flexShrink: 0,
    }}>
      <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  )
}

// ── Custom radar tooltip ──────────────────────────────────────────────────────
function RadarTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  const { subject } = payload[0].payload
  return (
    <div className="px-4 py-3 text-xs" style={{ background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 4 }}>
      <p className="font-semibold mb-2" style={{ color: '#ffffff' }}>{subject}</p>
      {payload.map(p => (
        <p key={p.name} className="font-medium" style={{ color: p.color }}>
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
        <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ffffff' }} />
        <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>How you think</span>
      </div>
      <div className="flex items-center gap-2">
        <div style={{ width: 12, height: 2, backgroundColor: 'rgba(255,255,255,0.5)' }} />
        <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>How you act</span>
      </div>
    </div>
  )
}

// ── Animated section wrapper ──────────────────────────────────────────────────
function RevealSection({ children, delay = 0, className = '' }) {
  return (
    <div className={`opacity-anim-start animate-fade-up ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

// ── Thin section divider ───────────────────────────────────────────────────────
function SectionDivider() {
  return <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '48px 0' }} />
}

// ── Habits section ────────────────────────────────────────────────────────────
function HabitsSection({ habits }) {
  if (!habits) return null
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <div>
        <div className="section-label mb-4">Drop</div>
        <ul className="space-y-3">
          {habits.drop.map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>
              <span className="flex-shrink-0 mt-1.5" style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: 'rgba(239,68,68,0.45)', display: 'block', flexShrink: 0 }} />
              {h}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="section-label mb-4">Build</div>
        <ul className="space-y-3">
          {habits.build.map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>
              <span className="flex-shrink-0 mt-1.5" style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: 'rgba(16,185,129,0.5)', display: 'block', flexShrink: 0 }} />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// ── Compact archetype card (grid of 5) ────────────────────────────────────────
function ArchetypeCompactCard({ a, isYou, onClick }) {
  if (isYou) {
    return (
      <div
        className="flex flex-col items-center p-5 text-center w-full"
        style={{ borderRadius: 8, border: '1px solid rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.1)' }}
      >
        <ArchetypeImg archetypeId={a.id} size={100} borderRadius={14} />
        <h3 className="font-bold text-sm mt-3 mb-2" style={{ color: '#ffffff' }}>{a.name}</h3>
        <p className="text-xs font-medium uppercase" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>You are here</p>
      </div>
    )
  }
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center p-5 text-center cursor-pointer transition-all duration-150 w-full"
      style={{ borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
    >
      <ArchetypeImg archetypeId={a.id} size={100} borderRadius={14} />
      <h3 className="font-bold text-sm mt-3 mb-2" style={{ color: '#ffffff' }}>{a.name}</h3>
      <p className="text-xs italic leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{a.tagline}</p>
    </button>
  )
}

// ── Learning resources ────────────────────────────────────────────────────────
const LEARNING_RESOURCES = {
  skeptic: {
    bridge: 'These resources will help you take exactly those first steps.',
    items: [
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
        why: 'No maths, no coding, no overwhelm. A clear introduction to what AI actually is.',
        url: 'https://elementsofai.com',
      },
      {
        type: 'Guide',
        title: 'How to create AI agents',
        author: 'Zapier',
        why: 'A plain-language introduction to what agents do and how to build one without writing any code.',
        url: 'https://zapier.com/blog/how-to-create-ai-agents',
      },
    ],
  },
  delegator: {
    bridge: 'These resources will help you get more control over what AI does for you.',
    items: [
      {
        type: 'Tool',
        title: 'Try vibe coding',
        author: 'Lovable',
        why: 'Describe what you want to build and watch it appear. Free to start, no coding required.',
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
  },
  experimenter: {
    bridge: 'These resources will help you go deeper on the tools worth keeping.',
    items: [
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
  },
  amplifier: {
    bridge: 'These resources will help you build and audit more rigorously.',
    items: [
      {
        type: 'Guide',
        title: 'Lovable Agent Mode',
        author: 'Lovable',
        why: 'Build full apps autonomously. The tool that turns your vision into a working product.',
        url: 'https://docs.lovable.dev/features/agent-mode',
      },
      {
        type: 'Guide',
        title: 'Building Effective Agents',
        author: 'Anthropic',
        why: "Written by Anthropic's own engineers. The reference for people ready to build seriously.",
        url: 'https://www.anthropic.com/research/building-effective-agents',
      },
      {
        type: 'Course',
        title: 'MCP Course',
        author: 'Hugging Face',
        why: 'Free and advanced. Build a production-ready application with Anthropic, Slack, and GitHub integration.',
        url: 'https://huggingface.co/mcp-course',
      },
    ],
  },
  architect: {
    bridge: 'These resources will help you go further on exactly what you just committed to.',
    items: [
      {
        type: 'Tutorial',
        title: 'Build AI agents with n8n',
        author: 'n8n',
        why: 'The tool serious builders use. Open-source, self-hostable, and powerful enough to orchestrate real multi-step agents.',
        url: 'https://n8n.io/get-started',
      },
      {
        type: 'Guide',
        title: 'Building Effective Agents',
        author: 'Anthropic',
        why: "Written by Anthropic's own engineers. The reference for people ready to build seriously.",
        url: 'https://www.anthropic.com/research/building-effective-agents',
      },
      {
        type: 'Course',
        title: 'MCP Course',
        author: 'Hugging Face',
        why: 'Free and advanced. Build a production-ready application with Anthropic, Slack, and GitHub integration.',
        url: 'https://huggingface.co/mcp-course',
      },
    ],
  },
}

// ── Learning resource row ─────────────────────────────────────────────────────
function LearningRow({ r }) {
  return (
    <a
      href={r.url}
      target="_blank"
      rel="noopener noreferrer"
      className="learning-row"
    >
      <span
        className="flex-shrink-0 text-xs font-bold uppercase tracking-wide mt-0.5"
        style={{ color: 'rgba(255,255,255,0.6)', minWidth: 48 }}
      >
        {r.type}
      </span>
      <div className="flex-1 min-w-0">
        <p className="learning-row-title font-semibold text-sm leading-snug" style={{ color: '#ffffff' }}>
          {r.title}
          <span className="font-normal" style={{ color: 'rgba(255,255,255,0.45)' }}> by {r.author}</span>
        </p>
        <p className="text-xs mt-1 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{r.why}</p>
      </div>
      <svg
        className="learning-row-icon flex-shrink-0 w-4 h-4 mt-0.5"
        style={{ color: 'rgba(255,255,255,0.3)', transition: 'color 0.15s' }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  )
}

// ── Full expanded archetype card (explore section) ────────────────────────────
function ArchetypeExploreCard({ a, isYou, selectedDomains }) {
  const nextSteps = (() => {
    if (isYou && selectedDomains?.length) {
      for (const domain of selectedDomains) {
        if (a.nextSteps[domain]) return a.nextSteps[domain]
      }
    }
    return a.nextSteps.default
  })()

  const resourceData = LEARNING_RESOURCES[a.id] || {}
  const resourceItems = resourceData.items || []

  return (
    <div
      className="overflow-hidden mt-4"
      style={isYou
        ? { borderRadius: 4, border: '1px solid rgba(255,255,255,0.12)', borderLeft: '3px solid rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.04)' }
        : { borderRadius: 4, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)' }
      }
    >
      {/* Header */}
      <div className="px-6 sm:px-8 py-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-shrink-0">
            <ArchetypeImg archetypeId={a.id} size={100} borderRadius={14} />
          </div>
          <div className="flex-1">
            <p className="text-xs font-medium uppercase tracking-widest mb-1.5" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>
              {isYou ? 'Your Archetype' : 'Archetype'}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1" style={{ color: '#ffffff' }}>{a.name}</h2>
            <p className="text-base font-medium italic mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>{a.tagline}</p>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>{a.intro}</p>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="px-6 sm:px-8 py-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <blockquote
          className="text-lg sm:text-xl font-medium italic pl-5 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.88)', borderLeft: '3px solid rgba(255,255,255,0.4)' }}
        >
          {a.quote}
        </blockquote>
      </div>

      {/* Strengths */}
      <div className="px-6 sm:px-8 py-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="section-label mb-5">Strengths</div>
        <ul className="space-y-3.5">
          {a.strengths.map((s, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>
              <span className="flex-shrink-0 mt-1" style={{ width: 3, height: 14, backgroundColor: 'rgba(255,255,255,0.5)', display: 'block' }} />
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Blind Spot */}
      <div className="px-6 sm:px-8 py-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="section-label mb-5">Blind Spot</div>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>{a.blindSpot}</p>
      </div>

      {/* Habits */}
      <div className="px-6 sm:px-8 py-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="section-label mb-5">Habits</div>
        <HabitsSection habits={a.habits} />
      </div>

      {/* Next Steps */}
      <div className="px-6 sm:px-8 py-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.1)' }}>
        <div className="section-label mb-1.5">Next Steps</div>
        {a.nextSteps.bridge && (
          <p className="text-sm italic mt-2 mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {a.nextSteps.bridge}
          </p>
        )}
        {isYou && selectedDomains?.length > 0 && (
          <p className="text-xs mb-5" style={{ color: 'rgba(255,255,255,0.45)' }}>Tailored to your selected domains: {selectedDomains.join(', ')}</p>
        )}
        {(!isYou || !selectedDomains?.length) && <div className="mb-5" />}
        <ol className="space-y-4">
          {nextSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>
              <span
                className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-xs font-bold"
                style={{ borderRadius: 4, backgroundColor: '#ffffff', color: '#6B1020' }}
              >
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      {/* Learning Resources */}
      {resourceItems.length > 0 && (
        <div className="px-6 sm:px-8 py-8">
          <div className="section-label mb-2">Learning Path</div>
          {resourceData.bridge && (
            <p className="text-sm italic mt-2 mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {resourceData.bridge}
            </p>
          )}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {resourceItems.map((r, i) => <LearningRow key={i} r={r} />)}
          </div>
        </div>
      )}
    </div>
  )
}

// ── Share card (off-screen, captured by html2canvas) ─────────────────────────
function ShareCard({ cardRef, archetype }) {
  const src = ARCHETYPE_IMAGES[archetype.id] || skepticImg
  return (
    <div
      ref={cardRef}
      style={{
        position: 'fixed',
        left: -9999,
        top: 0,
        width: 1080,
        height: 1350,
        backgroundColor: '#6B1020',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
      }}
    >
      {/* Floating card */}
      <div style={{
        width: 960,
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: 24,
        padding: 48,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>

        {/* Wordmark */}
        <div style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontStyle: 'italic',
          color: 'rgba(255,255,255,0.45)',
          fontSize: 13,
          fontWeight: 400,
          marginBottom: 20,
          textAlign: 'center',
        }}>
          Archetypes.ai
        </div>

        {/* Illustration */}
        <div style={{
          width: 140,
          height: 140,
          borderRadius: 16,
          background: '#F5EFE6',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 16,
          flexShrink: 0,
        }}>
          <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* "Your AI archetype is" */}
        <div style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontStyle: 'italic',
          color: 'rgba(255,255,255,0.5)',
          fontSize: 12,
          textAlign: 'center',
          marginBottom: 4,
        }}>
          Your AI archetype is
        </div>

        {/* Archetype name */}
        <div style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: 36,
          color: '#ffffff',
          textAlign: 'center',
          marginBottom: 8,
        }}>
          {archetype.name}
        </div>

        {/* Signature quote */}
        <div style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontStyle: 'italic',
          color: 'rgba(255,255,255,0.65)',
          fontSize: 13,
          textAlign: 'center',
          marginBottom: 16,
        }}>
          {archetype.tagline}
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', width: '100%', marginBottom: 16 }} />

        {/* Introduction paragraph */}
        <div style={{
          color: 'rgba(255,255,255,0.82)',
          fontSize: 12,
          lineHeight: 1.8,
          textAlign: 'left',
          marginBottom: 16,
          width: '100%',
        }}>
          {archetype.intro}
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', width: '100%', marginBottom: 16 }} />

        {/* Two columns: Strengths + Blind Spot */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 16,
          width: '100%',
          textAlign: 'left',
        }}>
          {/* Strengths */}
          <div>
            <div style={{
              fontSize: 10,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: 8,
            }}>
              Strengths
            </div>
            {archetype.strengths.map((s, i) => (
              <div key={i} style={{
                borderLeft: '2px solid rgba(255,255,255,0.25)',
                paddingLeft: 8,
                fontSize: 11,
                color: 'rgba(255,255,255,0.82)',
                lineHeight: 1.6,
                marginBottom: 8,
              }}>
                {s}
              </div>
            ))}
          </div>

          {/* Blind Spot */}
          <div>
            <div style={{
              fontSize: 10,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: 8,
            }}>
              Blind Spot
            </div>
            <div style={{
              fontSize: 11,
              color: 'rgba(255,255,255,0.82)',
              lineHeight: 1.6,
            }}>
              {archetype.blindSpot}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', width: '100%', marginTop: 16, marginBottom: 12 }} />

        {/* URL */}
        <div style={{
          fontSize: 11,
          color: 'rgba(255,255,255,0.35)',
          textAlign: 'center',
        }}>
          Take the test at archetypes-ai.vercel.app
        </div>

      </div>
    </div>
  )
}

// ── Share modal ───────────────────────────────────────────────────────────────
function ShareModal({ dataUrl, onClose }) {
  function handleDownload() {
    const link = document.createElement('a')
    link.download = 'archetypes-ai-result.png'
    link.href = dataUrl
    link.click()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        style={{ background: '#3d0a12', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 16, padding: 32, maxWidth: 420, width: '100%' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-5">
          <span className="section-label">Share Card</span>
          <button
            onClick={onClose}
            style={{ color: 'rgba(255,255,255,0.5)', cursor: 'pointer', lineHeight: 0, background: 'none', border: 'none' }}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <img
          src={dataUrl}
          alt="Share card preview"
          style={{ maxWidth: '100%', maxHeight: 500, width: 'auto', height: 'auto', display: 'block', margin: '0 auto', borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)' }}
        />
        <div className="flex gap-3 mt-5">
          <button onClick={handleDownload} className="btn-primary" style={{ flex: 1 }}>
            Download image
          </button>
          <button onClick={onClose} className="btn-secondary" style={{ flex: 1 }}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Main ResultsPage ──────────────────────────────────────────────────────────
export default function ResultsPage({ results, selectedDomains, onRestart }) {
  const [selectedArchetype, setSelectedArchetype] = useState(null)
  const [shareModalUrl, setShareModalUrl] = useState(null)
  const [shareStatus, setShareStatus] = useState(null)
  const shareCardRef = useRef(null)

  const { archetype, archetypeRadarData, gapCallout } = results

  const personalNextSteps = (() => {
    for (const domain of selectedDomains) {
      if (archetype.nextSteps[domain]) return archetype.nextSteps[domain]
    }
    return archetype.nextSteps.default
  })()

  const personalResourceData = LEARNING_RESOURCES[archetype.id] || {}
  const personalResourceItems = personalResourceData.items || []

  async function handleCopyShareCard() {
    if (shareStatus === 'loading') return
    setShareStatus('loading')
    try {
      const { default: html2canvas } = await import('html2canvas')
      const el = shareCardRef.current
      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#6B1020',
        logging: false,
      })
      const dataUrl = canvas.toDataURL('image/png')
      setShareModalUrl(dataUrl)
      setShareStatus(null)
    } catch (err) {
      console.error(err)
      setShareStatus(null)
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#6B1020' }}>

      {/* Share modal overlay */}
      {shareModalUrl && <ShareModal dataUrl={shareModalUrl} onClose={() => setShareModalUrl(null)} />}

      {/* Off-screen share card */}
      <ShareCard cardRef={shareCardRef} archetype={archetype} gapCallout={gapCallout} />

      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-20 px-6 py-4" style={{ background: 'rgba(107,16,32,0.95)', borderBottom: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
        <div className="max-w-[960px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: 'italic', color: '#ffffff', fontSize: 16, fontWeight: 400 }}>Archetypes.ai</span>
            <span className="font-medium text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>· Your Results</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: 'sans-serif' }}>v0.4</span>
            <button onClick={onRestart} className="btn-secondary" style={{ padding: '6px 16px', fontSize: 12 }}>
              Retake
            </button>
          </div>
        </div>
      </header>

      <div>
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-12">

          {/* ── 1. Gap callout ──────────────────────────────────────────────── */}
          <RevealSection delay={80}>
            <div className="text-center py-2">
              <p style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontStyle: 'italic',
                fontSize: 18,
                color: 'rgba(255,255,255,0.88)',
                lineHeight: 1.6,
              }}>
                {gapCallout.headline}
              </p>
            </div>
          </RevealSection>

          <SectionDivider />

          {/* ── 2. Archetype hero card ───────────────────────────────────────── */}
          <RevealSection delay={160}>
            <div className="flex justify-center">
              <div style={{
                maxWidth: 520,
                width: '100%',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 12,
                padding: 32,
                textAlign: 'center',
              }}>
                <p style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontStyle: 'italic',
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.5)',
                  marginBottom: 12,
                }}>
                  Your AI archetype is
                </p>
                <h1 style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontStyle: 'italic',
                  fontSize: 44,
                  fontWeight: 400,
                  color: '#ffffff',
                  lineHeight: 1.1,
                  marginBottom: 28,
                }}>
                  {archetype.name}
                </h1>
                <div className="flex justify-center mb-6">
                  <ArchetypeImg archetypeId={archetype.id} size={160} borderRadius={20} />
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginBottom: 20 }} />
                <p style={{
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.88)',
                  lineHeight: 1.8,
                  textAlign: 'left',
                }}>
                  {archetype.intro}
                </p>
              </div>
            </div>
          </RevealSection>

          <SectionDivider />

          {/* ── 3. Radar chart ────────────────────────────────────────────────── */}
          <RevealSection delay={240}>
            <div>
              <div className="mb-4">
                <div className="section-label mb-1">Belief vs. Behavior</div>
                <p className="text-xs mt-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Each axis represents one archetype. The gap between the two shapes is your key insight.
                </p>
              </div>
              <div style={{ minHeight: 380, height: 380 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={archetypeRadarData} margin={{ top: 20, right: 30, bottom: 10, left: 30 }}>
                    <PolarGrid stroke="rgba(255,255,255,0.1)" strokeDasharray="0" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fontSize: 12, fill: 'rgba(255,255,255,0.6)', fontWeight: 600 }}
                    />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 100]}
                      tick={{ fontSize: 9, fill: 'rgba(255,255,255,0.3)' }}
                      tickCount={4}
                      axisLine={false}
                    />
                    <Radar
                      name="How you think"
                      dataKey="belief"
                      stroke="#ffffff"
                      fill="rgba(255,255,255,0.15)"
                      fillOpacity={1}
                      strokeWidth={2}
                      dot={{ fill: '#ffffff', r: 4, strokeWidth: 0 }}
                    />
                    <Radar
                      name="How you act"
                      dataKey="behavior"
                      stroke="rgba(255,255,255,0.5)"
                      fill="rgba(255,255,255,0.08)"
                      fillOpacity={1}
                      strokeWidth={2}
                      strokeDasharray="4 4"
                      dot={{ fill: 'rgba(255,255,255,0.5)', r: 4, strokeWidth: 0 }}
                    />
                    <Tooltip content={<RadarTooltip />} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <RadarLegend />
            </div>
          </RevealSection>

          <SectionDivider />

          {/* ── 4. Detailed profile ───────────────────────────────────────────── */}
          <RevealSection delay={320}>

            {/* Strengths */}
            <div>
              <div className="section-label mb-5">Strengths</div>
              <ul className="space-y-3.5">
                {archetype.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>
                    <span className="flex-shrink-0 mt-1" style={{ width: 3, height: 14, backgroundColor: 'rgba(255,255,255,0.5)', display: 'block' }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '36px 0' }} />

            {/* Blind Spot */}
            <div>
              <div className="section-label mb-5">Blind Spot</div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>{archetype.blindSpot}</p>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '36px 0' }} />

            {/* Habits */}
            <div>
              <div className="section-label mb-5">Habits</div>
              <HabitsSection habits={archetype.habits} />
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '36px 0' }} />

            {/* Next Steps */}
            <div>
              <div className="section-label mb-1.5">Next Steps</div>
              {archetype.nextSteps.bridge && (
                <p className="text-sm italic mt-2 mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {archetype.nextSteps.bridge}
                </p>
              )}
              {selectedDomains.length > 0 && (
                <p className="text-xs mt-1 mb-5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Tailored to your selected domains: {selectedDomains.join(', ')}
                </p>
              )}
              {!selectedDomains.length && <div className="mb-5" />}
              <ol className="space-y-4">
                {personalNextSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>
                    <span
                      className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-xs font-bold"
                      style={{ borderRadius: 4, backgroundColor: '#ffffff', color: '#6B1020' }}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {personalResourceItems.length > 0 && (
              <>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '36px 0' }} />

                {/* Learning Path */}
                <div>
                  <div className="section-label mb-2">Your Learning Path</div>
                  {personalResourceData.bridge && (
                    <p className="text-sm italic mt-2 mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      {personalResourceData.bridge}
                    </p>
                  )}
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    {personalResourceItems.map((r, i) => <LearningRow key={i} r={r} />)}
                  </div>
                </div>
              </>
            )}

          </RevealSection>

          <SectionDivider />

          {/* Feedback link – location 1 */}
          <div style={{ textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 48 }}>
            Tried Archetypes.ai? Help us make it better.{' '}
            <a
              href="https://forms.cloud.microsoft/r/6biGS5Mk8H"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'underline' }}
            >
              Share your feedback
            </a>
          </div>

          {/* ── 5. Explore all archetypes ─────────────────────────────────────── */}
          <RevealSection delay={420}>
            <div>
              <div className="mb-6">
                <div className="section-label mb-2">Explore all archetypes</div>
                <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.45)' }}>Click any card to see the full profile.</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
                {Object.values(ARCHETYPES).map(a => (
                  <ArchetypeCompactCard
                    key={a.id}
                    a={a}
                    isYou={a.id === archetype.id}
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

          <SectionDivider />

          {/* ── Share ────────────────────────────────────────────────────────── */}
          <RevealSection delay={500}>
            <div>
              <div className="section-label mb-3">Share your result</div>
              <p className="text-sm mt-2 mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Save your archetype as an image for social sharing.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleCopyShareCard}
                  disabled={shareStatus === 'loading'}
                  className="btn-secondary"
                >
                  {shareStatus === 'loading' && (
                    <svg className="animate-spin mr-2 w-3 h-3" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  )}
                  {shareStatus === 'loading' ? 'Generating…' : 'Share your result'}
                </button>
              </div>
            </div>
          </RevealSection>

          {/* ── Restart CTA ───────────────────────────────────────────────────── */}
          <RevealSection delay={580}>
            <div className="text-center py-12">
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>Retake with a different context or domain selection.</p>
              <button onClick={onRestart} className="btn-secondary">
                Start Over
              </button>
            </div>
          </RevealSection>

          {/* Feedback link – location 2 */}
          <div style={{ textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.5)', paddingBottom: 48 }}>
            Tried Archetypes.ai? Help us make it better.{' '}
            <a
              href="https://forms.cloud.microsoft/r/6biGS5Mk8H"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'underline' }}
            >
              Share your feedback
            </a>
          </div>

        </div>
      </div>

    </div>
  )
}
