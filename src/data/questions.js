// Questions in two layers.
// layer: 'perception' — five multiple-choice statements about AI beliefs (always shown)
// layer: 'behavior'   — scenario questions about actual AI use (domain/context filtered, 10 shown)
//
// All answers map to one of five archetypes: skeptic | delegator | experimenter | amplifier | architect
// Answer order is shuffled at runtime in selectQuestions() so the mapping is never predictable.

// ─── LAYER 1: PERCEPTION (Belief Statements, Multiple Choice) ─────────────────

const PERCEPTION_QUESTIONS = [
  {
    id: 'l_1',
    layer: 'perception',
    domains: [],
    context: null,
    situation: null,
    question: 'When I use AI for important work, I still feel like the author.',
    answers: [
      { text: 'Yes. I do the real thinking. AI handles the parts I do not care about.', archetype: 'skeptic' },
      { text: 'Not always, but that does not matter much to me. Good output is what counts.', archetype: 'delegator' },
      { text: 'It depends on the tool. Some feel like mine, some do not.', archetype: 'experimenter' },
      { text: 'Yes. AI extends my thinking, but my judgment shapes everything that matters.', archetype: 'amplifier' },
      { text: 'Yes. I designed the system that produced it, so authorship sits with me.', archetype: 'architect' },
    ],
  },
  {
    id: 'l_2',
    layer: 'perception',
    domains: [],
    context: null,
    situation: null,
    question: 'I find it hard to imagine doing my best work without AI.',
    answers: [
      { text: 'Not really. My best work comes from my own thinking, not tools.', archetype: 'skeptic' },
      { text: 'Yes. AI removes the friction that used to slow me down.', archetype: 'delegator' },
      { text: 'Somewhat. I keep finding new tools that make more things possible.', archetype: 'experimenter' },
      { text: 'Yes. AI helps me do more without trading away the thinking I care about.', archetype: 'amplifier' },
      { text: 'Yes. The systems I have built are central to how I work now.', archetype: 'architect' },
    ],
  },
  {
    id: 'l_3',
    layer: 'perception',
    domains: [],
    context: null,
    situation: null,
    question: 'AI has changed what I see as possible, not just how efficient I am.',
    answers: [
      { text: 'Not really. The possibilities were always there. I just have a faster tool.', archetype: 'skeptic' },
      { text: 'Yes. I can produce things now that I simply could not before.', archetype: 'delegator' },
      { text: 'Yes. Every tool I try opens up something I had not considered.', archetype: 'experimenter' },
      { text: 'Yes. AI raised the ceiling of what I can think through and produce.', archetype: 'amplifier' },
      { text: 'Yes. It changed the scale at which I can design and build things.', archetype: 'architect' },
    ],
  },
  {
    id: 'l_4',
    layer: 'perception',
    domains: [],
    context: null,
    situation: null,
    question: 'The more I use AI, the more deliberate I have become about when not to.',
    answers: [
      { text: 'That was my starting point. I never used it casually.', archetype: 'skeptic' },
      { text: 'Not really. If AI can help, I use it.', archetype: 'delegator' },
      { text: 'Somewhat. I am still working out which situations actually benefit from it.', archetype: 'experimenter' },
      { text: 'Yes. Knowing when to keep it out is part of using it well.', archetype: 'amplifier' },
      { text: 'Yes. I think carefully about which decisions need to stay outside the system.', archetype: 'architect' },
    ],
  },
  {
    id: 'l_5',
    layer: 'perception',
    domains: [],
    context: null,
    situation: null,
    question: 'I think about AI as infrastructure, not just a tool.',
    answers: [
      { text: 'I do not think about it that way. It is an occasional resource, nothing more.', archetype: 'skeptic' },
      { text: 'Not really. I use tools when I need them. Infrastructure feels like too much.', archetype: 'delegator' },
      { text: 'Somewhat. I see it more as a space to explore than something I build around.', archetype: 'experimenter' },
      { text: 'Partly. I have integrated it deeply enough that it shapes how I work.', archetype: 'amplifier' },
      { text: 'Yes. I build around it the same way you build around any core infrastructure.', archetype: 'architect' },
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
      { text: 'I run it through a pre-built proposal workflow I set up for exactly this type of work.', archetype: 'architect' },
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
      { text: 'My meeting notes feed into an automated pipeline that drafts and routes the email for me.', archetype: 'architect' },
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
      { text: 'I have an analysis workflow set up that handles this type of dataset automatically.', archetype: 'architect' },
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
      { text: 'I\'m curious. I want to see how it compares to the other tools I\'ve been testing.', archetype: 'experimenter' },
      { text: 'I think about which parts actually need my judgment, then automate the rest.', archetype: 'amplifier' },
      { text: 'I evaluate whether it fits into my existing system or if I should rebuild that layer.', archetype: 'architect' },
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
      { text: 'I have a structured review template and workflow that makes this repeatable and consistent.', archetype: 'architect' },
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
      { text: 'I try a couple of tools, one for explanation and one for visuals, and see what lands.', archetype: 'experimenter' },
      { text: 'I ask AI to explain it, then test myself by explaining it back without looking.', archetype: 'amplifier' },
      { text: 'I have a learning system set up that surfaces weak areas and routes me to the right explanation.', archetype: 'architect' },
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
      { text: 'I use a structured research-to-draft workflow that handles the scaffolding so I can focus on the ideas.', archetype: 'architect' },
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
      { text: 'I build a personal learning system with spaced repetition, notes, and progress tracking from the start.', archetype: 'architect' },
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
      { text: 'I run it through my research system to pull in relevant evidence, then make my case.', archetype: 'architect' },
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
      { text: 'I have a decision framework set up that I run purchases through automatically.', archetype: 'architect' },
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
      { text: 'I think it through myself. This kind of judgment is not something I route through a system.', archetype: 'architect' },
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
      { text: 'I enjoy the planning myself: research, maps, building the itinerary by hand.', archetype: 'skeptic' },
      { text: 'I give AI my dates and preferences and let it generate the full itinerary.', archetype: 'delegator' },
      { text: 'I compare what a few different AI travel tools come up with.', archetype: 'experimenter' },
      { text: 'I decide what I want the trip to feel like, use AI for logistics, then make the final calls myself.', archetype: 'amplifier' },
      { text: 'I have a travel planning template that handles the research and logistics automatically.', archetype: 'architect' },
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
      { text: 'I have a health tracking system that flags anomalies and surfaces recommendations automatically.', archetype: 'architect' },
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
      { text: 'I design a system with automated check-ins and adjustments so consistency is built in.', archetype: 'architect' },
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
      { text: 'I run it through my research pipeline to cross-reference it with what I already track.', archetype: 'architect' },
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
      { text: 'I try a few AI creative tools, image generators, brainstorming apps, to see what sparks something.', archetype: 'experimenter' },
      { text: 'I rough out my own ideas first, then use AI to expand and pressure-test them.', archetype: 'amplifier' },
      { text: 'I run the brief through a creative ideation workflow I have set up for exactly this.', archetype: 'architect' },
    ],
  },
  {
    id: 'cr_2',
    layer: 'behavior',
    domains: ['Creativity'],
    context: null,
    situation: 'You need to produce a piece of creative writing, a short story, a speech, or a blog post, that represents you.',
    question: 'How do you produce it?',
    answers: [
      { text: 'I write it entirely myself. Something that represents me needs to come from me.', archetype: 'skeptic' },
      { text: 'I use AI to write a draft, then refine it until it sounds like me.', archetype: 'delegator' },
      { text: 'I try different AI writing tools and styles to see what\'s interesting.', archetype: 'experimenter' },
      { text: 'I write a rough draft myself to capture my voice, then use AI to sharpen specific sections.', archetype: 'amplifier' },
      { text: 'I use a structured creative pipeline that handles research and drafting so I can focus on the ideas.', archetype: 'architect' },
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
      { text: 'I trigger a rapid-output workflow I built for exactly this kind of deadline scenario.', archetype: 'architect' },
    ],
  },

  // ── Architect-specific behavior questions ────────────────────────────────────
  {
    id: 'arch_1',
    layer: 'behavior',
    domains: ['Work & Productivity'],
    context: null,
    situation: 'You notice you are doing the same AI-assisted task every week.',
    question: 'What do you do?',
    answers: [
      { text: 'I keep doing it manually. Repetition builds familiarity.', archetype: 'skeptic' },
      { text: 'I ask AI to do it for me each time. It is faster that way.', archetype: 'delegator' },
      { text: 'I look for a tool that might automate it and test a few options.', archetype: 'experimenter' },
      { text: 'I refine how I do it each time to get better results.', archetype: 'amplifier' },
      { text: 'I build a workflow or agent to handle it automatically.', archetype: 'architect' },
    ],
  },
  {
    id: 'arch_2',
    layer: 'behavior',
    domains: ['Work & Productivity'],
    context: null,
    situation: 'A colleague asks how you use AI so effectively.',
    question: 'What do you tell them?',
    answers: [
      { text: 'I explain that I use it sparingly and only when it genuinely helps.', archetype: 'skeptic' },
      { text: 'I show them which tools I use and how to get quick results.', archetype: 'delegator' },
      { text: 'I share the latest tools I have been trying and what I found.', archetype: 'experimenter' },
      { text: 'I explain my thinking process for when and why I involve AI.', archetype: 'amplifier' },
      { text: 'I walk them through the systems and automations I have set up.', archetype: 'architect' },
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
