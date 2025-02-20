if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/service-worker.js').then((registration) => {
		console.log('Service Worker registered with scope: ', registration.scope);

		registration.onupdatefound = () => {
			const installingWorker = registration.installing;
			installingWorker.onstatechange = () => {
				if(installingWorker.state === 'installed') {
					if(navigator.serviceWorker.controller) {
						alert('New update is available! Please reload the page to see the latest version.');
					} else{
						console.log('Content is now cached for offline use.');
					}
				}
			};
		};
	}).catch((error) => {
		console.log('Service Worker registration failed: ', error);
	});
}

