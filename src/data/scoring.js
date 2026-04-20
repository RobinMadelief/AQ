import { ARCHETYPES } from './archetypes.js'
import { ALL_QUESTIONS } from './questions.js'

const TIEBREAKER = ['architect', 'amplifier', 'experimenter', 'skeptic', 'delegator']
const ARCHETYPE_KEYS = ['skeptic', 'delegator', 'experimenter', 'amplifier', 'architect']

// Likert statement → which archetypes score high (agree = signal) or low (disagree = signal)
const LIKERT_MAP = {
  l_1: { high: ['amplifier', 'architect'], low: ['skeptic', 'delegator'] },
  l_2: { high: ['delegator', 'amplifier', 'architect'], low: ['skeptic'] },
  l_3: { high: ['amplifier', 'architect'], low: ['skeptic', 'delegator'] },
  l_4: { high: ['amplifier', 'architect'], low: ['experimenter', 'delegator'] },
  l_5: { high: ['architect'], low: ['skeptic', 'delegator', 'experimenter'] },
}

function zeroCounts() {
  return { skeptic: 0, delegator: 0, experimenter: 0, amplifier: 0, architect: 0 }
}

function countArchetypes(answerSet) {
  const counts = zeroCounts()
  for (const a of answerSet) {
    if (a.archetype && counts[a.archetype] !== undefined) counts[a.archetype]++
  }
  return counts
}

function getDominant(scores) {
  const max = Math.max(...Object.values(scores))
  return TIEBREAKER.find(k => scores[k] === max)
}

function toRadarScores(counts, total) {
  const t = total || 1
  const out = {}
  for (const k of ARCHETYPE_KEYS) {
    out[k] = Math.round((counts[k] / t) * 100)
  }
  return out
}

// Compute belief scores (0–100) from Likert answers only
function computeLikertBeliefScores(likertAnswers) {
  const rawScores = zeroCounts()
  const n = likertAnswers.length

  for (const answer of likertAnswers) {
    const map = LIKERT_MAP[answer.questionId]
    if (!map) continue
    const v = answer.likertValue  // 1–5
    const highScore = (v - 1) / 4   // 0 at v=1, 1.0 at v=5
    const lowScore  = (5 - v) / 4   // 1.0 at v=1, 0 at v=5

    for (const k of ARCHETYPE_KEYS) {
      if (map.high.includes(k)) {
        rawScores[k] += highScore
      } else if (map.low.includes(k)) {
        rawScores[k] += lowScore
      } else {
        rawScores[k] += 0.5  // neutral — statement does not discriminate this archetype
      }
    }
  }

  const result = {}
  for (const k of ARCHETYPE_KEYS) {
    result[k] = n > 0 ? Math.round((rawScores[k] / n) * 100) : 0
  }
  return result
}

export function computeResults(answers, selectedDomains) {
  // Split answers by type
  const likertAnswers   = answers.filter(a => a.likertValue !== undefined)
  const behaviorAnswers = answers.filter(a => a.archetype  !== undefined)

  // Behavior counts drive the primary archetype
  const behaviorCounts  = countArchetypes(behaviorAnswers)
  const behaviorArchetype = getDominant(behaviorCounts)

  // Likert answers drive the belief profile
  const beliefScores    = computeLikertBeliefScores(likertAnswers)
  const beliefArchetype = getDominant(beliefScores)

  // Primary archetype is behavior-only
  const primaryArchetype = behaviorArchetype

  const behaviorRadarScores = toRadarScores(behaviorCounts, behaviorAnswers.length)

  const archetypeRadarData = ARCHETYPE_KEYS.map(key => ({
    subject:  ARCHETYPES[key].name.replace('The ', ''),
    belief:   beliefScores[key],
    behavior: behaviorRadarScores[key],
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

  const weights = { architect: 100, amplifier: 80, experimenter: 60, skeptic: 50, delegator: 30 }
  const domainScores = {}
  for (const domain of selectedDomains) {
    const domainAnswers = behaviorAnswers.filter(a => {
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
    archetypeCounts: behaviorCounts,
    beliefCounts: beliefScores,
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
