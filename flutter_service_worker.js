'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "762233b59244ede514c0fef8983e2ff5",
"assets/AssetManifest.bin.json": "9bfc5d4508376dcad4b5d215d002030f",
"assets/AssetManifest.json": "59783480d2919abf8d3c7f1bfb8ffb2c",
"assets/assets/background.mp4": "756ae73d2141f9c89b83e058da678c5b",
"assets/assets/icons/5bd0169872ce5bfe1c4bd7360df435d1113a0c0b.png": "38d325ea453d86a87251b0d3673daa92",
"assets/assets/icons/bell.png": "27f116414799d29eb627dc05859b1b05",
"assets/assets/icons/bulb.png": "f20f2f93ce2b67f5f5ed6bd11b5db4fe",
"assets/assets/icons/calendar%2520(1).png": "1188ebb1c4e4ddeaf3fd360d3ea005de",
"assets/assets/icons/calendar.png": "b4ff2adfc70d43307eccf80b13026ba8",
"assets/assets/icons/check.png": "c0635705ac2bbc9fd4138b6177559b62",
"assets/assets/icons/clock.png": "ee878d2d2d2846fd54058d35da97d78b",
"assets/assets/icons/contract.png": "4ea960bfc9f059ccc3418e657d8433b8",
"assets/assets/icons/noclass.png": "ac9146feaa7e583fe2d20d93a54b6d08",
"assets/assets/images/asset1.png": "55d26e05149441ddc4a75b84fc06ea82",
"assets/assets/images/asset2.png": "4c0b33a147a79d4c0e1d43a10789d6b9",
"assets/assets/images/asset3.png": "3a794cc8b160b99f9c3ac4b7b7c12e3c",
"assets/assets/images/auth_assets/authbackground.png": "33564cc4858f425ec89e88129ef8d105",
"assets/assets/images/auth_assets/background2.png": "fed2ab57104327495cebf6bdb6d29742",
"assets/assets/images/auth_assets/background3.png": "b0eb605737fbd97f21ccaca62169b4fb",
"assets/assets/images/auth_assets/bakcground1.png": "33564cc4858f425ec89e88129ef8d105",
"assets/assets/images/auth_assets/gradientbottom.png": "9ef2797443541936a79b76179911cce4",
"assets/assets/images/auth_assets/image.png": "5d5a1c593bf5bcf8d36009aafe18198a",
"assets/assets/images/auth_assets/limkahomelogo.png": "26957d63371c553ae8dc46fc286affa6",
"assets/assets/images/back1.png": "0e6ff92486f6305ba4f1162b03483fab",
"assets/assets/images/background.png": "0b8d2b838607c641d9678a6090ec82bb",
"assets/assets/images/login-doodle.webp": "e33d7e79c01e32617ac5cd33ecac2178",
"assets/assets/images/Logo.png": "6248faa7c2e11598f3ece1f53f346b46",
"assets/assets/images/otp_assets/gradientbottom.png": "9ef2797443541936a79b76179911cce4",
"assets/assets/images/otp_assets/limkahomelogo.png": "26957d63371c553ae8dc46fc286affa6",
"assets/assets/images/otp_assets/otpassets.png": "fed2ab57104327495cebf6bdb6d29742",
"assets/assets/images/welcome_assets/gradientbottom.png": "9ef2797443541936a79b76179911cce4",
"assets/assets/images/welcome_assets/welcome.png": "5d9073712a3b76c83685846d7ce680b6",
"assets/assets/images/welcome_assets/welcome_background.png": "55d26e05149441ddc4a75b84fc06ea82",
"assets/assets/images/welcome_assets/welcome_background_2.png": "4c0b33a147a79d4c0e1d43a10789d6b9",
"assets/assets/images/welcome_assets/welcome_background_3.png": "3a794cc8b160b99f9c3ac4b7b7c12e3c",
"assets/assets/logo.png": "6248faa7c2e11598f3ece1f53f346b46",
"assets/assets/timetable.pdf": "e09bc0999b5695424f95d9220451fde2",
"assets/assets/welcome.mp4": "fb614088f2f53a27d1ef0f32475b4c93",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2e1dfa0d0278fcecba4abab5ba99edc6",
"assets/NOTICES": "d7cf356294768903cd32b21fdb5de45a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/syncfusion_flutter_calendar/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/packages/syncfusion_flutter_calendar/assets/images/May.png": "e9a14fe43782d90f7c8e244316b4db49",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle11.png": "1b3d36d168f8f27a027b3d5fe54354b2",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle13.png": "73da9fb063f6307b928808b8b49a7c71",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle15.png": "e8d60d3a29c062b0213e0c433353c37b",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle18.png": "9cc9674b42891b1757db7b73e593c1de",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle20.png": "52cdbc89f084428e9df1fdaf75bcf918",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle23.png": "05985cfc1de3cc32355ae56fe6652b1f",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle24.png": "0a33516701ea509f461e87a1771f9c8c",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle25.png": "a92b2550be278d8dcfa183d680b61ecb",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle26.png": "084a7485156f49757e53c3910e532cc9",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle27.png": "8df8e8574e1e33751beced5cae1035b3",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle5.png": "3cb632d1b2e967a456122f28d4770a01",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle8.png": "2b837eca4b31646cfdcea21211cf66d9",
"assets/packages/syncfusion_flutter_datepicker/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/packages/timezone/data/latest_all.tzf": "df0e82dd729bbaca78b2aa3fd4efd50d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "714bff50631efe25b374a4a056d2ecac",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a62c0dd9d38260611a3e757d24e30337",
"/": "a62c0dd9d38260611a3e757d24e30337",
"main.dart.js": "869c099425bbdcc9e7c458b665f1155a",
"manifest.json": "01ef449fe907113924368218f03a260b",
"version.json": "603c4f59dc18a6dd476f54d4e6ca3da7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
