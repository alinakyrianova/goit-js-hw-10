import axios from "axios";

const apiKey = "live_vpLULQWRvirYQxTe77wtLELuToBf87tOzzfhFU3CUXq9lYyBLrn6APSndDKYF9sx";

axios.defaults.headers.common["x-api-key"] = apiKey;

const API_URL = "https://api.thecatapi.com/v1";

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${API_URL}/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      console.error("Помилка при отриманні інформації про кота:", error);
      throw error;
    });
}

export function fetchBreeds() {
  
  document.body.classList.add('show-loader');

  return axios
    .get(`${API_URL}/breeds`)
    .then(response => {
      
      document.body.classList.remove('show-loader');
      return response.data;
    })
    .catch(error => {
      console.error("Помилка при отриманні колекції порід:", error);
      
      document.body.classList.remove('show-loader');
      throw error;
    });
}




