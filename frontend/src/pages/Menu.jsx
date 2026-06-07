import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChefHat, X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

export default function Menu() {
  const [zoomed, setZoomed] = useState(false);
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);

  useEffect(() => {
    if (!zoomed) {
      setScale(1);
      setTx(0);
      setTy(0);
      return;
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setZoomed(false);
      if (e.key === '+' || e.key === '=') setScale((s) => Math.min(s + 0.25, 4));
      if (e.key === '-') setScale((s) => Math.max(s - 0.25, 1));
      if (e.key === '0') { setScale(1); setTx(0); setTy(0); }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [zoomed]);

  const zoomIn = () => setScale((s) => Math.min(s + 0.5, 4));
  const zoomOut = () => setScale((s) => Math.max(s - 0.5, 1));
  const reset = () => { setScale(1); setTx(0); setTy(0); };

  const onWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) setScale((s) => Math.min(s + 0.15, 4));
    else setScale((s) => Math.max(s - 0.15, 1));
  };

  return (
    <>
      <Helmet>
        <title>Menu · Café Restaurant Dallas</title>
        <meta name="description" content="Découvrez notre carte complète." />
      </Helmet>

      <section className="bg-gradient-to-b from-black/95 via-dark-bg to-warm-50 pt-24 pb-16">
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
            Notre menu
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="font-sansalt text-[clamp(0.9rem,1.5vw,1.05rem)] text-white/75 max-w-[500px] mt-4 mx-auto leading-relaxed"
          >
            Tous nos plats, pâtes, tacos, paninis et snacks — une seule carte à consulter.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            href="/imageMenu/AllMenu.png"
            download
            className="btn-primary mt-8"
          >
            <Download className="w-4 h-4" />
            Télécharger le menu
          </motion.a>
        </div>
      </section>

      <section className="bg-gradient-to-b from-warm-50 to-white pb-24">
        <div className="container-x pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <button
              type="button"
              onClick={() => setZoomed(true)}
              className="group relative block w-full rounded-2xl overflow-hidden border border-warm-200/60 shadow-warm-lg bg-warm-50 cursor-zoom-in"
              aria-label="Agrandir le menu"
            >
              <picture>
                <source
                  type="image/webp"
                  srcSet="/imageMenu/AllMenu-480.webp 480w, /imageMenu/AllMenu-768.webp 768w, /imageMenu/AllMenu-1280.webp 1280w"
                  sizes="(min-width: 768px) 768px, 100vw"
                />
                <img
                  src="/imageMenu/AllMenu.png"
                  alt="Menu complet Café Restaurant Dallas"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </picture>
              <div className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-dark-bg/70 backdrop-blur-sm flex items-center gap-1.5 text-warm-50 font-ui text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
                Cliquez pour zoomer
              </div>
            </button>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[2000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setZoomed(false)}
          >
            <div className="absolute top-5 right-5 flex items-center gap-2 z-10">
              <button
                onClick={(e) => { e.stopPropagation(); zoomOut(); }}
                disabled={scale <= 1}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed transition"
                aria-label="Dézoomer"
              >
                <ZoomOut className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); zoomIn(); }}
                disabled={scale >= 4}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed transition"
                aria-label="Zoomer"
              >
                <ZoomIn className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); reset(); }}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition"
                aria-label="Réinitialiser"
              >
                <RotateCcw className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setZoomed(false); }}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition"
                aria-label="Fermer"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="absolute top-5 left-5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm font-ui text-xs text-white/80 z-10">
              {Math.round(scale * 100)}%
            </div>

            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale, x: tx, y: ty }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              src="/imageMenu/AllMenu.webp"
              alt="Menu complet Café Restaurant Dallas"
              decoding="async"
              onClick={(e) => e.stopPropagation()}
              onWheel={onWheel}
              drag={scale > 1}
              dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
              dragElastic={0.1}
              onDragEnd={(_, info) => {
                setTx(info.offset.x);
                setTy(info.offset.y);
              }}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl select-none"
              draggable={false}
            />

            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center font-ui text-xs text-white/60 z-10">
              Molette pour zoomer · Glisser pour déplacer · Échap pour fermer
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
