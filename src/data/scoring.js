// Scoring logic: tally archetype answer counts and determine primary archetype + domain scores

import { ARCHETYPES } from './archetypes.js'
import { ALL_QUESTIONS } from './questions.js'

/**
 * Given the array of user answers [{questionId, archetype}], compute:
 * - archetypeCounts: { skeptic: N, delegator: N, experimenter: N, amplifier: N }
 * - primaryArchetype: string key of dominant archetype
 * - domainScores: { [domain]: 0-100 } based on how "Amplifier-aligned" answers are in that domain
 * - radarData: formatted for Recharts RadarChart
 */
export function computeResults(answers, selectedDomains) {
  const archetypeCounts = { skeptic: 0, delegator: 0, experimenter: 0, amplifier: 0 }

  for (const answer of answers) {
    if (archetypeCounts[answer.archetype] !== undefined) {
      archetypeCounts[answer.archetype]++
    }
  }

  // Primary archetype = highest count; ties broken by order: amplifier > experimenter > skeptic > delegator
  const tiebreaker = ['amplifier', 'experimenter', 'skeptic', 'delegator']
  const maxCount = Math.max(...Object.values(archetypeCounts))
  const tied = tiebreaker.filter(k => archetypeCounts[k] === maxCount)
  const primaryArchetype = tied[0]

  // Domain scores: for each selected domain, score = avg of archetype quality weights for answers in that domain
  // Weights: amplifier=100, experimenter=60, skeptic=50, delegator=30
  const weights = { amplifier: 100, experimenter: 60, skeptic: 50, delegator: 30 }

  const domainScores = {}
  for (const domain of selectedDomains) {
    const domainAnswers = answers.filter(a => {
      const q = ALL_QUESTIONS.find(q => q.id === a.questionId)
      return q && q.domains.includes(domain)
    })
    if (domainAnswers.length === 0) {
      domainScores[domain] = 55 // default neutral score
    } else {
      const total = domainAnswers.reduce((sum, a) => sum + (weights[a.archetype] || 50), 0)
      // Scale slightly to avoid 0 or 100 extremes — keep in 25-95 range
      const raw = total / domainAnswers.length
      domainScores[domain] = Math.round(25 + (raw / 100) * 70)
    }
  }

  // RadarChart expects: [{ domain: 'Work', score: 75 }, ...]
  const radarData = selectedDomains.map(domain => ({
    domain: shortenDomainLabel(domain),
    fullDomain: domain,
    score: domainScores[domain],
  }))

  return {
    archetypeCounts,
    primaryArchetype,
    archetype: ARCHETYPES[primaryArchetype],
    domainScores,
    radarData,
    totalAnswered: answers.length,
  }
}

function shortenDomainLabel(domain) {
  const map = {
    'Work & Productivity': 'Work',
    'Learning & Education': 'Learning',
    'Daily Life': 'Daily Life',
    'Health & Performance': 'Health',
    'Creativity': 'Creativity',
  }
  return map[domain] || domain
}
