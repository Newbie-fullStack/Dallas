import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChefHat } from 'lucide-react';
import ContactMap from '../components/ContactMap.jsx';
import { RESTAURANT } from '../utils/restaurant';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact · {RESTAURANT.name}</title>
        <meta name="description" content="Contactez le Café Restaurant Dalas à Azrou." />
      </Helmet>

      <div className="bg-gradient-to-b from-black/95 via-dark-bg to-warm-50 pt-24 pb-16">
        <div className="flex flex-col items-center text-center px-[clamp(1.5rem,5vw,4rem)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="w-[60px] h-px bg-gold" />
            <ChefHat
              className="text-gold"
              size={88}
              strokeWidth={1.5}
              style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }}
            />
            <span className="w-[60px] h-px bg-gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-gold uppercase tracking-[0.15em] font-bold mt-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            }}
          >
            Contact
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="font-sansalt text-[clamp(0.9rem,1.5vw,1.05rem)] text-white/75 max-w-[500px] mt-4 mx-auto leading-relaxed"
          >
            Retrouvez-nous au cœur d'Azrou ou contactez-nous par téléphone.
          </motion.p>
        </div>
      </div>

      <ContactMap />
    </>
  );
}
