// Helix AI — Service Worker v14
const CACHE = 'helix-v14';
const OFFLINE_ASSETS = [self.location.pathname.replace(/sw\.js$/, '') || '/'];

// Install: cache assets, skip waiting immediately
self.addEventListener('install', e => e.waitUntil(
  caches.open(CACHE)
    .then(c => c.addAll(OFFLINE_ASSETS))
    .then(() => self.skipWaiting())
));

// Activate: delete old caches, claim clients
// Only send RELOAD if there was a previous cache (= genuine update, not first install)
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(keys => {
    const oldCaches = keys.filter(k => k !== CACHE);
    const isUpdate  = oldCaches.length > 0;
    return Promise.all(oldCaches.map(k => caches.delete(k)))
      .then(() => self.clients.claim())
      .then(() => {
        if (!isUpdate) return;
        return self.clients.matchAll({ type: 'window' })
          .then(clients => clients.forEach(c => c.postMessage({ type: 'RELOAD' })));
      });
  })
));

// Fetch: network-first for same-origin HTML, cache-first for everything else
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  const isHTML = e.request.headers.get('accept')?.includes('text/html');

  if (isHTML) {
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
