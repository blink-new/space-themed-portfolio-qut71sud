import { motion } from 'framer-motion'
import { Sparkles, Mail } from 'lucide-react'
import { Discord } from '@icons-pack/react-simple-icons'

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <Sparkles className="mx-auto text-cyan-400 mb-4" size={48} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Konsti aka Kxnstiison
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
        >
          Crafting digital experiences beyond the stars
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-6 justify-center mb-12"
        >
          <a 
            href="https://discord.com/users/YOUR_DISCORD_ID" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-400/25 flex items-center justify-center gap-2"
          >
            <Discord size={20} />
            Discord
          </a>
          <a 
            href="mailto:YOUR_EMAIL@EXAMPLE.COM" 
            className="px-8 py-4 bg-gradient-to-r from-pink-600 to-orange-600 text-white font-semibold rounded-full hover:from-pink-500 hover:to-orange-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-400/25 flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Email
          </a>
        </motion.div>

        {/* Floating animation element */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 text-6xl opacity-20"
        >
          🚀
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 15, 0],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 left-1/4 text-4xl opacity-20"
        >
          🌟
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}