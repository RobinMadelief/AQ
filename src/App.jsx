import { useState } from 'react'
import LandingPage from './pages/LandingPage.jsx'
import ContextPage from './pages/ContextPage.jsx'
import DomainPage from './pages/DomainPage.jsx'
import QuestionsPage from './pages/QuestionsPage.jsx'
import ResultsPage from './pages/ResultsPage.jsx'
import { selectQuestions } from './data/questions.js'
import { computeResults } from './data/scoring.js'

const STEPS = {
  LANDING: 'landing',
  CONTEXT: 'context',
  DOMAINS: 'domains',
  QUESTIONS: 'questions',
  RESULTS: 'results',
}

export default function App() {
  const [step, setStep] = useState(STEPS.LANDING)
  const [context, setContext] = useState(null)
  const [selectedDomains, setSelectedDomains] = useState([])
  const [questions, setQuestions] = useState([])
  const [results, setResults] = useState(null)

  function handleStart() {
    setStep(STEPS.CONTEXT)
  }

  function handleContextSelect(ctx) {
    setContext(ctx)
    setStep(STEPS.DOMAINS)
  }

  function handleDomainSelect(domains) {
    setSelectedDomains(domains)
    const qs = selectQuestions(context, domains)
    setQuestions(qs)
    setStep(STEPS.QUESTIONS)
  }

  function handleQuestionsComplete(answers) {
    const r = computeResults(answers, selectedDomains)
    setResults(r)
    setStep(STEPS.RESULTS)
    // Scroll to top for results
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleRestart() {
    setStep(STEPS.LANDING)
    setContext(null)
    setSelectedDomains([])
    setQuestions([])
    setResults(null)
  }

  return (
    <div className="font-sans">
      {step === STEPS.LANDING && (
        <LandingPage onStart={handleStart} />
      )}
      {step === STEPS.CONTEXT && (
        <ContextPage onSelect={handleContextSelect} />
      )}
      {step === STEPS.DOMAINS && (
        <DomainPage onSelect={handleDomainSelect} />
      )}
      {step === STEPS.QUESTIONS && questions.length > 0 && (
        <QuestionsPage questions={questions} onComplete={handleQuestionsComplete} />
      )}
      {step === STEPS.RESULTS && results && (
        <ResultsPage
          results={results}
          selectedDomains={selectedDomains}
          onRestart={handleRestart}
        />
      )}
    </div>
  )
}
