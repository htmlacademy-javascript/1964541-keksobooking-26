import {shuffleArray, getRandomArrayElement, getRandomInt, getRandomFloat, randomAvatar, getRandomGuest} from './helpers.js';

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

const minPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

function createRentOffer() {
  const features = shuffleArray(FEATURES).slice(0, getRandomInt(1, FEATURES.length - 1));
  const photos = shuffleArray(PHOTOS).slice(0, getRandomInt(1, PHOTOS.length - 1));
  const checkTime = getRandomArrayElement(CHECK_TIME);
  const rooms = getRandomInt(1, 100);
  const lat = getRandomFloat(35.65, 35.70, 5);
  const lng = getRandomFloat(139.7, 139.8, 5);

  return {
    author: {
      avatar: randomAvatar()
    },
    offer: {
      title: getRandomArrayElement(TITLE),
      address: `${lat}, ${lng}`,
      price: getRandomInt(minPrice[getRandomArrayElement(TYPE)], 100000),
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
  return Array.from({length: 10}, createRentOffer);
}

export {crateAvailableOffers};
