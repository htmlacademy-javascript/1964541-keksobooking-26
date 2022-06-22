import {crateAvailableOffers} from './data.js';
import {createOfferImg} from './helpers.js';

const RusType = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  hotel: 'Отель',
  house: 'Дом',
  palace: 'Дворец'
};

const generatedOffers = crateAvailableOffers();
const offersTemplate = document.querySelector('#card').content.querySelector('.popup');
const offersListFragment = document.createDocumentFragment();

function insertData(offerTemplateElement, offerData, param) {
  if (offerData && param === 'text') {
    offerTemplateElement.textContent = offerData;
  } else if (offerData && param === 'src') {
    offerTemplateElement.src = offerData;
  } else {
    offerTemplateElement.classList.add('hidden');
  }
}

function createPopup(template, generatedOffer) {

  const offerElement = offersTemplate.cloneNode(true);

  insertData(offerElement.querySelector('.popup__text--price'), `${generatedOffer.offer.price}₽/ночь`, 'text');
  insertData(offerElement.querySelector('.popup__avatar'), generatedOffer.author.avatar, 'src');
  insertData(offerElement.querySelector('.popup__title'), generatedOffer.offer.title, 'text');
  insertData(offerElement.querySelector('.popup__text--address'), generatedOffer.offer.address, 'text');
  insertData(offerElement.querySelector('.popup__text--capacity'), `${generatedOffer.offer.rooms} комнаты для ${generatedOffer.offer.guest} гостей`, 'text');
  insertData(offerElement.querySelector('.popup__text--time'), `Заезд после ${generatedOffer.offer.checkIn}, выезд до ${generatedOffer.offer.checkOut}`, 'text');
  insertData(offerElement.querySelector('.popup__description'), generatedOffer.offer.description, 'text');
  insertData(offerElement.querySelector('.popup__type'), RusType[generatedOffer.offer.type], 'text');

  if (generatedOffer.offer.photos) {
    const photoContainer = offerElement.querySelector('.popup__photos');
    generatedOffer.offer.photos.forEach((photo, index) => {
      photoContainer.append(createOfferImg(photo, index, generatedOffer.offer.address));
    });
  }

  const featuresList = offerElement.querySelectorAll('.popup__feature');
  if (generatedOffer.offer.features) {
    featuresList.forEach((featuresListItem) => {
      const isNecessary = generatedOffer.offer.features.some((feature) => featuresListItem.classList.contains(`popup__feature--${feature}`));
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

generatedOffers.forEach((generatedOffer) => {
  const popup = createPopup(offersTemplate, generatedOffer);
  offersListFragment.append(popup);
});

export {createPopup, generatedOffers, offersTemplate};
