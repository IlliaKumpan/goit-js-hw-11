import axios from 'axios';

const API_KEY = 'personal_api_key'; 
const BASE_URL = 'https://pixabay.com/api/';

export default async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',      // Тільки фотографії
    orientation: 'horizontal', // Горизонтальна орієнтація
    safesearch: true,          // Фільтр за віком
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    // Повертаємо властивість data, де знаходиться об'єкт із масивом hits
    return response.data; 
  } catch (error) {
    console.error("Помилка при виконанні запиту:", error);
    throw error;
  }
}
