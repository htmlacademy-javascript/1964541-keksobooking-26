const offerPhotoContainer = document.querySelector('#photo-img');
const offerPhotoInput = document.querySelector('#images');
const avatarContainer = document.querySelector('#avatar-img');
const avatarInput = document.querySelector('#avatar');

function addPhotoPreview(photoInput, photoContainer) {
  photoInput.addEventListener('change', () => {
    const [photoFile] = photoInput.files;

    if (photoFile.type.includes('image')) {
      photoContainer.src = URL.createObjectURL(photoFile);
    }

  });
}

addPhotoPreview(avatarInput, avatarContainer);
addPhotoPreview(offerPhotoInput, offerPhotoContainer);
