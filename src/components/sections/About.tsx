import { motion } from 'framer-motion'
import { FaCheck, FaArrowRight, FaLeaf } from 'react-icons/fa'
import Button from '../ui/Button'

const credentials = [
  'Ph.D. in Nutrition & Dietetics',
  '25+ Years of Clinical & Lifestyle Nutrition Experience',
  'Specialist in Weight Management & Metabolic Health',
  'Personalized, Practical & Science-backed Diet Plans',
  'Trusted by 10,000+ Clients Worldwide',
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-green-light text-sm font-medium uppercase tracking-wider">ABOUT</span>
            </div>
            
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-green-dark mb-2">
              Dr. Meenakshi Jain
              <FaLeaf className="inline-block text-green-light ml-2" />
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Dr. Meenakshi Jain is a leading Nutrition Expert helping individuals achieve sustainable weight management, reverse lifestyle diseases, and build a healthier relationship with food.
            </p>
            
            <ul className="space-y-4 mb-8">
              {credentials.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 bg-green-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <Button variant="primary" icon={<FaArrowRight />}>
              Know More About Dr. Meenakshi
            </Button>
          </motion.div>
          
          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden card-shadow">
              <img
                src="[images.unsplash.com](https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80)"
                alt="Dr. Meenakshi Jain at conference"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative leaf */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 opacity-30">
              <img
                src="[images.unsplash.com](https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=200&q=80)"
                alt=""
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

