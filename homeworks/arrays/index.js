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

function sortProductsByBougth(array) {
  return array.sort((a, b) => {
    if (a.bought > b.bought) return 1;
    if (a.bought < b.bought) return -1;
    return 0;
  });
}

function setProductsAsBougth(array, productName) {
  return array.forEach((product) => {
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

function deleteProduct(array, productName) {
  const index = array.findIndex((product) => product.name === productName);
  return array.splice(index, index);

  //to create a new array we can use filter method:
  // return array.filter(product => product.name !== productName);
}

function addProduct(
  array,
  productName,
  quantity = 1,
  price = +(Math.random() * 10).toFixed(2)
) {
  if (array.some((product) => product.name === productName)) {
    const index = array.findIndex((product) => product.name === productName);

    array[index].quantity += 1;

    if (array[index].bought) {
      array[index].sum += array[index].price;
    }
  } else {
    array.push({
      id: array.length + 1,
      name: productName,
      quantity: quantity < 1 ? 1 : quantity,
      bought: false,
      price: price,
      sum: 0,
    });
  }
}

function sumAllProducts(array) {
  return console.log(
    'Sum of all products is: ' +
      array.reduce((acc, product) => {
        return (acc += product.price * product.quantity);
      }, 0)
  );
}

function sumNotBoughtProducts(array) {
  const result = array
    .filter((product) => !product.bought)
    .reduce((acc, product) => {
      return (acc += product.price * product.quantity);
    }, 0);

  return result === 0
    ? console.log('You bought all of products!')
    : console.log('Sum of unbought products is: ' + result);
}

function sortProductsByPrice(array, value) {
  array.sort((a, b) => {
    // math.sign
    switch (value) {
      case 'expensive': {
        if (a.price < b.price) return 1;
        if (a.price > b.price) return -1;
        return 0;
      }

      case 'cheep': {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        return 0;
      }

      default: {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        return 0;
      }
    }
  });
}

addProduct(shoppingList, 'orange', 2, 2.56);
setProductsAsBougth(shoppingList, 'orange');
deleteProduct(shoppingList, 'butter');
addProduct(shoppingList, 'eggs', 20, 6.5);
setProductsAsBougth(shoppingList, 'eggs');
sortProductsByBougth(shoppingList);
sumAllProducts(shoppingList);
sumNotBoughtProducts(shoppingList);
setProductsAsBougth(shoppingList, 'all');
sortProductsByPrice(shoppingList);

console.table(shoppingList);
