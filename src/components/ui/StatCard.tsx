import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface StatCardProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  sublabel?: string
  icon?: ReactNode
}

export default function StatCard({ value, suffix = '', prefix = '', label, sublabel, icon }: StatCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-6 text-center card-shadow hover:shadow-xl transition-shadow"
    >
      {icon && <div className="text-green-primary mb-2">{icon}</div>}
      <div className="text-3xl md:text-4xl font-bold text-green-dark font-playfair">
        {prefix}
        {isInView ? (
          <CountUp end={value} duration={2.5} separator="," />
        ) : (
          '0'
        )}
        {suffix}
      </div>
      <p className="text-gray-600 mt-2 text-sm">{label}</p>
      {sublabel && <p className="text-xs text-gray-400 mt-1">{sublabel}</p>}
    </motion.div>
  )
}

