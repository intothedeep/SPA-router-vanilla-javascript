import { route } from '../router.js';

export function Nav({ $target, navItemList = [] }) {
	this.$dom = document.createElement('nav');
	this.$dom.classList.add('nav-container');
	console.log('.>>', $target);
	$target.append(this.$dom);

	const setState = (next) => {
		this.render(this.$dom);
	};

	const render = () => {
		const list = navItemList.map(
			(item) =>
				new NavItem({
					$target: this.$dom,
					item,
				})
		);
		console.log('>>>>  item', navItemList, list);

		// navItem event delegation
		this.$dom.addEventListener('click', route);
	};

	render();
}

export function NavItem({ $target, item }) {
	this.$dom = document.createElement('li');
	this.$dom.classList.add('nav-item');

	$target.append(this.$dom);

	this.render = () => {
		this.$dom.innerHTML = `
            <a 
                data-path=${item.path} 
                data-id=${item.id}
                data-title=${item.title}
            >
                ${item.title}
            </a>`;
	};

	this.render();
}
