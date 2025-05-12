const CACHE_NAME = 'mp3-player-cache-v1';
const FILES_TO_CACHE = [
  './',
  './warriors.html',
  './manifest.json',
  './1st.mp3',
  './2nd.mp3',
  './3rd.mp3',
  './fineplay.mp3',
  './touchdown.mp3',
  './kickoff.mp3',
  './pant.mp3',
  './tequila.mp3',
  './icon.png'
  // 他のMP3や画像も追加
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
