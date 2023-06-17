import { Content } from './components/Content.js';
import { Nav } from './components/Nav.js';
import { handleLocation } from './router.js';

const navItemList = [
	{
		title: 'Short',
		path: '/',
		id: 0,
	},
	{
		title: 'Short',
		path: '/short',
		id: 1,
	},
	{
		title: 'Long',
		path: '/long',
		id: 2,
	},
];

export default function App({ $target }) {
	this.state = {};
	this.state.navItemList = navItemList;

	const nav = new Nav({
		$target,
		navItemList,
	});

	const content = new Content({
		$target,
	});

	const init = async () => {
		console.log('app init!! ');
		const res = await fetch('data/route.json');
		console.log(await res.json());
	};

	init();
}
