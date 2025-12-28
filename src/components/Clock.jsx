import { useEffect, useState } from 'react'

export default function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="clock">
      <div className="clock-inner">
        <div className="clock-time">{time.toLocaleTimeString()}</div>
        <div className="clock-date">{time.toLocaleDateString()}</div>
      </div>
    </div>
  )
}
