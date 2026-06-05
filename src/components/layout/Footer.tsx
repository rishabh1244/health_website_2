import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const quickLinks = [
  { name: 'About Dr. Meenakshi', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Programs', href: '#programs' },
  { name: 'Success Stories', href: '#success' },
  { name: 'Blog', href: '#blog' },
]

const programs = [
  { name: 'Weight Loss Programs', href: '#' },
  { name: 'Diabetes Reversal', href: '#' },
  { name: 'PCOS & Hormonal Health', href: '#' },
  { name: 'Gut Health & Detox', href: '#' },
  { name: 'Child Nutrition', href: '#' },
]

const socialLinks = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-green-dark text-white">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-primary" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-lg">Dr. Meenakshi Jain</h3>
                <p className="text-green-light text-xs">Nutrition Expert</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Empowering you with the right nutrition for a healthier, happier and longer life.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Our Programs</h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <a
                    href={program.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <FaPhone className="text-green-light" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <FaEnvelope className="text-green-light" />
                <span>hello@drmeenakshijain.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <FaMapMarkerAlt className="text-green-light mt-1" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Dr. Meenakshi Jain. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

