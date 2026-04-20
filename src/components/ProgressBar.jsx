export default function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100)

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Question {current} of {total}
        </span>
        <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.45)' }}>{pct}%</span>
      </div>
      <div style={{ height: 3, backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: 999 }}>
        <div
          style={{
            height: '100%',
            width: `${pct}%`,
            backgroundColor: 'rgba(255,255,255,0.6)',
            borderRadius: 999,
            transition: 'width 0.5s ease-out',
          }}
        />
      </div>
    </div>
  )
}
