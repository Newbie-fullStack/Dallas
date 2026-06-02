import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { formatPrice, BADGE_META } from '../utils/restaurant';

function BadgeChip({ name }) {
  const meta = BADGE_META[name];
  if (!meta) return null;
  return (
    <span className="badge border border-warm-300/50 text-[10px]">
      {meta.label}
    </span>
  );
}

export default function MenuItemCard({ item, onClick }) {
  return (
    <motion.article
      whileHover={{ y: -4, boxShadow: '0 12px 40px -8px rgba(146,64,14,0.2)' }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      onClick={onClick}
      className="group relative rounded-xl overflow-hidden bg-white border border-warm-200/60 cursor-pointer h-full"
    >
      <div className="relative h-52 overflow-hidden">
        <motion.img
          src={item.image || `https://source.unsplash.com/featured/600x400?${encodeURIComponent(item.name)}`}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {(item.badges || []).slice(0, 2).map((b) => (
            <BadgeChip key={b} name={b} />
          ))}
        </div>
        <div className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm font-ui text-primary font-bold text-sm shadow-sm">
          {formatPrice(item.price)}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-xl text-text leading-tight mb-1.5 line-clamp-1">
          {item.name}
        </h3>
        <p className="text-sm text-muted line-clamp-2 leading-relaxed font-ui">
          {item.description}
        </p>
        {item.rating && (
          <div className="flex items-center gap-1.5 mt-3 text-xs font-ui text-muted">
            <Star className="w-3.5 h-3.5 fill-primary text-primary" />
            {item.rating.toFixed(1)}
          </div>
        )}
      </div>
    </motion.article>
  );
}
