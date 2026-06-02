import { motion } from 'framer-motion';
import { Coffee, Users, Award, MapPin } from 'lucide-react';

const stats = [
  { icon: Coffee,  value: '150+', label: 'Cafés signature' },
  { icon: Users,   value: '12K+', label: 'Clients servis' },
  { icon: Award,   value: '4.9',  label: 'Note moyenne' },
  { icon: MapPin,  value: '2019', label: 'Depuis ouverture' },
];

export default function StatsCounter() {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-warm-200/60">
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-warm-100 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="numeric-xl block">{s.value}</span>
              <span className="font-ui text-sm text-muted mt-1 block">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
