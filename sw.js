let staticCache = "mws-cache-v1";
const cacheURLS = ["/index.html", "/restaurant.html", "/css/style.css"];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("mws-cache-v1").then(cache => {
      return cache.addAll(cacheURLS);
    })
  );
});
