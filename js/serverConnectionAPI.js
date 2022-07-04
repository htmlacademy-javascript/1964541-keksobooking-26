const SERVER_INPUT_URL = 'https://26.javascript.pages.academy/keksobooking';
const SERVER_DATA_URL = 'https://26.javascript.pages.academy/keksobooking/data';

function getOffersFromServer(onSuccess, onFail) {
  fetch(SERVER_DATA_URL)
    .then((response) => response.json())
    .then(onSuccess)
    .catch(() => {
      onFail('Не удалось отправить форму');
    });
}

function sendOfferToServer(onSuccess, onFail, data) {
  return fetch(SERVER_INPUT_URL, {
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
