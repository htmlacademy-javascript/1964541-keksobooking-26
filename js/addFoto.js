const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const offerFotoContainer = document.querySelector('#photo-img');
const offerFotoInput = document.querySelector('#images');
const avatarContainer = document.querySelector('#avatar-img');
const avatarInput = document.querySelector('#avatar');

function addPhotoPrewiew(photoInput, photoContainer, fileTypes) {
  photoInput.addEventListener('change', () => {
    const photoFile = photoInput.files[0];
    const photoFileName = photoFile.name.toLowerCase();

    const isPhotoFile = fileTypes.some((item) => photoFileName.endsWith(item));

    if(isPhotoFile) {
      photoContainer.src = URL.createObjectURL(photoFile);
    }
  });
}
addPhotoPrewiew(avatarInput,avatarContainer, FILE_TYPES);
addPhotoPrewiew(offerFotoInput, offerFotoContainer, FILE_TYPES);
