// 1.Створити функцію, при виклику якої буде робитись запит на всі продукти і по результату запиту буде рендеритись розмітка.
// 2. При сабміті форми робиться розмітка одного продукту по id.
// 3. За даними, які будуть введені в форму, створити новий продукт (метод post) і відрендирити його (розмітка).
// 4.Видаліть продукт за його ID. Якщо успішно, виведіть через alert SUCCESS та інфо про
// видалений продукт, інакше виведіть ERROR та причину помилки.

import { instanceAPI } from './js/APIinstance';
import { refs } from './js/refs';
import { createProductsMarkup, createMarkupById } from './js/MarkupCreation';
import { getAllProducts } from './js/getAllProducts';
import { getData } from './js/AllProductGetting';

// getData();

// Завдання 2
refs.singleProductForm.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();
  const inputValue = event.currentTarget.elements.id.value.trim();
  try {
    const result = await getById(inputValue);
    refs.singleProductDiv.innerHTML = createMarkupById(result);
  } catch (error) {
    console.log(error);
  }
}

async function getById(inputValue) {
  const response = await instanceAPI.get(`/products/${inputValue}`);
  return response.data;
}
//
// Завдання 3

refs.newProductSingleForm.addEventListener('submit', onFormSubmitForNewProduct);

async function onFormSubmitForNewProduct(event) {
  event.preventDefault();
  const data = {};
  new FormData(event.currentTarget).forEach((value, key) => {
    data[key] = value;
  });
  try {
    const result = await postData(data);
    refs.newProductSection.innerHTML = createMarkupById(result);
  } catch (error) {
    console.log(error);
  }
}

async function postData(data) {
  const response = await instanceAPI.post('/products/add', data);
  return response.data;
}
// Завдання 4

refs.deletionProductForm.addEventListener('submit', onDeletionFormSubmit);

async function onDeletionFormSubmit(event) {
  event.preventDefault();
  const deletionId = event.currentTarget.elements.deletionId.value.trim();
  try {
    const result = await deletionProductById(deletionId);

    if (result.isDeleted) {
      alert(`Success, product ${result.title} was deleted`);
    }
  } catch (error) {
    alert(`There are not a product with this ID. ${error}`);
  }
}

async function deletionProductById(deletionId) {
  try {
    const response = await instanceAPI.delete(`/products/${deletionId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
