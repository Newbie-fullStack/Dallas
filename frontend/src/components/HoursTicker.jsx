import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { HOURS } from '../utils/restaurant';

export default function HoursTicker() {
  return (
    <section className="bg-primary py-4 overflow-hidden">
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap font-ui text-sm"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
      >
        {[...HOURS, ...HOURS].map((h, i) => (
          <span key={i} className="flex items-center gap-2 text-warm-50/80">
            <Clock className="w-3.5 h-3.5 text-warm-200" />
            <span className="font-semibold text-warm-50">{h.day}</span>
            <span>{h.open} — {h.close}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-warm-200/40" />
          </span>
        ))}
      </motion.div>
    </section>
  );
}
