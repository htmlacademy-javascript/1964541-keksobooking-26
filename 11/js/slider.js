import {MinPrice} from './data.js';
import {MAX_PRICE} from './form_validation.js';

const sliderElement = document.querySelector('.ad-form__slider');
const typeName = document.querySelector('[name="type"]');
const priceField = document.querySelector('[name="price"]');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: MAX_PRICE,
  },
  start: 0,
  step: 10,
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
      min: MinPrice[typeName.value],
      max: MAX_PRICE
    }
  });
});
