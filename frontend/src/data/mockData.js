export const CATEGORIES = [
  { id: 1, name: 'Nos Plats',    slug: 'plats',    icon: '🍽️', sort_order: 1 },
  { id: 2, name: 'Nos Pâtes',    slug: 'pates',    icon: '🍝', sort_order: 2 },
  { id: 3, name: 'Nos Tacos',    slug: 'tacos',    icon: '🌮', sort_order: 3 },
  { id: 4, name: 'Nos Pannini',  slug: 'pannini',  icon: '🥪', sort_order: 4 },
  { id: 5, name: 'Wraps',        slug: 'wraps',    icon: '🌯', sort_order: 5 },
  { id: 6, name: 'Nos Pizzas',   slug: 'pizzas',   icon: '🍕', sort_order: 6 },
];

export const MENU_ITEMS = [
  // Nos Plats
  { id: 1,  category_id: 1, name: 'Émincés de poulet à la crème champignons', price: 60,  featured: true },
  { id: 2,  category_id: 1, name: "Émincés de Bœuf à la crème champignons",   price: 80,  featured: true },
  { id: 3,  category_id: 1, name: 'Brochette de poulet mariné',               price: 60,  featured: false },
  { id: 4,  category_id: 1, name: 'Brochette viande hachée',                  price: 60,  featured: false },
  { id: 5,  category_id: 1, name: 'Brochettes mixte',                        price: 70,  featured: false },

  // Nos Pâtes (Spaghetti / Penne)
  { id: 6,  category_id: 2, name: 'Thon',           description: 'Sauce tomate, thon, basilic, parmesan',                           price: 40, featured: false },
  { id: 7,  category_id: 2, name: 'Alfredo',        description: 'Poulet, dinde fumée, champignons, crème fraîche, basilic, parmesan', price: 50, featured: true },
  { id: 8,  category_id: 2, name: 'Bolognaise',     description: 'Sauce tomate, bolognaise, basilic, parmesan',                       price: 50, featured: false },
  { id: 9,  category_id: 2, name: 'Fruits de mer',  description: 'Crevette, calamar, moules, crème fraîche, basilic, parmesan',       price: 60, featured: true },

  // Nos Tacos
  { id: 10, category_id: 3, name: 'Tacos poulet',           price: 40, featured: false },
  { id: 11, category_id: 3, name: 'Tacos viande hachée',    price: 40, featured: false },
  { id: 12, category_id: 3, name: 'Tacos nugget',           price: 40, featured: false },
  { id: 13, category_id: 3, name: 'Tacos cordon bleu',      price: 45, featured: false },
  { id: 14, category_id: 3, name: 'Tacos mixte',            price: 45, featured: false },
  { id: 15, category_id: 3, name: 'Tacos dallas gratinée',  price: 50, image: '/imageMenu/tacos.png', featured: true },

  // Nos Pannini
  { id: 16, category_id: 4, name: 'Panini poulet',        price: 25, featured: false },
  { id: 17, category_id: 4, name: 'Panini thon',          price: 20, featured: false },
  { id: 18, category_id: 4, name: 'Panini viande hachée', price: 55, featured: false },
  { id: 19, category_id: 4, name: 'Panini mixte',         price: 30, featured: false },

  // Wraps
  { id: 20, category_id: 5, name: 'Wraps poulet', price: 35, featured: false },
  { id: 21, category_id: 5, name: 'Wraps thon',   price: 30, featured: false },

  // Nos Pizzas
  { id: 22, category_id: 6, name: 'Pezza Dallas',         price: 50, image: '/imageMenu/pezza-dallas.png',           featured: true },
  { id: 23, category_id: 6, name: 'Pizza classique',       price: 48, image: '/imageMenu/pizza.png',                  featured: false },

  // Avec photos
  { id: 24, category_id: 1, name: 'Bogitos poulet gratiné', price: 33, image: '/imageMenu/bogitos-poulet-gratine.png', featured: true },
  { id: 25, category_id: 1, name: 'Chabatii poule',         price: 30, image: '/imageMenu/chabatii-poule.png',         featured: true },
];

export const GALLERY = [
  { id: 1,  image_url: '/imageMenu/cafe-interieur.png',       caption: 'Notre salle chaleureuse',       category: 'ambiance' },
  { id: 2,  image_url: '/imageMenu/cafe-ambiance.png',        caption: 'Ambiance Café Dallas',          category: 'ambiance' },
  { id: 3,  image_url: '/imageMenu/bogitos-poulet-gratine.png', caption: 'Bogitos poulet gratiné',       category: 'food' },
  { id: 4,  image_url: '/imageMenu/chabatii-poule.png',       caption: 'Chabatii poule',                category: 'food' },
  { id: 5,  image_url: '/imageMenu/pezza-dallas.png',         caption: 'Pezza Dallas',                  category: 'food' },
  { id: 6,  image_url: '/imageMenu/pizza.png',                caption: 'Pizza classique',               category: 'food' },
  { id: 7,  image_url: '/imageMenu/tacos.png',                caption: 'Tacos Dallas',                  category: 'food' },
  { id: 8,  image_url: '/imageMenu/AllMenu.png',              caption: 'Notre carte complète',          category: 'menu' },
];

export const REVIEWS = [
  { id: 1, rating: 5, comment: "Un café absolument magnifique! L'ambiance est chaleureuse, le service impeccable.", author_name: 'Yasmine El Amrani', approved: true },
  { id: 2, rating: 5, comment: "Le lieu idéal pour un rendez-vous. Le cadre est superbe et l'accueil chaleureux.", author_name: 'Karim Bennani', approved: true },
  { id: 3, rating: 5, comment: "Les tacos dallas gratinée sont incroyables ! Je recommande vivement.", author_name: 'Sofia M.', approved: true },
  { id: 4, rating: 5, comment: "Meilleur snack d'Azrou, service rapide et plats généreux.", author_name: 'Sarah K.', approved: true },
  { id: 5, rating: 5, comment: "Les pâtes alfredo sont un délice. Livraison rapide !", author_name: 'Mehdi Tazi', approved: true },
];

function delay(ms = 200) {
  return new Promise((res) => setTimeout(res, ms));
}

function withCategory(item) {
  const cat = CATEGORIES.find((c) => c.id === item.category_id);
  return { ...item, category: cat ? { id: cat.id, name: cat.name, slug: cat.slug } : null };
}

export const menuData = {
  async categories() { await delay(); return CATEGORIES; },
  async items(_params) { await delay(); return MENU_ITEMS.map(withCategory); },
  async featured() { await delay(); return MENU_ITEMS.filter((i) => i.featured).map(withCategory); },
  async item(id) { await delay(); return withCategory(MENU_ITEMS.find((i) => i.id === Number(id))); },
};

export const galleryData = {
  async list() { await delay(); return GALLERY; },
};

export const reviewsData = {
  async list() { await delay(); return REVIEWS; },
};

export const newsletterData = {
  async subscribe(_payload) { await delay(300); return { ok: true }; },
};
