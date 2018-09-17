let staticCache = 'mws-cache-v1';
const cacheURLS = ['/', '/index.html', 'css/styles.css', '/js/'];

self.addEventListener('install', (event) => {
  console.log('installing');
  event.waitUntil(
    caches.open(staticCache)
    .then((cache) => {
      console.log('Cache opened');
      return cache.addAll(cacheURLS);
    })
  );
});