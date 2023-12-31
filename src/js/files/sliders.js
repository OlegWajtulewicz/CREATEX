/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.case-studies-slider__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.case-studies-slider__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [ Navigation ],
			observer: true,
			observeParents: true,
			watchOverflow: true,
			slidesPerView: 3,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				730: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				
				1080: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				
			},

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {
				//afterInit: () => {
				//	this.slideTo(0);
				//},
			}
		});
		
	}
	if (document.querySelector('.tabs-pricing__slider')) {
		new Swiper('.tabs-pricing__slider', {
			modules: [ Pagination ],
			slidesPerView: 3,
			spaceBetween: 30,
			observer: true,
			observeParents: true,
			autoHeight: true,
			speed: 500,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				730: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				
				1080: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				
			},
		})
	} 
	if (document.querySelector('.testimonials__slider')) {
		new Swiper('.testimonials__slider', {
			modules: [ Navigation ],
			slidesPerView: 1,
			spaceBetween: 30,
			observer: true,
			observeParents: true,
			autoHeight: true,
			speed: 500,
			loop: true,
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			breakpoints: {
				320: {
					spaceBetween: 10,
				},
				730: {
					spaceBetween: 20,
				},
				
				1080: {
					spaceBetween: 30,
				},
				
			},
		})
	}
	//===================  our-team ===  mobile-slider ===================================

	if (document.querySelector('.team-our__slider')) {
		let mySwiper = null;
		const slider = document.querySelector('.team-our__slider');
		const mobileBreakpoint = 1080;
	
		function initializeSwiper() {
			mySwiper = new Swiper(slider, {
				modules: [Pagination, Navigation],
				slidesPerView: 4,
				spaceBetween: 30,
				observer: true,
				observeParents: true,
				//autoHeight: true,
				loop: true,
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				slideClass: 'team-our__slide',
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					480: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					767: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				},
				navigation: {
					prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next',
				},
			});
		}
	
		function destroySwiper() {
			if (mySwiper !== null) {
				mySwiper.destroy();
				mySwiper = null;
			}
		}
	
		function handleResize() {
			if (window.innerWidth <= mobileBreakpoint && !mySwiper) {
				initializeSwiper();
			} else if (window.innerWidth > mobileBreakpoint && mySwiper) {
				destroySwiper();
			}
		}
	
		handleResize();
		window.addEventListener('resize', handleResize);
	}
	//====================================================================================

}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});