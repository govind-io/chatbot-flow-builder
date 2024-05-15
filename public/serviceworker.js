const cacheName = 'cache-v1';
const HttpSuccessCode = 200;

const openCache = async () => {
  try {
    const cache = await caches.open(cacheName);
    console.log('cache opened');
    return cache;
  } catch (error) {
    console.log('could not open cache');
    return undefined;
  }
};

const setInitialCache = async () => {
  const cache = await openCache();
  await cache.add('/offline');
  console.log('added offline to the cache');
};

/**
 * @description makes the network call, if succesfull updates the cache
 * @param {Event} e fetch event request
 * @param {cache} caache opened cache to search store the network response
 * @returns the network response
 */
const getNetworkResponse = async (e, cache) => {
  const networkResponse = await fetch(e.request);

  if (networkResponse.status === HttpSuccessCode) {
    cache.put(e.request, networkResponse.clone());
  }

  return networkResponse;
};

const getCachedResponse = async (e, cache) => {
  try {
    const cachedResponse = await cache.match(e.request);

    if (cachedResponse) {
      // If found in the cache and user is offline, return the cached version
      return cachedResponse;
    }
    return await cache.match('/offline');
  } catch (error) {
    return await cache.match('/offline');
  }
};

/**
 * @description makes the network call, if succesfull updates the cache
 * @param {Event} e fetch event request
 * @returns the cached response incase of offline user and returns the network response incase of online user
 */
const respondWith = async (e) => {
  const cache = await caches.open(cacheName);

  if (navigator.onLine) {
    try {
      const networkResponse = await getNetworkResponse(e, cache);
      return networkResponse;
    } catch (error) {
      const cachedResponse = await getCachedResponse(e, cache);
      return cachedResponse;
    }
  }

  return await getCachedResponse(e, cache);
};

self.addEventListener('install', (e) => {
  console.log('service worker installed');
  e.waitUntil(setInitialCache());
});

self.addEventListener('activate', () => {
  console.log('service worker activated');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(respondWith(e));
});
