# Archetypes.ai — Project Context for Claude Code

Read this file at the start of every session. It contains all decisions, design rules, content principles and architecture choices made for this project. Do not contradict anything here without being explicitly asked to.

---

## What this project is

Archetypes.ai is a scenario-based AI personality assessment. It helps students and professionals understand how wisely they use AI, not just how much. The tone is serious, credible and warm. Think 16 Personalities in spirit: self-recognisable, shareable, and genuinely useful.

The app is built with React, Vite, Tailwind and Recharts. All state is client-side. No backend or auth.

---

## The five archetypes

There are exactly five archetypes. Do not add, remove or rename them.

**The Skeptic**
Quote: "I'd rather do it myself."
Uses AI rarely. High autonomy. Fears losing authenticity.

**The Delegator**
Quote: "Why do it myself if AI can do it for me?"
Uses AI heavily but without reflection. Efficient but risks skill atrophy.

**The Experimenter**
Quote: "Have you tried this new tool?"
Curious and exploratory. Inconsistent. High potential, needs focus.

**The Amplifier**
Quote: "AI helps me be more of who I already am."
Uses AI intentionally to sharpen thinking. The target profile for most users.

**The Architect**
Quote: "I don't just use AI. I build with it."
Goes beyond using AI to building systems, workflows and agents. The most advanced profile.

---

## Scoring logic

**Critical rule: the primary archetype shown to the user is determined by the behavior layer only.**

The quiz has two layers:
- Perception layer: 5 multiple choice questions revealing what the user believes about AI
- Behavior layer: 10 scenario-based questions revealing what the user actually does

The behavior layer determines the primary archetype result. The perception layer feeds only the radar chart and the gap callout. It has no influence on which archetype card is shown.

The gap callout compares the dominant belief archetype (from perception) with the dominant behavior archetype. This is the key insight of the tool.

---

## Quiz structure

- Total questions: 15 (5 perception + 10 behavior)
- Perception questions: always shown first, multiple choice, four or five options per question
- Behavior questions: scenario-based, domain and context filtered, multiple choice
- Answer options are shuffled per question using Fisher-Yates so the archetype mapping is never predictable
- Auto-advance: as soon as the user selects an answer, move to the next question automatically. No next button.
- Back button: shown on every question except the first. Undoes the last answer and returns to the previous question.

---

## Design system

**Colors:**
- Page background: #6B1020 (deep burgundy) on all pages
- Primary heading text: #ffffff
- Body text: rgba(255,255,255,0.88)
- Muted text: rgba(255,255,255,0.45)
- Cards: background rgba(255,255,255,0.08), border 1px solid rgba(255,255,255,0.12)
- Active/selected cards: background rgba(255,255,255,0.12), border 1.5px solid rgba(255,255,255,0.7)
- Divider lines: rgba(255,255,255,0.1)
- Section labels: rgba(255,255,255,0.75), uppercase, letter-spacing 0.1em, font-size 13px
- Illustration boxes: background #F5EFE6 (warm beige), border-radius 16px on small, 20px on large

**Typography:**
- Wordmark "Archetypes.ai": Georgia serif, italic, font-weight 400
- Main hero heading: Georgia serif, italic, fluid font-size clamp(56px, 16vw, 220px), font-weight 400, letter-spacing -0.015em, line-height 1.05, color #ffffff. Spans most of the viewport width — no max-width cap.
- Tagline "Discover your AI personality.": Georgia serif, italic, font-size 26px. "Discover your" is font-weight 400, "AI personality." is font-weight 700
- Section labels: uppercase, font-size 13px, font-weight 500, letter-spacing 0.1em, preceded by a short horizontal line

**Border radius:**
- Buttons: 999px (pill shape)
- Cards and containers: 4px
- Illustration boxes: 16px small, 20px large
- Progress bar: 999px

**Buttons:**
- Primary: white background, color #6B1020, border-radius 999px, padding 9px 24px, font-size 12px, font-weight 500
- Secondary/outline: border 1px solid rgba(255,255,255,0.45), transparent background, color rgba(255,255,255,0.85), border-radius 999px
- Landing page CTA: outline style only, border 1px solid rgba(255,255,255,0.45), transparent background

**No shadows. No gradients. No colored card backgrounds except illustration boxes.**

---

## Landing page structure

1. Nav bar: "Archetypes.ai" wordmark top left in italic Georgia serif, "~10 min · Free" top right
2. Hero: "Archetypes.ai" oversized italic serif heading spanning most of the viewport, "Discover your AI personality." tagline below, thin divider line, intro paragraph, outline CTA button
3. Five archetype preview cards below: each shows illustration in beige box, archetype name, signature quote

**Intro paragraph (do not change):**
"AI is changing how people work, learn, and think. This assessment helps you understand where you stand and where you could go. Fifteen questions. One personal profile. No right answers."

---

## Results page structure

In this order from top to bottom:

1. Gap callout: one punchy sentence comparing belief archetype to behavior archetype
2. Archetype card: "Your AI archetype is" small italic label, archetype name large italic, illustration in beige box (160x160px), signature quote italic, thin divider, introduction paragraph
3. Radar chart: five axes (one per archetype), two overlapping shapes (belief layer in solid, behavior layer in dashed)
4. Detailed profile: Strengths, Blind Spot, Habits (Drop and Build), Next Steps, Learning Path. Each section separated by thin dividers.
5. Explore all archetypes: five compact cards in a row. User's archetype highlighted. Clicking any other card expands its profile below the grid.
6. Share card and download buttons at the bottom

