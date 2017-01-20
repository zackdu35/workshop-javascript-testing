
let summarizeBasket = (prices, products) => {

  let price = 0;
  let countProducts = 0;
  let countArticles = 0;

  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    countArticles++;
    countProducts++;
    price += prices[product];
  }

  return {
    price: price,
    countArticles: countArticles,
    countProducts: countProducts
  }
}

module.exports = {
  summarizeBasket: summarizeBasket
};