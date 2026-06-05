import { motion } from 'framer-motion'
import { FaPlay, FaArrowRight, FaCheck, FaLeaf } from 'react-icons/fa'
import { HiOutlineClipboardCheck, HiOutlineUserGroup, HiOutlineLightBulb, HiOutlineChartBar } from 'react-icons/hi'
import Button from '../ui/Button'
import CountdownTimer from '../ui/CountdownTimer'

const features = [
  { icon: HiOutlineClipboardCheck, text: 'Personalized Diet Plan' },
  { icon: HiOutlineUserGroup, text: 'Daily Accountability' },
  { icon: HiOutlineLightBulb, text: 'Expert Guidance' },
  { icon: HiOutlineChartBar, text: 'Visible Results' },
]

const challengeHighlights = [
  'No Crash Diets',
  'Balanced Nutrition',
  'Expert Guidance',
  'Daily Motivation',
  'Sustainable Weight Loss',
  'Lifetime Habit Building',
]

export default function Hero() {
  const targetDate = new Date('2026-06-05T00:00:00')
  
  return (
    <section id="home" className="pt-24 md:pt-32 pb-8 bg-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-32 h-32 opacity-20">
        <img src="[images.unsplash.com](https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=200&q=80)" alt="" className="object-contain" />
      </div>
      
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-green-dark leading-tight">
              21 Days
              <br />
              <span className="font-script text-green-primary text-5xl md:text-6xl lg:text-7xl">
                Weight Loss
              </span>
              <br />
              Challenge
            </h1>
            
            {/* Date Ribbon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-green-primary text-white px-4 py-2 rounded-full mt-4"
            >
              <span className="text-sm">📅</span>
              <span className="font-semibold text-sm">STARTS FROM 5TH JUNE 2026</span>
            </motion.div>
            
            <p className="text-gray-600 mt-6 text-lg max-w-lg">
              A guided, science-backed program to help you lose weight, boost energy and build lifelong healthy habits in just 21 days!
            </p>
            
            {/* Feature Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 bg-green-light/20 rounded-full flex items-center justify-center mb-2">
                    <feature.icon className="text-green-primary text-xl" />
                  </div>
                  <span className="text-xs text-gray-600">{feature.text}</span>
                </motion.div>
              ))}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="primary" size="lg" icon={<FaArrowRight />}>
                Join The Challenge Now
              </Button>
              <Button variant="secondary" size="lg" icon={<FaPlay />}>
                Watch Video
              </Button>
            </div>
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mt-6 card-shadow"
            >
              <FaLeaf className="text-green-primary" />
              <span className="text-sm font-medium text-green-dark">21 Days To A Better You</span>
            </motion.div>
          </motion.div>
          
          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Hero Image */}
            <div className="relative">
              <img
                src="[images.unsplash.com](https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80)"
                alt="Dr. Meenakshi Jain - Nutrition Expert"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
              
              {/* Challenge Highlights Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-4 -right-4 md:right-0 bg-white rounded-2xl p-4 card-shadow max-w-xs"
              >
                <h3 className="font-semibold text-green-dark mb-3 text-sm">CHALLENGE HIGHLIGHTS</h3>
                <ul className="space-y-2">
                  {challengeHighlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <FaCheck className="text-green-primary text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Countdown Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-8 -left-4 md:left-0 bg-green-dark rounded-2xl p-4 card-shadow"
              >
                <p className="text-green-light text-xs mb-2">CHALLENGE STARTS IN</p>
                <CountdownTimer targetDate={targetDate} variant="light" />
                <button className="w-full mt-3 bg-gold hover:bg-amber-600 text-white text-sm font-semibold py-2 px-4 rounded-full transition-colors">
                  Limited Seats Available!
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

