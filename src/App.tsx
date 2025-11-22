import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Header, Footer } from './components';
import {
  Home,
  Portfolio,
  BehindTheScenes,
  Testimonials,
  Services,
  Contact,
  About,
} from './pages';

function App() {
  return (
    <div className="bg-black text-gray-100 font-sans">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/behind-the-scenes" element={<BehindTheScenes />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
      <Toaster richColors theme="dark" />
    </div>
  );
}

export default App;