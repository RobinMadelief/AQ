// Scenario-based questions in two layers.
// layer: 'perception' — what the user believes about AI (5 questions, always shown)
// layer: 'behavior'   — what the user actually does with AI (domain/context filtered, 10 shown)
//
// Each answer maps to one of four archetypes: skeptic | delegator | experimenter | amplifier
// Answer order is shuffled at runtime in selectQuestions() so the mapping is never predictable.

// ─── LAYER 1: PERCEPTION (Belief) ─────────────────────────────────────────────
// Philosophical, provocative, almost uncomfortable. Reveals mindset, not behavior.

const PERCEPTION_QUESTIONS = [
  {
    id: 'p_1',
    layer: 'perception',
    domains: [],
    context: null,
    situation: null,
    question: 'Be honest: when you use AI for work or study, do you feel empowered, or a little like you\'re cheating?',
    answers: [
      { text: 'Mostly like I\'m cheating, if I\'m honest. Doing it myself is the part that actually means something.', archetype: 'skeptic' },
      { text: 'Empowered, completely. If AI can handle it, that\'s exactly the point.', archetype: 'delegator' },
      { text: 'A bit of both. It really depends on which tool I\'m using and how.', archetype: 'experimenter' },
      { text: 'Empowered. Knowing how to use AI well is itself a skill worth owning.', archetype: 'amplifier' },
    ],
  },
  {
    id: 'p_2',
    layer: 'perception',
    domains: [],
    context: null,
    situation: null,
    question: 'When AI produces something (a plan, a piece of writing, a solution) and you guided it but didn\'t make it, do you consider that work authentically yours?',
    answers: [
      { text: 'No. If I didn\'t make it, it isn\'t mine, regardless of what I told it to do.', archetype: 'skeptic' },
      { text: 'Yes, completely. I defined the outcome; the method is just a detail.', archetype: 'delegator' },
      { text: 'It depends on how closely the tool understood what I actually wanted.', archetype: 'experimenter' },
      { text: 'Yes. If the thinking behind it was mine, the output is mine.', archetype: 'amplifier' },
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
      { text: 'Something I watch carefully and use sparingly. I\'d rather keep my own judgment intact.', archetype: 'skeptic' },
      { text: 'A powerful assistant I\'ve offloaded a significant amount of work to.', archetype: 'delegator' },
      { text: 'An ecosystem of tools I\'m constantly exploring, switching, and testing.', archetype: 'experimenter' },
      { text: 'A thinking partner I\'ve learned to collaborate with on my own terms.', archetype: 'amplifier' },
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
      { text: 'Unease. If machines do it better, I want to understand what that leaves for us.', archetype: 'skeptic' },
      { text: 'Relief. That means more can be handed off, and I can focus on what I want to focus on.', archetype: 'delegator' },
      { text: 'Excitement. More capability means more to explore, more to experiment with.', archetype: 'experimenter' },
      { text: 'Curiosity. The interesting question becomes: what do humans choose to do with that capability?', archetype: 'amplifier' },
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
      { text: 'Neither, mostly. I\'d rather develop the skill myself than become dependent on a shortcut.', archetype: 'skeptic' },
      { text: 'Faster, without question. Whether it makes me better is a separate question I haven\'t fully answered.', archetype: 'delegator' },
      { text: 'I\'m still figuring out which tools actually develop me versus just speed up my output.', archetype: 'experimenter' },
      { text: 'Better, intentionally. I try to use it for things that stretch my thinking, not replace it.', archetype: 'amplifier' },
    ],
  },
]

