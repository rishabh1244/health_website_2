import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Statistics from './components/sections/Statistics'
import About from './components/sections/About'
import PromoBanner from './components/sections/PromoBanner'
import SuccessStories from './components/sections/SuccessStories'
import TransformationRoadmap from './components/sections/TransformationRoadmap'
import MetricsBanner from './components/sections/MetricsBanner'
import Testimonials from './components/sections/Testimonials'
import FinalCTA from './components/sections/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <About />
        <PromoBanner />
        <SuccessStories />
        <TransformationRoadmap />
        <MetricsBanner />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App

