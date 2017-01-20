
let summarizeBasket = (prices, products) => {
  if(!products || !products.length) {
    return {
      price: 0,
      countArticles: 0,
      countProducts: 0
    };
  } else if (products.length === 1) {
    let product = products[0];
    let price = prices[product];
    return {
      price: price,
      countArticles: 1,
      countProducts: 1
    };
  } else {
    return 'TO BE CONTINUED';
  }
}

module.exports = {
  summarizeBasket: summarizeBasket
};