---

## Habits per archetype

**The Skeptic**
Drop: Assuming AI use means losing your edge
Drop: Rewriting from scratch when AI could handle the first draft
Build: Using AI to challenge one assumption per week
Build: Trying one AI tool for 30 days to gain a deeper understanding

**The Delegator**
Drop: Sending AI output that sounds inauthentic
Drop: Using AI before forming your own view first
Build: Writing your own first sentence before asking AI to continue
Build: Rewriting one AI draft per day to make it sound authentic and like you

**The Experimenter**
Drop: Switching tools before mastering the current one
Drop: Building workflows for their own sake rather than real impact
Build: Picking one tool per month and going deep
Build: Documenting what actually worked, not just what was interesting

**The Amplifier**
Drop: Using AI for tasks that genuinely need your full attention
Drop: Letting AI polish work that still needs your real thinking
Build: Build your first simple agent for a task you do regularly
Build: Regularly auditing which AI habits are still serving you

**The Architect**
Drop: Automating decisions that still need human judgment
Drop: Automating processes before understanding them manually
Build: Documenting one system per month so others can replicate it
Build: Testing whether each automation creates meaningful impact

---

## Learning resources per archetype

**The Skeptic**
1. Article — "Get started with Claude" by Anthropic — https://support.claude.com/en/articles/8114491-get-started-with-claude
2. Course — "Elements of AI" by University of Helsinki — https://elementsofai.com
3. Guide — "How to create AI agents" by Zapier — https://zapier.com/blog/how-to-create-ai-agents

**The Delegator**
1. Tool — "Try vibe coding" by Lovable — https://lovable.dev
2. Tutorial — "Prompt Engineering Interactive Tutorial" by Anthropic — https://github.com/anthropics/prompt-eng-interactive-tutorial
3. Guide — "Learn Prompting" by LearnPrompting.org — https://learnprompting.org

**The Experimenter**
1. Course — "Introduction to Agent Skills" by Anthropic — https://anthropic.skilljar.com/introduction-to-agent-skills
2. Course — "AI Agents Course" by Hugging Face — https://huggingface.co/learn/agents-course
3. Tutorial — "Getting started with n8n" by n8n — https://n8n.io/get-started

**The Amplifier**
1. Guide — "Lovable Agent Mode" by Lovable — https://docs.lovable.dev/features/agent-mode
2. Guide — "Building Effective Agents" by Anthropic — https://www.anthropic.com/research/building-effective-agents
3. Course — "MCP Course" by Hugging Face — https://huggingface.co/mcp-course

**The Architect**
1. Tutorial — "Build AI agents with n8n" by n8n — https://n8n.io/get-started
2. Guide — "Building Effective Agents" by Anthropic — https://www.anthropic.com/research/building-effective-agents
3. Course — "MCP Course" by Hugging Face — https://huggingface.co/mcp-course

---

## Illustrations

All archetype illustrations are stored in src/assets/. Current files:
- skeptic.png (used as placeholder for all archetypes until individual files are ready)

When displaying illustrations, always wrap them in a beige box with background #F5EFE6 and rounded corners. Never display illustrations directly on the burgundy background without the beige box.

---

## Tone and copy rules

These rules apply to every piece of text written or edited in this project. No exceptions.

**Never use:**
- Em dashes (replace with a comma, full stop, or new sentence)
- The words: completely, genuinely, truly, incredibly, leverage, optimize
- The phrases: "what sets you apart", "in a world where", "at the end of the day", "it's worth noting", "dive into", "game-changer"
- Exclamation marks

**Always:**
- Keep answer options to a maximum of 20 words
- Write in short, direct sentences
- Sound like a thoughtful European person wrote it, not an American marketing team
- Say what something is. Do not define it by what it is not.
- Avoid the pattern "this is X, not Y" — just say what it is
- Make answers sound like something a real person would think, not write
- Use dryer, more understated tone

**The test:** read the sentence aloud. If it sounds like it came from a pitch deck or a productivity influencer, rewrite it.

---

## Content principles

- Reward AI use that amplifies human judgment
- Flag AI use that replaces human thinking
- In education: helping understand concepts is good. Generating essays to submit is not.
- At work: using AI to empower skills is good. Outsourcing authenticity is not.
- Questions should feel like real dilemmas, not obvious traps
- The right answer should never be obvious
- Tone throughout: warm, direct, empowering. Never preachy or judgmental.

---

## Tech stack

- React + Vite + Tailwind + Recharts
- All state client-side
- No backend, no auth
- Git repository connected to GitHub (RobinMadelief/AQ)
- Deployed on Vercel, auto-deploys on push to main
- Two collaborators: Robin and Henrik
- Live URL: https://archetypes-ai.vercel.app

---

## What not to do

- Do not add new archetypes without being explicitly asked
- Do not change the scoring logic (behavior layer only for primary archetype)
- Do not add shadows or gradients
- Do not use border-radius larger than 20px on any element except pill buttons
- Do not change the burgundy color (#6B1020)
- Do not add any new pages without being asked
- Do not change the five Likert perception statements without being asked
- Do not use localStorage or sessionStorage
