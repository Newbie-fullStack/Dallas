import { motion } from 'framer-motion';

export default function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
      <motion.div
        className="relative w-20 h-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-secondary/20" />
        <div className="absolute inset-0 rounded-full border-t-2 border-secondary" />
      </motion.div>
      <motion.p
        className="eyebrow"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        Préparation de votre expérience…
      </motion.p>
    </div>
  );
}
