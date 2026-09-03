self.addEventListener('install', (event) => {
      self.skipWaiting();
      });

      self.addEventListener('activate', (event) => {
        event.waitUntil(clients.claim());
        });

        self.addEventListener('fetch', (event) => {
          // Melewatkan request ke jaringan biasa
            event.respondWith(fetch(event.request));
            });
})