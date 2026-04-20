// Minimal geometric SVG illustrations for each archetype

function SkepticIllustration({ size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Grounded base */}
      <rect x="20" y="96" width="80" height="6" rx="3" fill="#475569" opacity="0.15"/>
      {/* Body — upright, self-contained */}
      <rect x="42" y="52" width="36" height="44" rx="8" fill="#64748b" opacity="0.12"/>
      {/* Head */}
      <circle cx="60" cy="36" r="18" fill="#64748b" opacity="0.18"/>
      {/* Arms crossed — left arm */}
      <path d="M42 72 Q30 68 28 76 Q30 82 42 80" fill="#64748b" opacity="0.25"/>
      {/* Arms crossed — right arm overlapping */}
      <path d="M78 72 Q90 68 92 76 Q90 82 78 80" fill="#64748b" opacity="0.25"/>
      {/* Cross line suggesting arms folded */}
      <line x1="36" y1="76" x2="84" y2="76" stroke="#64748b" strokeWidth="3" strokeLinecap="round" opacity="0.4"/>
      <line x1="38" y1="72" x2="82" y2="80" stroke="#64748b" strokeWidth="2" strokeLinecap="round" opacity="0.25"/>
      {/* Eyes — steady, composed */}
      <circle cx="53" cy="34" r="3" fill="#334155" opacity="0.6"/>
      <circle cx="67" cy="34" r="3" fill="#334155" opacity="0.6"/>
      {/* Subtle shield/boundary ring */}
      <circle cx="60" cy="60" r="50" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.15"/>
    </svg>
  )
}

function DelegatorIllustration({ size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Reclining base — leaning back */}
      <rect x="15" y="88" width="90" height="8" rx="4" fill="#0ea5e9" opacity="0.1"/>
      {/* Chair/surface suggestion */}
      <path d="M20 90 Q60 86 100 90" stroke="#0ea5e9" strokeWidth="2" opacity="0.2" fill="none"/>
      {/* Body — relaxed, leaned back */}
      <rect x="44" y="50" width="32" height="40" rx="10" fill="#0ea5e9" opacity="0.12" transform="rotate(-8 60 70)"/>
      {/* Head */}
      <circle cx="62" cy="34" r="17" fill="#0ea5e9" opacity="0.18"/>
      {/* Arms loose at sides / open */}
      <path d="M44 68 Q28 72 26 80 Q28 86 40 84" fill="#0ea5e9" opacity="0.2"/>
      <path d="M76 68 Q92 72 94 80 Q92 86 80 84" fill="#0ea5e9" opacity="0.2"/>
      {/* Flowing lines — things moving away, delegated */}
      <path d="M72 58 Q88 50 102 44" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.4" fill="none" strokeLinecap="round"/>
      <path d="M72 64 Q90 60 106 56" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.3" fill="none" strokeLinecap="round"/>
      <path d="M72 70 Q88 68 100 68" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.2" fill="none" strokeLinecap="round"/>
      {/* Eyes — half-closed, relaxed */}
      <path d="M54 33 Q57 30 60 33" stroke="#075985" strokeWidth="2" strokeLinecap="round" opacity="0.5" fill="none"/>
      <path d="M64 33 Q67 30 70 33" stroke="#075985" strokeWidth="2" strokeLinecap="round" opacity="0.5" fill="none"/>
    </svg>
  )
}

