import { motion } from 'framer-motion'
import { FaArrowRight, FaLeaf } from 'react-icons/fa'
import Button from '../ui/Button'

export default function FinalCTA() {
  return (
    <section className="py-16 gradient-green relative overflow-hidden">
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <img
              src="[images.unsplash.com](https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&q=80)"
              alt="Healthy food"
              className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full hidden md:block"
            />
            <div className="text-white">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
                Your Health Transformation Starts With The Right Nutrition
                <FaLeaf className="inline-block text-green-light ml-2" />
              </h2>
              <p className="text-white/80 text-sm">
                Book your personalized consultation today and take charge of your health.
              </p>
            </div>
          </motion.div>
          
          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 card-shadow max-w-md ml-auto"
          >
            <h3 className="font-playfair text-xl font-bold text-green-dark mb-4">
              Book Your Personalized Consultation
            </h3>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-primary"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-primary"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-primary"
              />
              <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-primary text-gray-500">
                <option value="">Select Program</option>
                <option value="21-day">21 Days Challenge</option>
                <option value="weight-loss">Weight Loss Program</option>
                <option value="diabetes">Diabetes Reversal</option>
                <option value="pcos">PCOS Management</option>
              </select>
              <Button variant="primary" className="w-full" icon={<FaArrowRight />}>
                Book Appointment Now
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

