import { Film, Twitter, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Film className="text-yellow-400 h-6 w-6" />
            <span className="text-xl font-bold">NURU STUDIOS</span>
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Nuru Studios. All Rights Reserved.</p>
            <p>Bringing African Stories to the Global Stage.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400"><Twitter /></a>
            <a href="#" className="hover:text-yellow-400"><Instagram /></a>
            <a href="#" className="hover:text-yellow-400"><Facebook /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}