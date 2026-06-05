import { motion } from 'framer-motion'
import { FaCheck, FaLeaf } from 'react-icons/fa'

const weeks = [
  {
    week: 'WEEK 1',
    title: 'RESET YOUR BODY',
    days: 'Day 1 - 7',
    items: ['Detox Nutrition', 'Hydration Plan', 'Activity Tracking', 'Habit Building'],
    result: '-1 to -2 KG',
  },
  {
    week: 'WEEK 2',
    title: 'ACCELERATE FAT LOSS',
    days: 'Day 8 - 14',
    items: ['Customized Diet', 'Daily Accountability', 'Progress Reviews', 'Metabolism Boost'],
    result: '-2 to -4 KG',
  },
  {
    week: 'WEEK 3',
    title: 'TRANSFORM YOUR LIFE',
    days: 'Day 15 - 21',
    items: ['Fat Loss Optimization', 'Lifestyle Coaching', 'Final Assessment', 'Long-Term Plan'],
    result: '-3 to -7 KG',
  },
]

const whatYouGet = [
  'Personalized Diet Plan',
  'Daily Motivation',
  'WhatsApp Support',
  'Weekly Review',
  'Healthy Recipes',
  'Workout Guidance',
  'Lifetime Habits',
  'Certificate of Completion',
]

export default function TransformationRoadmap() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-green-dark">
            21 Days Transformation Roadmap
            <FaLeaf className="inline-block text-green-light ml-2" />
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-5 gap-6 items-center">
          {/* Week Cards */}
          {weeks.map((week, index) => (
            <motion.div
              key={week.week}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-cream rounded-2xl p-5 card-shadow"
            >
              <span className="inline-block bg-green-primary text-white text-xs px-3 py-1 rounded-full mb-3">
                {week.week}
              </span>
              <h3 className="font-playfair font-bold text-green-dark mb-1">{week.title}</h3>
              <p className="text-xs text-gray-500 mb-4">{week.days}</p>
              
              <ul className="space-y-2 mb-4">
                {week.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <FaCheck className="text-green-primary text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="bg-green-light/20 rounded-lg p-2 text-center">
                <p className="text-xs text-gray-500">Expected Result</p>
                <p className="font-bold text-green-dark">{week.result}</p>
              </div>
            </motion.div>
          ))}
          
          {/* Center Image - spans middle on larger screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:order-2 lg:col-span-1 hidden lg:block"
          >
            <div className="text-center">
              <div className="bg-green-primary text-white rounded-full w-32 h-32 mx-auto flex flex-col items-center justify-center">
                <span className="text-3xl font-bold">21</span>
                <span className="text-xs">DAYS</span>
                <span className="text-xs">TO A NEW YOU</span>
              </div>
              <img
                src="[images.unsplash.com](https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&q=80)"
                alt="Transformation"
                className="w-full max-w-xs mx-auto mt-4 rounded-xl"
              />
            </div>
          </motion.div>
          
          {/* What You'll Get */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-cream rounded-2xl p-5 card-shadow lg:order-3"
          >
            <h3 className="font-playfair font-bold text-green-dark mb-4">What You'll Get</h3>
            <ul className="space-y-2">
              {whatYouGet.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <FaCheck className="text-green-primary text-xs" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

