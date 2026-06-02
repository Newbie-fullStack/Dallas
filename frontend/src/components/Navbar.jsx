import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X } from 'lucide-react';
import { RESTAURANT } from '../utils/restaurant';

const links = [
  { to: '/',        label: 'Accueil' },
  { to: '/menu',    label: 'Menu' },
  { to: '/gallery', label: 'Galerie' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [navigate]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="flex items-center gap-3 group" aria-label={RESTAURANT.name}>
        <motion.span
          whileHover={{ rotate: 10, scale: 1.05 }}
          className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center"
          style={{ boxShadow: '0 4px 20px -6px rgba(193,122,58,0.15)' }}
        >
          <img
            src="/iconDallas.jpg"
            alt="Café Restaurant Dallas"
            className="w-full h-full object-cover"
          />
        </motion.span>
        <span
          className={`tracking-wide hidden sm:block ${scrolled ? 'text-dark-bg' : 'text-white'}`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Café Dallas
        </span>
      </Link>

      <div className="nav-links hidden lg:flex">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-active' : ''}`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </div>

      <button
        onClick={() => setMobileOpen((v) => !v)}
        className={`lg:hidden p-2.5 rounded-lg transition-colors ${scrolled ? 'hover:bg-warm-100' : 'hover:bg-white/10'}`}
        aria-label="Menu"
      >
        {mobileOpen
          ? <X className={`w-6 h-6 ${scrolled ? 'text-dark-bg' : 'text-white'}`} />
          : <MenuIcon className={`w-6 h-6 ${scrolled ? 'text-dark-bg' : 'text-white'}`} />
        }
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-cream/95 backdrop-blur-md shadow-warm-lg absolute top-full left-0 right-0"
          >
            <div className="container-x py-4 flex flex-col gap-1.5">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `px-5 py-3.5 rounded-xl font-sansalt text-sm font-semibold transition
                    ${isActive ? 'bg-primary text-white' : 'text-dark-bg/80 hover:bg-warm-50 hover:text-primary'}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
