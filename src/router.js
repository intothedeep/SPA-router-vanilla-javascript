const routes = {
	404: 'pages/404.html',
	'/': '/src/pages/404.html',
	'/home': '/src/pages/short.html',
	'/short': '/src/pages/short.html',
	'/long': '/src/pages/long.html',
};

export function route(event) {
	event = event || window.event;
	if (event.target.closest('.nav-item') === undefined) return;

	const { dataset } = event.target;
	const { title = '', path } = dataset;
	event.preventDefault();
	window.history.pushState({}, title, path);
	handleLocation();
}

export const handleLocation = async () => {
	const path = window.location.pathname;
	const route = routes[path] || routes[404];
	console.log('handle::: ', path, route);
	const html = await fetch(route).then((data) => data.text());

	document.querySelector('.content-container').innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
