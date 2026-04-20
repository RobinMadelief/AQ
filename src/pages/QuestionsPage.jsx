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

  function handleSelect(archetype) {
    if (animating || selected !== null) return
    setSelected(archetype)

    const newAnswers = [...answers, { questionId: question.id, archetype }]

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

  const answerLabels = ['A', 'B', 'C', 'D']

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12" style={{ backgroundColor: '#fafaf8' }}>
      <div className="max-w-2xl w-full">

        {/* Progress */}
        <div className="mb-10">
          <ProgressBar current={currentIndex + 1} total={total} />
        </div>

        {/* Question card */}
        <div
          className={`bg-white p-6 sm:p-8 transition-opacity duration-200 ${animating ? 'opacity-0' : 'opacity-100'}`}
          style={{ border: '1px solid #e8e8e4', borderRadius: 4 }}
        >
          {/* Scenario label + situation */}
          {question.situation && (
            <div className="mb-5">
              <div className="section-label mb-2.5">Scenario</div>
              <p className="leading-relaxed text-sm sm:text-base px-4 py-3.5" style={{ color: '#5f5e5a', backgroundColor: '#fafaf8', border: '1px solid #e8e8e4', borderRadius: 4 }}>
                {question.situation}
              </p>
            </div>
          )}

          {!question.situation && (
            <div className="mb-2">
              <div className="section-label mb-4">Reflect</div>
            </div>
          )}

          {/* Question */}
          <p className="text-lg sm:text-xl font-medium leading-snug mb-6" style={{ color: '#0a1a10', fontWeight: 500 }}>
            {question.question}
          </p>

          {/* Divider */}
          <div className="mb-5" style={{ borderTop: '1px solid #e8e8e4' }} />

          {/* Answer choices */}
          <div className="space-y-2.5">
            {question.answers.map((answer, idx) => {
              const isSelected = selected === answer.archetype
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(answer.archetype)}
                  disabled={selected !== null}
                  className="w-full text-left p-4 flex items-start gap-4 transition-all duration-150"
                  style={{
                    borderRadius: 4,
                    border: isSelected
                      ? '1.5px solid #2d9e5f'
                      : '1px solid #e8e8e4',
                    backgroundColor: isSelected
                      ? '#f7fbf8'
                      : selected !== null
                        ? '#ffffff'
                        : '#ffffff',
                    opacity: selected !== null && !isSelected ? 0.4 : 1,
                    cursor: selected !== null ? 'default' : 'pointer',
                  }}
                >
                  <span
                    className="flex-shrink-0 w-7 h-7 flex items-center justify-center text-xs font-bold transition-all duration-150"
                    style={{
                      borderRadius: 4,
                      backgroundColor: isSelected ? '#2d9e5f' : '#f5f5f3',
                      color: isSelected ? '#ffffff' : '#888780',
                    }}
                  >
                    {answerLabels[idx]}
                  </span>
                  <span
                    className="text-sm leading-relaxed pt-0.5"
                    style={{ color: isSelected ? '#1a3a2a' : '#5f5e5a', fontWeight: isSelected ? 500 : 400 }}
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
