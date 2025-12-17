'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "02ac0de092dba5cbd002fb7cff84b02d",
"adblock_monitor.js": "aec24a8f9a7483995e747ddd14314eb2",
"assets/AssetManifest.bin": "451693c2e8b3b26ee0d4ea68ae1416bb",
"assets/AssetManifest.bin.json": "2b39d939aa8e89e0336205d332c97662",
"assets/assets/images/instagram.svg": "7eae9e3d5a167fac1a73babf0888191d",
"assets/assets/images/linkedin.webp": "5f30df72416e627d59c4443180bc1b30",
"assets/assets/images/logo.webp": "429b5112fd929d957f62ba78a66569ba",
"assets/assets/images/mockup_telegram.webp": "8e0a43372ac84c4e2eb60c54692dba27",
"assets/assets/images/mockup_whatsapp.webp": "e2c7895be3b33610e52813d26ec12623",
"assets/assets/images/rcgram.webp": "ca2f0bdad349903334d0735bd0409186",
"assets/assets/images/rcgram2.webp": "57c3f11497a8ca93606287676212b070",
"assets/assets/images/rcmods.svg": "196598bafab6c55ad6bff91a62a6f809",
"assets/assets/images/rcwa.webp": "0f95ec5dddc6950a9a23600cda17b97c",
"assets/assets/images/rcwhatsapp.webp": "b86dc519a8d3fb660aebcf321d49b3ff",
"assets/assets/images/telegram_1.webp": "e4f0a174099cc36de0703da2414d424f",
"assets/assets/images/telegram_2.webp": "38990dc2307aa723b3f2de20b8fbcaa2",
"assets/assets/images/telegram_3.webp": "0d5189b1fa0ca8addad9a2e0f8cc0c25",
"assets/assets/images/whatsapp_1.webp": "11d5477851cdf2478829dce6cbe2a49b",
"assets/assets/images/whatsapp_2.webp": "8f6f4307cb24f1d5748487f53f108b5e",
"assets/assets/images/whatsapp_3.webp": "a1e53803d4264505f58afa35a1cf5481",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a362094d78de9d9683e0459430c1185b",
"assets/NOTICES": "be1d277298efaabd0559de669fe23ee0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "ac08444cecfdcdbb59a9a1bf920dcecf",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "a271095a786cb6a33ead22102d9b57b3",
"icons/Icon-192.png": "0f14cea1dbbd82f3881813082419925d",
"icons/Icon-512.png": "9ca727ff7cb1c70f0ed8ed6df27d2783",
"icons/Icon-maskable-192.png": "0f14cea1dbbd82f3881813082419925d",
"icons/Icon-maskable-512.png": "9ca727ff7cb1c70f0ed8ed6df27d2783",
"index.html": "ac4d2f0f57087cfcb623480919bab629",
"/": "ac4d2f0f57087cfcb623480919bab629",
"main.dart.js": "50a2de3b3ff8e0ba33a2b83c656b4eff",
"main.dart.mjs": "710b38590f89399307ed1496a42d6648",
"main.dart.wasm": "a489ac117d59d256a507c6757472148e",
"manifest.json": "b59e4cb95ccb65f4ef775ac0032f566d",
"robots.txt": "c7a50bb0772971908e5f35691e6945eb",
"sitemap.xml": "8260278b5adde0775dde7b7c005c0766",
"version.json": "1c087765eded2a501ec60e6a23bdd805"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
