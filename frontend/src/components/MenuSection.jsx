import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function MenuSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="eyebrow">Notre carte</span>
          <h2 className="h-section mt-3">Découvrez notre menu</h2>
          <p className="text-muted mt-3 max-w-xl mx-auto font-ui leading-relaxed">
            Une sélection de plats marocains et snacks généreux, préparés avec
            des ingrédients frais du terroir.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-warm-200/60 shadow-warm-lg bg-warm-50">
            <img
              src="/imageMenu/AllMenu.png"
              alt="Menu complet Café Restaurant Dallas"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>

          <div className="flex justify-center mt-8">
            <a
              href="/imageMenu/AllMenu.png"
              download
              className="btn-primary gap-2"
            >
              <Download className="w-4 h-4" />
              Télécharger le menu
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
