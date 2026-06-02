import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Coffee, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-5 pt-24 bg-gradient-to-b from-warm-50 to-white">
      <motion.div
        animate={{ rotate: [0, -6, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="w-24 h-24 rounded-2xl bg-warm-100 flex items-center justify-center shadow-warm border border-warm-200/60"
      >
        <Coffee className="w-12 h-12 text-primary" />
      </motion.div>
      <h1 className="font-display text-7xl md:text-8xl mt-8 text-gradient-warm">404</h1>
      <p className="font-display text-2xl mt-2 text-text">Page introuvable</p>
      <p className="text-muted max-w-md mt-3 font-ui leading-relaxed">
        Comme la vapeur de notre espresso, cette page s'est envolée.
      </p>
      <Link to="/" className="btn-primary mt-8 gap-2">
        <Home className="w-4 h-4" /> Retour à l'accueil
      </Link>
    </div>
  );
}
