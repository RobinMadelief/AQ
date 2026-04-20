import { useState } from 'react'
import ProgressBar from '../components/ProgressBar.jsx'

export default function QuestionsPage({ questions, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selected, setSelected] = useState(null)
  const [animating, setAnimating] = useState(false)

  const question = questions[currentIndex]
  const total = questions.length
  const isLast = currentIndex === total - 1
  const isFirst = currentIndex === 0

  function advance(newAnswers) {
    setTimeout(() => {
      if (isLast) {
        onComplete(newAnswers)
        return
      }
      setAnimating(true)
      setTimeout(() => {
        setAnswers(newAnswers)
        setCurrentIndex(i => i + 1)
        setSelected(null)
        setAnimating(false)
      }, 220)
    }, 400)
  }

  function handleSelect(archetype) {
    if (animating || selected !== null) return
    setSelected(archetype)
    const newAnswers = [...answers, { questionId: question.id, archetype, layer: question.layer }]
    advance(newAnswers)
  }

  function handleBack() {
    if (isFirst || animating || selected !== null) return
    setAnswers(prev => prev.slice(0, -1))
    setCurrentIndex(i => i - 1)
    setSelected(null)
  }

  const answerLabels = ['A', 'B', 'C', 'D', 'E']

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-4 sm:py-12"
      style={{ backgroundColor: '#6B1020' }}
    >
      <div className="max-w-2xl w-full">

        {/* Back button + Progress */}
        <div className="mb-4 sm:mb-8">
          <div className="mb-3" style={{ minHeight: 24 }}>
            {!isFirst && (
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-1.5 transition-opacity duration-150"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'rgba(255,255,255,0.45)',
                  fontSize: 12,
                  padding: 0,
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            )}
          </div>
          <ProgressBar current={currentIndex + 1} total={total} />
        </div>

        {/* Question card */}
        <div
          className={`p-5 sm:p-8 transition-opacity duration-200 ${animating ? 'opacity-0' : 'opacity-100'}`}
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 4 }}
        >
          {/* Scenario label + situation */}
          {question.situation && (
            <div className="mb-4">
              <div className="section-label mb-2">Scenario</div>
              <p
                className="leading-relaxed text-sm px-4 py-3"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 4,
                }}
              >
                {question.situation}
              </p>
            </div>
          )}

          {!question.situation && (
            <div className="mb-2">
              <div className="section-label mb-3">Reflect</div>
            </div>
          )}

          {/* Question text */}
          <p
            className="font-medium leading-snug mb-4 sm:mb-6"
            style={{ color: '#ffffff', fontWeight: 500, fontSize: 'clamp(15px, 2.5vw, 20px)' }}
          >
            {question.question}
          </p>

          {/* Divider */}
          <div className="mb-3 sm:mb-4" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }} />

          {/* Answer choices */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(6px, 1vw, 10px)' }}>
            {question.answers.map((answer, idx) => {
              const isSelected = selected === answer.archetype
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(answer.archetype)}
                  disabled={selected !== null}
                  className="w-full text-left flex items-start gap-3 sm:gap-4 transition-all duration-150"
                  style={{
                    borderRadius: 4,
                    border: isSelected
                      ? '1.5px solid rgba(255,255,255,0.7)'
                      : '1px solid rgba(255,255,255,0.12)',
                    background: isSelected
                      ? 'rgba(255,255,255,0.12)'
                      : 'rgba(255,255,255,0.04)',
                    padding: 'clamp(10px, 1.5vw, 16px) clamp(12px, 2vw, 16px)',
                    opacity: selected !== null && !isSelected ? 0.4 : 1,
                    cursor: selected !== null ? 'default' : 'pointer',
                  }}
                  onMouseEnter={e => {
                    if (selected === null) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                  }}
                  onMouseLeave={e => {
                    if (selected === null) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                  }}
                >
                  <span
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center transition-all duration-150"
                    style={{
                      borderRadius: 4,
                      fontSize: 11,
                      fontWeight: 700,
                      background: isSelected ? '#ffffff' : 'rgba(255,255,255,0.1)',
                      color: isSelected ? '#6B1020' : 'rgba(255,255,255,0.45)',
                    }}
                  >
                    {answerLabels[idx]}
                  </span>
                  <span
                    className="leading-relaxed pt-0.5"
                    style={{
                      fontSize: 'clamp(13px, 2vw, 14px)',
                      color: isSelected ? '#ffffff' : 'rgba(255,255,255,0.82)',
                      fontWeight: isSelected ? 500 : 400,
                    }}
                  >
                    {answer.text}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
