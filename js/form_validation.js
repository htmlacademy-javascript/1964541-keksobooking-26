import {MinPrice} from './data.js';

const GuestRoomsOptions = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

const GuestCount = {
  '1': 'для 1 гостя',
  '2': 'для 2 гостей',
  '3': 'для 3 гостей',
  '0': 'не для гостей'
};

const RoomCount = {
  '1': '1 комната',
  '2': '2 комнаты',
  '3': '3 комнаты',
  '100': '100 комнат'
};
const MAX_PRICE = 100000;

const form = document.querySelector('.ad-form');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'validation__error',
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
  return `${RoomCount[roomsField.value]} не ${GuestCount[guestsField.value]}`;
}

function priceInvalidMessage () {
  return `Должно быть от ${MinPrice[typeName.value]} до ${MAX_PRICE}`;
}

pristine.addValidator(guestsField, validateGuests, roomGuestsInvalidMessage);
pristine.addValidator(roomsField, validateGuests, roomGuestsInvalidMessage);
pristine.addValidator(priceField, validatePrice, priceInvalidMessage);

roomsField.addEventListener('change', () => {
  pristine.validate(guestsField);
});

guestsField.addEventListener('change', () => {
  pristine.validate(roomsField);
});

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


