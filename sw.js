const staticCache = "mws-cache-v1";
const cacheURLS = ["index.html", "restaurant.html", "/css/style.css", "/js/main.js"];

// self.addEventListener("install", (event)  => {
//   // event.waitUntil(
//     caches.open("mws-cache-v1");
//   // );
// });
// // 

// self.addEventListener('active', (cache)=> {
//   console.log('SW Active!');
//   return cache.addAll(cacheURLS);
// });

self.addEventListener('install', (event) => {
  console.log('Service Worker Installed');
  event.waitUntil (
    caches.open(staticCache)
    .then((cache) => {
      console.log("SW - Caching Files");
      cache.addAll(cacheURLS);
    })
    .then(() => self.skipWaiting())
  )
});

self.addEventListener('activate', event => {
  console.log('Service Worker Active');
});