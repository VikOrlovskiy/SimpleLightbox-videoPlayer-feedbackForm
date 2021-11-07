// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const galeryComponentRef = document.querySelector('.gallery');
const addedGalleryCard = galleryCardsCreator(galleryItems);
// ------------------functionCreator---------------------------
function galleryCardsCreator(gallery) {
  return gallery
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
  <a class="gallery__link"  href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
     
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}
galeryComponentRef.insertAdjacentHTML('beforeend', addedGalleryCard);

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {});
