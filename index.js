
let getUnique = (array) => {
  let newArray = [];
  let checker = {};
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if(!checker[item]) {
      checker[item] = true;
      newArray.push(item);
    }
  }

  return newArray;
}

let summarizeBasket = (prices, products) => {

  let price = 0;

  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    price += prices[product];
  }

  return {
    price: price,
    countArticles: products.length,
    countProducts: getUnique(products).length
  }
}

module.exports = {
  summarizeBasket: summarizeBasket,
  getUnique: getUnique
};