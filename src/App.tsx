import { StarField } from './components/StarField'
import { FloatingParticles } from './components/FloatingParticles'
import { CursorTrail } from './components/CursorTrail'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 overflow-x-hidden">
      {/* Background Effects */}
      <StarField />
      <FloatingParticles />
      <CursorTrail />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <p>&copy; 2024 Space Explorer. Made with ❤️ in the cosmos.</p>
      </footer>
    </div>
  )
}

export default App