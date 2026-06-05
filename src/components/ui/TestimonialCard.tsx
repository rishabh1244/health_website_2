import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import TestimonialCard from '../ui/TestimonialCard'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Priya Sharma',
    avatar: '[images.unsplash.com](https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80)',
    rating: 5,
    testimonial: "Dr. Meenakshi Jain's plan changed my life. No crash diets, just real food and real results!",
  },
  {
    name: 'Amit Verma',
    avatar: '[images.unsplash.com](https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80)',
    rating: 5,
    testimonial: 'I have more energy, better sleep and my sugar levels are now under control!',
  },
  {
    name: 'Sneha Kapoor',
    avatar: '[images.unsplash.com](https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80)',
    rating: 5,
    testimonial: 'The most practical and personalized nutrition guidance I have ever received.',
  },
  {
    name: 'Karan Mehta',
    avatar: '[images.unsplash.com](https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80)',
    rating: 5,
    testimonial: 'Highly recommend for anyone serious about long-term health transformation.',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-green-dark">
            WHAT MY CLIENTS SAY
          </h2>
          <div className="w-24 h-1 bg-green-primary mx-auto mt-4"></div>
        </motion.div>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

