import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { galleryData } from '../data/mockData';

const SKELETON = Array.from({ length: 8 }, (_, i) => ({ id: `s-${i}` }));

export default function GalleryMasonry() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await galleryData.list();
        if (!mounted) return;
        setItems(data);
      } catch {
        if (mounted) setItems([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-cream">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="eyebrow">Galerie</span>
          <h2 className="h-section mt-3">Instants suspendus</h2>
          <p className="text-muted mt-3 max-w-xl mx-auto font-ui">
            Plongez dans l'univers Dalas à travers notre regard photographique.
          </p>
        </motion.div>

        <div className="grid-masonry">
          {loading
            ? SKELETON.map((s) => <div key={s.id} className="h-64 skeleton rounded-xl" />)
            : items.slice(0, 12).map((it, i) => (
                <motion.div
                  key={it.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: (i % 4) * 0.1, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-xl border border-warm-200/60 shadow-card"
                >
                  <motion.img
                    src={it.thumbnail_url || it.image_url}
                    alt={it.caption}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                    <p className="font-ui text-sm text-white font-semibold">{it.caption}</p>
                  </div>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
}
