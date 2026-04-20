export default function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100)

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium uppercase tracking-wider" style={{ color: '#888780' }}>
          Question {current} of {total}
        </span>
        <span className="text-xs font-semibold" style={{ color: '#2d9e5f' }}>{pct}%</span>
      </div>
      <div style={{ height: 3, backgroundColor: '#e8e8e4', borderRadius: 0 }}>
        <div
          style={{ height: '100%', width: `${pct}%`, backgroundColor: '#2d9e5f', borderRadius: 0, transition: 'width 0.5s ease-out' }}
        />
      </div>
    </div>
  )
}
