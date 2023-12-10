import products from './products.js'

const bucket = {
  products: [],

  addProduct(product) {

    const index = this.products.findIndex(p => p.id === product.id)

    this.products.push({...product, count: 1})
  }
}

console.log(products[0])

bucket.addProduct(products[0])