'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "02ac0de092dba5cbd002fb7cff84b02d",
"assets/AssetManifest.bin": "e2cfcfbb4ec397e9ba1a50cc4cf381a8",
"assets/AssetManifest.bin.json": "858897a8b8bec14b5c9af02aa8c2646d",
"assets/AssetManifest.json": "5972ee10123ced104edfd5a125ec213c",
"assets/assets/images/instagram.svg": "7eae9e3d5a167fac1a73babf0888191d",
"assets/assets/images/linkedin.png": "5931945864ff790ca43602d3d1af35de",
"assets/assets/images/logo.jpg": "429e533d863bc853979cd5fbaa086122",
"assets/assets/images/mockup_telegram.png": "bb4053fd1057d39f75d7117923cd8c1f",
"assets/assets/images/mockup_whatsapp.png": "a63e684a6e640c7326f445e1957515dd",
"assets/assets/images/rcgram.png": "313d913a10bc6edcfbb0725344d80c16",
"assets/assets/images/rcgram.webp": "ca2f0bdad349903334d0735bd0409186",
"assets/assets/images/rcmods.svg": "196598bafab6c55ad6bff91a62a6f809",
"assets/assets/images/rcwa.png": "fb6fd102bd8a2838c8bd73e792d8abdc",
"assets/assets/images/rcwhatsapp.png": "658b68aaf72419d0bd612042e5c57320",
"assets/assets/images/telegram_1.png": "a6f40ac4c10505968c7522d703236356",
"assets/assets/images/telegram_2.png": "7b9c0a947ec195f7c4e2772e99fecc4a",
"assets/assets/images/telegram_3.png": "9df317b1578fa4337000b2ecc87a8e59",
"assets/assets/images/whatsapp_1.png": "b31fd283db027a7c61f8d19db700d8d5",
"assets/assets/images/whatsapp_2.png": "78340698641fe3c949dc7b01d249ec29",
"assets/assets/images/whatsapp_3.png": "dcf8a0732cd9ae94721a048d9be52f25",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1a034db54114f5ac304c3d3ca320b8df",
"assets/NOTICES": "aaebdeba423a627de1696ddf3918de22",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "ac08444cecfdcdbb59a9a1bf920dcecf",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "8ab6524e5f7799e6e111514ea8aa9b27",
"icons/Icon-192.png": "0f14cea1dbbd82f3881813082419925d",
"icons/Icon-512.png": "9ca727ff7cb1c70f0ed8ed6df27d2783",
"icons/Icon-maskable-192.png": "0f14cea1dbbd82f3881813082419925d",
"icons/Icon-maskable-512.png": "9ca727ff7cb1c70f0ed8ed6df27d2783",
"index.html": "238e505170487bb07fd61754e580c9ce",
"/": "238e505170487bb07fd61754e580c9ce",
"main.dart.js": "38db4d5b77b3abb870245ee9ce50151a",
"main.dart.mjs": "59580f61f44ca71f39875e10898d685c",
"main.dart.wasm": "6588a010a11fd1991525a6866c378f65",
"manifest.json": "362780c772798f54a54718ddefa328e0",
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
