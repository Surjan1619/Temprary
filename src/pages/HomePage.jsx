import { useScrollReveal } from '../hooks/useScrollReveal.js';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Catalog from '../components/Catalog.jsx';
import ImageBreak from '../components/ImageBreak.jsx';
import Services from '../components/Services.jsx';
import Advantages from '../components/Advantages.jsx';
import FaqSection from '../components/FaqSection.jsx';

export default function HomePage({ onProductClick }) {
  const catalogRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const advantagesRef = useScrollReveal();
  const faqRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans antialiased selection:bg-white/20 selection:text-white">
      <Header />
      <Hero />
      <Catalog catalogRef={catalogRef} onProductClick={onProductClick} />
      <ImageBreak />
      <Services servicesRef={servicesRef} />
      <Advantages advantagesRef={advantagesRef} />
      <FaqSection faqRef={faqRef} />
    </div>
  );
}
