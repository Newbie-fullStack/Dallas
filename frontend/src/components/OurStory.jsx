import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function OurStory() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-warm-50 to-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container-x">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-warm-lg border border-warm-200/60">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/imageMenu/cafe-interieur-768.webp 768w, /imageMenu/cafe-interieur.webp 1280w"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <img
                  src="/imageMenu/cafe-interieur.png"
                  alt="Café Dalas intérieur"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary/10 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">Notre histoire</span>
            <h2 className="h-section mt-3">Où chaque tasse<br />raconte une histoire</h2>
            <div className="mt-6 space-y-4 font-ui text-muted leading-relaxed">
              <p>
                Né d'une passion pour le café de spécialité et de l'héritage
                culinaire marocain, Café Restaurant Dalas est bien plus qu'un
                lieu — c'est une expérience.
              </p>
              <p>
                Chaque grain est torréfié avec soin, chaque plat est inspiré des
                traditions marocaines réinventées. Nous croyons que la vraie
                hospitalité réside dans les détails.
              </p>
            </div>
            <div className="mt-8 flex gap-2">
              {['☕', '🥐', '🍵', '🍽️'].map((e, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
                  className="w-12 h-12 rounded-xl bg-warm-100 flex items-center justify-center text-xl border border-warm-200/60"
                >
                  {e}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
