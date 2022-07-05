const filterTypeName = document.querySelector('#housing-type');
const filterRooms = document.querySelector('#housing-rooms');
const filterGuests = document.querySelector('#housing-guests');
const filterTypePrice = document.querySelector('#housing-price');
const filterFeatures = document.querySelector('#housing-features');
const filterFeaturesAll = document.querySelectorAll('.map__checkbox');

function getCheckedFeatures() {
  const checkedFeatures = [];
  filterFeaturesAll.forEach((feature) => {
    if (feature.checked) {
      checkedFeatures.push(feature.value);
    }
  });
  return checkedFeatures;
}


function offerFilterFeatures(offer) {
  const checkedFeatures = getCheckedFeatures();
  if (checkedFeatures.length === 0) {
    return true;
  }
  console.log(offer);
  return offer.offer.features.includes(checkedFeatures);
}


function offerFilterPrice(offer) {
  if (filterTypePrice.value === 'any') {
    return true;
  }
  if (filterTypePrice.value === 'middle' && 10000 < offer.offer.price && offer.offer.price < 50000) {
    return true;
  }
  if (filterTypePrice.value === 'low' && offer.offer.price < 10000) {
    return true;
  }
  if (filterTypePrice.value === 'high' && offer.offer.price > 50000) {
    return true;
  }
}

function offerFilterType(offer) {
  if (offer.offer.type === filterTypeName.value || filterTypeName.value === 'any') {
    return true;
  }
}

function offerFilterRooms(offer) {
  if (offer.offer.rooms.toString() === filterRooms.value || filterRooms.value === 'any') {
    return true;
  }
}

function offerFilterGuests(offer) {
  if (offer.offer.guests.toString() === filterGuests.value || filterGuests.value === 'any') {
    return true;
  }
}

function offerFilter(offer) {
  if (offerFilterType(offer) && offerFilterGuests(offer) && offerFilterRooms(offer) && offerFilterPrice(offer) && offerFilterFeatures(offer)) {
    return true;
  }
}

export {offerFilter, getCheckedFeatures};
