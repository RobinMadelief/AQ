// Scenario-based questions in two layers.
// layer: 'perception' — what the user believes about AI (5 questions, always shown)
// layer: 'behavior'   — what the user actually does with AI (domain/context filtered, 10 shown)
//
// Each answer maps to one of four archetypes: skeptic | delegator | experimenter | amplifier
// Answer order is shuffled at runtime in selectQuestions() so the mapping is never predictable.

// ─── LAYER 1: PERCEPTION (Belief) ─────────────────────────────────────────────

const PERCEPTION_QUESTIONS = [
  {
    id: 'p_1',
    layer: 'perception',
    domains: [],
    context: null,
    situation: null,
    question: 'Be honest: when you use AI for work or study, do you feel empowered, or a little like you\'re cheating?',
    answers: [
      { text: 'Mostly like I\'m cheating. Doing it myself is what actually matters.', archetype: 'skeptic' },
      { text: 'Empowered. If AI can do it well, that\'s the whole idea.', archetype: 'delegator' },
      { text: 'A bit of both — depends on the tool and how I\'m using it.', archetype: 'experimenter' },
      { text: 'Empowered. Using AI well is its own skill.', archetype: 'amplifier' },
    ],
  },
  {
    id: 'p_2',
    layer: 'perception',
    domains: [],
    context: null,
    situation: null,
    question: 'When AI produces something and you guided it but didn\'t make it, do you consider that work authentically yours?',
    answers: [
      { text: 'No. If I didn\'t make it, it\'s not mine.', archetype: 'skeptic' },
      { text: 'Yes. I defined the outcome — the method is just a detail.', archetype: 'delegator' },
      { text: 'Depends on how well the tool got what I was actually after.', archetype: 'experimenter' },
      { text: 'Yes. If the thinking was mine, the output is mine.', archetype: 'amplifier' },
    ],
  },
  {
    id: 'p_3',
    layer: 'perception',
    domains: [],
    context: null,
    situation: null,
    question: 'What\'s the most honest description of how you relate to AI right now?',
    answers: [
      { text: 'Something I use sparingly and watch carefully. My own judgment comes first.', archetype: 'skeptic' },
      { text: 'An assistant I\'ve handed a significant amount of my work to.', archetype: 'delegator' },
      { text: 'A set of tools I\'m constantly switching between, testing, and comparing.', archetype: 'experimenter' },
      { text: 'A thinking partner I\'ve figured out how to work with on my own terms.', archetype: 'amplifier' },
    ],
  },
  {
    id: 'p_4',
    layer: 'perception',
    domains: [],
    context: null,
    situation: null,
    question: 'If AI becomes capable of doing most thinking work better than humans, what\'s your most honest first reaction?',
    answers: [
      { text: 'Unease. I\'d want to understand what that actually leaves for people.', archetype: 'skeptic' },
      { text: 'Relief. More can be handed off and I can focus on what I want.', archetype: 'delegator' },
      { text: 'Excitement. More capability means more to explore.', archetype: 'experimenter' },
      { text: 'Curiosity. What do humans choose to keep for themselves?', archetype: 'amplifier' },
    ],
  },
  {
    id: 'p_5',
    layer: 'perception',
    domains: [],
    context: null,
    situation: null,
    question: 'Here\'s an uncomfortable one: are you using AI in a way that makes you better, or just faster?',
    answers: [
      { text: 'Neither, mostly. I\'d rather build the skill myself than rely on a shortcut.', archetype: 'skeptic' },
      { text: 'Faster, mostly. Whether it makes me better is a question I haven\'t fully settled.', archetype: 'delegator' },
      { text: 'Still figuring out which tools actually develop me versus just speed up output.', archetype: 'experimenter' },
      { text: 'Better, intentionally. I use it for things that stretch my thinking, not replace it.', archetype: 'amplifier' },
    ],
  },
]

// ─── LAYER 2: BEHAVIOR ────────────────────────────────────────────────────────

