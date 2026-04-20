import { useState } from 'react'
import { DOMAINS } from '../data/questions.js'

const DOMAIN_META = {
  'Work & Productivity': {
    description: 'Email, meetings, deliverables, decisions at work.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  'Learning & Education': {
    description: 'Studying, skill-building, absorbing new knowledge.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  'Daily Life': {
    description: 'Personal decisions, planning, communication, relationships.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  'Health & Performance': {
    description: 'Fitness, wellbeing, recovery, habit tracking.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  Creativity: {
    description: 'Writing, design, art, ideas, making things.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
}

export default function DomainPage({ onSelect }) {
  const [selected, setSelected] = useState([])

  function toggle(domain) {
    setSelected(prev =>
      prev.includes(domain)
        ? prev.filter(d => d !== domain)
        : prev.length < 3
          ? [...prev, domain]
          : prev
    )
  }

  const canContinue = selected.length >= 2

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16" style={{ backgroundColor: '#6B1020' }}>
      <div className="max-w-2xl w-full">
        <div className="mb-10 text-center">
          <div className="section-label justify-center mb-3">Step 2 of 2</div>
          <h2 className="text-3xl font-bold mb-3" style={{ color: '#ffffff' }}>Where does AI show up most in your life?</h2>
          <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Pick 2–3 domains. Your results will be tailored to these areas.
          </p>
        </div>

        <div className="space-y-2 mb-8">
          {DOMAINS.map(domain => {
            const meta = DOMAIN_META[domain]
            const isSelected = selected.includes(domain)
            const isDisabled = !isSelected && selected.length >= 3

            return (
              <button
                key={domain}
                onClick={() => toggle(domain)}
                disabled={isDisabled}
                className="w-full text-left p-5 flex items-center gap-4 transition-all duration-200"
                style={{
                  borderRadius: 4,
                  border: isSelected ? '1.5px solid rgba(255,255,255,0.7)' : '1px solid rgba(255,255,255,0.12)',
                  background: isSelected ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)',
                  opacity: isDisabled ? 0.4 : 1,
                  cursor: isDisabled ? 'not-allowed' : 'pointer',
                }}
              >
                {/* Checkbox */}
                <div
                  className="flex-shrink-0 w-5 h-5 flex items-center justify-center transition-colors duration-200"
                  style={{
                    borderRadius: 4,
                    border: isSelected ? 'none' : '2px solid rgba(255,255,255,0.25)',
                    background: isSelected ? '#ffffff' : 'transparent',
                  }}
                >
                  {isSelected && (
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#6B1020' }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                {/* Icon */}
                <div style={{ color: isSelected ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.45)' }}>
                  {meta.icon}
                </div>
                {/* Text */}
                <div>
                  <div className="font-semibold text-sm" style={{ color: isSelected ? '#ffffff' : 'rgba(255,255,255,0.82)' }}>
                    {domain}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{meta.description}</div>
                </div>
              </button>
            )
          })}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
            {selected.length === 0 && 'Select at least 2 domains'}
            {selected.length === 1 && 'Select 1 more'}
            {selected.length === 2 && 'Good. Add one more if you like.'}
            {selected.length === 3 && 'Maximum selected'}
          </p>
          <button
            onClick={() => canContinue && onSelect(selected)}
            disabled={!canContinue}
            className="btn-primary"
          >
            Continue
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
