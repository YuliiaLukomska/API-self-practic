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

function createMarkupById({ title, description, price }) {
  return `<li><h3>${title}</h3>
      <p>${description}</p>
      <p>${price}</p></li>`;
}

export { createProductsMarkup, createMarkupById };
