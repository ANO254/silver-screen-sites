import { useState } from 'react';
import { toast } from 'sonner';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill out all fields.');
      return;
    }
    toast.success('Message sent! We will get back to you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-16 sm:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">Let's create something extraordinary together. Reach out for collaborations, inquiries, or just to say hello.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-black p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"></textarea>
              </div>
              <button type="submit" className="w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-md text-lg hover:bg-yellow-500 transition-colors shadow-lg">Send Message</button>
            </form>
          </div>

          <div className="space-y-8 text-lg">
            <div className="flex items-start space-x-4">
                <div className="bg-yellow-400/10 p-3 rounded-full"><Mail className="h-6 w-6 text-yellow-400" /></div>
                <div>
                    <h3 className="font-bold text-white">Email</h3>
                    <a href="mailto:hello@nurustudios.com" className="text-gray-300 hover:text-yellow-400">hello@nurustudios.com</a>
                </div>
            </div>
             <div className="flex items-start space-x-4">
                <div className="bg-yellow-400/10 p-3 rounded-full"><Phone className="h-6 w-6 text-yellow-400" /></div>
                <div>
                    <h3 className="font-bold text-white">Phone</h3>
                    <p className="text-gray-300">+254 712 345 678</p>
                </div>
            </div>
            <div className="flex items-start space-x-4">
                <div className="bg-yellow-400/10 p-3 rounded-full"><MapPin className="h-6 w-6 text-yellow-400" /></div>
                <div>
                    <h3 className="font-bold text-white">Studio</h3>
                    <p className="text-gray-300">123 Film Avenue, Kilimani<br/>Nairobi, Kenya</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}