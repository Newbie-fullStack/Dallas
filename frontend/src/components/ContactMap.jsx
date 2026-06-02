import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { DAYS, HOURS, RESTAURANT } from '../utils/restaurant';

const AZROU_COORDS = [33.44167, -5.22472];

const contacts = [
  { icon: MapPin, label: 'Adresse', value: RESTAURANT.address },
  { icon: Phone, label: 'Téléphone', value: RESTAURANT.phone },
  { icon: Mail, label: 'Email', value: RESTAURANT.email },
];

export default function ContactMap() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (mapInstance.current) return;
    if (!mapRef.current) return;

    let destroyed = false;

    import('leaflet').then((L) => {
      if (destroyed) return;

      const map = L.map(mapRef.current, {
        center: AZROU_COORDS,
        zoom: 16,
        zoomControl: false,
        scrollWheelZoom: false,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      const icon = L.divIcon({
        className: '',
        html: `<div style="width:56px;height:56px;background:#1C0A00;border:4px solid #FAF6F0;border-radius:16px;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(28,10,0,0.45);transform:translate(-50%,-50%)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAF6F0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>`,
        iconSize: [56, 56],
        iconAnchor: [28, 28],
      });

      L.marker(AZROU_COORDS, { icon }).addTo(map);

      map.on('click', () => {
        if (map.scrollWheelZoom) {
          map.scrollWheelZoom.enable();
        }
      });

      mapInstance.current = map;
    });

    return () => {
      destroyed = true;
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <section className="py-24 bg-cream">
      <div className="container-x">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="eyebrow">Contact</span>
              <h2 className="h-section mt-3">Retrouvons-nous</h2>
            </motion.div>

            <div className="space-y-5">
              {contacts.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-ui text-sm text-muted">{c.label}</p>
                    <p className="font-ui text-text font-semibold">{c.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-warm-200/60 pt-6">
              <h4 className="font-display text-lg text-primary mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4" /> Horaires
              </h4>
              <div className="space-y-2 text-sm font-ui">
                {DAYS.map((d, i) => (
                  <div key={d} className="flex justify-between">
                    <span className={i === 0 || i === 6 ? 'font-semibold text-primary' : 'text-text'}>{d}</span>
                    <span className="text-muted">{HOURS[i]?.open || 'Fermé'}{HOURS[i]?.open && ' — '}{HOURS[i]?.close || ''}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="relative aspect-[16/9] lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden border border-warm-200/60 shadow-warm-lg">
              <div ref={mapRef} className="w-full h-full min-h-[300px]" />

              <a
                href={RESTAURANT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 z-[1000] px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-sm border border-warm-200/60 shadow-warm font-ui text-xs font-semibold text-primary hover:bg-warm-50 transition flex items-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5" />
                Ouvrir dans Google Maps
              </a>

              <div className="absolute top-4 left-4 z-[1000] px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm border border-warm-200/60 shadow-sm font-ui text-xs text-text/70">
                Cliquez sur la carte pour zoomer
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
