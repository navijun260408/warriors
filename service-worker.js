const CACHE_NAME = 'warriors-cache';

////////////////////////////////////////////////////////////////////////////////
const yearFolder = '2025';  // change the year
////////////////////////////////////////////////////////////////////////////////

const FILES_TO_CACHE = [
  `/warriors/index.html`,
  `/warriors/manifest.json`,
  `/warriors/${yearFolder}/startTimes.json`,
  `/warriors/${yearFolder}/1st.mp3`,
  `/warriors/${yearFolder}/2nd.mp3`,
  `/warriors/${yearFolder}/3rd.mp3`,
  `/warriors/${yearFolder}/fineplay.mp3`,
  `/warriors/${yearFolder}/touchdown.mp3`,
  `/warriors/${yearFolder}/kickoff.mp3`,
  `/warriors/${yearFolder}/pant.mp3`,
  `/warriors/${yearFolder}/tequila.mp3`,
  `/warriors/icon.png`
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
