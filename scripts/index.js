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
		} else {
			console.error('Menu or burger not found');
		}
	})();

	(function sliders() {
		const productSwiper = new Swiper('.products-swiper', {
			slidesPerView: 3.1,
			spaceBetween: 30,
			freeMode: true,
			// Navigation arrows
			navigation: {
				nextEl: '.products .slider-btn-next',
				prevEl: '.products .slider-btn-prev',
			},
			breakpoints: {
				// when window width is >= 240px
				240: {
					slidesPerView: 1.3,
					spaceBetween: 10,
				},
				// when window width is >= 992px

				992: {
					slidesPerView: 3.1,
				},
			},
		});
	})();
});
