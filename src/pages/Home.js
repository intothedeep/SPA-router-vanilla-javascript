export function Home({ $target }) {
	this.$dom = document.createElement('section');
	this.$dom.classList.add('content');

	$target.append(this.$dom);

	this.render = () => {
		this.$dom.innerHTML = `Home`;
	};

	this.render();
}
