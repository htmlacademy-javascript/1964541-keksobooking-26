const filterTypeName = document.querySelector('#housing-type');
const filterRooms = document.querySelector('#housing-rooms');
const filterGuests = document.querySelector('#housing-guests');

function offerFilterType (offer) {
  if (offer.offer.type === filterTypeName.value || filterTypeName.value === 'any') {
    if (offer.offer.rooms.toString() === filterRooms.value || filterRooms.value === 'any') {
      if (offer.offer.guests.toString() === filterGuests.value || filterGuests.value === 'any') {
        return true;
      }
    }
  }
}

export {offerFilterType};
