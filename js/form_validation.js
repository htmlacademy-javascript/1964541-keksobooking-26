import {MinPrice} from './data.js';

const GuestRoomsOptions = {
  '1 комната': ['для 1 гостя'],
  '2 комнаты': ['для 1 гостя', 'для 2 гостей'],
  '3 комнаты': ['для 1 гостя', 'для 2 гостей', 'для 3 гостей'],
  '100 комнат': ['не для гостей']
};
const MAX_PRICE = 100000;

const form = document.querySelector('.ad-form');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element'
});

const guestsField = form.querySelector('[name="capacity"]');
const roomsField = form.querySelector('[name="rooms"]');
const priceField = form.querySelector('[name="price"]');
const typeName = form.querySelector('[name="type"]');

function validatePrice(value) {
  return MinPrice[typeName.value] <= value && value <= MAX_PRICE;
}

function validateGuests() {
  return GuestRoomsOptions[roomsField.value].includes(guestsField.value);
}

function roomGuestsInvalidMessage () {
  return `${roomsField.value} не ${guestsField.value}`;
}

function priceInvalidMessage () {
  return `Должно быть от ${MinPrice[typeName.value]} до ${MAX_PRICE}`;
}

pristine.addValidator(guestsField, validateGuests, roomGuestsInvalidMessage);
pristine.addValidator(roomsField, validateGuests, roomGuestsInvalidMessage);
pristine.addValidator(priceField, validatePrice, priceInvalidMessage);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

const checkIn = form.querySelector('#timein');
const checkOut = form.querySelector('#timeout');

checkIn.addEventListener('change', () => {
  checkOut.value = checkIn.value;
});

typeName.addEventListener('change', () => {
  priceField.placeholder = MinPrice[typeName.value];
});


