import { motion } from 'framer-motion'
import { Code, Palette, Zap, Heart } from 'lucide-react'

export const About = () => {
  const skills = [
    { icon: Code, title: 'Development', description: 'React, TypeScript, Node.js' },
    { icon: Palette, title: 'Design', description: 'UI/UX, Figma, Creative Vision' },
    { icon: Zap, title: 'Performance', description: 'Optimization, Fast Loading' },
    { icon: Heart, title: 'Passion', description: 'Clean Code, User Experience' },
  ]

  return (
    <section className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who loves creating beautiful, functional web experiences. 
            Like exploring the cosmos, I enjoy discovering new technologies and pushing the boundaries of what's possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
              }}
              className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300"
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 mb-4"
                >
                  <skill.icon className="text-purple-400" size={32} />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              From the first line of code to complex applications, my journey has been driven by curiosity and creativity. 
              I believe in writing clean, maintainable code that not only works but inspires. Every project is an opportunity 
              to learn something new and push the boundaries of user experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}