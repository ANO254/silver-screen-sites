import { Film, Camera, Users, Mic, Sun } from 'lucide-react'

const services = [
  { 
    icon: <Film className="h-10 w-10 text-yellow-400" />, 
    title: 'Full-Service Production', 
    description: 'From concept to final cut, we handle every aspect of the filmmaking process for feature films, documentaries, and commercials.'
  },
  { 
    icon: <Camera className="h-10 w-10 text-yellow-400" />, 
    title: 'Cinematography & DP', 
    description: 'Our award-winning cinematographers bring a unique visual language to your project, ensuring every frame is a work of art.'
  },
  { 
    icon: <Users className="h-10 w-10 text-yellow-400" />, 
    title: 'Crewing Services', 
    description: 'Access our network of top-tier film professionals in Africa. We assemble the perfect team for your production needs.'
  },
  { 
    icon: <Mic className="h-10 w-10 text-yellow-400" />, 
    title: 'Sound Design & Mixing', 
    description: 'Immersive audio experiences crafted by our expert sound engineers using state-of-the-art equipment.'
  },
];

const equipment = [
  { name: 'RED Komodo 6K Cinema Camera', category: 'Cameras' },
  { name: 'Arri Alexa Mini LF', category: 'Cameras' },
  { name: 'Cooke Anamorphic/i Full Frame Plus Lenses', category: 'Lenses' },
  { name: 'DJI Ronin 4D', category: 'Grip & Support' },
  { name: 'Aputure LS 1200d Pro Light Kit', category: 'Lighting' },
  { name: 'Sound Devices 888 Mixer/Recorder', category: 'Audio' },
];

export default function Services() {
  return (
    <div className="py-16 sm:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">Tailored solutions for every stage of your production pipeline.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service) => (
            <div key={service.title} className="bg-gray-900 p-8 rounded-lg flex items-start space-x-6">
              <div>{service.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
           <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Equipment for Rent</h2>
           <div className="bg-gray-900 rounded-lg p-8 max-w-4xl mx-auto">
             <p className="text-gray-400 mb-6">We offer a curated selection of industry-standard equipment for rental. Contact us for a full catalog and availability.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {equipment.map(item => (
                <div key={item.name} className="bg-gray-800 p-4 rounded-md">
                  <p className="font-bold text-yellow-400 text-sm">{item.category}</p>
                  <p className="text-gray-200">{item.name}</p>
                </div>
              ))}
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}