const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/edit.css',
    '/img/Caminho-Neocatecumenal-730x438.png',
    '/audio/Amo o Senhor - Salmo 116 (114-115).mp3',
    '/audio/Como são amáveis tuas moradas - Salmo 84 (83).mp3',
    '/audio/Eu venho Reunir (Is 66, 18-21)  - 50 anos do Caminho Neocatecumenal no Brasil.mp3',
    '/audio/Jesus percorria todas as Cidades (Mt 9, 35).mp3',
    '/audio/Ronão.mp3',
    '/audio/O senhor é minha luz e salvação - Salmo 27 (26).mp3',
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});
