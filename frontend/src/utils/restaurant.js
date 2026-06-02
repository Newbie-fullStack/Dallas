export const RESTAURANT = {
  name: import.meta.env.VITE_RESTAURANT_NAME || 'Café Restaurant Dalas',
  phone: '0809893170 / 0609924909',
  email: import.meta.env.VITE_RESTAURANT_EMAIL || 'contact@dalascafe.ma',
  address: 'CQXG+9PW, Azrou, Azrou 53100, Morocco',
  mapsUrl: import.meta.env.VITE_RESTAURANT_MAPS_URL || 'https://maps.google.com/?q=CQXG%2B9PW+Azrou',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3000!2d-5.123!3d33.456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCQXG%2B9PW+Azrou!5e0!3m2!1sen!2sma!4v1',
};

export const DAYS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

export const HOURS = [
  { day: 'Lundi',    open: '07:00', close: '23:00' },
  { day: 'Mardi',    open: '07:00', close: '23:00' },
  { day: 'Mercredi', open: '07:00', close: '23:00' },
  { day: 'Jeudi',    open: '07:00', close: '23:00' },
  { day: 'Vendredi', open: '07:00', close: '00:00' },
  { day: 'Samedi',   open: '08:00', close: '00:00' },
  { day: 'Dimanche', open: '08:00', close: '23:00' },
];

export const BADGE_META = {
  vegan:         { label: 'Vegan',         color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
  vegetarian:    { label: 'Végétarien',    color: 'bg-green-500/20  text-green-300  border-green-500/30' },
  gluten_free:   { label: 'Sans gluten',   color: 'bg-amber-500/20  text-amber-300  border-amber-500/30' },
  spicy:         { label: 'Épicé',         color: 'bg-red-500/20    text-red-300    border-red-500/30' },
  new:           { label: 'Nouveau',       color: 'bg-secondary/20 text-secondary   border-secondary/30' },
  popular:       { label: 'Populaire',     color: 'bg-pink-500/20   text-pink-300   border-pink-500/30' },
  chef_special:  { label: "Spécial Chef",  color: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
  halal:         { label: 'Halal',         color: 'bg-secondary/20 text-secondary   border-secondary/30' },
};

export function formatPrice(value, currency = 'MAD') {
  const n = Number(value || 0);
  return new Intl.NumberFormat('fr-MA', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(n);
}

export function formatDate(value, opts = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) {
  if (!value) return '';
  return new Date(value).toLocaleDateString('fr-FR', opts);
}

export function formatTime(value) {
  if (!value) return '';
  return value.substring(0, 5);
}

export function statusLabel(status) {
  const map = {
    pending: 'En attente', confirmed: 'Confirmée', seated: 'Installé',
    completed: 'Terminée', cancelled: 'Annulée', no_show: 'No-show',
    new: 'Nouvelle', preparing: 'En préparation', ready: 'Prête',
    delivered: 'Livrée',
  };
  return map[status] || status;
}

export function statusColor(status) {
  const map = {
    pending:   'bg-amber-500/20  text-amber-300',
    confirmed: 'bg-emerald-500/20 text-emerald-300',
    seated:    'bg-blue-500/20   text-blue-300',
    completed: 'bg-muted/20      text-muted',
    cancelled: 'bg-red-500/20    text-red-300',
    no_show:   'bg-red-700/20    text-red-400',
    new:       'bg-amber-500/20  text-amber-300',
    preparing: 'bg-blue-500/20   text-blue-300',
    ready:     'bg-emerald-500/20 text-emerald-300',
    delivered: 'bg-muted/20      text-muted',
  };
  return map[status] || 'bg-muted/20 text-muted';
}
