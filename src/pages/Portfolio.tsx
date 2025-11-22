import { PlayCircle } from 'lucide-react'

const projects = [
  {
    title: 'The Golden Stool',
    category: 'Feature Film',
    imageUrl: 'https://images.unsplash.com/photo-1604901174909-c4b541ba4287?q=80&w=1974&auto=format&fit=crop',
    description: 'An epic historical drama about the Ashanti Empire.'
  },
  {
    title: 'Nairobi Neon',
    category: 'Music Video',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop',
    description: 'A vibrant visual journey through the city’s nightlife.'
  },
  {
    title: 'Savannah Whisper',
    category: 'Documentary',
    imageUrl: 'https://images.unsplash.com/photo-1547471080-7cc2d5d88e9e?q=80&w=2070&auto=format&fit=crop',
    description: 'Exploring the delicate balance between wildlife and community.'
  },
  {
    title: 'Jollof & Friends',
    category: 'Web Series',
    imageUrl: 'https://images.unsplash.com/photo-1568008125624-9a3564e10b19?q=80&w=1974&auto=format&fit=crop',
    description: 'A comedy series about food, friendship, and cultural clashes.'
  },
   {
    title: 'The Healer of Gulu',
    category: 'Short Film',
    imageUrl: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop',
    description: 'A story of hope and resilience in post-conflict Uganda.'
  },
  {
    title: 'Afro-Futurism: The Beat',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1593113646773-5b8614823ff5?q=80&w=2070&auto=format&fit=crop',
    description: 'A high-energy commercial for a leading tech brand.'
  },
]

export default function Portfolio() {
  return (
    <div className="py-16 sm:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">Our Work</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">A selection of projects that showcase our passion for storytelling and cinematic excellence.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-900">
              <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-6">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <PlayCircle className="h-20 w-20 text-yellow-400" />
                </div>
                <div className="relative z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm font-semibold text-yellow-400 uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-300 text-sm mt-1">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}