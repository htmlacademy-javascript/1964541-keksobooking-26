const filterTypeName = document.querySelector('#housing-type');
const filterRooms = document.querySelector('#housing-rooms');
const filterGuests = document.querySelector('#housing-guests');
const filterTypePrice = document.querySelector('#housing-price');
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

function contains(where, what){ //по идее эта функция проверяет наличие массива выбранных фич в массиве фич объявления
  for(let i=0; i<what.length; i++){
    if(where.indexOf(what[i]) === -1) {
      return false;
    }
  }
  return true;
}

function offerFilterFeatures(offer) {
  const checkedFeatures = getCheckedFeatures();
  if (checkedFeatures.length === 0) {
    return true;
  }
  contains(offer.offer.features, checkedFeatures);
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
