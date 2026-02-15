// import axios from "axios";  
import getImagesByQuery from "./js/pixabay-api.js";
import createGallery from "./js/render-functions.js";
import clearGallery from "./js/render-functions.js";
import showLoader from "./js/render-functions.js";
import hideLoader from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";



const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  // Отримання значення через name="search-text" та видалення пробілів
  const query = event.currentTarget.elements['search-text'].value.trim();
  
  // Перевірка вмісту на наявність порожнього рядка
  if (!query) {
    iziToast.warning({ message: "Search field cannot be empty!" });
    return;
  }

  clearGallery(); // Очищення попередніх результатів
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    // Якщо бекенд повернув порожній масив
    if (data.hits.length === 0) {
      iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: 'topRight'
      });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({ message: "Something went wrong. Please try again." });
  } finally {
    hideLoader();
    event.target.reset(); // Очищення форми
  }
});