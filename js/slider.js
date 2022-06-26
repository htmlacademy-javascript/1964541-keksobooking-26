import {MIN_PRICE} from './consts.js';
import {MAX_PRICE} from './form_validation.js';

const SLIDER_MIN_RANGE = 0;
const SLIDER_START_NUM = 0;
const SLIDER_STEP_NUM = 10;

const sliderElement = document.querySelector('.ad-form__slider');
const typeName = document.querySelector('[name="type"]');
const priceField = document.querySelector('[name="price"]');

noUiSlider.create(sliderElement, {
  range: {
    min: SLIDER_MIN_RANGE,
    max: MAX_PRICE,
  },
  start: SLIDER_START_NUM,
  step: SLIDER_STEP_NUM,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});


sliderElement.noUiSlider.on('update', () => {
  priceField.value = sliderElement.noUiSlider.get();
});

typeName.addEventListener('change', () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: MIN_PRICE[typeName.value],
      max: MAX_PRICE
    }
  });
});
