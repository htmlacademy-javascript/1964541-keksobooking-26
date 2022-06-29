function getOffersFromServer(onSuccess, onFail) {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((serverOffers) => {
      onSuccess(serverOffers);
    })
    .catch(() => {
      onFail('Не удалось отправить форму');
    });
}

function sendOfferToServer(onSuccess, onFail, data) {
  fetch('https://26.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: data
  })
    .then((response) => {
      if (response.ok) {
        onSuccess('Объявление добавлено');
      } else {
        onFail('Не удалось отправить форму, попробуйте еще раз');
      }
    }).catch(() => {
      onFail('Не удалось отправить форму');
    });
}


export {getOffersFromServer, sendOfferToServer};
