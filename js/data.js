import {shuffleArray, getRandomArrayElement, getRandomInt, getRandomFloat, randomAvatar, getRandomGuest} from './helpers.js';
import {AFTER_COMMA_NUM} from './consts.js';

const CHECK_TIME = [
  '12:00',
  '13:00',
  '14:00'];

const TITLE = [
  'Лучший вариант!',
  'Лучше, чем лучший!',
  'Только с животными!',
  '只为中国人'
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator'
];

const DESCRIPTION = [
  'Уютно, комфортно, тихо. Вам точно понравится у нас)',
  'Громко, холодно, некомфортно. Вам точно понравится цена)',
  'Погоду не выбирают, но место для жилья да, поэтому сделайте верный выбор в нашу пользу'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const MinPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const MIN_LAT = 35.65;
const MAX_LAT = 35.70;
const MIN_LNG = 139.7;
const MAX_LNG = 139.8;
const MIN_ROOMS = 1;
const MAX_ROOMS = 100;
const MAX_PRICE = 100000;
const REQUIRED_OFFER_AMOUNT = 10;
const MIN_FEATURES = 1;
const MIN_PHOTOS = 1;

function createRentOffer() {
  const features = shuffleArray(FEATURES).slice(0, getRandomInt(MIN_FEATURES, FEATURES.length - 1));
  const photos = shuffleArray(PHOTOS).slice(0, getRandomInt(MIN_PHOTOS, PHOTOS.length - 1));
  const checkTime = getRandomArrayElement(CHECK_TIME);
  const rooms = getRandomInt(MIN_ROOMS, MAX_ROOMS);
  const lat = getRandomFloat(MIN_LAT, MAX_LAT, AFTER_COMMA_NUM);
  const lng = getRandomFloat(MIN_LNG, MAX_LNG, AFTER_COMMA_NUM);
  const address = `${lat}, ${lng}`;

  return {
    author: {
      avatar: randomAvatar()
    },
    offer: {
      title: getRandomArrayElement(TITLE),
      address,
      price: getRandomInt(MinPrice[getRandomArrayElement(TYPE)], MAX_PRICE),
      type: getRandomArrayElement(TYPE),
      rooms,
      guest: getRandomGuest(rooms),
      checkIn: checkTime,
      checkOut: checkTime,
      features,
      description: getRandomArrayElement(DESCRIPTION),
      photos
    },
    location: {
      lat,
      lng
    }
  };
}

function crateAvailableOffers() {
  return Array.from({length: REQUIRED_OFFER_AMOUNT}, createRentOffer);
}

export {crateAvailableOffers, MinPrice};