// ─── LAYER 2: BEHAVIOR ────────────────────────────────────────────────────────
// Scenario-based, domain/context filtered. Reveals what the user actually does.

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
      { text: 'I write the whole draft myself. I know this client, and the proposal needs my voice and my thinking.', archetype: 'skeptic' },
      { text: 'I describe the client and goals to AI and use its draft as my starting point, editing as I go.', archetype: 'delegator' },
      { text: 'I search for the best proposal AI tool and experiment with a few before settling on an approach.', archetype: 'experimenter' },
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
      { text: 'I write it myself. It\'s a quick email and I want it to sound like me.', archetype: 'skeptic' },
      { text: 'I paste my rough notes into AI and send what it produces with minor tweaks.', archetype: 'delegator' },
      { text: 'I use a meeting transcription and summarization tool I recently discovered.', archetype: 'experimenter' },
      { text: 'I write the key decisions myself, then use AI to format and polish the language.', archetype: 'amplifier' },
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
      { text: 'I roll up my sleeves and work through it manually, using tools I trust and understand.', archetype: 'skeptic' },
      { text: 'I use an AI data analysis tool to generate insights and present those directly.', archetype: 'delegator' },
      { text: 'I experiment with a few AI data tools to see which gives the best output fastest.', archetype: 'experimenter' },
      { text: 'I use AI to surface patterns quickly, then dig into the most interesting ones myself to validate.', archetype: 'amplifier' },
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
      { text: 'I\'m skeptical. If I automate that part, I\'ll lose the understanding that comes from doing it.', archetype: 'skeptic' },
      { text: 'I\'m in. Anything that saves me time is worth trying.', archetype: 'delegator' },
      { text: 'I\'m excited to try it alongside the other tools I\'ve been testing.', archetype: 'experimenter' },
      { text: 'I ask: which part of this workflow actually needs my judgment? I automate the rest and keep that part.', archetype: 'amplifier' },
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
      { text: 'I write it entirely myself. This is exactly the kind of judgment that shouldn\'t be delegated.', archetype: 'skeptic' },
      { text: 'I use AI to draft it from the bullet points I provide, then sign off with minor edits.', archetype: 'delegator' },
      { text: 'I try a few different approaches (AI draft, template tools) to see what produces the most useful output.', archetype: 'experimenter' },
      { text: 'I write my own observations first, then use AI to help structure and improve the framing.', archetype: 'amplifier' },
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
      { text: 'I re-read the section, look for a different textbook, or ask a classmate. I want to understand it myself.', archetype: 'skeptic' },
      { text: 'I ask AI to explain it simply and move on once I feel like I get it.', archetype: 'delegator' },
      { text: 'I try a few different AI tools (one for explanation, one for visualizations) to see what clicks.', archetype: 'experimenter' },
      { text: 'I use AI to explain it, then test my own understanding by explaining it back without looking.', archetype: 'amplifier' },
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
      { text: 'I write the entire essay myself. The thinking process is part of why I\'m doing this.', archetype: 'skeptic' },
      { text: 'I use AI to draft the essay, then review and edit to make sure it covers the key points.', archetype: 'delegator' },
      { text: 'I try a few AI writing tools to see which produces the strongest argument.', archetype: 'experimenter' },
      { text: 'I develop my argument myself, use AI to challenge my reasoning, then write the final essay myself.', archetype: 'amplifier' },
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
      { text: 'I find books, courses, and mentors. I learn better through structured human-created material.', archetype: 'skeptic' },
      { text: 'I ask AI to create a full learning plan for me and follow it.', archetype: 'delegator' },
      { text: 'I search for the latest AI-powered learning tools and try several to find the best one.', archetype: 'experimenter' },
      { text: 'I define what "good" looks like for me, use AI to surface resources and fill gaps, then adapt as I go.', archetype: 'amplifier' },
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
      { text: 'I sit with it, think it through myself, and decide whether I still agree with my original judgment.', archetype: 'skeptic' },
      { text: 'I ask AI whether my approach was correct and use its response to decide how to reply.', archetype: 'delegator' },
      { text: 'I search for other perspectives using several AI tools to build a broader picture.', archetype: 'experimenter' },
      { text: 'I use AI to steelman both sides of the argument, then form my own response from that.', archetype: 'amplifier' },
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
      { text: 'I read reviews, talk to people who use similar products, and trust my own research process.', archetype: 'skeptic' },
      { text: 'I describe my needs to AI and buy whatever it recommends.', archetype: 'delegator' },
      { text: 'I try a few different comparison and research AI tools to find the best option.', archetype: 'experimenter' },
      { text: 'I form my own shortlist based on what I know I need, then use AI to surface anything I might have missed.', archetype: 'amplifier' },
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
      { text: 'I take a few minutes to think about it and give them my honest perspective.', archetype: 'skeptic' },
      { text: 'I quietly ask AI for advice before responding to them.', archetype: 'delegator' },
      { text: 'I look up a few AI-powered advice or coaching tools that might help me help them.', archetype: 'experimenter' },
      { text: 'I listen first, form my own view, then later use AI to check if I\'m missing any important angles.', archetype: 'amplifier' },
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
      { text: 'I enjoy the planning myself: research, maps, building an itinerary by hand. It\'s part of the experience.', archetype: 'skeptic' },
      { text: 'I give AI my dates, preferences, and budget and have it generate the full itinerary.', archetype: 'delegator' },
      { text: 'I try several AI travel planning tools and compare what they suggest.', archetype: 'experimenter' },
      { text: 'I decide what I want the trip to feel like, use AI to fill in logistics and surface ideas, then make the final calls myself.', archetype: 'amplifier' },
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
      { text: 'I reflect on what\'s changed recently, make some adjustments, and observe the results myself.', archetype: 'skeptic' },
      { text: 'I ask an AI health assistant for a sleep improvement plan and follow it.', archetype: 'delegator' },
      { text: 'I download a few different sleep tracking and optimization apps to find the best one.', archetype: 'experimenter' },
      { text: 'I track my own patterns for a week, then use AI to analyze the data and suggest specific adjustments.', archetype: 'amplifier' },
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
      { text: 'I try to understand why I keep stopping and address the root cause myself.', archetype: 'skeptic' },
      { text: 'I use an AI fitness app that generates my workouts and tracks my adherence automatically.', archetype: 'delegator' },
      { text: 'I try several AI fitness tools and coaching apps to find one that keeps me motivated.', archetype: 'experimenter' },
      { text: 'I design a routine based on what I know about myself, then use AI to monitor and adjust based on how I\'m actually responding.', archetype: 'amplifier' },
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
      { text: 'I read the study myself, look for critiques, and make up my own mind.', archetype: 'skeptic' },
      { text: 'I ask AI to summarize the evidence and tell me whether I should change my diet.', archetype: 'delegator' },
      { text: 'I search for several AI-generated summaries and tools that analyze nutrition research.', archetype: 'experimenter' },
      { text: 'I use AI to surface related research and counterarguments, then evaluate the evidence myself.', archetype: 'amplifier' },
    ],
  },

  // ── Creativity ───────────────────────────────────────────────────────────────
  {
    id: 'cr_1',
    layer: 'behavior',
    domains: ['Creativity'],
    context: null,
    situation: 'You\'re working on a creative project (a design, a piece of writing, or a presentation) and you\'re stuck at the ideation stage.',
    question: 'How do you get unstuck?',
    answers: [
      { text: 'I step away from it, take a walk, and wait for the ideas to come naturally.', archetype: 'skeptic' },
      { text: 'I describe the project to AI and use the ideas it generates as my direction.', archetype: 'delegator' },
      { text: 'I try several AI creative tools (image generators, brainstorming apps, writing assistants) to spark something.', archetype: 'experimenter' },
      { text: 'I generate my own rough ideas first, then use AI to expand and pressure-test them, keeping what resonates.', archetype: 'amplifier' },
    ],
  },
  {
    id: 'cr_2',
    layer: 'behavior',
    domains: ['Creativity'],
    context: null,
    situation: 'You need to produce a piece of creative writing (a short story, a speech, or a blog post) that represents you.',
    question: 'How do you produce it?',
    answers: [
      { text: 'I write it entirely myself. Something that represents me needs to come from me.', archetype: 'skeptic' },
      { text: 'I use AI to write the draft and refine it until it sounds close enough to my style.', archetype: 'delegator' },
      { text: 'I experiment with different AI writing tools and styles to find something interesting.', archetype: 'experimenter' },
      { text: 'I write a rough draft first to capture my voice, then use AI to sharpen specific sections without losing it.', archetype: 'amplifier' },
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
      { text: 'I do what I always do: sit down and work. I\'ll produce something authentic even under pressure.', archetype: 'skeptic' },
      { text: 'I use AI to produce the work quickly. The deadline matters more than the process right now.', archetype: 'delegator' },
      { text: 'I find an AI tool optimized for fast creative output and use that.', archetype: 'experimenter' },
      { text: 'I decide on the core idea quickly myself, then use AI to help execute it efficiently without losing my direction.', archetype: 'amplifier' },
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

// Shuffles an array in place (Fisher-Yates)
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// Builds the full 15-question set: 5 perception + 10 behavior (domain/context filtered).
// Answer choices are shuffled per question so the archetype mapping is never predictable.
export function selectQuestions(context, selectedDomains) {
  // Always include all 5 perception questions (shuffled answers only)
  const perceptionQs = PERCEPTION_QUESTIONS.map(q => ({
    ...q,
    answers: shuffle([...q.answers]),
  }))

  // Filter behavior questions by domain and context
  const behaviorEligible = BEHAVIOR_QUESTIONS.filter(q => {
    const domainMatch = q.domains.some(d => selectedDomains.includes(d))
    const contextMatch = !q.context || q.context.includes(context)
    return domainMatch && contextMatch
  })

  // Pick ~10 behavior questions balanced across selected domains
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

  // Shuffle question order and shuffle each question's answers
  const behaviorQs = shuffle(selected).map(q => ({
    ...q,
    answers: shuffle([...q.answers]),
  }))

  return [...perceptionQs, ...behaviorQs]
}
