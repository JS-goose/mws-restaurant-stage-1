const cacheName = "mws-cache-v1";
const cacheURLS = [
  "/",
  "/index.html",
  "/restaurant.html",
  "/css/styles.css",
  "/data/restaurants.json",
  "/js/dbhelper.js",
  "/js/main.js",
  "/js/restaurant_info.js",
  "https://unpkg.com/leaflet@1.3.1/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.3.1/dist/leaflet.js",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
  "/img/1.jpg",
  "/img/2.jpg",
  "/img/3.jpg",
  "/img/4.jpg",
  "/img/5.jpg",
  "/img/6.jpg",
  "/img/7.jpg",
  "/img/8.jpg",
  "/img/9.jpg",
  "/img/10.jpg",
];

// Service Worker Install
self.addEventListener("install", event => {
  console.log("Cache opened");
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(cacheURLS);
    })
  );
});

// Fetch Event
self.addEventListener("fetch", event => {
  console.log("Fetch fired");
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;
      return fetch(event.request)
        .then(response => {
          const responseClone = response.clone();
          caches.open(cacheName).then(cache => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(error => {
          console.log(`An error occured: ${error}`);
        });
    })
  );
});

// Activate Event
self.addEventListener("activate", event => {
  console.log("Service worker active");
  event.waitUntil(
    caches.keys().then(cacheName => {
      return Promise.all(
        cacheName
          .filter(cacheName => {
            return cacheName.startsWith("mws") && cacheName != cacheName;
          })
          .map(cacheName => {
            return caches.delete(cacheName);
          })
      );
    })
  );
});
