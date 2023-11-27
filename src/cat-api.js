import axios from 'axios';
const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = (axios.defaults.headers.common['x-api-key'] =
  'live_hqwIAfg7aqbExcXrVVYJ1UzmF6q66TxWTkRlvqdDSxdc2JFpCJ9O8jJc14Olw8b5');

function fetchBreeds() {
  return axios
    .get(`${BASE_URL}/breeds?api_key=${API_KEY}`)
    .then(({ data }) => data);
}
function fetchCatByBreed(breedId) {
  return axios
    .get(`${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`)
    .then(({ data }) => data);
}
export { fetchBreeds, fetchCatByBreed };
