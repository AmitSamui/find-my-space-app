import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com/', // Replace this with your API base URL
});

export default api;