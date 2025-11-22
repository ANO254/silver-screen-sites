const teamMembers = [
  {
    name: 'Jelani Adebayo',
    role: 'Founder & Director',
    imageUrl: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac5c?q=80&w=1974&auto=format&fit=crop',
    bio: 'With a passion for storytelling that began in the vibrant markets of Lagos, Jelani brings a unique and authentic voice to every project.'
  },
  {
    name: 'Amina Diallo',
    role: 'Lead Cinematographer',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop',
    bio: 'Amina’s lens captures the soul of the story. Her innovative techniques and keen eye for detail have earned her numerous accolades.'
  },
  {
    name: 'Kwame Nkrumah Jr.',
    role: 'Head of Post-Production',
    imageUrl: 'https://images.unsplash.com/photo-1607990281513-2c3f162de8ac?q=80&w=1974&auto=format&fit=crop',
    bio: 'A master of the edit suite, Kwame weaves together footage, sound, and color to create a seamless and impactful final product.'
  },
];

export default function About() {
  return (
    <div className="py-16 sm:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">About Nuru Studios</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-400">We are a collective of passionate filmmakers, artists, and storytellers committed to bringing African narratives to the forefront of global cinema.</p>
        </div>

        <div className="max-w-5xl mx-auto mb-20 text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">Our Vision</h2>
          <p className="text-gray-300 text-lg">
            To be the leading light in African cinema, illuminating the continent's rich stories and diverse voices for a worldwide audience. We believe in the power of film to bridge cultures and inspire change.
          </p>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-gray-800 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                <img className="w-full h-80 object-cover object-center" src={member.imageUrl} alt={member.name} />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-yellow-400">{member.name}</h3>
                  <p className="text-md text-gray-300 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}