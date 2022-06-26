import {createOfferImg} from './helpers.js';

const RusType = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  hotel: 'Отель',
  house: 'Дом',
  palace: 'Дворец'
};

function insertData(offerTemplateElement, offerData, param) {
  if (offerData && param === 'text') {
    offerTemplateElement.textContent = offerData;
  } else if (offerData && param === 'src') {
    offerTemplateElement.src = offerData;
  } else {
    offerTemplateElement.classList.add('hidden');
  }
}

function createPopup(offerFromServer) {
  const offersTemplate = document.querySelector('#card').content.querySelector('.popup');
  const offerElement = offersTemplate.cloneNode(true);

  insertData(offerElement.querySelector('.popup__text--price'), `${offerFromServer.offer.price}₽/ночь`, 'text');
  insertData(offerElement.querySelector('.popup__avatar'), offerFromServer.author.avatar, 'src');
  insertData(offerElement.querySelector('.popup__title'), offerFromServer.offer.title, 'text');
  insertData(offerElement.querySelector('.popup__text--address'), offerFromServer.offer.address, 'text');
  insertData(offerElement.querySelector('.popup__text--capacity'), `${offerFromServer.offer.rooms} комнаты для ${offerFromServer.offer.guest} гостей`, 'text');
  insertData(offerElement.querySelector('.popup__text--time'), `Заезд после ${offerFromServer.offer.checkIn}, выезд до ${offerFromServer.offer.checkOut}`, 'text');
  insertData(offerElement.querySelector('.popup__description'), offerFromServer.offer.description, 'text');
  insertData(offerElement.querySelector('.popup__type'), RusType[offerFromServer.offer.type], 'text');

  if (offerFromServer.offer.photos) {
    const photoContainer = offerElement.querySelector('.popup__photos');
    offerFromServer.offer.photos.forEach((photo, index) => {
      photoContainer.append(createOfferImg(photo, index, offerFromServer.offer.address));
    });
  }

  const featuresList = offerElement.querySelectorAll('.popup__feature');
  if (offerFromServer.offer.features) {
    featuresList.forEach((featuresListItem) => {
      const isNecessary = offerFromServer.offer.features.some((feature) => featuresListItem.classList.contains(`popup__feature--${feature}`));
      if (!isNecessary) {
        featuresListItem.remove();
      }
    });
  } else {
    featuresList.forEach((featuresListItem) => {
      featuresListItem.remove();
    });
  }

  return offerElement;
}

export {createPopup};
