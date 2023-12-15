import shoppingList from './scripts/shoppingList.js';
// import {} from "./scripts/bucket.js"

// * Мінімум

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту,
//  кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

// * Норма

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом,
//  необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума,
//  наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

// * Максимум

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
// Підрахунок суми всіх (не) придбаних продуктів.
// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

function sortProductsByBougth(productsList) {
  return productsList.sort((a, b) => a.bought - b.bought);
}

function setProductsAsBougth(productsList, productName) {
  return productsList.forEach((product) => {
    if (product.name === productName) {
      product.bought = true;
      product.sum = product.quantity * product.price;
    }

    if (productName === 'all') {
      product.bought = true;
      product.sum = product.quantity * product.price;
    }

    return product;
  });
}

function deleteProduct(productsList, productName) {
  const index = productsList.findIndex(
    (product) => product.name === productName
  );
  return productsList.splice(index, index);

  //to create a new productsList we can use filter method:
  // return productsList.filter(product => product.name !== productName);
}

function addProduct(
  productsList,
  productName,
  quantity = 1,
  price = +(Math.random() * 10).toFixed(2)
) {
  if (productsList.some((product) => product.name === productName)) {
    const index = productsList.findIndex(
      (product) => product.name === productName
    );

    productsList[index].quantity += 1;

    if (productsList[index].bought) {
      productsList[index].sum += productsList[index].price;
    }
  } else {
    productsList.push({
      id: productsList.length + 1,
      name: productName,
      quantity: quantity < 1 ? 1 : quantity,
      bought: false,
      price: price,
      sum: 0,
    });
  }
}

function sumAllProducts(productsList) {
  return console.log(
    'Sum of all products is: ' +
      productsList.reduce((acc, product) => {
        return (acc += product.price * product.quantity);
      }, 0)
  );
}

function sumNotBoughtProducts(productsList) {
  const result = productsList
    .filter((product) => !product.bought)
    .reduce((acc, product) => {
      return (acc += product.price * product.quantity);
    }, 0);

  return result === 0
    ? console.log('You bought all of products!')
    : console.log('Sum of unbought products is: ' + result);
}

function sortProductsByPrice(productsList, value) {
  productsList.sort((a, b) => {
    switch (value) {
      case 'expensive': {
        return a.price - b.price;
      }

      case 'cheep': {
        return b.price - a.price;
      }

      default: {
        return a.price - b.price;
      }
    }
  });
}

class SortProducts {
  constructor(productsList) {
    this.productsList = productsList;
  }

  byPrice(value) {
    this.productsList.sort((a, b) => {
      switch (value) {
        case 'expensive': {
          return b.price - a.price;
        }
  
        case 'cheep': {
          return a.price - b.price;
        }
  
        default: {
          return a.price - b.price;
        }
      }
    });
  };

  byName() {
    this.productsList.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }

  bySum(value) {
    this.productsList.sort((a, b) => {
      switch (value) {
        case 'expensive': {
          return b.sum - a.sum;
        }
  
        case 'cheep': {
          return a.sum - b.sum;
        }
  
        default: {
          return a.sum - b.sum;
        }
      }
    });
  };

  byBought() {
    return this.productsList.sort((a, b) => a.bought - b.bought);
  }
};

addProduct(shoppingList, 'orange', 2, 2.56);
setProductsAsBougth(shoppingList, 'orange');
deleteProduct(shoppingList, 'butter');
addProduct(shoppingList, 'eggs', 20, 6.5);
setProductsAsBougth(shoppingList, 'eggs');
sumAllProducts(shoppingList);
sumNotBoughtProducts(shoppingList);
setProductsAsBougth(shoppingList, 'all');
// sortProductsByBougth(shoppingList);
// sortProductsByPrice(shoppingList);

new SortProducts(shoppingList).byPrice('expensive')
new SortProducts(shoppingList).byName()
new SortProducts(shoppingList).bySum('cheep')

console.table(shoppingList);
