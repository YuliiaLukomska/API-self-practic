import axios from 'axios';
// задаємо по дефолту базове URL(див.документацію axios)
export const instanceAPI = axios.create({
  baseURL: 'https://dummyjson.com',
});
