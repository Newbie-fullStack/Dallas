import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { reviewsData } from '../data/mockData';

export default function TestimonialsSlider() {
  const [reviews, setReviews] = useState([]);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await reviewsData.list();
        if (!mounted) return;
        setReviews(data);
      } catch {
        if (mounted) setReviews([]);
      }
    })();
    return () => { mounted = false; };
  }, []);

  if (reviews.length === 0) return null;
  const loop = [...reviews, ...reviews];

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="container-x mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="eyebrow">Ils parlent de nous</span>
          <h2 className="h-section mt-3">Une expérience racontée</h2>
        </motion.div>
      </div>

      <div
        className="relative mask-fade-r"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex gap-6 px-6"
          animate={paused ? undefined : { x: ['0%', '-50%'] }}
          transition={{ duration: 50, ease: 'linear', repeat: Infinity }}
        >
          {loop.map((r, i) => (
            <div key={`${r.id}-${i}`} className="shrink-0 w-[26rem] md:w-[30rem] block-section">
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              <p className="text-text/90 leading-relaxed text-lg italic font-ui">"{r.comment}"</p>
              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < r.rating ? 'fill-primary text-primary' : 'text-warm-200'}`} />
                ))}
              </div>
              <p className="mt-3 font-ui text-sm text-muted font-semibold">{r.author_name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
