import { Content } from './components/Content.js';
import { Nav } from './components/Nav.js';
import { handleLocation } from './router.js';

const navItemList = [
	{
		title: 'Home',
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
	console.log('>>> #target:: ', $target);

	this.state = {};
	this.state.navItemList = navItemList;

	const nav = new Nav({
		$target,
		navItemList,
	});

	const content = new Content({
		$target,
	});

	const init = () => {
		console.log('app init!! ');
	};

	init();
}
