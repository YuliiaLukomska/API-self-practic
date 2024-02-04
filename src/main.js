// 1.Створити функцію, при виклику якої буде робитись запит
// на всі продукти і по результату запиту буде рендеритись розмітка.

import { instanceAPI } from './js/APIinstance';
import { refs } from './js/refs';

async function getAllProducts() {
  const response = await instanceAPI.get('/products');
  return response.data;
}

async function getData() {
  try {
    const data = await getAllProducts();
    refs.allProductsRef.innerHTML = createProductsMarkup(data.products);
  } catch (error) {
    console.log(error);
  }
}

getData();

function createProductsMarkup(products) {
  const markup = products
    .map(
      ({ title, description, price }) =>
        `<li><h3>${title}</h3>
      <p>${description}</p>
      <p>${price}</p></li>`
    )
    .join('');
  return markup;
}
