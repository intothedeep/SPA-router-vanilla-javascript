export function setLocalStorage(arg) {
	const { key, data } = arg;
	const str = JSON.stringify(arg);
	localStorage.setItem(key, str);
}

export function getLocalStorage({ key }) {
	const item = localStorage.getItem(key);
	return JSON.parse(item).data;
}

export function removeLocalStorage({ key }) {
	return localStorage.removeItem(key);
}
