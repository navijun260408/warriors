const CACHE_NAME = 'mp3-player-cache-v1';
const FILES_TO_CACHE = [
  '/warriors/',
  '/warriors/index.html',
  '/warriors/manifest.json',
  '/warriors/1st.mp3',
  '/warriors/2nd.mp3',
  '/warriors/3rd.mp3',
  '/warriors/fineplay.mp3',
  '/warriors/touchdown.mp3',
  '/warriors/kickoff.mp3',
  '/warriors/pant.mp3',
  '/warriors/tequila.mp3',
  '/warriors/icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
