import Hero from './components/Hero.jsx';
import MapsGallery from './components/MapsGallery.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-cs-bg">
      <Hero />
      <MapsGallery />
      <Footer />
    </div>
  );
}
