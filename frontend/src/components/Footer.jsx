import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { RESTAURANT } from '../utils/restaurant';

const footerLinks = {
  Menu: [
    { label: 'Cafés', path: '/menu' },
    { label: 'Plats', path: '/menu' },
    { label: 'Desserts', path: '/menu' },
    { label: 'Boissons', path: '/menu' },
  ],
  Infos: [
    { label: 'Notre histoire', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'Galerie', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-warm-50">
      <div className="container-x py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl tracking-wider text-warm-200">DALAS</h3>
            <p className="mt-4 font-ui text-sm leading-relaxed text-warm-50/80 max-w-xs">
              Café & Restaurant à Azrou. 🛵 Livraison disponible.
              Une expérience unique où la tradition marocaine rencontre l'art du café de spécialité.
            </p>
            <div className="mt-6 space-y-2.5 font-ui text-sm text-warm-50/70">
              <p className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-warm-200" />
                {RESTAURANT.address}
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-warm-200" />
                {RESTAURANT.phone}
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-warm-200" />
                {RESTAURANT.email}
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl border border-warm-50/20 flex items-center justify-center hover:bg-warm-50/10 transition">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).filter(([_, links]) => links.length > 0).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-sm tracking-widest uppercase text-warm-200 mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.path} className="font-ui text-sm text-warm-50/70 hover:text-warm-200 transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-warm-50/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-2 font-ui text-xs text-warm-50/50">
          <p>&copy; {new Date().getFullYear()} Café Restaurant Dalas. Tous droits réservés.</p>
          <p>Design par <a href="https://trivol-x.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-warm-200 hover:underline">Trivol-X</a></p>
        </div>
      </div>
    </footer>
  );
}
