import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'gold' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  icon?: ReactNode
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  className = '',
  icon
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2'
  
  const variants = {
    primary: 'bg-green-primary hover:bg-green-dark text-white',
    secondary: 'bg-white hover:bg-gray-100 text-green-dark border-2 border-green-dark',
    gold: 'bg-gold hover:bg-amber-600 text-white',
    outline: 'bg-transparent hover:bg-green-primary hover:text-white text-green-primary border-2 border-green-primary',
  }
  
  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
      {icon && <span>{icon}</span>}
    </motion.button>
  )
}

