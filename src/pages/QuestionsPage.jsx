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
    if (animating) return
    setSelected(archetype)
  }

  function handleNext() {
    if (!selected || animating) return

    const newAnswers = [...answers, { questionId: question.id, archetype: selected }]

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
  }

  const answerLabels = ['A', 'B', 'C', 'D']

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full">
        {/* Progress */}
        <div className="mb-10">
          <ProgressBar current={currentIndex + 1} total={total} />
        </div>

        {/* Question card */}
        <div
          className={`card p-8 mb-6 transition-opacity duration-200 ${animating ? 'opacity-0' : 'opacity-100'}`}
        >
          {/* Situation */}
          <div className="mb-6">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Scenario</p>
            <p className="text-slate-700 leading-relaxed mb-4">{question.situation}</p>
            <p className="text-lg font-semibold text-slate-900">{question.question}</p>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-100 mb-6" />

          {/* Answers */}
          <div className="space-y-3">
            {question.answers.map((answer, idx) => {
              const isSelected = selected === answer.archetype
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(answer.archetype)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-150 flex items-start gap-4
                    ${isSelected
                      ? 'bg-accent-50 border-accent-500'
                      : 'bg-white border-slate-200 hover:border-accent-300 hover:bg-slate-50 cursor-pointer'
                    }`}
                >
                  <span className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors duration-150
                    ${isSelected ? 'bg-accent-500 text-white' : 'bg-slate-100 text-slate-500'}`}
                  >
                    {answerLabels[idx]}
                  </span>
                  <span className={`text-sm leading-relaxed pt-0.5 ${isSelected ? 'text-slate-800 font-medium' : 'text-slate-600'}`}>
                    {answer.text}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Next button */}
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            disabled={!selected}
            className={`btn-primary ${!selected ? 'opacity-30 cursor-not-allowed' : ''}`}
          >
            {isLast ? 'See My Results' : 'Next'}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
