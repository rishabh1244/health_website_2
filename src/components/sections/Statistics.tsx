import { motion } from 'framer-motion'
import StatCard from '../ui/StatCard'
import { FaUsers, FaChartLine, FaHeartbeat, FaChild } from 'react-icons/fa'
import { HiTrendingUp } from 'react-icons/hi'

const stats = [
  {
    value: 135,
    suffix: 'M+',
    label: 'Indians are overweight or obese',
    sublabel: '(ICMR-NCD Risk Factor Study)',
    icon: <FaUsers size={24} />,
  },
  {
    value: 30,
    suffix: '%',
    label: 'Rise in Obesity',
    sublabel: 'in last 10 years',
    icon: <HiTrendingUp size={24} />,
  },
  {
    value: 75,
    suffix: '%',
    label: 'Lifestyle diseases linked to obesity',
    icon: <FaHeartbeat size={24} />,
  },
  {
    value: 1,
    prefix: '1 in ',
    suffix: '',
    label: 'Urban adults overweight',
    icon: <FaChartLine size={24} />,
  },
  {
    value: 40,
    suffix: '%',
    label: 'Children may be overweight by 2030',
    icon: <FaChild size={24} />,
  },
]

export default function Statistics() {
  return (
    <section className="py-12 bg-gradient-to-r from-cream to-white">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <StatCard
                value={stat.value === 1 ? 3 : stat.value}
                suffix={stat.value === 1 ? '' : stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
                sublabel={stat.sublabel}
                icon={stat.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

