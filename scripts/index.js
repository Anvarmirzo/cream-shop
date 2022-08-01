document.addEventListener('DOMContentLoaded', function () {
	'use strict';

	(function headerMenu() {
		const burger = document.getElementById('header-burger');
		const menu = document.getElementById('header-menu');

		const toggleMenuClass = () => {
			menu.classList.toggle('active');
		};

		if (burger && menu) {
			burger.addEventListener('click', toggleMenuClass);
			menu.addEventListener('click', toggleMenuClass);
		}
	})();
});
