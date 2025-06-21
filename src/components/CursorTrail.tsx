import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TrailStar {
  id: number
  x: number
  y: number
  timestamp: number
}

export const CursorTrail = () => {
  const [trailStars, setTrailStars] = useState<TrailStar[]>([])
  const nextIdRef = useRef(0)

  useEffect(() => {
    let animationFrame: number

    const handleMouseMove = (e: MouseEvent) => {
      const newStar: TrailStar = {
        id: nextIdRef.current++,
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      }

      setTrailStars(prev => [...prev.slice(-8), newStar]) // Keep only last 8 stars
    }

    const cleanUpStars = () => {
      const now = Date.now()
      setTrailStars(prev => prev.filter(star => now - star.timestamp < 1500))
      animationFrame = requestAnimationFrame(cleanUpStars)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animationFrame = requestAnimationFrame(cleanUpStars)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {trailStars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-2 h-2 pointer-events-none"
            style={{
              left: star.x - 4,
              top: star.y - 4,
            }}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ 
              scale: 1,
              opacity: 0.6,
            }}
            exit={{ 
              scale: 0,
              opacity: 0,
            }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse" 
                 style={{
                   boxShadow: '0 0 6px rgba(139, 92, 246, 0.6), 0 0 12px rgba(6, 182, 212, 0.4)'
                 }} 
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}