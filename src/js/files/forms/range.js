// Підключення з node_modules
import * as noUiSlider from 'nouislider';

// Підключення стилів з scss/base/forms/range.scss 
// у файлі scss/forms/forms.scss

// Підключення стилів з node_modules
import 'nouislider/dist/nouislider.css';


export function rangeInit() {

	const priceSlider = document.querySelector('#range');
	const rangeFrom = document.querySelector('#range-from');
	const rangeTo = document.querySelector('#range-to');

	if (priceSlider) {
		let textFrom = parseFloat(priceSlider.getAttribute('data-from'));
		let textTo = parseFloat(priceSlider.getAttribute('data-to'));

		noUiSlider.create(priceSlider, {
			start: [textFrom, textTo],
			tooltips: true,
			connect: true,
			step: 1,
			range: {
				'min': [1],
				'max': [100]
			},
			format: wNumb({
				prefix: '$',
				decimals: 0,
				suffix: 'K'
			}),
			pips: {
				mode: 'values',
				values: [1, 25, 50, 75, 100],
				density: 4,
				format: wNumb ({
					prefix: '$',
					suffix: 'K'
				})
			}
			
		});

		priceSlider.noUiSlider.on('update', (values, handle) => {
			if (handle === 0) {
				rangeFrom.innerHTML = values[0];
			} else {
				rangeTo.innerHTML = values[1];
			}
		});
	}
	

	// const priceSlider = document.querySelector('#range');
	// if (priceSlider) {
	// 	let textFrom = priceSlider.getAttribute('data-from');
	// 	let textTo = priceSlider.getAttribute('data-to');
	// 	noUiSlider.create(priceSlider, {
	// 		start: [32, 81], // [0,200000]
	// 		tooltips: true,
	// 		connect: true,
	// 		step: 1,
	// 		range: {
	// 			'min': [1],
	// 			'max': [100]
	// 		},
	// 		format: wNumb({
	// 			prefix: '$',
	// 			decimals: 0,
	// 			suffix: 'K'
	// 		}),
	// 		pips: {
	// 			mode: 'values',
	// 			values: [1, 25, 50, 75, 100],
	// 			density: 4
	// 		}
	// 	});
	// 	/*
	// 	const priceStart = document.getElementById('price-start');
	// 	const priceEnd = document.getElementById('price-end');
	// 	priceStart.addEventListener('change', setPriceValues);
	// 	priceEnd.addEventListener('change', setPriceValues);
	// 	*/
	// 	function setPriceValues() {
	// 		let priceStartValue;
	// 		let priceEndValue;
	// 		if (priceStart.value != '') {
	// 			priceStartValue = priceStart.value;
	// 		}
	// 		if (priceEnd.value != '') {
	// 			priceEndValue = priceEnd.value;
	// 		}
	// 		priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
	// 	}
	// }
}
rangeInit();

