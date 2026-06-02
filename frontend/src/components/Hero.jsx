import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { RESTAURANT } from '../utils/restaurant';

function CTAButton({ children, to, variant = 'primary' }) {
  const ref = useRef(null);
  const cls =
    variant === 'primary'
      ? 'bg-primary text-white hover:bg-primary-dark hover:-translate-y-[2px] hover:shadow-warm-glow'
      : 'border-2 border-white/70 text-white bg-transparent hover:border-white hover:bg-white/10';
  return (
    <motion.div ref={ref} className="inline-block">
      <Link
        to={to}
        className={`inline-flex items-center justify-center gap-2.5 px-8 h-[52px] rounded-[6px] font-sansalt text-[0.85rem] font-bold uppercase tracking-[0.1em] transition-all duration-[250ms] ease-out ${cls}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative min-h-[680px] h-screen overflow-hidden flex items-center">
      <motion.div
        style={{
          y,
          willChange: 'transform',
          backgroundImage: "url('/imageMenu/miniature.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="absolute inset-0 scale-110 bg-center md:bg-center"
      />

      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background: 'linear-gradient(to right, rgba(10,4,0,0.82) 0%, rgba(10,4,0,0.65) 45%, rgba(10,4,0,0.10) 70%, rgba(10,4,0,0.0) 100%)',
        }}
      />

      <div className="absolute inset-0 block md:hidden bg-black/70" />

      <div className="absolute inset-0 bg-noise opacity-10" />

      <div className="relative z-10 w-full">
        <div className="flex">
          <div
            className="w-full md:w-3/5 lg:w-1/2 flex flex-col justify-center"
            style={{ paddingLeft: 'clamp(1.25rem, 5vw, 8rem)', paddingRight: 'clamp(1.25rem, 5vw, 4rem)' }}
          >
            <div className="pt-24 md:pt-0 pb-10">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="block mb-6"
              >
                <span
                  className="inline-block w-[32px] h-px bg-gold align-middle mr-3"
                />
                <span className="font-sansalt uppercase tracking-[0.25em] text-[0.75rem] text-white/65 font-semibold align-middle">
                  Café · Restaurant · Livraison
                </span>
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-heading text-[clamp(1.75rem,6.5vw,4.5rem)] leading-[1.0] text-white font-bold text-left break-words"
              >
                WHERE{' '}
                <span
                  className="text-gold italic"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                >
                  Every Cup
                </span>
                <br />
                TELLS A{' '}
                <em
                  className="text-gold not-italic"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                >
                  Story
                </em>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
                className="font-sansalt text-[clamp(0.95rem,1.5vw,1.1rem)] text-white/80 max-w-[420px] mt-6 leading-relaxed text-left"
              >
                L'art du café rencontre la richesse de la cuisine marocaine.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="font-sansalt text-[0.875rem] text-gold mt-3 text-left"
              >
                📍 Azrou  |  🛵 Livraison disponible
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="flex flex-wrap gap-4 mt-10 justify-start"
              >
                <CTAButton to="/menu" variant="primary">
                  Voir le menu
                  <ArrowRight className="w-4 h-4" />
                </CTAButton>
                <CTAButton to="/contact" variant="ghost">
                  Nous contacter
                </CTAButton>
              </motion.div>
            </div>
          </div>

          <div className="hidden md:block md:w-2/5 lg:w-1/2" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.7 }}
        className="absolute bottom-0 left-0 right-0 z-10 pb-8"
        style={{ paddingLeft: 'clamp(1.5rem, 8vw, 8rem)', paddingRight: 'clamp(1.5rem, 8vw, 8rem)' }}
      >
        <div
          className="inline-flex flex-wrap items-center gap-4 md:gap-6 px-5 py-2.5 rounded-[8px]"
          style={{
            background: 'rgba(0,0,0,0.25)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
          }}
        >
          <span className="flex items-center gap-2 font-sansalt text-[0.875rem] text-white/85">
            <Star className="w-4 h-4 text-gold fill-gold" />
            <strong className="text-white">4.9</strong> · 1 200+ avis
          </span>
          <span className="w-px h-4 bg-white/20" />
          <span className="flex items-center gap-2 font-sansalt text-[0.875rem] text-white/85">
            <MapPin className="w-4 h-4 text-gold" />
            {RESTAURANT.address}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
