import { motion } from 'framer-motion'
import { FaCalendarAlt, FaUsers, FaArrowRight, FaPhone } from 'react-icons/fa'
import { HiOutlineClipboardCheck, HiOutlineChat, HiOutlineVideoCamera, HiOutlineChartBar, HiOutlineUserGroup, HiOutlineHeart } from 'react-icons/hi'
import Button from '../ui/Button'

const benefits = [
  { icon: HiOutlineClipboardCheck, text: 'Daily Diet Plans' },
  { icon: HiOutlineChat, text: 'WhatsApp Support' },
  { icon: HiOutlineVideoCamera, text: 'Live Sessions' },
  { icon: HiOutlineChartBar, text: 'Progress Tracking' },
  { icon: HiOutlineUserGroup, text: 'Accountability Group' },
  { icon: HiOutlineHeart, text: 'Sustainable Weight Loss' },
]

export default function PromoBanner() {
  return (
    <section className="py-12 gradient-green relative overflow-hidden">
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <img
              src="[images.unsplash.com](https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80)"
              alt="Healthy salad bowl"
              className="w-64 h-64 object-cover rounded-full mx-auto"
            />
          </motion.div>
          
          {/* Center - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
              Ready To Transform In Just 21 Days?
            </h2>
            <p className="text-white/80 mb-6 text-sm">
              Join Dr. Meenakshi Jain's 21 Days Weight Loss Challenge and take the first step towards a healthier, happier you.
            </p>
            
            <div className="grid grid-cols-3 gap-3 mb-6">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-2">
                    <benefit.icon className="text-white text-lg" />
                  </div>
                  <span className="text-xs text-white/90">{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 card-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaCalendarAlt className="text-green-primary text-2xl" />
              <div>
                <p className="text-xs text-gray-500">Challenge Starts</p>
                <p className="font-bold text-green-dark text-lg">5th June 2026</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <FaUsers className="text-gold text-2xl" />
              <div>
                <p className="text-xs text-gray-500">Seats Left</p>
                <p className="font-bold text-gold text-lg">Only 50 Seats</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button variant="gold" className="w-full" icon={<FaArrowRight />}>
                Register Now
              </Button>
              <Button variant="outline" className="w-full" icon={<FaPhone />}>
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

