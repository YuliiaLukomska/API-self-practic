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

export { createProductsMarkup };
