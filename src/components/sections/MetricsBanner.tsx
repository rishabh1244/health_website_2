import { motion } from 'framer-motion'
import { FaCalendarAlt, FaStar, FaArrowRight } from 'react-icons/fa'
import { HiOutlineUsers } from 'react-icons/hi'
import Button from '../ui/Button'

export default function MetricsBanner() {
  return (
    <section className="py-8 gradient-green">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center md:justify-between gap-6"
        >
          {/* Date */}
          <div className="flex items-center gap-3 text-white">
            <FaCalendarAlt className="text-2xl" />
            <div>
              <p className="text-lg font-bold">5th June 2026</p>
              <p className="text-xs text-white/70">Batch Starting Soon</p>
            </div>
          </div>
          
          {/* Lives Transformed */}
          <div className="flex items-center gap-3 text-white">
            <HiOutlineUsers className="text-3xl" />
            <div>
              <p className="text-lg font-bold">25,000+</p>
              <p className="text-xs text-white/70">Lives Transformed</p>
            </div>
          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-3 text-white">
            <FaStar className="text-2xl text-gold" />
            <div>
              <p className="text-lg font-bold">4.9/5</p>
              <p className="text-xs text-white/70">Client Rating</p>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex gap-3">
            <Button variant="gold" icon={<FaArrowRight />}>
              Register Now
            </Button>
            <Button variant="secondary" className="!border-white !text-white hover:!bg-white hover:!text-green-dark">
              Book Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

