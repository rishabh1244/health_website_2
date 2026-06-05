import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

interface TestimonialCardProps {
  name: string
  avatar: string
  rating: number
  testimonial: string
}

export default function TestimonialCard({ name, avatar, rating, testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-6 card-shadow"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < rating ? 'text-gold' : 'text-gray-300'}
            size={16}
          />
        ))}
      </div>
      <p className="text-gray-600 italic mb-6">"{testimonial}"</p>
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <span className="font-semibold text-green-dark">{name}</span>
      </div>
    </motion.div>
  )
}