function ExperimenterIllustration({ size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Central figure */}
      <circle cx="60" cy="60" r="16" fill="#f59e0b" opacity="0.18"/>
      <circle cx="60" cy="32" r="14" fill="#f59e0b" opacity="0.18"/>
      {/* Body */}
      <rect x="46" y="46" width="28" height="32" rx="8" fill="#f59e0b" opacity="0.1"/>
      {/* Orbiting tool icons — scattered around */}
      {/* Tool 1 — top left */}
      <rect x="8" y="12" width="22" height="16" rx="4" fill="#f59e0b" opacity="0.2"/>
      <line x1="19" y1="28" x2="40" y2="48" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 3" opacity="0.3"/>
      {/* Tool 2 — top right */}
      <rect x="88" y="10" width="22" height="16" rx="4" fill="#fbbf24" opacity="0.25"/>
      <line x1="99" y1="26" x2="76" y2="46" stroke="#fbbf24" strokeWidth="1" strokeDasharray="2 3" opacity="0.3"/>
      {/* Tool 3 — bottom left */}
      <rect x="6" y="80" width="22" height="16" rx="4" fill="#d97706" opacity="0.2"/>
      <line x1="28" y1="88" x2="46" y2="76" stroke="#d97706" strokeWidth="1" strokeDasharray="2 3" opacity="0.3"/>
      {/* Tool 4 — bottom right */}
      <rect x="92" y="82" width="22" height="16" rx="4" fill="#f59e0b" opacity="0.22"/>
      <line x1="92" y1="88" x2="76" y2="76" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 3" opacity="0.3"/>
      {/* Tool 5 — bottom center */}
      <rect x="50" y="96" width="20" height="14" rx="4" fill="#fbbf24" opacity="0.2"/>
      <line x1="60" y1="96" x2="60" y2="82" stroke="#fbbf24" strokeWidth="1" strokeDasharray="2 3" opacity="0.3"/>
      {/* Eyes — wide, curious */}
      <circle cx="53" cy="30" r="4" fill="#92400e" opacity="0.5"/>
      <circle cx="67" cy="30" r="4" fill="#92400e" opacity="0.5"/>
      {/* Highlight dots — energy/curiosity */}
      <circle cx="54" cy="29" r="1.5" fill="white" opacity="0.8"/>
      <circle cx="68" cy="29" r="1.5" fill="white" opacity="0.8"/>
      {/* Whirl line — chaotic energy */}
      <path d="M60 20 Q75 15 72 28 Q69 38 80 36" stroke="#f59e0b" strokeWidth="1.5" opacity="0.25" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

function AmplifierIllustration({ size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Ground */}
      <rect x="28" y="98" width="64" height="5" rx="2.5" fill="#10b981" opacity="0.12"/>
      {/* Body — upright, centered, confident */}
      <rect x="44" y="50" width="32" height="48" rx="10" fill="#10b981" opacity="0.12"/>
      {/* Head */}
      <circle cx="60" cy="34" r="18" fill="#10b981" opacity="0.15"/>
      {/* Technology arc on right — AI layer */}
      <path d="M84 46 Q102 60 84 76" stroke="#10b981" strokeWidth="2.5" opacity="0.35" fill="none" strokeLinecap="round"/>
      <path d="M90 50 Q110 60 90 72" stroke="#10b981" strokeWidth="1.5" opacity="0.2" fill="none" strokeLinecap="round"/>
      {/* Left arm — reaching, contributing */}
      <path d="M44 68 Q28 62 22 68 Q28 76 44 74" fill="#10b981" opacity="0.2"/>
      {/* Right arm — reaching toward the arc */}
      <path d="M76 68 Q84 62 86 68 Q84 76 76 74" fill="#10b981" opacity="0.2"/>
      {/* Upward pulse/signal from head */}
      <line x1="60" y1="16" x2="60" y2="8" stroke="#10b981" strokeWidth="2" opacity="0.35" strokeLinecap="round"/>
      <line x1="50" y1="12" x2="50" y2="6" stroke="#10b981" strokeWidth="1.5" opacity="0.2" strokeLinecap="round"/>
      <line x1="70" y1="12" x2="70" y2="6" stroke="#10b981" strokeWidth="1.5" opacity="0.2" strokeLinecap="round"/>
      {/* Eyes — focused, forward */}
      <circle cx="53" cy="33" r="3.5" fill="#065f46" opacity="0.6"/>
      <circle cx="67" cy="33" r="3.5" fill="#065f46" opacity="0.6"/>
      {/* Small highlight */}
      <circle cx="54.5" cy="31.5" r="1.2" fill="white" opacity="0.7"/>
      <circle cx="68.5" cy="31.5" r="1.2" fill="white" opacity="0.7"/>
      {/* Harmony ring — human + tech together */}
      <circle cx="60" cy="60" r="52" stroke="#10b981" strokeWidth="1" opacity="0.1"/>
      <circle cx="60" cy="60" r="44" stroke="#10b981" strokeWidth="1" opacity="0.08"/>
    </svg>
  )
}

