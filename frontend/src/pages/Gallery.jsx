import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ChefHat } from 'lucide-react';
import { galleryData } from '../data/mockData';
import { RESTAURANT } from '../utils/restaurant';

const CATS = [
  { v: 'all',      l: 'Tout' },
  { v: 'food',     l: 'Nos plats' },
  { v: 'ambiance', l: 'Ambiance' },
  { v: 'menu',     l: 'La carte' },
];

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [cat, setCat] = useState('all');
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const d = await galleryData.list();
        if (!mounted) return;
        setItems(d);
      } catch {
        if (!mounted) return;
        setItems([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const filtered = cat === 'all' ? items : items.filter((i) => i.category === cat);

  return (
    <>
      <Helmet>
        <title>Galerie · {RESTAURANT.name}</title>
        <meta name="description" content="Découvrez l'univers visuel du Café Restaurant Dalas." />
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
              Notre univers en images
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="font-sansalt text-[clamp(0.9rem,1.5vw,1.05rem)] text-white/75 max-w-[500px] mt-4 mx-auto leading-relaxed"
            >
              Plongez dans l'ambiance unique du Café Restaurant Dalas.
            </motion.p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-warm-50 to-white pb-24">
          <div className="container-x">
            <div className="flex items-center gap-2 justify-center overflow-x-auto no-scrollbar mb-10">
              {CATS.map((c) => (
              <button
                key={c.v}
                onClick={() => setCat(c.v)}
                className={`shrink-0 px-5 py-2.5 rounded-xl font-ui text-sm font-semibold transition
                  ${cat === c.v
                    ? 'bg-primary text-warm-50 shadow-warm'
                    : 'bg-white border-2 border-warm-200/70 text-text/70 hover:border-primary hover:text-primary'}`}
              >
                {c.l}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="grid-masonry">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-64 skeleton rounded-xl" />
              ))}
            </div>
          ) : (
            <div className="grid-masonry">
              {filtered.map((it, i) => (
                <motion.button
                  key={it.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.05 }}
                  onClick={() => setLightbox(i)}
                  className="group relative overflow-hidden rounded-xl border border-warm-200/60 w-full"
                >
                  <motion.img
                    src={it.thumbnail_url || it.image_url}
                    alt={it.caption}
                    loading="lazy"
                    className="w-full h-auto"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="absolute bottom-3 left-3 right-3 text-left font-ui text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                    {it.caption}
                  </p>
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </div>

      <Lightbox items={filtered} index={lightbox} onClose={() => setLightbox(null)} setIndex={setLightbox} />
    </>
  );
}

function Lightbox({ items, index, onClose, setIndex }) {
  const next = () => setIndex((index + 1) % items.length);
  const prev = () => setIndex((index - 1 + items.length) % items.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
    };
    if (index !== null) {
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }
  }, [index, items.length]);

  return (
    <AnimatePresence>
      {index !== null && items[index] && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          <button onClick={onClose} className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
            <X className="w-5 h-5" />
          </button>
          <button onClick={prev} className="absolute left-5 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={next} className="absolute right-5 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
            <ChevronRight className="w-6 h-6" />
          </button>
          <motion.img
            key={items[index].id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={items[index].image_url}
            alt={items[index].caption}
            className="max-w-full max-h-[85vh] object-contain rounded-2xl"
          />
          {items[index].caption && (
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center font-ui text-sm bg-black/60 backdrop-blur-sm px-5 py-2 rounded-xl">
              {items[index].caption}
            </p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
