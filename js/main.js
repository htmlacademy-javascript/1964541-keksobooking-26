function getRandomInt(firstNum, secondNum) {
  return Math.abs(Math.floor(Math.random() * (secondNum - firstNum + 1)) + firstNum);
}

function getRandomFloat(firstNum, secondNum, afterCommaNum) {
  return firstNum === secondNum ? firstNum : Math.abs(((Math.random() * (firstNum - secondNum + 1) + secondNum).toFixed(afterCommaNum)));
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


const createOffer = () => {
  const randomCheckTimeIndex = getRandomInt(0, CHECK_TIME.length - 1);
  const randomTitleIndex = getRandomInt(0, TITLE.length - 1);
  const randomTypeIndex = getRandomInt(0, TYPE.length - 1);
  const randomDescripIndex = getRandomInt(0, DESCRIPTION.length - 1);
  const randomAvatar = () => {
    let randomInt = getRandomInt(1, 10);
    return randomInt === 10 ? 'img/avatars/user10.png' : 'img/avatars/user0' + randomInt + '.png';
  };
  const randomLat = getRandomFloat(35.65, 35.70, 5);
  const randomLng = getRandomFloat(139.7, 139.8, 5);

  const author = {
    avatar: randomAvatar()
  };

  const location = {
    lat: randomLat,
    lng: randomLng
  };

  const offer = {
    title: TITLE[randomTitleIndex],
    address: location.lat + ', ' + location.lng + '',
    price: getRandomInt(1, 500000),
    type: TYPE[randomTypeIndex],
    rooms: getRandomInt(1, 5),
    guest: getRandomInt(1, 10),
    checkIn: CHECK_TIME[randomCheckTimeIndex],
    checkOut: CHECK_TIME[randomCheckTimeIndex],
    description: DESCRIPTION[randomDescripIndex]
  };


  return {
    author: author,
    offer: offer,
    location: location
  };
};

console.log(createOffer());
