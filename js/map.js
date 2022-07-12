import {activatePage, deactivatePage} from './form.js';
import {createPopup} from './offers.js';
import {AFTER_COMMA_NUM} from './consts.js';
import {getOffersFromServer} from './serverConnectionAPI.js';
import {showAlert, debounce} from './helpers.js';
import {offerFilter} from './filter.js';

deactivatePage();

const MAP_ZOOM = 9;
const OFFER_MAX_COUNT = 10;
const RERENDER_DELAY = 500;
const MAP_PICTURE_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const DEFAULT_LOCATION = {
  lat: 35.74375,
  lng: 139.77755
};
const filterForm = document.querySelector('.map__filters');

const map = L.map('map-canvas').setView(DEFAULT_LOCATION, MAP_ZOOM);

L.tileLayer(
  MAP_PICTURE_URL,
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },).addTo(map);

if (map) {
  activatePage();
}

const addressContainer = document.querySelector('#address');

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const offersPinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [42, 42],
  iconAnchor: [21, 52],
});

const mainMarker = L.marker(
  DEFAULT_LOCATION,
  {
    draggable: true,
    icon: mainPinIcon
  }
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  const {lat, lng} = evt.target.getLatLng();
  addressContainer.value = `${lat.toFixed(AFTER_COMMA_NUM)},${lng.toFixed(AFTER_COMMA_NUM)}`;
});

let allMarkersGroup = L.layerGroup().addTo(map);

function reloadMapMarkers () {
  allMarkersGroup.remove();
  allMarkersGroup = L.layerGroup().addTo(map);
}

const createMarkers = (offers) => {
  reloadMapMarkers();
  offers
    .slice()
    .filter(offerFilter)
    .slice(0, OFFER_MAX_COUNT)
    .forEach((offer) => {
      const offersMarker = L.marker(
        {
          lat: offer.location.lat,
          lng: offer.location.lng,
        },
        {
          icon: offersPinIcon
        });
      offersMarker.addTo(allMarkersGroup).bindPopup(createPopup(offer));
    });
  map.closePopup();
};

function renderOffersOnMap() {
  getOffersFromServer(createMarkers, showAlert);
  filterForm.addEventListener('change', () => {
    getOffersFromServer(debounce(createMarkers, RERENDER_DELAY), showAlert);
  });
}

renderOffersOnMap();

