import {crateAvailableOffers} from './data.js';
import {createOfferImg} from './helpers.js';

const generatedOffers = crateAvailableOffers();
const offersTemplate = document.querySelector('#card').content.querySelector('.popup');
const map = document.querySelector('#map-canvas');
const offersListFragment = document.createDocumentFragment();
const RusType = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  hotel: 'Отель',
  house: 'Дом',
  palace: 'Дворец'
};

generatedOffers.forEach((generatedOffer) => {
  const offerElement = offersTemplate.cloneNode(true);
  offerElement.querySelector('.popup__text--price').textContent = `${generatedOffer.offer.price}₽/ночь`;
  offerElement.querySelector('.popup__avatar').src = generatedOffer.author.avatar;
  offerElement.querySelector('.popup__title').textContent = generatedOffer.offer.title;
  offerElement.querySelector('.popup__text--address').textContent = generatedOffer.offer.address;
  offerElement.querySelector('.popup__text--capacity').textContent = `${generatedOffer.offer.rooms} комнаты для ${generatedOffer.offer.guest} гостей`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${generatedOffer.offer.checkIn}, выезд до ${generatedOffer.offer.checkOut}`;
  offerElement.querySelector('.popup__description').textContent = generatedOffer.offer.description;
  offerElement.querySelector('.popup__type').textContent = RusType[generatedOffer.offer.type];
  const photoContainer = offerElement.querySelector('.popup__photos');
  generatedOffer.offer.photos.forEach((photo, index) => {
    photoContainer.append(createOfferImg(photo, index, generatedOffer.offer.address));
  });
  const featuresList = offerElement.querySelectorAll('.popup__feature');
  featuresList.forEach((featuresListItem) => {
    const isNecessary = generatedOffer.offer.features.some((feature) => featuresListItem.classList.contains(`popup__feature--${feature}`));
    if (!isNecessary) {
      featuresListItem.remove();
    }
  });
  offersListFragment.append(offerElement);
});

map.append(offersListFragment);