function ArchitectIllustration({ size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Ground */}
      <rect x="28" y="98" width="64" height="5" rx="2.5" fill="#6366f1" opacity="0.12"/>
      {/* Body — upright, deliberate */}
      <rect x="44" y="50" width="32" height="48" rx="10" fill="#6366f1" opacity="0.12"/>
      {/* Head */}
      <circle cx="60" cy="34" r="18" fill="#6366f1" opacity="0.15"/>
      {/* Network nodes — outer ring */}
      <circle cx="18" cy="22" r="5" fill="#6366f1" opacity="0.28"/>
      <circle cx="102" cy="20" r="5" fill="#6366f1" opacity="0.28"/>
      <circle cx="12" cy="62" r="4" fill="#6366f1" opacity="0.22"/>
      <circle cx="108" cy="58" r="4" fill="#6366f1" opacity="0.22"/>
      <circle cx="20" cy="98" r="4" fill="#6366f1" opacity="0.18"/>
      <circle cx="100" cy="98" r="4" fill="#6366f1" opacity="0.18"/>
      {/* Connections: outer nodes to each other */}
      <line x1="18" y1="22" x2="102" y2="20" stroke="#6366f1" strokeWidth="1" opacity="0.18"/>
      <line x1="18" y1="22" x2="12" y2="62" stroke="#6366f1" strokeWidth="1" opacity="0.18"/>
      <line x1="102" y1="20" x2="108" y2="58" stroke="#6366f1" strokeWidth="1" opacity="0.18"/>
      <line x1="12" y1="62" x2="20" y2="98" stroke="#6366f1" strokeWidth="1" opacity="0.18"/>
      <line x1="108" y1="58" x2="100" y2="98" stroke="#6366f1" strokeWidth="1" opacity="0.18"/>
      <line x1="20" y1="98" x2="100" y2="98" stroke="#6366f1" strokeWidth="1" opacity="0.14"/>
      {/* Connections: outer nodes to figure */}
      <line x1="18" y1="22" x2="48" y2="34" stroke="#6366f1" strokeWidth="1" opacity="0.22" strokeDasharray="3 3"/>
      <line x1="102" y1="20" x2="72" y2="34" stroke="#6366f1" strokeWidth="1" opacity="0.22" strokeDasharray="3 3"/>
      <line x1="12" y1="62" x2="44" y2="68" stroke="#6366f1" strokeWidth="1" opacity="0.2" strokeDasharray="3 3"/>
      <line x1="108" y1="58" x2="76" y2="68" stroke="#6366f1" strokeWidth="1" opacity="0.2" strokeDasharray="3 3"/>
      {/* Eyes — focused, planning */}
      <circle cx="53" cy="33" r="3.5" fill="#312e81" opacity="0.6"/>
      <circle cx="67" cy="33" r="3.5" fill="#312e81" opacity="0.6"/>
      <circle cx="54.5" cy="31.5" r="1.2" fill="white" opacity="0.7"/>
      <circle cx="68.5" cy="31.5" r="1.2" fill="white" opacity="0.7"/>
      {/* Central hub ring */}
      <circle cx="60" cy="60" r="46" stroke="#6366f1" strokeWidth="1" opacity="0.08"/>
    </svg>
  )
}

const illustrations = {
  skeptic: SkepticIllustration,
  delegator: DelegatorIllustration,
  experimenter: ExperimenterIllustration,
  amplifier: AmplifierIllustration,
  architect: ArchitectIllustration,
}

export default function ArchetypeIllustration({ archetypeId, size = 120 }) {
  const Component = illustrations[archetypeId]
  if (!Component) return null
  return <Component size={size} />
}
