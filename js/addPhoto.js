const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const offerPhotoContainer = document.querySelector('#photo-img');
const offerPhotoInput = document.querySelector('#images');
const avatarContainer = document.querySelector('#avatar-img');
const avatarInput = document.querySelector('#avatar');

function addPhotoPreview(photoInput, photoContainer, fileTypes) {
  photoInput.addEventListener('change', () => {
    const photoFile = photoInput.files[0];
    const photoFileName = photoFile.name.toLowerCase();

    const isPhotoFile = fileTypes.some((item) => photoFileName.endsWith(item));

    if(isPhotoFile) {
      photoContainer.src = URL.createObjectURL(photoFile);
    }
  });
}

addPhotoPreview(avatarInput,avatarContainer, FILE_TYPES);
addPhotoPreview(offerPhotoInput, offerPhotoContainer, FILE_TYPES);
