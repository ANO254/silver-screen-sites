const behindTheScenesItems = [
  {
    title: 'On Set in the Sahara',
    imageUrl: 'https://images.unsplash.com/photo-1529528744994-cf587a304565?q=80&w=2070&auto=format&fit=crop',
    description: 'Capturing the vast, golden landscapes for \'The Golden Stool\'. The elements were as challenging as they were beautiful.'
  },
  {
    title: 'Night Shoots in Nairobi',
    imageUrl: 'https://images.unsplash.com/photo-1613919020235-2d6ecc55182a?q=80&w=1974&auto=format&fit=crop',
    description: 'The energy of Nairobi after dark is electric. Our crew worked tirelessly to bring \'Nairobi Neon\' to life.'
  },
  {
    title: 'Community Collaboration',
    imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop',
    description: 'Working hand-in-hand with local communities is core to our philosophy. Pictured here during the filming of \'The Healer of Gulu\'.'
  },
  {
    title: 'The Director\'s Vision',
    imageUrl: 'https://images.unsplash.com/photo-1527684022261-b4f72b2a95c9?q=80&w=2070&auto=format&fit=crop',
    description: 'Jelani Adebayo lining up the perfect shot. Every frame is meticulously planned.'
  },
  {
    title: 'Soundscapes of the Savannah',
    imageUrl: 'https://images.unsplash.com/photo-1612423284934-434a6c4a63a8?q=80&w=2070&auto=format&fit=crop',
    description: 'Our sound engineer capturing the unique ambient sounds for \'Savannah Whisper\'.'
  },
  {
    title: 'The Art of Color',
    imageUrl: 'https://images.unsplash.com/photo-1627843563415-27a3a142f17e?q=80&w=1974&auto=format&fit=crop',
    description: 'In the grading suite, where the mood and tone of the film are perfected.'
  }
];

export default function BehindTheScenes() {
  return (
    <div className="py-16 sm:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">Behind the Scenes</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">A glimpse into our creative process, where passion, collaboration, and hard work come together to create cinematic magic.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {behindTheScenesItems.map((item) => (
            <div key={item.title} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src={item.imageUrl} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}