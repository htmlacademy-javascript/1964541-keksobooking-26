const filterTypeName = document.querySelector('#housing-type');
const filterRooms = document.querySelector('#housing-rooms');
const filterGuests = document.querySelector('#housing-guests');
const filterTypePrice = document.querySelector('#housing-price');
const filterFeaturesAll = document.querySelectorAll('.map__checkbox');

const HIGH_PRICE = 50000;
const MIDDLE_PRICE = 10000;

function getCheckedFeatures() {
  const checkedFeatures = [];
  filterFeaturesAll.forEach((feature) => {
    if (feature.checked) {
      checkedFeatures.push(feature.value);
    }
  });

  return checkedFeatures;
}

function getFeaturesRank(offer) {
  const checkedFeatures = getCheckedFeatures();
  let rank = 0;

  if (offer.offer.features && checkedFeatures) {
    for (let i = 0; i < checkedFeatures.length; i++) {
      if (offer.offer.features.includes(checkedFeatures[i])) {
        rank += 1;
      }
    }
  }

  return rank;
}

const compareOffers = (offerA, offerB) => {
  const rankA = getFeaturesRank(offerA);
  const rankB = getFeaturesRank(offerB);

  return rankB - rankA;
};

function offerFilterPrice(offer) {
  if (filterTypePrice.value === 'any') {
    return true;
  }

  if (filterTypePrice.value === 'middle' && MIDDLE_PRICE < offer.offer.price && offer.offer.price < HIGH_PRICE) {
    return true;
  }

  if (filterTypePrice.value === 'low' && offer.offer.price < MIDDLE_PRICE) {
    return true;
  }

  if (filterTypePrice.value === 'high' && offer.offer.price > HIGH_PRICE) {
    return true;
  }
}

function offerFilterType(offer) {
  return offer.offer.type === filterTypeName.value || filterTypeName.value === 'any';
}

function offerFilterRooms(offer) {
  return offer.offer.rooms.toString() === filterRooms.value || filterRooms.value === 'any';
}

function offerFilterGuests(offer) {
  return offer.offer.guests.toString() === filterGuests.value || filterGuests.value === 'any';
}

function offerFilter(offer) {
  return offerFilterType(offer) && offerFilterGuests(offer) && offerFilterRooms(offer) && offerFilterPrice(offer);
}

export {offerFilter, compareOffers};
