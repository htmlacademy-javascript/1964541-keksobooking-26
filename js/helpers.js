function createOfferImg (src, cord, index) {
  const element = document.createElement('img');
  element.classList.add('.popup__photo');
  element.src = src;
  element.alt = `Фото ${index} объявления ${cord}`;
  element.style.width = '45px';
  element.style.height = '40px';
  return element;
}

const ALERT_SHOW_TIME = 500;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const submitButton = document.querySelector('.ad-form__submit');

function blockSubmitButton() {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
}

function unblockSubmitButton() {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
}

function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

function insertData(offerTemplateElement, offerData, param) {
  if (offerData && param === 'text') {
    offerTemplateElement.textContent = offerData;
  } else if (offerData && param === 'src') {
    offerTemplateElement.src = offerData;
  } else {
    offerTemplateElement.classList.add('hidden');
  }
}

function sendOfferSuccess(message, evt) {
  const successTemplate = document.querySelector('#success').content;
  const successElement = successTemplate.cloneNode(true);
  const successContainer = successElement.querySelector('.success');

  insertData(successElement.querySelector('.success__message'), message, 'text');
  document.querySelector('body').append(successContainer);

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      successContainer.remove();
      unblockSubmitButton();
    }
  });

  successContainer.addEventListener('click', () => {
    successContainer.remove();
    unblockSubmitButton();
  });

  evt.target.reset();
}

const sendOfferError = (message) => {
  const errorTemplate = document.querySelector('#error').content;
  const errorElement = errorTemplate.cloneNode(true);
  const exitButton = errorElement.querySelector('.error__button');
  const errorContainer = errorElement.querySelector('.error');

  insertData(errorElement.querySelector('.error__message'), message, 'text');
  document.querySelector('body').append(errorContainer);

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      errorContainer.remove();
      unblockSubmitButton();
    }
  });

  exitButton.addEventListener('click', () => {
    errorContainer.remove();
    unblockSubmitButton();
  });
};


export {createOfferImg, showAlert, sendOfferError, insertData, blockSubmitButton, sendOfferSuccess};
