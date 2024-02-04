import { getAllProducts } from './getAllProducts';
import { refs } from './refs';
import { createProductsMarkup } from './MarkupCreation';

export async function getData() {
  try {
    const data = await getAllProducts();
    refs.allProductsRef.innerHTML = createProductsMarkup(data.products);
  } catch (error) {
    console.log(error);
  }
}
