class Loader {
	constructor() {
	}
	load(url){
		return new Promise((resolve, reject) => {
			console.log('Load');
			let request = new XMLHttpRequest();
			request.open('GET', url, true);
			request.addEventListener('readystatechange', () => {
				if (request.readyState === 4) {
					if(request.status === 200) {
						console.log('Loaded');
						resolve(JSON.parse(request.responseText));
					} else {
						reject(request.statusText);
					}
				}
			});
			request.send();
		});
	}
}

export default Loader;
