import axios from 'axios';

const getJoke = () => new Promise((resolve, reject) => {
  axios.get('https://official-joke-api.appspot.com/random_joke').then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

export default { getJoke };
