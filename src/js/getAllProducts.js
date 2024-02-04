import { instanceAPI } from './APIinstance';

async function getAllProducts() {
  const response = await instanceAPI.get('/products');
  return response.data;
}

export { getAllProducts };
