import { useCountdown } from '../../hooks/useCountdown'

interface CountdownTimerProps {
  targetDate: Date
  variant?: 'light' | 'dark'
}

export default function CountdownTimer({ targetDate, variant = 'dark' }: CountdownTimerProps) {
  const timeLeft = useCountdown(targetDate)
  
  const bgColor = variant === 'dark' ? 'bg-green-dark' : 'bg-white'
  const textColor = variant === 'dark' ? 'text-white' : 'text-green-dark'
  const labelColor = variant === 'dark' ? 'text-green-light' : 'text-gray-500'
  
  const timeUnits = [
    { value: timeLeft.days, label: 'DAYS' },
    { value: timeLeft.hours, label: 'HRS' },
    { value: timeLeft.minutes, label: 'MINS' },
    { value: timeLeft.seconds, label: 'SECS' },
  ]
  
  return (
    <div className="flex gap-2 md:gap-4">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="text-center">
          <div className={`${bgColor} ${textColor} rounded-lg p-2 md:p-3 min-w-[50px] md:min-w-[60px]`}>
            <span className="text-xl md:text-2xl font-bold font-playfair">
              {String(unit.value).padStart(2, '0')}
            </span>
          </div>
          <span className={`text-xs ${labelColor} mt-1 block`}>{unit.label}</span>
        </div>
      ))}
    </div>
  )
}

