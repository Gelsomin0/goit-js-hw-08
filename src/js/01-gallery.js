// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');

const makeGalleryItemsMarkup = image => {
    const { preview, original, description } = image;
    
    return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}"/>
            </a>
        </li>
    `;
};

const makeGallery = galleryItems.map(makeGalleryItemsMarkup).join('');

galleryListEl.insertAdjacentHTML('beforeend', makeGallery);

const lightbox = new SimpleLightbox('.gallery a',{ captionsData: 'alt', captionDelay: 250} );
