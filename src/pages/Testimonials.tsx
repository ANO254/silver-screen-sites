import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Akinbola Creative',
    project: 'Feature Film - \'The Golden Stool\'',
    quote: 'Nuru Studios brought our vision to life with a level of professionalism and artistry that is simply unparalleled. They are true masters of their craft.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Femi Kuti',
    project: 'Music Video - \'Nairobi Neon\'',
    quote: 'The visuals were stunning and perfectly captured the essence of my music. The team was a joy to work with - collaborative, innovative, and incredibly talented.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Global Aid Foundation',
    project: 'Documentary - \'Savannah Whisper\'',
    quote: 'Their sensitivity and respect for the subject matter was remarkable. Nuru Studios delivered a powerful film that has been instrumental in our fundraising efforts.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  return (
    <div className="py-16 sm:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">What Our Clients Say</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">We are proud to partner with visionary clients and bring their stories to the screen.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-gray-900 p-8 rounded-xl shadow-lg flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-8">
              <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-24 h-24 rounded-full object-cover mx-auto sm:mx-0" />
              <div className="text-center sm:text-left">
                <div className="flex justify-center sm:justify-start text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-lg text-gray-300 italic mb-4">“{testimonial.quote}”</p>
                <div>
                  <p className="font-bold text-white text-lg">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}