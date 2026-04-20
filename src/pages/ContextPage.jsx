const OPTIONS = [
  {
    id: 'Student',
    label: 'Student',
    description: 'In school or continuing education. This is where the tension between learning and shortcuts is sharpest.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    id: 'Professional',
    label: 'Professional',
    description: 'Working in a role where AI tools are changing how work gets done, for better or worse.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'Both',
    label: 'Both',
    description: 'Navigating both worlds: studying and working, or somewhere in the overlap.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function ContextPage({ onSelect }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16" style={{ backgroundColor: '#6B1020' }}>
      <div className="max-w-2xl w-full">
        <div className="mb-10 text-center">
          <div className="section-label justify-center mb-3">Step 1 of 2</div>
          <h2 className="text-3xl font-bold mb-3" style={{ color: '#ffffff' }}>What describes you best?</h2>
          <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            This shapes which scenarios are most relevant to your life.
          </p>
        </div>

        <div className="space-y-3">
          {OPTIONS.map(opt => (
            <button
              key={opt.id}
              onClick={() => onSelect(opt.id)}
              className="w-full text-left p-6 flex items-start gap-5 transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 4, cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                style={{ borderRadius: 4, background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}
              >
                {opt.icon}
              </div>
              <div>
                <div className="font-semibold mb-1" style={{ color: '#ffffff' }}>{opt.label}</div>
                <div className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{opt.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
