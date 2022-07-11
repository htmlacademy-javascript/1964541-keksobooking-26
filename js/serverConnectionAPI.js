const SERVER_URL = 'https://26.javascript.pages.academy/keksobooking/';

function getOffersFromServer(onSuccess, onFail) {
  fetch(`${SERVER_URL  }data`)
    .then((response) => response.json())
    .then(onSuccess)
    .catch(() => {
      onFail('Не удалось загрузить объявления');
    });
}

function sendOfferToServer(onSuccess, onFail, data) {
  return fetch(SERVER_URL, {
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
