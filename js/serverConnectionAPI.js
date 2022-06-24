function getOffersFromServer (onSuccesses) {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((serverOffers) => {
      onSuccesses(serverOffers);
    });
}

export {getOffersFromServer};
