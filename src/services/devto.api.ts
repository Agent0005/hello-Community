import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rohitadhikari.com.np/wp-json/wp/v2/',
});
