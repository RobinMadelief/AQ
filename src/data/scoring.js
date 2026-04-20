import { ARCHETYPES } from './archetypes.js'
import { ALL_QUESTIONS } from './questions.js'

const TIEBREAKER = ['amplifier', 'experimenter', 'skeptic', 'delegator']
const ARCHETYPE_KEYS = ['skeptic', 'delegator', 'experimenter', 'amplifier']

function zeroCounts() {
  return { skeptic: 0, delegator: 0, experimenter: 0, amplifier: 0 }
}

function countArchetypes(answerSet) {
  const counts = zeroCounts()
  for (const a of answerSet) {
    if (counts[a.archetype] !== undefined) counts[a.archetype]++
  }
  return counts
}

function getDominant(counts) {
  const max = Math.max(...Object.values(counts))
  return TIEBREAKER.find(k => counts[k] === max)
}

function toRadarScores(counts, total) {
  const t = total || 1
  const out = {}
  for (const k of ARCHETYPE_KEYS) {
    out[k] = Math.round((counts[k] / t) * 100)
  }
  return out
}

export function computeResults(answers, selectedDomains) {
  const perceptionAnswers = []
  const behaviorAnswers = []
  for (const a of answers) {
    const q = ALL_QUESTIONS.find(q => q.id === a.questionId)
    if (q?.layer === 'perception') perceptionAnswers.push(a)
    else behaviorAnswers.push(a)
  }

  const beliefCounts   = countArchetypes(perceptionAnswers)
  const behaviorCounts = countArchetypes(behaviorAnswers)
  const totalCounts    = countArchetypes(answers)

  const beliefArchetype   = getDominant(beliefCounts)
  const behaviorArchetype = getDominant(behaviorCounts)

  // Primary archetype is determined by behavior layer only (what users actually do)
  const primaryArchetype = behaviorArchetype

  const beliefScores   = toRadarScores(beliefCounts,   perceptionAnswers.length)
  const behaviorScores = toRadarScores(behaviorCounts, behaviorAnswers.length)

  const archetypeRadarData = ARCHETYPE_KEYS.map(key => ({
    subject: ARCHETYPES[key].name.replace('The ', ''),
    belief:   beliefScores[key],
    behavior: behaviorScores[key],
  }))

  const beliefName   = ARCHETYPES[beliefArchetype].name
  const behaviorName = ARCHETYPES[behaviorArchetype].name

  const gapCallout = beliefArchetype === behaviorArchetype
    ? {
        hasGap: false,
        beliefLabel: beliefName,
        behaviorLabel: behaviorName,
        headline: `Consistent ${beliefName}.`,
        subtext: 'Your beliefs about AI and your actual behaviors align. That consistency is rare and worth understanding.',
      }
    : {
        hasGap: true,
        beliefLabel: beliefName,
        behaviorLabel: behaviorName,
        headline: `You think like ${beliefName}. But you act like ${behaviorName}.`,
        subtext: 'The gap between how you think about AI and how you actually use it is the core insight of your Archetypes.ai profile.',
      }

  const weights = { amplifier: 100, experimenter: 60, skeptic: 50, delegator: 30 }
  const domainScores = {}
  for (const domain of selectedDomains) {
    const domainAnswers = answers.filter(a => {
      const q = ALL_QUESTIONS.find(q => q.id === a.questionId)
      return q?.domains?.includes(domain)
    })
    if (domainAnswers.length === 0) {
      domainScores[domain] = 55
    } else {
      const total = domainAnswers.reduce((sum, a) => sum + (weights[a.archetype] || 50), 0)
      domainScores[domain] = Math.round(25 + (total / domainAnswers.length / 100) * 70)
    }
  }

  return {
    archetypeCounts: totalCounts,
    beliefCounts,
    behaviorCounts,
    primaryArchetype,
    beliefArchetype,
    behaviorArchetype,
    archetype:             ARCHETYPES[primaryArchetype],
    beliefArchetypeData:   ARCHETYPES[beliefArchetype],
    behaviorArchetypeData: ARCHETYPES[behaviorArchetype],
    gapCallout,
    archetypeRadarData,
    domainScores,
    totalAnswered: answers.length,
  }
}