const BEHAVIOR_QUESTIONS = [
  // ── Work & Productivity ──────────────────────────────────────────────────────
  {
    id: 'wp_1',
    layer: 'behavior',
    domains: ['Work & Productivity'],
    context: null,
    situation: 'You have a first draft of a client proposal to write by end of day. You\'ve worked with this client before and know what they value.',
    question: 'How do you approach it?',
    answers: [
      { text: 'I write it myself. I know this client and the proposal needs my voice.', archetype: 'skeptic' },
      { text: 'I describe the client and goals to AI and use its draft as my starting point.', archetype: 'delegator' },
      { text: 'I look for a good tool for this, try a couple, and see what sticks.', archetype: 'experimenter' },
      { text: 'I outline the key arguments myself, then use AI to sharpen the language and check for gaps.', archetype: 'amplifier' },
    ],
  },
  {
    id: 'wp_2',
    layer: 'behavior',
    domains: ['Work & Productivity'],
    context: null,
    situation: 'After a long meeting, you need to send a follow-up email summarizing key decisions and next steps.',
    question: 'What do you do?',
    answers: [
      { text: 'I write it myself. It\'s quick and I want it to sound like me.', archetype: 'skeptic' },
      { text: 'I paste my rough notes into AI and send what it produces with minor tweaks.', archetype: 'delegator' },
      { text: 'I run it through a meeting summary tool I\'ve been trying.', archetype: 'experimenter' },
      { text: 'I write the key decisions myself, then use AI to clean up the language.', archetype: 'amplifier' },
    ],
  },
  {
    id: 'wp_3',
    layer: 'behavior',
    domains: ['Work & Productivity'],
    context: null,
    situation: 'You\'re asked to analyze a large dataset you\'ve never worked with before. The deadline is tight.',
    question: 'How do you handle it?',
    answers: [
      { text: 'I work through it manually with tools I understand.', archetype: 'skeptic' },
      { text: 'I use an AI data analysis tool to generate the insights and present those.', archetype: 'delegator' },
      { text: 'I try a couple of AI data tools and see which one gets there fastest.', archetype: 'experimenter' },
      { text: 'I use AI to surface the patterns, then dig into the interesting ones myself.', archetype: 'amplifier' },
    ],
  },
  {
    id: 'wp_4',
    layer: 'behavior',
    domains: ['Work & Productivity'],
    context: ['Professional', 'Both'],
    situation: 'A colleague shares a new AI tool that promises to automate a significant part of your workflow.',
    question: 'What\'s your instinct?',
    answers: [
      { text: 'I\'m skeptical. Automating that part means losing the understanding that comes with doing it.', archetype: 'skeptic' },
      { text: 'I\'m in. Anything that saves time is worth trying.', archetype: 'delegator' },
      { text: 'I\'m curious — I want to see how it compares to the other tools I\'ve been testing.', archetype: 'experimenter' },
      { text: 'I think about which parts actually need my judgment, then automate the rest.', archetype: 'amplifier' },
    ],
  },
  {
    id: 'wp_5',
    layer: 'behavior',
    domains: ['Work & Productivity'],
    context: null,
    situation: 'You\'ve been asked to write a performance review for a direct report. It\'s a thoughtful, nuanced person.',
    question: 'How do you write it?',
    answers: [
      { text: 'I write it entirely myself. This is the kind of judgment that shouldn\'t be delegated.', archetype: 'skeptic' },
      { text: 'I give AI my notes and sign off with minor edits.', archetype: 'delegator' },
      { text: 'I try a few different approaches to see what produces the most useful output.', archetype: 'experimenter' },
      { text: 'I write my own observations first, then use AI to help structure the framing.', archetype: 'amplifier' },
    ],
  },

  // ── Learning & Education ─────────────────────────────────────────────────────
  {
    id: 'le_1',
    layer: 'behavior',
    domains: ['Learning & Education'],
    context: null,
    situation: 'You\'re studying a difficult concept for an exam next week. You\'ve read the chapter but still feel unclear on one section.',
    question: 'What do you do?',
    answers: [
      { text: 'I re-read it, find a different source, or ask someone. I want to figure it out myself.', archetype: 'skeptic' },
      { text: 'I ask AI to explain it and move on once it clicks.', archetype: 'delegator' },
      { text: 'I try a couple of tools — one for explanation, one for visuals — and see what lands.', archetype: 'experimenter' },
      { text: 'I ask AI to explain it, then test myself by explaining it back without looking.', archetype: 'amplifier' },
    ],
  },
  {
    id: 'le_2',
    layer: 'behavior',
    domains: ['Learning & Education'],
    context: ['Student', 'Both'],
    situation: 'You have an essay assignment on a topic you find genuinely interesting. You have enough time to write it well.',
    question: 'How do you approach the writing?',
    answers: [
      { text: 'I write the whole thing myself. The thinking process is part of why I\'m doing this.', archetype: 'skeptic' },
      { text: 'I use AI to draft it, then review to make sure it covers the key points.', archetype: 'delegator' },
      { text: 'I try a few AI writing tools to see which builds the strongest argument.', archetype: 'experimenter' },
      { text: 'I develop my argument myself, use AI to challenge it, then write the final essay myself.', archetype: 'amplifier' },
    ],
  },
  {
    id: 'le_3',
    layer: 'behavior',
    domains: ['Learning & Education'],
    context: null,
    situation: 'You want to learn a new skill outside your current expertise, something you\'ve always been curious about.',
    question: 'How do you structure your learning?',
    answers: [
      { text: 'I find books, courses, and people to learn from. I like structured, human-made material.', archetype: 'skeptic' },
      { text: 'I ask AI to map it out for me and follow what it suggests.', archetype: 'delegator' },
      { text: 'I look for the best AI learning tools for this and try a few to find the right one.', archetype: 'experimenter' },
      { text: 'I define what good looks like, use AI to surface resources and fill gaps, then adapt as I go.', archetype: 'amplifier' },
    ],
  },
  {
    id: 'le_4',
    layer: 'behavior',
    domains: ['Learning & Education'],
    context: ['Student', 'Both'],
    situation: 'You receive feedback on a piece of work that you disagree with. You think your approach was correct.',
    question: 'What do you do next?',
    answers: [
      { text: 'I sit with it, think it through, and decide if I still stand by my original call.', archetype: 'skeptic' },
      { text: 'I ask AI whether my approach was right and let that shape my response.', archetype: 'delegator' },
      { text: 'I look for other perspectives using a few different tools to build a broader picture.', archetype: 'experimenter' },
      { text: 'I use AI to steelman both sides, then form my own response from that.', archetype: 'amplifier' },
    ],
  },

  // ── Daily Life ───────────────────────────────────────────────────────────────
  {
    id: 'dl_1',
    layer: 'behavior',
    domains: ['Daily Life'],
    context: null,
    situation: 'You need to make a significant purchase, like a new laptop or piece of equipment, and want to make the right choice.',
    question: 'How do you decide?',
    answers: [
      { text: 'I read reviews, talk to people who use similar products, and trust my own research.', archetype: 'skeptic' },
      { text: 'I describe what I need to AI and buy what it recommends.', archetype: 'delegator' },
      { text: 'I use a few comparison tools and see what they each come up with.', archetype: 'experimenter' },
      { text: 'I build my own shortlist first, then use AI to flag anything I might have missed.', archetype: 'amplifier' },
    ],
  },
  {
    id: 'dl_2',
    layer: 'behavior',
    domains: ['Daily Life'],
    context: null,
    situation: 'A friend asks for advice about a difficult personal situation. You want to be helpful but you\'re not sure what to say.',
    question: 'What do you do?',
    answers: [
      { text: 'I think it through and tell them what I actually think.', archetype: 'skeptic' },
      { text: 'I quietly ask AI what to say before responding.', archetype: 'delegator' },
      { text: 'I look for a coaching or advice tool that might help me help them better.', archetype: 'experimenter' },
      { text: 'I listen first, form my own view, then later check if I\'m missing any important angles.', archetype: 'amplifier' },
    ],
  },
  {
    id: 'dl_3',
    layer: 'behavior',
    domains: ['Daily Life'],
    context: null,
    situation: 'You\'re planning a trip you\'ve been looking forward to for months.',
    question: 'How do you approach the planning?',
    answers: [
      { text: 'I enjoy the planning myself — research, maps, building the itinerary by hand.', archetype: 'skeptic' },
      { text: 'I give AI my dates and preferences and let it generate the full itinerary.', archetype: 'delegator' },
      { text: 'I compare what a few different AI travel tools come up with.', archetype: 'experimenter' },
      { text: 'I decide what I want the trip to feel like, use AI for logistics, then make the final calls myself.', archetype: 'amplifier' },
    ],
  },

  // ── Health & Performance ─────────────────────────────────────────────────────
  {
    id: 'hp_1',
    layer: 'behavior',
    domains: ['Health & Performance'],
    context: null,
    situation: 'You want to improve your sleep. You\'ve noticed it\'s been inconsistent for the past few weeks.',
    question: 'What do you do?',
    answers: [
      { text: 'I think about what\'s changed, make some adjustments, and watch what happens.', archetype: 'skeptic' },
      { text: 'I ask an AI health assistant for a sleep plan and follow it.', archetype: 'delegator' },
      { text: 'I download a few sleep tracking apps and see which one is most useful.', archetype: 'experimenter' },
      { text: 'I track my own patterns for a week, then use AI to suggest specific adjustments.', archetype: 'amplifier' },
    ],
  },
  {
    id: 'hp_2',
    layer: 'behavior',
    domains: ['Health & Performance'],
    context: null,
    situation: 'You\'re trying to build a consistent fitness routine but keep falling off track after a few weeks.',
    question: 'How do you approach this?',
    answers: [
      { text: 'I try to understand why I keep stopping and fix the root cause myself.', archetype: 'skeptic' },
      { text: 'I use an AI fitness app that generates my workouts and tracks my adherence.', archetype: 'delegator' },
      { text: 'I try several AI fitness and coaching apps to find one that actually works for me.', archetype: 'experimenter' },
      { text: 'I build the routine myself, then use AI to track and adjust it.', archetype: 'amplifier' },
    ],
  },
  {
    id: 'hp_3',
    layer: 'behavior',
    domains: ['Health & Performance'],
    context: null,
    situation: 'You read a study claiming a specific diet change dramatically improves cognitive performance.',
    question: 'How do you evaluate it?',
    answers: [
      { text: 'I read the study, look for critiques, and make up my own mind.', archetype: 'skeptic' },
      { text: 'I ask AI to summarize the evidence and tell me whether to change my diet.', archetype: 'delegator' },
      { text: 'I look for several AI-generated summaries and see where they land.', archetype: 'experimenter' },
      { text: 'I use AI to surface related research and counterarguments, then evaluate it myself.', archetype: 'amplifier' },
    ],
  },

  // ── Creativity ───────────────────────────────────────────────────────────────
  {
    id: 'cr_1',
    layer: 'behavior',
    domains: ['Creativity'],
    context: null,
    situation: 'You\'re working on a creative project and you\'re stuck at the ideation stage.',
    question: 'How do you get unstuck?',
    answers: [
      { text: 'I step away, take a walk, and wait for something to come naturally.', archetype: 'skeptic' },
      { text: 'I describe the project to AI and use whatever it comes up with as my direction.', archetype: 'delegator' },
      { text: 'I try a few AI creative tools — image generators, brainstorming apps — to spark something.', archetype: 'experimenter' },
      { text: 'I rough out my own ideas first, then use AI to expand and pressure-test them.', archetype: 'amplifier' },
    ],
  },
  {
    id: 'cr_2',
    layer: 'behavior',
    domains: ['Creativity'],
    context: null,
    situation: 'You need to produce a piece of creative writing — a short story, a speech, or a blog post — that represents you.',
    question: 'How do you produce it?',
    answers: [
      { text: 'I write it entirely myself. Something that represents me needs to come from me.', archetype: 'skeptic' },
      { text: 'I use AI to write a draft, then refine it until it sounds like me.', archetype: 'delegator' },
      { text: 'I try different AI writing tools and styles to see what\'s interesting.', archetype: 'experimenter' },
      { text: 'I write a rough draft myself to capture my voice, then use AI to sharpen specific sections.', archetype: 'amplifier' },
    ],
  },
  {
    id: 'cr_3',
    layer: 'behavior',
    domains: ['Creativity'],
    context: null,
    situation: 'You\'re collaborating on a creative project with others. Your contribution is due tomorrow and you haven\'t started.',
    question: 'What do you do?',
    answers: [
      { text: 'I sit down and work. I\'ll get something real done even under pressure.', archetype: 'skeptic' },
      { text: 'I use AI to get it done. The deadline matters more than the process right now.', archetype: 'delegator' },
      { text: 'I find a tool built for fast creative output and use that.', archetype: 'experimenter' },
      { text: 'I nail down the core idea quickly myself, then use AI to help execute it efficiently.', archetype: 'amplifier' },
    ],
  },
]

