self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("perfect-quiz-cache").then((cache) =>
      cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./buzz.mp3"
      ])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});