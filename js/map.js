import {activatePage, deactivatePage} from './form.js';
import {createPopup, generatedOffers, offersTemplate} from './offers.js';

deactivatePage();

const map = L.map('map-canvas').setView({
  lat: 35.4200,
  lng: 139.2530
}, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
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
  iconAnchor: [16, 52],
});

const mainMarker = L.marker(
  {
    lat: 35.4200,
    lng: 139.2530
  },
  {
    draggable: true,
    icon: mainPinIcon
  }
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  let lil = evt.target.getLatLng();
  lil += '';
  addressContainer.value = lil.replace(/LatLng/, '');
});

generatedOffers.forEach((generatedOffer) => {
  const offersMarker = L.marker(
    {
      lat: generatedOffer.location.lat,
      lng: generatedOffer.location.lng,
    },
    {
      icon: offersPinIcon
    });

  offersMarker.addTo(map).bindPopup(createPopup(offersTemplate, generatedOffer));
});
