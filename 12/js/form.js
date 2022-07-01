function deactivatePage () {
  document.querySelector('.ad-form').classList.add('ad-form--disabled');
  document.querySelector('.map__filters').classList.add('map__filters--disabled');
  document.querySelector('.map__canvas').classList.add('map__canvas--disabled');
  const formTags = document.querySelectorAll('.ad-form');
  const mapTags = document.querySelectorAll('.map__filters');
  formTags.forEach((formTag) => {
    formTag.setAttribute('disabled', 'disabled');
  });
  mapTags.forEach((mapTag) => {
    mapTag.setAttribute('disabled', 'disabled');
  });
}

function activatePage() {
  document.querySelector('.ad-form').classList.remove('ad-form--disabled');
  document.querySelector('.map__filters').classList.remove('map__filters--disabled');
  const formTags = document.querySelectorAll('.ad-form');
  const mapTags = document.querySelectorAll('.map__filters');
  formTags.forEach((formTag) => {
    formTag.removeAttribute('disabled');
  });
  mapTags.forEach((mapTag) => {
    mapTag.removeAttribute('disabled');
  });
}

export {deactivatePage, activatePage};
