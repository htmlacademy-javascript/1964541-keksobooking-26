function getRandomInt(firstNum, secondNum) {
  return Math.abs(Math.floor(Math.random() * (secondNum - firstNum + 1)) + firstNum);
}

function getRandomFloat(firstNum, secondNum, afterCommaNum) {
  return firstNum === secondNum ? firstNum : Math.abs(((Math.random() * (firstNum - secondNum + 1) + secondNum).toFixed(afterCommaNum)));
}

function shuffleArray(array) { //"Тасование Фишера - Йетса (стырил)"
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function randomAvatar(randomInt) {
  randomInt = getRandomInt(1, 10);
  return randomInt === 10 ? 'img/avatars/user10.png' : `img/avatars/user0${randomInt}.png`;
}

function getRandomGuest(room) {
  switch (room) {
    case 1:
      return 1;
    case 2:
      return getRandomInt(1, 2);
    case 3:
      return getRandomInt(1, 3);
    case 100:
      return 'не для гостей';
    default: //решил что максимум гостей будет 10)
      return getRandomInt(1, 10);
  }
}

function getRandomArrayElement (array) {
  return array[getRandomInt(0, array.length - 1)];
}


getRandomInt(2, 3);
getRandomFloat(0.5, 4.3, 2);

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
}

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

createRentOffer();
