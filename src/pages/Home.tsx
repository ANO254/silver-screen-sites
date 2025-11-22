import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="relative h-[calc(100vh-80px)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white drop-shadow-lg mb-4">
          CINEMATIC STORYTELLING, BOLDLY REIMAGINED
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8">
          Nuru Studios is a full-service production house dedicated to crafting compelling visual narratives that captivate and inspire.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/portfolio" className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-full text-lg inline-flex items-center justify-center hover:bg-yellow-500 transition-colors shadow-lg">
            Explore Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link to="/contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg inline-flex items-center justify-center hover:bg-white hover:text-black transition-colors shadow-lg">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  )
}