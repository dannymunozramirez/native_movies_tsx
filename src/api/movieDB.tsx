import axios from 'axios';

const movieDB = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'd21e5cb3519255cccf25a1a62f1ff578',
    language: 'en-En',
  },
});

export default movieDB;