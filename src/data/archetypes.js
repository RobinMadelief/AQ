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
    intro: `You value ownership. Your instinct to think things through yourself, resist shortcuts, and protect the authenticity of your work makes you someone others rely on for honest judgment. What you produce feels different, more considered and more yours, and that matters more to you than speed.`,
    quote: '"If I didn\'t struggle with it, I didn\'t really learn it."',
    strengths: [
      'Independent thinking: your conclusions are your own, not borrowed from a machine',
      'Strong personal voice: in writing, decisions, and creative work, your fingerprint is unmistakable',
      'Deep ownership: when something succeeds, you know exactly why. When it fails, you learn from it.',
    ],
    blindSpot: `While you work to maintain authenticity, the gap between you and your field is quietly widening. Others are using AI to do more thinking, faster and on bigger problems. The risk is that protecting yourself from it may mean doing more low-value work while missing high-value opportunities.`,
    habits: {
      drop: [
        'Assuming AI use means losing your edge',
        'Rewriting from scratch when AI could handle the first draft',
      ],
      build: [
        'Using AI to challenge one assumption per week',
        'Trying one AI tool for 30 days to build a real understanding of it',
      ],
    },
    nextSteps: {
      bridge: 'Ready to put that into practice? Here is where to start this week.',
      default: [
        'Pick one decision you made this week. Ask AI to argue against it. See what it surfaces.',
        'Choose one AI tool today and commit to using it for 30 days. Apply it only to tasks you currently do yourself.',
        'Notice one task that costs you time but does not require your judgment. That is a good candidate to try first.',
      ],
      'Learning & Education': [
        'After studying a concept, ask AI to quiz you on it. Use it to test your understanding.',
        'When stuck on a problem, ask AI for a hint or a different angle rather than the full answer.',
        'Let AI generate a wrong explanation of something you know well. Then correct it.',
      ],
      'Work & Productivity': [
        'Use AI to draft the first outline of a report, then rewrite every section yourself.',
        'Ask AI to identify blind spots in a decision you have already made.',
        'Delegate one recurring low-stakes task to AI and reinvest that time in something only you can do.',
      ],
      'Creativity': [
        'Use AI to generate five bad ideas. Yours is probably better, but one might spark something.',
        'Ask AI to describe your creative style. Then rewrite its description in your own voice.',
        'Give AI a constraint you would never choose yourself and see what you make within it.',
      ],
      'Daily Life': [
        'Use AI to plan something logistical so your mental energy goes to things that matter more.',
        'Ask AI to summarise a long article you would not have read otherwise. Then decide if you want to go deeper.',
        'Try a voice AI for one small task and notice what it feels like to delegate without losing control.',
      ],
      'Health & Performance': [
        'Use AI to research something you already have an opinion on. Check if the evidence holds up.',
        'Ask AI to build a plan from your existing habits and preferences rather than starting from scratch.',
        'Use a tracking tool with AI for one week. The data belongs to you, not the tool.',
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
    intro: `You move fast and you get things done. You have built a sharp instinct for identifying which tasks can be handed off, and AI is the most powerful tool in that arsenal yet. When everyone else is staring at a blank page, you have already shipped. Your ability to cut through friction is real.`,
    quote: '"Done is better than perfect, and AI just made done much faster."',
    strengths: [
      'Efficiency: you eliminate bottlenecks others do not even notice',
      'Pragmatism: you care about results, not rituals. You reach the destination faster.',
      'Speed under pressure: when deadlines hit, you have a system that delivers',
    ],
    blindSpot: `The real risk is what you are not building. Every time AI does the thinking, you skip the cognitive work that compounds into expertise. Writing that summary yourself was slow, but it forced you to understand the material. Solving that problem manually was inefficient, but you would have recognised the pattern next time. Over time, the gap between your output and your actual capability quietly widens.`,
    habits: {
      drop: [
        'Sending AI output that sounds inauthentic',
        'Using AI before forming your own view first',
      ],
      build: [
        'Writing your own first sentence before asking AI to continue',
        'Rewriting one AI draft per day in your own voice',
      ],
    },
    nextSteps: {
      bridge: 'Ready to put that into practice? Here is where to start this week.',
      default: [
        'Before opening any AI tool today, write the first paragraph yourself. Then use AI to continue from there.',
        'Take the last AI draft you sent. Rewrite it entirely in your own words from memory. Compare the two.',
        'Identify one high-stakes skill in your role. Do not use AI for it this week. Notice what you still know.',
      ],
      'Learning & Education': [
        'Stop using AI to summarise lectures or readings. Do the first pass yourself and use AI only to fill specific gaps.',
        'When AI gives you an answer, ask it to explain the reasoning. Then verify the logic yourself.',
        'Spend one week writing all study notes without AI. Notice what you retain differently.',
      ],
      'Work & Productivity': [
        'Identify one high-stakes skill in your role and develop it without AI for 30 days.',
        'Before delegating a task to AI, spend five minutes forming your own approach first. Then use AI to refine it.',
        'Ask a colleague to review AI-assisted work you have produced. Is your voice still in it?',
      ],
      'Creativity': [
        'Start every creative project with 20 minutes of unassisted ideation before opening any AI tool.',
        'Use AI to critique your work, not to generate your first draft.',
        'Publish or share something made entirely without AI. Reconnect with what your own creative voice feels like.',
      ],
      'Daily Life': [
        'Make one decision this week without researching it with AI. Trust your own judgment and observe the outcome.',
        'Write a personal message entirely yourself. No AI phrasing, no editing assistance.',
        'Cook a meal, plan an event, or solve a problem manually. Notice the thinking you do when you cannot outsource it.',
      ],
      'Health & Performance': [
        'Track your own progress by hand for one week instead of relying on an AI-powered summary.',
        'Write your own workout or meal plan for one week. Own the design, then evaluate the results.',
        'When AI gives you a health recommendation, spend ten minutes forming your own opinion before accepting it.',
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
    intro: `You are the person your peers come to when they want to know what is new. You have tried tools most people have not heard of, you spot possibilities others miss, and your enthusiasm for what AI can do spreads fast. Your willingness to explore without a map has real value. Most people wait to see what sticks. You go and find out.`,
    quote: '"There\'s always a better tool for this. I\'ll find it."',
    strengths: [
      'Flexibility: you adapt faster than almost anyone when the landscape shifts',
      'Always current: you are aware of what AI can do at the edge, not just the mainstream',
      'High openness: you bring ideas from unexpected places and make surprising connections',
    ],
    blindSpot: `Novelty is seductive. But there is a difference between exploring and accumulating. You have probably started more workflows than you have finished, and installed more tools than you have mastered. Curiosity without direction produces noise. The next step forward is depth: staying long enough in one place to actually change how you work.`,
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
      bridge: 'Ready to put that into practice? Here is where to start this week.',
      default: [
        'Audit your current tool stack. Pick the one you use most often and commit to using only that for the next 30 days.',
        'After each AI tool you use this week, write one sentence: what it did well and what it did not.',
        'Complete one workflow with the tools you already have before adding anything new.',
      ],
      'Learning & Education': [
        'Choose one AI learning tool and use it exclusively for an entire course or module. Measure outcomes, not experiences.',
        'Write down what you have actually learned from each AI tool you tried this month. Be honest about what changed.',
        'Build one complete study system with the tools you already have before adding another.',
      ],
      'Work & Productivity': [
        'Audit your current AI tool stack. Remove anything you have not used in 30 days.',
        'Build one complete, documented workflow for a recurring task and follow it for a month without changing it.',
        'Share your most effective AI workflow with a colleague. Teaching it will reveal whether you actually mastered it.',
      ],
      'Creativity': [
        'Complete one creative project from start to finish using only the tools you already have.',
        'Choose the least interesting AI creative tool you own and spend a week trying to make it produce something worth keeping.',
        'Write a short review of three tools you have tried. Force yourself to be specific about what was actually better.',
      ],
      'Daily Life': [
        'Pick one area of your life and build one consistent AI-assisted routine for 30 days.',
        'Stop researching AI apps for personal productivity for one month. Use what you have and see what is actually limiting you.',
        'Write a monthly note on what your AI tools actually changed for you, not just what they can do.',
      ],
      'Health & Performance': [
        'Commit to one health-tracking approach for 60 days without switching apps or methods.',
        'Identify the one AI health tool that has produced measurable change for you. Double down on that one.',
        'Create a simple, consistent routine and stick to it. Use AI to reinforce consistency, not to design new systems.',
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
    intro: `You have found the relationship with AI that most people are still looking for. You use it deliberately, to extend your thinking. You know when to lean in and when to step back. Your work reflects your judgment, your values, and your voice, but it goes further and moves faster because of how you have integrated AI. That came from knowing yourself.`,
    quote: '"AI doesn\'t do my thinking. It makes my thinking go further."',
    strengths: [
      'Intentionality: you have clear principles for how and when you use AI, and you stick to them',
      'Self-awareness: you can tell the difference between AI enhancing your work and AI replacing it',
      'Continuous growth: you are not just using AI, you are using it to become better at what you already care about',
    ],
    blindSpot: `As AI improves, this relationship requires ongoing attention. The tools you use today will be substantially more capable in 12 months, and with more capability comes more temptation to hand over tasks that used to sharpen you. The Amplifier who does not stay intentional gradually becomes a Delegator who does not notice. Stay honest: keep asking whether you are using AI to grow, or just to produce.`,
    habits: {
      drop: [
        'Using AI for tasks that need your full attention',
        'Letting AI polish work that still needs your real thinking',
      ],
      build: [
        'Building your first simple agent for a task you do regularly',
        'Auditing your AI habits each month to check they are still serving you',
      ],
    },
    nextSteps: {
      bridge: 'Ready to put that into practice? Here is where to start this week.',
      default: [
        'Pick one task you do at least three times a week. Spend 30 minutes this week building a simple prompt or workflow that handles it.',
        'Write down every AI tool and habit you used in the last seven days. Mark which ones extended your thinking and which just saved time.',
        'Mentor one person on your approach to AI. Explaining it clearly will reveal where your own reasoning is still vague.',
      ],
      'Learning & Education': [
        'Write down how AI has changed your learning over the past year. What have you learned faster? What have you skipped that you should not have?',
        'Build one learning experience for someone else using AI. Designing for others deepens your own understanding.',
        'Use AI to go deep on a domain you would never have had time to explore otherwise.',
      ],
      'Work & Productivity': [
        'Present your AI workflow to your team. Make the implicit explicit and invite critique.',
        'Identify the highest-impact task in your role and ask whether AI could help you do it at a qualitatively higher level.',
        'Set a quarterly review: what has AI made you better at, and what have you let it take over that you should not have?',
      ],
      'Creativity': [
        'Experiment at the edge: use AI for the part of your creative process you have always protected. Notice what happens.',
        'Write an essay about your AI creative philosophy. The writing will reveal what you actually believe.',
        'Collaborate with AI in a way that produces something you could not have made alone. Define what that means for you.',
      ],
      'Daily Life': [
        'Design an AI-assisted routine for one area of life you have intentionally left unoptimised. Then decide if it was worth it.',
        'Audit one month of AI use in your personal life. What was generative? What was just convenient?',
        'Teach someone close to you how to use AI in a way that fits their values and goals.',
      ],
      'Health & Performance': [
        'Use AI to analyse patterns in your performance data and design a structured experiment based on what you find.',
        'Write down your health AI philosophy: what do you want AI to measure, and what do you deliberately keep analogue?',
        'Use an AI tool in your health practice that feels uncomfortable. Track what it reveals.',
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
    intro: `You have moved past the question of whether to use AI. You are now designing how it works around you. While others are still choosing tools, you are building systems. Your relationship with AI is less about prompting and more about architecture. Workflows, agents, automations that extend what you can do at scale. Most people have not thought about it this way yet.`,
    quote: '"I don\'t just use AI. I build with it."',
    strengths: [
      'Systems thinking: you see the whole workflow, not just the individual step',
      'Builds for scale: you design solutions that keep working without your constant attention',
      'Turns AI into infrastructure: for you, AI is the foundation you build on.',
    ],
    blindSpot: `Systems can become a way of avoiding the messy human work that still matters. Not everything should be automated. The risk is optimising away the friction that produces insight, the conversations that build trust, the slow work that compounds into wisdom. Keep asking: is this automation creating real impact, or just distance?`,
    habits: {
      drop: [
        'Automating decisions that still need human judgment',
        'Automating processes before understanding them manually',
      ],
      build: [
        'Documenting one system per month so others can replicate it',
        'Measuring whether each automation creates the impact you intended',
      ],
    },
    nextSteps: {
      bridge: 'Ready to put that into practice? Here is where to start this week.',
      default: [
        'Document one automation you have running this week well enough that a colleague could run it without asking you anything.',
        'Measure one automation you built: is it saving meaningful time, or just sitting there looking impressive?',
        'Explore one multi-agent framework this month. Build something small but real.',
      ],
      'Work & Productivity': [
        'Map out one complete workflow end-to-end, then identify the single step that still needs human judgment.',
        'Document a system you have built well enough for a colleague to run it independently.',
        'Pick one multi-agent framework and build a small proof of concept this month.',
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
        'Document your optimisation system so you can spot when you stop doing what was working.',
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
