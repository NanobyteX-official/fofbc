const CACHE_NAME = 'fofbc-cache-registers-v1.0';
const urlsToCache = [
	'/',
	'/index.html',
	'/styles.css',
	'/script.js',
	'/about.html',
	'/about-styles.css',
	'/bible-lessons.html',
	'/lessons.2023.html',
	'/2023-lessons-styles.css',
	'/lessons.2024',
	'/2024-lessons-styles.css',
	'/lessons.2025.html',
	'/2025-lessons-styles.css',
	'/analytics.js',
	'/archives.js',
	'/contact.html',
	'/contact-styles.css',
	'/effectpack.js',
	'/firebase.js',
	'/manifest.json',
	'media.html',
	'/media-styles.css',
	'/payment-form.html',
	'/schedules.html',
	'/schedules-styles.css',
	'/sermons.html',
	'/sermons-styles.css',
	'/submit_contact.php',
	'/theme-details.html',
	'/twentyfive.js',
	'/twentyfour.js',
	'/twentythree.js',
	'/albci.white.copy.jpg'
];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log('Caching files during install');
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('activate', (event) => {
	const cacheWhitelist = [CACHE_NAME];
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(cacheNames.map((cacheName) => {
				if(!cacheWhitelist.includes(cacheName)) {
					return caches.delete(cacheName);
				}
			})
		);
		})
	);
});

self.addEventListener('fetch', (event) => {
	event.respondWith(caches.match(event.request).then((cachedResponse) => {
		if(cachedResponse) {
			return cachedResponse;
		}
		return fetch(event.request);
	})
	);
});