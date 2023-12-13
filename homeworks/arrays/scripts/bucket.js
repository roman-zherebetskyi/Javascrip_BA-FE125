import shoppingList from "./shoppingList.js";

const bucket = {
  // products: [],
products: [],

  addProduct(product) {
    const index = this.products.findIndex((p) => p.id === product.id);
    if (index === -1) {
      return this.products.push({ ...product, count: 1 });
    }
    this.products[index].count += 1;
  },
};

products[0];

bucket.addProduct(products[0]);
bucket.addProduct(products[0]);
bucket.addProduct(products[1]);
bucket.addProduct(products[1]);

console.table();
