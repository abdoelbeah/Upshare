
function main(workbox) {
  const {
    cacheableResponse: { CacheableResponsePlugin },
    core: { clientsClaim },
    expiration: { ExpirationPlugin },
    precaching: { cleanupOutdatedCaches },
    routing: { registerRoute, setCatchHandler },
    strategies: { NetworkFirst, StaleWhileRevalidate,CacheFirst },
  } = workbox;

  clientsClaim();

  self.skipWaiting();

  cleanupOutdatedCaches();

  // Cache static resources
  registerRoute(
    /.*\.(?:js|css|png|jpg|jpeg|svg|webp|woff2?|ttf|otf|eot|ico|gif)/,
    new CacheFirst ({
      cacheName: "static-resources",
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds:  60,
        }),
      ],
    })
  );

  // Cache server-rendered HTML pages
  registerRoute(
    ({ request }) => request.destination === "document",
    new StaleWhileRevalidate({
      cacheName: "html-cache",
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    })
  );

  // Cache dynamic content from the ERP system
  // registerRoute(
  //   ({ url }) => url.origin === "http://127.0.0.1:5503",
  //   new NetworkFirst({
  //     cacheName: "server-cache",
  //     plugins: [
  //       new CacheableResponsePlugin({
  //         statuses: [0, 200],
  //       }),
  //     ],
  //     fetchOptions: {
  //       credentials: "include",
  //     },
  //   })
  // );


}

// Load Workbox from a CDN
if (typeof importScripts === "function") {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js"
  );

  // Run the main function if Workbox is available
  if (workbox) {
    main(workbox);
  }
}