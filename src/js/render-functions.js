import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"; 

const galleryElement = document.querySelector('.gallery');
const loader = document.querySelector('.loader');


let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  // Розмітка картки згідно з вимогами (webformatURL, largeImageURL, tags, likes і т.д.)
  const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${likes}</p>
          <p class="info-item"><b>Views</b> ${views}</p>
          <p class="info-item"><b>Comments</b> ${comments}</p>
          <p class="info-item"><b>Downloads</b> ${downloads}</p>
        </div>
      </li>`;
  }).join('');

  galleryElement.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryElement.innerHTML = ''; 
}

export function showLoader() {
  if (loader) {
    loader.classList.add('is-open'); // Додаємо клас для відображення
  }
}

export function hideLoader() {
  if (loader) {
    loader.classList.remove('is-open'); // Видаляємо клас після завершення
  }
}