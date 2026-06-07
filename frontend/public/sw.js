// Dalas SW v2 — network-first for HTML, cache-first for hashed assets & images.
const VERSION = 'dalas-v2';
const STATIC_CACHE  = `${VERSION}-static`;
const RUNTIME_CACHE = `${VERSION}-runtime`;
const IMAGE_CACHE   = `${VERSION}-images`;

const PRECACHE = ['/', '/manifest.json', '/iconDallas.jpg'];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(STATIC_CACHE).then((c) => c.addAll(PRECACHE)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => !k.startsWith(VERSION))
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

const isHashedAsset = (url) => url.pathname.startsWith('/assets/');
const isImage = (url) =>
  url.pathname.startsWith('/imageMenu/') ||
  /\.(png|jpe?g|webp|avif|svg|gif|ico)$/i.test(url.pathname);
const isHTML = (req) =>
  req.mode === 'navigate' ||
  (req.headers.get('accept') || '').includes('text/html');

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (isHTML(req)) {
    e.respondWith(networkFirst(req, RUNTIME_CACHE));
    return;
  }
  if (isHashedAsset(url)) {
    e.respondWith(cacheFirst(req, STATIC_CACHE));
    return;
  }
  if (isImage(url)) {
    e.respondWith(cacheFirst(req, IMAGE_CACHE));
    return;
  }
  e.respondWith(staleWhileRevalidate(req, RUNTIME_CACHE));
});

async function networkFirst(req, cacheName) {
  try {
    const res = await fetch(req);
    const cache = await caches.open(cacheName);
    cache.put(req, res.clone()).catch(() => {});
    return res;
  } catch {
    const cached = await caches.match(req);
    return cached || caches.match('/');
  }
}

async function cacheFirst(req, cacheName) {
  const cached = await caches.match(req);
  if (cached) return cached;
  const res = await fetch(req);
  if (res && res.ok) {
    const cache = await caches.open(cacheName);
    cache.put(req, res.clone()).catch(() => {});
  }
  return res;
}

async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  const fetchPromise = fetch(req)
    .then((res) => {
      if (res && res.ok) cache.put(req, res.clone()).catch(() => {});
      return res;
    })
    .catch(() => cached);
  return cached || fetchPromise;
}

self.addEventListener('message', (e) => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});
