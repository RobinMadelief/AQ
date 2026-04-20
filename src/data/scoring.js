// Scoring: splits answers into perception (belief) vs behavior layers,
// computes dominant archetype for each, and builds radar data for both.

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

// Returns a 0–100 score for each archetype given a set of answers
function toRadarScores(counts, total) {
  const t = total || 1
  const out = {}
  for (const k of ARCHETYPE_KEYS) {
    out[k] = Math.round((counts[k] / t) * 100)
  }
  return out
}

export function computeResults(answers, selectedDomains) {
  // Split answers into perception and behavior layers
  const perceptionAnswers = []
  const behaviorAnswers = []
  for (const a of answers) {
    const q = ALL_QUESTIONS.find(q => q.id === a.questionId)
    if (q?.layer === 'perception') perceptionAnswers.push(a)
    else behaviorAnswers.push(a)
  }

  // Count archetype selections per layer
  const beliefCounts  = countArchetypes(perceptionAnswers)
  const behaviorCounts = countArchetypes(behaviorAnswers)
  const totalCounts   = countArchetypes(answers)

  // Dominant archetype per layer
  const beliefArchetype   = getDominant(beliefCounts)
  const behaviorArchetype = getDominant(behaviorCounts)
  const primaryArchetype  = getDominant(totalCounts)

  // Radar data: 4 axes (one per archetype), two series (belief + behavior)
  const beliefScores   = toRadarScores(beliefCounts,  perceptionAnswers.length)
  const behaviorScores = toRadarScores(behaviorCounts, behaviorAnswers.length)

  const archetypeRadarData = ARCHETYPE_KEYS.map(key => ({
    subject: ARCHETYPES[key].name.replace('The ', ''),
    belief:   beliefScores[key],
    behavior: behaviorScores[key],
  }))

  // Gap callout — the headline moment on the results page
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

  // Domain scores (amplifier-alignment %) — used in next steps selection
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
    // Raw counts
    archetypeCounts: totalCounts,
    beliefCounts,
    behaviorCounts,
    // Dominant archetypes
    primaryArchetype,
    beliefArchetype,
    behaviorArchetype,
    // Archetype data objects
    archetype:            ARCHETYPES[primaryArchetype],
    beliefArchetypeData:  ARCHETYPES[beliefArchetype],
    behaviorArchetypeData: ARCHETYPES[behaviorArchetype],
    // Chart + callout
    gapCallout,
    archetypeRadarData,
    domainScores,
    totalAnswered: answers.length,
  }
}
