// Helix AI — Service Worker v12
const CACHE = 'helix-v12';
const OFFLINE_ASSETS = [self.location.pathname.replace(/sw\.js$/, '') || '/'];

// Install: cache assets, skip waiting immediately
self.addEventListener('install', e => e.waitUntil(
  caches.open(CACHE)
    .then(c => c.addAll(OFFLINE_ASSETS))
    .then(() => self.skipWaiting())
));

// Activate: delete old caches, claim clients, then tell them to reload
self.addEventListener('activate', e => e.waitUntil(
  caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim())
    .then(() => self.clients.matchAll({ type: 'window' }))
    .then(clients => clients.forEach(client => client.postMessage({ type: 'RELOAD' })))
));

// Fetch: network-first for same-origin HTML, cache-first for everything else
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  const isHTML = e.request.headers.get('accept')?.includes('text/html');

  if (isHTML) {
    // Network-first: always try to get fresh HTML, fall back to cache
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return res;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    // Cache-first for assets
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(res => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return res;
        }).catch(() => cached);
      })
    );
  }
});
