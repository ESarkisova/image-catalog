import axios from 'axios';

const API_KEY = 'dc6zaTOxFJmzC';
const URL = 'https://api.giphy.com/v1/gifs/random';

export const getImageApi = (tag) => {
     return axios.get(`${URL}?api_key=${API_KEY}&tag=${tag}`)
            .then(response => response.data);
};