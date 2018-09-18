let staticCache = "mws-cache-v1";
const cacheURLS = [
  "/",
  "/restaurant.html",
  "/index.html",
  "/css/styles.css",
  "/js/dbhelper.js",
  "/js/main.js",
  "/js/restaurant_info.js",
  "/data/restaurants.json",
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
    caches.open(staticCache).then(cache => {
      return cache.addAll(cacheURLS);
    })
  );
});

// Fetch Event



// Activate Event