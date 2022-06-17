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

function createOfferImg (src, cord, index) {
  const element = document.createElement('img');
  element.classList.add('.popup__photo');
  element.src = src;
  element.alt = `Фото ${index} объявления ${cord}`;
  element.style.width = '45px';
  element.style.height = '40px';
  return element;
}

export {shuffleArray, getRandomArrayElement, getRandomInt, getRandomFloat, randomAvatar, getRandomGuest, createOfferImg};
