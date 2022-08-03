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
		const productsSwiper = new Swiper('.products-swiper', {
			slidesPerView: 3.1,
			spaceBetween: 24,
			freeMode: true,
			// Navigation arrows
			navigation: {
				nextEl: '.section-products .slider-btn-next',
				prevEl: '.section-products .slider-btn-prev',
			},
			breakpoints: {
				// when window width is >= 240px
				240: {
					slidesPerView: 1.3,
					spaceBetween: 8,
				},
				// when window width is >= 992px
				992: {
					spaceBetween: 24,
					slidesPerView: 3.1,
				},
			},
		});

		const productsQuestionSwiper = new Swiper('.products-question-swiper', {
			slidesPerView: 4,
			spaceBetween: 24,
			scrollbar: {
				el: '.products-question-swiper .swiper-scrollbar',
			},
			breakpoints: {
				// when window width is >= 240px
				240: {
					slidesPerView: 1,
					spaceBetween: 8,
				},
				// when window width is >= 768px
				768: {
					slidesPerView: 2,
				},
				// when window width is >= 992px
				992: {
					slidesPerView: 3,
					spaceBetween: 24,
				},
				1200: {
					slidesPerView: 4,
				},
			},
		});

		const collectionsSwiper = new Swiper('.section-collections-swiper', {
			slidesPerView: 2.1,
			spaceBetween: 24,
			freeMode: true,
			// Navigation arrows
			navigation: {
				nextEl: '.section-collections .slider-btn-next',
				prevEl: '.section-collections .slider-btn-prev',
			},
			breakpoints: {
				// when window width is >= 240px
				240: {
					slidesPerView: 1.3,
					spaceBetween: 8,
				},
				// when window width is >= 992px
				992: {
					spaceBetween: 24,
					slidesPerView: 2.1,
				},
			},
		});
	})();
});
