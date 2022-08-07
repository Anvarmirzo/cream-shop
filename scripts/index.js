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
			console.warn('Menu or burger not found');
		}
	})();

	(function sliders() {
		if (Swiper) {
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

			const galleryThumbs = new Swiper('.section-detail-gallery-thumbs', {
				slidesPerView: 6,
				clickable: true,
				spaceBetween: 8,
				direction: 'vertical',
			});

			const galleryMain = new Swiper('.section-detail-gallery-main', {
				watchOverflow: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				preventInteractionOnTransition: true,

				navigation: {
					nextEl: '.section-detail-gallery-main .button-next',
					prevEl: '.section-detail-gallery-main .button-prev',
				},
				pagination: {
					el: '.section-detail-gallery-main .swiper-pagination',
					clickable: true,
				},
				effect: 'fade',
				fadeEffect: {
					crossFade: true,
				},
				thumbs: {
					swiper: galleryThumbs,
				},
			});

			galleryMain.on('slideChangeTransitionStart', function () {
				galleryThumbs.slideTo(galleryMain.activeIndex);
			});

			galleryThumbs.on('transitionStart', function () {
				galleryMain.slideTo(galleryThumbs.activeIndex);
			});

			const resultsSwiper = new Swiper('.section-results-swiper', {
				slidesPerView: 3,
				spaceBetween: 24,
				freeMode: true,
				// Navigation arrows
				navigation: {
					nextEl: '.section-results .slider-btn-next',
					prevEl: '.section-results .slider-btn-prev',
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
						slidesPerView: 3,
					},
				},
			});
		}
	})();

	(function collectionCount() {
		const listLength = document.querySelectorAll(
			'.section-collection-list-item',
		)?.length;

		const count = document.getElementById('collection-count');
		if (count) {
			count.textContent = listLength || 0;
		}
	})();

	(function accordion() {
		const accordions = document.querySelectorAll('.accordion-item');

		const openAccordion = (accordion) => {
			const body = accordion.querySelector('.accordion-item__body');
			if (body) {
				accordion.classList.add('accordion-item__active');
				body.style.maxHeight = body.scrollHeight + 'px';

				const icon = accordion.querySelector('span');
				if (icon) {
					icon.textContent = '-';
				} else {
					console.warn('Icon(+/-) not found');
				}
			} else {
				console.warn('Accordion body not found');
			}
		};

		const closeAccordion = (accordion) => {
			const body = accordion.querySelector('.accordion-item__body');
			if (body) {
				accordion.classList.remove('accordion-item__active');
				body.style.maxHeight = null;

				const icon = accordion.querySelector('span');
				if (icon) {
					icon.textContent = '+';
				} else {
					console.warn('Icon(+/-) not found');
				}
			} else {
				console.warn('Accordion body not found');
			}
		};

		accordions.forEach((accordion) => {
			const head = accordion.querySelector('.accordion-item__head');
			const body = accordion.querySelector('.accordion-item__body');

			if (head && body) {
				head.addEventListener('click', () => {
					if (body.style.maxHeight) {
						closeAccordion(accordion);
					} else {
						accordions.forEach((accordion) => closeAccordion(accordion));
						openAccordion(accordion);
					}
				});
			} else {
				console.warn('Accordion head or body not found');
			}
		});
	})();
});
