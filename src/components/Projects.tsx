import { motion } from 'framer-motion'
import { ExternalLink, Github, Sparkles } from 'lucide-react'

export const Projects = () => {
  const projects = [
    {
      title: 'Stellar Dashboard',
      description: 'A modern analytics dashboard with real-time data visualization and interactive charts.',
      tech: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
      gradient: 'from-purple-600 to-blue-600',
      hoverGradient: 'from-purple-500 to-blue-500',
    },
    {
      title: 'Cosmic Commerce',
      description: 'E-commerce platform with seamless checkout experience and inventory management.',
      tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
      gradient: 'from-cyan-600 to-teal-600',
      hoverGradient: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'Nebula Notes',
      description: 'Collaborative note-taking app with real-time sync and markdown support.',
      tech: ['React', 'Firebase', 'Markdown', 'PWA'],
      gradient: 'from-pink-600 to-rose-600',
      hoverGradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Galaxy Generator',
      description: 'Creative tool for generating beautiful procedural galaxies with customizable parameters.',
      tech: ['Three.js', 'WebGL', 'Canvas', 'Shaders'],
      gradient: 'from-orange-600 to-red-600',
      hoverGradient: 'from-orange-500 to-red-500',
    },
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my cosmic collection of web applications, each crafted with passion and precision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Sparkles className="text-cyan-400 group-hover:text-purple-400 transition-colors" size={24} />
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <Github size={18} className="text-gray-300" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink size={18} className="text-gray-300" />
                    </motion.button>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.div
                  className={`h-1 w-full bg-gradient-to-r ${project.gradient} rounded-full group-hover:bg-gradient-to-r group-hover:${project.hoverGradient} transition-all duration-300`}
                  whileHover={{ scaleX: 1.05 }}
                />
              </div>

              {/* Hover effect overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ pointerEvents: 'none' }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-cyan-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-400/25">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}