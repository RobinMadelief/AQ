// The four AQ archetypes with full profile content

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
    intro: `You bring something rare to your field: genuine ownership. Your instinct to think things through yourself, resist shortcuts, and protect the authenticity of your work makes you someone others rely on for honest, unfiltered judgment. You've probably noticed that what you produce feels different — more considered, more yours — and that matters more to you than speed.`,
    quote: '"If I didn\'t struggle with it, I didn\'t really learn it."',
    strengths: [
      'Independent thinking — your conclusions are genuinely yours, not borrowed from a machine',
      'Strong personal voice — in writing, decisions, and creative work, your fingerprint is unmistakable',
      'Deep ownership — when something succeeds, you know exactly why; when it fails, you learn from it',
    ],
    blindSpot: `While you're working hard to maintain authenticity, the gap between you and your field is quietly widening. Others are using AI not to replace their thinking, but to do more of it — faster, at higher stakes. The risk isn't that AI will make you inauthentic. It's that protecting yourself from it may mean doing more of the low-value work while missing the high-leverage opportunities.`,
    nextSteps: {
      default: [
        'Use AI as a devil\'s advocate: form your own opinion first, then prompt it to steelman the opposite view',
        'Try one AI-assisted task this week that you control end-to-end — treat the output as raw material, not a product',
        'Notice one task that costs you time but doesn\'t require your judgment — that\'s a good candidate to experiment with',
      ],
      'Learning & Education': [
        'After reading or studying a concept, ask AI to quiz you on it — use it to test, not to replace, the learning',
        'When stuck on a problem, ask AI for a hint or a different angle rather than the answer',
        'Try letting AI generate a wrong explanation of something you know well — then correct it',
      ],
      'Work & Productivity': [
        'Use AI to draft the first outline of a report — then rewrite every section yourself from scratch',
        'Ask AI to identify blind spots in a decision you\'ve already made',
        'Delegate one recurring low-stakes task to AI and reinvest that time in something only you can do',
      ],
      'Creativity': [
        'Use AI to generate five bad ideas — yours is probably better, but one might spark something',
        'Ask AI to describe your creative style in words, then rewrite its description in your own voice',
        'Give AI a constraint you\'d never choose yourself and see what you make within it',
      ],
      'Daily Life': [
        'Use AI to plan something logistical (a trip, a schedule) so your mental energy goes to things that matter more',
        'Ask AI to summarize a long article you wouldn\'t have read otherwise — then decide if you want to go deeper',
        'Try a voice AI for one small task and notice what it feels like to delegate without losing control',
      ],
      'Health & Performance': [
        'Use AI to research something you already have an opinion on — check if the evidence holds up',
        'Ask AI to build a plan from your existing habits and preferences rather than starting from scratch',
        'Use a tracking tool powered by AI for one week — the data belongs to you, not the tool',
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
    intro: `You move fast and you get things done. You've built a sharp instinct for identifying which tasks can be handed off, and AI is just the latest — and most powerful — tool in that toolkit. In a world drowning in busywork, your ability to cut through friction is genuinely valuable. People see output from you when others are still staring at a blank page.`,
    quote: '"Done is better than perfect, and AI just made done much faster."',
    strengths: [
      'Efficiency — you eliminate bottlenecks others don\'t even notice',
      'Pragmatism — you care about results, not rituals; you reach the destination faster',
      'Speed under pressure — when deadlines hit, you have a system that delivers',
    ],
    blindSpot: `The risk isn't what you're producing — it's what you're not building. Every time AI does the thinking, you skip the cognitive reps that compound into expertise. Writing that summary yourself was slow, but it also forced you to understand the material. Solving that problem yourself was inefficient, but you'd recognize the pattern next time. Over time, the gap between your output and your actual capability quietly widens.`,
    nextSteps: {
      default: [
        'Reclaim one task per day from AI — pick something small, do it yourself, notice what you learn from the friction',
        'After AI drafts something, rewrite it entirely in your own words before sending it',
        'Ask yourself: "Would I be able to do this without AI?" — make sure the answer is still yes for the things that matter',
      ],
      'Learning & Education': [
        'Stop using AI to summarize lectures or readings — do the first pass yourself, use AI only to fill specific gaps',
        'When AI gives you an answer, ask it to explain the reasoning — then verify the logic yourself',
        'Take one week where you write all study notes without AI assistance — notice what you retain differently',
      ],
      'Work & Productivity': [
        'Identify one high-stakes skill in your role — commit to developing it without AI as a crutch for 30 days',
        'Before delegating a task to AI, spend 5 minutes forming your own approach first — then use AI to refine it',
        'Ask a colleague to review AI-assisted work you\'ve produced — is your voice still in it?',
      ],
      'Creativity': [
        'Start every creative project with 20 minutes of unassisted ideation before opening any AI tool',
        'Use AI to critique your work, never to generate your first draft',
        'Publish or share something made entirely without AI — reconnect with what your own creative voice feels like',
      ],
      'Daily Life': [
        'Make one decision this week without researching it with AI — trust your own judgment and observe the outcome',
        'Write a personal message (email, text, card) entirely yourself — no AI phrasing, no editing assistance',
        'Cook a meal, plan an event, or solve a problem manually — notice the thinking you do when you can\'t outsource it',
      ],
      'Health & Performance': [
        'Track your own progress by hand for one week instead of relying on an AI-powered summary',
        'Write your own workout plan or meal prep for one week — own the design, then evaluate the results',
        'When AI gives you a health recommendation, spend 10 minutes forming your own opinion before accepting it',
      ],
    },
  },

  experimenter: {
    id: 'experimenter',
    name: 'The Experimenter',
    tagline: '"Have you tried this new tool? Oh wait, there\'s another one..."',
    color: '#f59e0b',
    colorClass: 'text-amber-600',
    bgClass: 'bg-amber-50',
    borderClass: 'border-amber-300',
    accentClass: 'bg-amber-600',
    intro: `You're the person your peers come to when they want to know what's new. You've tried tools most people haven't heard of, you spot possibilities others miss, and your enthusiasm for what AI can do is infectious. In a rapidly evolving landscape, your willingness to explore without a map is a genuine edge — the world needs people who aren't afraid to try.`,
    quote: '"There\'s always a better tool for this. I\'ll find it."',
    strengths: [
      'Flexibility — you adapt faster than almost anyone when the landscape shifts',
      'Always current — you\'re aware of what AI can do at the edge, not just the mainstream',
      'High openness — you bring ideas from unexpected places and make surprising connections',
    ],
    blindSpot: `Novelty is seductive. But there's a difference between exploring and accumulating. You've probably started more workflows than you've finished, and installed more tools than you've mastered. The problem isn't curiosity — it's that insight without integration produces noise, not signal. The next breakthrough for you isn't a new tool. It's depth: staying long enough in one place to actually change how you work.`,
    nextSteps: {
      default: [
        'Pick one AI tool and one specific use case — commit to using only those for 30 days, then evaluate',
        'Write down your personal philosophy for when and why you use AI — it will force you to make implicit decisions explicit',
        'For every new tool you want to try, you have to complete one workflow with your current tool first',
      ],
      'Learning & Education': [
        'Choose one AI learning tool and use it exclusively for an entire course or module — measure outcomes, not experiences',
        'Document what you\'ve actually learned from each AI tool you\'ve tried this month — be honest about what changed',
        'Build one complete study system with the tools you already have before adding another',
      ],
      'Work & Productivity': [
        'Audit your current AI tool stack — delete or unsubscribe from anything you haven\'t used in 30 days',
        'Build one complete, documented workflow for a recurring task and follow it for a month without changing it',
        'Share your most effective AI workflow with a colleague — teaching it will reveal whether you actually mastered it',
      ],
      'Creativity': [
        'Complete one creative project from start to finish using only the tools you already have',
        'Choose the least interesting AI creative tool you own and spend a week trying to make it produce something remarkable',
        'Write a review of three tools you\'ve tried — force yourself to be specific about what was actually better',
      ],
      'Daily Life': [
        'Pick one area of your life (health, finances, scheduling) and build one consistent AI-assisted routine for 30 days',
        'Stop researching AI apps for personal productivity for one month — use what you have and see what\'s actually limiting you',
        'Write a monthly review of what your AI tools actually changed for you, not just what they can do',
      ],
      'Health & Performance': [
        'Commit to one health-tracking approach for 60 days without switching apps or methods mid-stream',
        'Identify the one AI health tool that\'s produced measurable change for you — double down on that one',
        'Create a simple, boring routine and stick to it; use AI to reinforce consistency, not to design new systems',
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
    intro: `You've found the relationship with AI that most people are still looking for. You use it deliberately — to extend your thinking, not replace it. You know when to lean in and when to step back. Your work reflects your judgment, your values, and your voice, but it goes further and moves faster because of how you've integrated AI. This isn't a technology adoption story. It's a story about knowing yourself.`,
    quote: '"AI doesn\'t do my thinking. It makes my thinking go further."',
    strengths: [
      'Intentionality — you have clear principles for how and when you use AI, and you stick to them',
      'Self-awareness — you can tell the difference between AI enhancing your work and AI replacing it',
      'Continuous growth — you\'re not just using AI, you\'re using it to become better at what you already care about',
    ],
    blindSpot: `As AI improves, this relationship requires ongoing vigilance. The tools you use today will be dramatically more capable in 12 months — and with more capability comes more temptation to hand over tasks that used to sharpen you. The Amplifier who doesn't stay intentional gradually becomes a Delegator who doesn't notice. Your edge is reflection: keep asking whether you're using AI to grow, or just to produce.`,
    nextSteps: {
      default: [
        'Write your personal AI philosophy — in one page, describe what you use AI for, what you don\'t, and why',
        'Mentor someone who struggles with their AI relationship — teaching your approach will deepen and challenge it',
        'Identify one frontier where AI could push your work further than you\'ve dared to take it yet',
      ],
      'Learning & Education': [
        'Document how AI has changed your learning process over the last year — what have you learned faster? What have you skipped that you shouldn\'t have?',
        'Build one learning experience for someone else using AI — designing for others deepens your own understanding',
        'Push into a new domain using AI as an accelerant — pick something you\'d never have had time to learn without it',
      ],
      'Work & Productivity': [
        'Present your AI workflow to your team — make the implicit explicit and invite critique',
        'Identify the highest-leverage task in your role and ask whether AI could help you do it at a qualitatively higher level',
        'Set a quarterly review: what has AI made you better at, and what have you let it take over that you shouldn\'t have?',
      ],
      'Creativity': [
        'Experiment at the edge: use AI for the part of your creative process you\'ve always protected — notice what happens',
        'Publish an essay or piece about your AI creative philosophy — the writing will reveal what you actually believe',
        'Collaborate with AI in a way that produces something you genuinely couldn\'t have made alone — define what "couldn\'t" means',
      ],
      'Daily Life': [
        'Design an AI-assisted routine for one area of life you\'ve intentionally left unoptimized — then decide if it was worth it',
        'Audit one month of AI use in your personal life — what was generative, what was just convenient?',
        'Teach someone in your life — partner, parent, sibling — how to use AI in a way that fits their values and goals',
      ],
      'Health & Performance': [
        'Use AI to analyze patterns in your performance data and design a structured experiment based on what you find',
        'Document your health AI philosophy: what do you want AI to measure and optimize, and what do you deliberately keep analog?',
        'Push the edge: use an AI tool in your health practice that scares you a little — track what it reveals',
      ],
    },
  },
}

// Map answer choices to archetypes (A=skeptic, B=delegator, C=experimenter, D=amplifier)
export const ARCHETYPE_ORDER = ['skeptic', 'delegator', 'experimenter', 'amplifier']
