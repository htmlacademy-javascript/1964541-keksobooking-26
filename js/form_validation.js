const form = document.querySelector('.ad-form');

const GuestRoomsOptions = {
  '1 комната': ['для 1 гостя'],
  '2 комнаты': ['для 1 гостя', 'для 2 гостей'],
  '3 комнаты': ['для 1 гостя', 'для 2 гостей', 'для 3 гостей'],
  '100 комнат': ['не для гостей']
};

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element'
});

const guestsField = form.querySelector('[name="capacity"]');
const roomsField = form.querySelector('[name="rooms"]');

function validateGuests() {
  return GuestRoomsOptions[roomsField.value].includes(guestsField.value);
}

function roomGuestsInvalidMessage () {
  return `${roomsField.value} не ${guestsField.value}`;
}

pristine.addValidator(guestsField, validateGuests, roomGuestsInvalidMessage);
pristine.addValidator(roomsField, validateGuests, roomGuestsInvalidMessage);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Forma VALIDNA');
  } else {
    console.log('Forma NE validna');
  }
});
