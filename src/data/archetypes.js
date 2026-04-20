// The five AQ archetypes with full profile content

export const ARCHETYPES = {
  skeptic: {
    id: 'skeptic',
    name: 'The Skeptic',
    tagline: '"I\'d rather do it myself."',
    color: '#64748b',
    colorClass: 'text-slate-600',
    bgClass: 'bg-slate-50',
    borderClass: 'border-slate-300',
    accentClass: 'bg-slate-600',
    intro: `You highly value genuine ownership. Your instinct to think things through yourself, resist shortcuts, and protect the authenticity of your work makes you someone others rely on for honest, unfiltered judgment. You've probably noticed that what you produce feels different, more considered and more yours, and that matters more to you than speed.`,
    quote: '"If I didn\'t struggle with it, I didn\'t really learn it."',
    strengths: [
      'Independent thinking: your conclusions are genuinely yours, not borrowed from a machine',
      'Strong personal voice: in writing, decisions, and creative work, your fingerprint is unmistakable',
      'Deep ownership: when something succeeds, you know exactly why. When it fails, you learn from it.',
    ],
    blindSpot: `While you're working hard to maintain authenticity, the gap between you and your field is quietly widening. Others are using AI not to replace their thinking, but to do more of it, faster and at higher stakes. The risk isn't that AI will make you inauthentic. It's that protecting yourself from it may mean doing more of the low-value work while missing the high-leverage opportunities.`,
    habits: {
      drop: [
        'Assuming AI use means losing your edge',
        'Rewriting from scratch when AI could handle the first draft',
      ],
      build: [
        'Using AI to challenge one assumption per week',
        'Trying one AI tool for 30 days to gain a deeper understanding',
      ],
    },
    nextSteps: {
      default: [
        'Use AI as a devil\'s advocate: form your own opinion first, then prompt it to steelman the opposite view.',
        'Try one AI-assisted task this week that you control end-to-end. Treat the output as raw material, not a product.',
        'Notice one task that costs you time but doesn\'t require your judgment. That\'s a good candidate to experiment with.',
      ],
      'Learning & Education': [
        'After reading or studying a concept, ask AI to quiz you on it. Use it to test, not to replace, the learning.',
        'When stuck on a problem, ask AI for a hint or a different angle rather than the answer.',
        'Try letting AI generate a wrong explanation of something you know well, then correct it.',
      ],
      'Work & Productivity': [
        'Use AI to draft the first outline of a report, then rewrite every section yourself from scratch.',
        'Ask AI to identify blind spots in a decision you\'ve already made.',
        'Delegate one recurring low-stakes task to AI and reinvest that time in something only you can do.',
      ],
      'Creativity': [
        'Use AI to generate five bad ideas. Yours is probably better, but one might spark something.',
        'Ask AI to describe your creative style in words, then rewrite its description in your own voice.',
        'Give AI a constraint you\'d never choose yourself and see what you make within it.',
      ],
      'Daily Life': [
        'Use AI to plan something logistical (a trip, a schedule) so your mental energy goes to things that matter more.',
        'Ask AI to summarize a long article you wouldn\'t have read otherwise. Then decide if you want to go deeper.',
        'Try a voice AI for one small task and notice what it feels like to delegate without losing control.',
      ],
      'Health & Performance': [
        'Use AI to research something you already have an opinion on. Check if the evidence holds up.',
        'Ask AI to build a plan from your existing habits and preferences rather than starting from scratch.',
        'Use a tracking tool powered by AI for one week. The data belongs to you, not the tool.',
      ],
    },
  },

  delegator: {
    id: 'delegator',
    name: 'The Delegator',
    tagline: '"Why do it myself if AI can do it for me?"',
    color: '#0ea5e9',
    colorClass: 'text-sky-600',
    bgClass: 'bg-sky-50',
    borderClass: 'border-sky-300',
    accentClass: 'bg-sky-600',
    intro: `You move fast and you get things done. You've built a sharp instinct for identifying which tasks can be handed off, and AI is just the latest, and most powerful, tool in that toolkit. In a world drowning in busywork, your ability to cut through friction is genuinely valuable. People see output from you when others are still staring at a blank page.`,
    quote: '"Done is better than perfect, and AI just made done much faster."',
    strengths: [
      'Efficiency: you eliminate bottlenecks others don\'t even notice',
      'Pragmatism: you care about results, not rituals. You reach the destination faster.',
      'Speed under pressure: when deadlines hit, you have a system that delivers',
    ],
    blindSpot: `The risk isn't what you're producing. It's what you're not building. Every time AI does the thinking, you skip the cognitive reps that compound into expertise. Writing that summary yourself was slow, but it also forced you to understand the material. Solving that problem yourself was inefficient, but you'd recognize the pattern next time. Over time, the gap between your output and your actual capability quietly widens.`,
    habits: {
      drop: [
        'Sending AI output that sounds inauthentic',
        'Using AI before forming your own view first',
      ],
      build: [
        'Writing your own first sentence before asking AI to continue',
        'Rewriting one AI draft per day to make it sound authentic and like you',
      ],
    },
    nextSteps: {
      default: [
        'Reclaim one task per day from AI. Pick something small, do it yourself, and notice what you learn from the friction.',
        'After AI drafts something, rewrite it entirely in your own words before sending it.',
        'Ask yourself: "Would I be able to do this without AI?" Make sure the answer is still yes for the things that matter.',
      ],
      'Learning & Education': [
        'Stop using AI to summarize lectures or readings. Do the first pass yourself and use AI only to fill specific gaps.',
        'When AI gives you an answer, ask it to explain the reasoning. Then verify the logic yourself.',
        'Take one week where you write all study notes without AI assistance. Notice what you retain differently.',
      ],
      'Work & Productivity': [
        'Identify one high-stakes skill in your role and commit to developing it without AI as a crutch for 30 days.',
        'Before delegating a task to AI, spend 5 minutes forming your own approach first. Then use AI to refine it.',
        'Ask a colleague to review AI-assisted work you\'ve produced. Is your voice still in it?',
      ],
      'Creativity': [
        'Start every creative project with 20 minutes of unassisted ideation before opening any AI tool.',
        'Use AI to critique your work, never to generate your first draft.',
        'Publish or share something made entirely without AI. Reconnect with what your own creative voice feels like.',
      ],
      'Daily Life': [
        'Make one decision this week without researching it with AI. Trust your own judgment and observe the outcome.',
        'Write a personal message (email, text, card) entirely yourself. No AI phrasing, no editing assistance.',
        'Cook a meal, plan an event, or solve a problem manually. Notice the thinking you do when you can\'t outsource it.',
      ],
      'Health & Performance': [
        'Track your own progress by hand for one week instead of relying on an AI-powered summary.',
        'Write your own workout plan or meal prep for one week. Own the design, then evaluate the results.',
        'When AI gives you a health recommendation, spend 10 minutes forming your own opinion before accepting it.',
      ],
    },
  },

  experimenter: {
    id: 'experimenter',
    name: 'The Experimenter',
    tagline: '"Have you tried this new tool?"',
    color: '#f59e0b',
    colorClass: 'text-amber-600',
    bgClass: 'bg-amber-50',
    borderClass: 'border-amber-300',
    accentClass: 'bg-amber-600',
    intro: `You're the person your peers come to when they want to know what's new. You've tried tools most people haven't heard of, you spot possibilities others miss, and your enthusiasm for what AI can do is infectious. In a rapidly evolving landscape, your willingness to explore without a map is a genuine edge. The world needs people who aren't afraid to try.`,
    quote: '"There\'s always a better tool for this. I\'ll find it."',
    strengths: [
      'Flexibility: you adapt faster than almost anyone when the landscape shifts',
      'Always current: you\'re aware of what AI can do at the edge, not just the mainstream',
      'High openness: you bring ideas from unexpected places and make surprising connections',
    ],
    blindSpot: `Novelty is seductive. But there's a difference between exploring and accumulating. You've probably started more workflows than you've finished, and installed more tools than you've mastered. The problem isn't curiosity. Insight without integration produces noise, not signal. The next breakthrough for you isn't a new tool. It's depth: staying long enough in one place to actually change how you work.`,
    habits: {
      drop: [
        'Switching tools before mastering the current one',
        'Building workflows for their own sake rather than real impact',
      ],
      build: [
        'Picking one tool per month and going deep',
        'Documenting what actually worked, not just what was interesting',
      ],
    },
    nextSteps: {
      default: [
        'Pick one AI tool and one specific use case. Commit to using only those for 30 days, then evaluate.',
        'Write down your personal philosophy for when and why you use AI. It will force you to make implicit decisions explicit.',
        'For every new tool you want to try, you have to complete one workflow with your current tool first.',
      ],
      'Learning & Education': [
        'Choose one AI learning tool and use it exclusively for an entire course or module. Measure outcomes, not experiences.',
        'Document what you\'ve actually learned from each AI tool you\'ve tried this month. Be honest about what changed.',
        'Build one complete study system with the tools you already have before adding another.',
      ],
      'Work & Productivity': [
        'Audit your current AI tool stack. Delete or unsubscribe from anything you haven\'t used in 30 days.',
        'Build one complete, documented workflow for a recurring task and follow it for a month without changing it.',
        'Share your most effective AI workflow with a colleague. Teaching it will reveal whether you actually mastered it.',
      ],
      'Creativity': [
        'Complete one creative project from start to finish using only the tools you already have.',
        'Choose the least interesting AI creative tool you own and spend a week trying to make it produce something remarkable.',
        'Write a review of three tools you\'ve tried. Force yourself to be specific about what was actually better.',
      ],
      'Daily Life': [
        'Pick one area of your life (health, finances, scheduling) and build one consistent AI-assisted routine for 30 days.',
        'Stop researching AI apps for personal productivity for one month. Use what you have and see what\'s actually limiting you.',
        'Write a monthly review of what your AI tools actually changed for you, not just what they can do.',
      ],
      'Health & Performance': [
        'Commit to one health-tracking approach for 60 days without switching apps or methods mid-stream.',
        'Identify the one AI health tool that\'s produced measurable change for you. Double down on that one.',
        'Create a simple, boring routine and stick to it. Use AI to reinforce consistency, not to design new systems.',
      ],
    },
  },

  amplifier: {
    id: 'amplifier',
    name: 'The Amplifier',
    tagline: '"AI helps me be more of who I already am."',
    color: '#10b981',
    colorClass: 'text-emerald-600',
    bgClass: 'bg-emerald-50',
    borderClass: 'border-emerald-300',
    accentClass: 'bg-emerald-600',
    intro: `You've found the relationship with AI that most people are still looking for. You use it deliberately, to extend your thinking, not replace it. You know when to lean in and when to step back. Your work reflects your judgment, your values, and your voice, but it goes further and moves faster because of how you've integrated AI. This isn't a technology adoption story. It's a story about knowing yourself.`,
    quote: '"AI doesn\'t do my thinking. It makes my thinking go further."',
    strengths: [
      'Intentionality: you have clear principles for how and when you use AI, and you stick to them',
      'Self-awareness: you can tell the difference between AI enhancing your work and AI replacing it',
      'Continuous growth: you\'re not just using AI, you\'re using it to become better at what you already care about',
    ],
    blindSpot: `As AI improves, this relationship requires ongoing vigilance. The tools you use today will be dramatically more capable in 12 months, and with more capability comes more temptation to hand over tasks that used to sharpen you. The Amplifier who doesn't stay intentional gradually becomes a Delegator who doesn't notice. Your edge is reflection: keep asking whether you're using AI to grow, or just to produce.`,
    habits: {
      drop: [
        'Using AI for tasks that genuinely need your full attention',
        'Letting AI polish work that still needs your real thinking',
      ],
      build: [
        'Build your first simple agent for a task you do regularly',
        'Regularly auditing which AI habits are still serving you',
      ],
    },
    nextSteps: {
      default: [
        'Write your personal AI philosophy. In one page, describe what you use AI for, what you don\'t, and why.',
        'Mentor someone who struggles with their AI relationship. Teaching your approach will deepen and challenge it.',
        'Identify one frontier where AI could push your work further than you\'ve dared to take it yet.',
      ],
      'Learning & Education': [
        'Document how AI has changed your learning process over the last year. What have you learned faster? What have you skipped that you shouldn\'t have?',
        'Build one learning experience for someone else using AI. Designing for others deepens your own understanding.',
        'Push into a new domain using AI as an accelerant. Pick something you\'d never have had time to learn without it.',
      ],
      'Work & Productivity': [
        'Present your AI workflow to your team. Make the implicit explicit and invite critique.',
        'Identify the highest-leverage task in your role and ask whether AI could help you do it at a qualitatively higher level.',
        'Set a quarterly review: what has AI made you better at, and what have you let it take over that you shouldn\'t have?',
      ],
      'Creativity': [
        'Experiment at the edge: use AI for the part of your creative process you\'ve always protected. Notice what happens.',
        'Publish an essay or piece about your AI creative philosophy. The writing will reveal what you actually believe.',
        'Collaborate with AI in a way that produces something you genuinely couldn\'t have made alone. Define what "couldn\'t" means.',
      ],
      'Daily Life': [
        'Design an AI-assisted routine for one area of life you\'ve intentionally left unoptimized. Then decide if it was worth it.',
        'Audit one month of AI use in your personal life. What was generative? What was just convenient?',
        'Teach someone in your life (a partner, parent, or sibling) how to use AI in a way that fits their values and goals.',
      ],
      'Health & Performance': [
        'Use AI to analyze patterns in your performance data and design a structured experiment based on what you find.',
        'Document your health AI philosophy: what do you want AI to measure and optimize, and what do you deliberately keep analog?',
        'Push the edge: use an AI tool in your health practice that scares you a little. Track what it reveals.',
      ],
    },
  },

  architect: {
    id: 'architect',
    name: 'The Architect',
    tagline: '"I don\'t just use AI. I build with it."',
    color: '#6366f1',
    colorClass: 'text-indigo-500',
    bgClass: 'bg-indigo-50',
    borderClass: 'border-indigo-300',
    accentClass: 'bg-indigo-500',
    intro: `You have moved past the question of whether to use AI. You are now designing how it works around you. While others are still choosing tools, you are building systems. Your relationship with AI is less about prompting and more about architecture. Workflows, agents, automations that extend what you can do at scale. Most people are not here yet. You are.`,
    quote: '"I don\'t just use AI. I build with it."',
    strengths: [
      'Systems thinking: you see the whole workflow, not just the individual step',
      'Builds for scale: you design solutions that keep working without your constant attention',
      'Turns AI into infrastructure: for you, AI is not a tool you pick up — it is the foundation you build on',
    ],
    blindSpot: `Systems can become a way of avoiding the messy human work that still matters. Not everything should be automated. The risk is optimizing away the friction that produces insight, the conversations that build trust, the slow work that compounds into wisdom. Keep asking: is this automation creating leverage, or just distance?`,
    habits: {
      drop: [
        'Automating decisions that still need human judgment',
        'Automating processes before understanding them manually',
      ],
      build: [
        'Documenting one system per month so others can replicate it',
        'Testing whether each automation creates meaningful impact',
      ],
    },
    nextSteps: {
      default: [
        'Document one system you have built so someone else could run it without your help.',
        'Identify one workflow you have automated and measure whether it has created the impact you intended.',
        'Explore multi-agent orchestration: your next frontier is systems that coordinate other systems.',
      ],
      'Work & Productivity': [
        'Map out one complete workflow end-to-end, then identify the single step that still needs human judgment.',
        'Document a system you have built well enough for a colleague to run it independently.',
        'Research one multi-agent framework (n8n, LangGraph, or similar) and build a small proof of concept this month.',
      ],
      'Learning & Education': [
        'Build a personal knowledge system that uses AI to surface connections across your notes automatically.',
        'Document your learning system so clearly that someone else could adopt it without your help.',
        'Experiment with an AI tutor agent that adapts to your knowledge gaps rather than following a fixed curriculum.',
      ],
      'Daily Life': [
        'Identify the three most repetitive tasks in your week and build one automation that handles at least one of them.',
        'Document one personal system you have built so clearly you could hand it to someone else.',
        'Audit your personal automations: are they saving real time, or are they just impressive?',
      ],
      'Health & Performance': [
        'Build a personal health tracking system that aggregates data from multiple sources into one view.',
        'Identify which parts of your performance routine still need human judgment and protect those deliberately.',
        'Document your optimization system so you can spot drift — when you stop doing what was working.',
      ],
      'Creativity': [
        'Build a creative pipeline that handles the mechanical parts of your process so you can focus on the parts only you can do.',
        'Document your creative system: the prompts, tools, and sequences that produce your best work.',
        'Experiment with a multi-step creative agent that moves from brief to draft to critique automatically.',
      ],
    },
  },
}

// Map answer choices to archetypes (A=skeptic, B=delegator, C=experimenter, D=amplifier, E=architect)
export const ARCHETYPE_ORDER = ['skeptic', 'delegator', 'experimenter', 'amplifier', 'architect']
