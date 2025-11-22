import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Film, Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Behind the Scenes', path: '/behind-the-scenes' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2">
          <Film className="text-yellow-400 h-8 w-8" />
          <span className="text-2xl font-bold tracking-wider">NURU STUDIOS</span>
        </NavLink>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium uppercase tracking-widest transition-colors hover:text-yellow-400 ${
                  isActive ? 'text-yellow-400' : 'text-gray-300'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium uppercase transition-colors hover:text-yellow-400 ${
                    isActive ? 'text-yellow-400' : 'text-gray-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}