import { Home } from '../pages/home/home.js';

export function Content({ $target }) {
	this.state = {};
	this.state.page = 0;

	this.$dom = document.createElement('main');
	this.$dom.classList.add('content-container');

	$target.append(this.$dom);

	this.setState = (next) => {
		this.state = next;
		this.render();
	};

	this.render = () => {
		switch (this.state.page) {
			default:
				new Home({
					$target: this.$dom,
				});
		}
	};

	this.render();
}