export const ALL_QUESTIONS = [...PERCEPTION_QUESTIONS, ...BEHAVIOR_QUESTIONS]

export const DOMAINS = [
  'Work & Productivity',
  'Learning & Education',
  'Daily Life',
  'Health & Performance',
  'Creativity',
]

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function selectQuestions(context, selectedDomains) {
  const perceptionQs = PERCEPTION_QUESTIONS.map(q => ({
    ...q,
    answers: shuffle([...q.answers]),
  }))

  const behaviorEligible = BEHAVIOR_QUESTIONS.filter(q => {
    const domainMatch = q.domains.some(d => selectedDomains.includes(d))
    const contextMatch = !q.context || q.context.includes(context)
    return domainMatch && contextMatch
  })

  const perDomain = Math.min(4, Math.floor(10 / selectedDomains.length))
  const selected = []
  const used = new Set()

  for (const domain of selectedDomains) {
    const domainQs = behaviorEligible.filter(q => q.domains.includes(domain) && !used.has(q.id))
    domainQs.slice(0, perDomain).forEach(q => { selected.push(q); used.add(q.id) })
  }

  const remaining = behaviorEligible.filter(q => !used.has(q.id))
  const needed = Math.min(10 - selected.length, remaining.length)
  selected.push(...remaining.slice(0, needed))

  const behaviorQs = shuffle(selected).map(q => ({
    ...q,
    answers: shuffle([...q.answers]),
  }))

  return [...perceptionQs, ...behaviorQs]
}
