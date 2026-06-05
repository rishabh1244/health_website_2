import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const transformations = [
  {
    name: 'Anita S.',
    weightLost: '18kg',
    duration: '5 months',
    result: 'Better energy & confidence',
    before: '[images.unsplash.com](https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&q=80)',
    after: '[images.unsplash.com](https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80)',
  },
  {
    name: 'Rohit M.',
    weightLost: '22kg',
    duration: '6 months',
    result: 'Reversed Pre-Diabetes & reduced belly fat',
    before: '[images.unsplash.com](https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80)',
    after: '[images.unsplash.com](https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80)',
  },
  {
    name: 'Neha R.',
    weightLost: '15kg',
    duration: '4 months',
    result: 'Balanced hormones, regular periods & weight loss',
    before: '[images.unsplash.com](https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80)',
    after: '[images.unsplash.com](https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&q=80)',
  },
  {
    name: 'Vikram K.',
    weightLost: '20kg',
    duration: '5 months',
    result: 'Lowered BP & cholesterol naturally',
    before: '[images.unsplash.com](https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&q=80)',
    after: '[images.unsplash.com](https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&q=80)',
  },
]

export default function SuccessStories() {
  return (
    <section id="success" className="section-padding bg-cream">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-green-dark">
            REAL PEOPLE, REAL RESULTS
          </h2>
          <div className="w-24 h-1 bg-green-primary mx-auto mt-4"></div>
        </motion.div>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {transformations.map((item, index) => (
            <SwiperSlide key={item.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden card-shadow"
              >
                <div className="relative">
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img
                        src={item.before}
                        alt={`${item.name} before`}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        Before
                      </span>
                    </div>
                    <div className="relative">
                      <img
                        src={item.after}
                        alt={`${item.name} after`}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute top-2 right-2 bg-green-primary text-white text-xs px-2 py-1 rounded">
                        -{item.weightLost}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-green-dark">{item.name}</h3>
                  <p className="text-sm text-gray-500">Lost {item.weightLost} in {item.duration}</p>
                  <p className="text-xs text-green-light mt-1">{item.result}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

