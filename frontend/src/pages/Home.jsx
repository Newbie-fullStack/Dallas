import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero.jsx';
import HoursTicker from '../components/HoursTicker.jsx';
import StatsCounter from '../components/StatsCounter.jsx';
import MenuSection from '../components/MenuSection.jsx';
import OurStory from '../components/OurStory.jsx';
import TestimonialsSlider from '../components/TestimonialsSlider.jsx';
import GalleryMasonry from '../components/GalleryMasonry.jsx';
import InstagramShowcase from '../components/InstagramShowcase.jsx';
import NewsletterSignup from '../components/NewsletterSignup.jsx';
import { RESTAURANT } from '../utils/restaurant';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{RESTAURANT.name} · {RESTAURANT.address}</title>
        <meta name="description" content="Café Restaurant Dalas — Premium Moroccan coffee culture meets contemporary dining in Azrou. 🛵 Livraison disponible." />
        <meta property="og:title" content="Café Restaurant Dalas · Azrou" />
      </Helmet>

      <div className="fade-enter">
        <Hero />
        <HoursTicker />
        <StatsCounter />
        <MenuSection />
        <OurStory />
        <TestimonialsSlider />
        <GalleryMasonry />
        <InstagramShowcase />
        <NewsletterSignup />
      </div>
    </>
  );
}
