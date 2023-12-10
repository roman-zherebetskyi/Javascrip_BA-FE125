import startPromtOrNot from '../../js/startPromtOrNot.js';

startPromtOrNot();

// * Мінімум
// 1. Напиши всі можливі варіанти створення функцій.

// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
function countArguments() {

  return arguments.length = prompt("Скільки аргументів передати у фунцкію?");
}

console.log(
  'Кліькість аргументів у функції:',
  +countArguments()
); // 4

// 3. Напиши функцію, яка приймає 2 числа і повертає :
//    -1, якщо перше число менше, ніж друге;
//    1 - якщо перше число більше, ніж друге;
//    0 - якщо числа рівні.
function compareNumbers(x, y) {
  return x < y ? -1 : x > y ? 1 : 0;
}

console.log(
  "Результат порівняння чисел:",
  compareNumbers(
    prompt('Введи перше число для порівняння:'),
    prompt('Введи друге число для порівняння:')
  )
);

// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(n) {
  // Перевірка, чи число не менше 0 (факторіал визначений для невід'ємних цілих чисел)
  if (n < 0) {
    return "Факторіал визначений тільки для невід'ємних цілих чисел.";
  }

  // Базовий випадок: 0! та 1! дорівнює 1
  if (n === 0 || n === 1) {
    return 1;
  }

  // Рекурсивний виклик для обчислення факторіалу
  return n * factorial(n - 1);
}
const factorialNumber = prompt('Введи число, щоб обчислити факторіал:');

console.log(
  'Факторіал числа',
  +factorialNumber,
  'дорівнює:',
  factorial(factorialNumber)
);

// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function numberMaker(num1, num2, num3) {
  const number = String(num1) + String(num2) + String(num3);
  return +number;
}

console.log(
  'Твоє число:',
  numberMaker(
    prompt('Введи першу цифру щоб перетворити її в число:'),
    prompt('Введи другу цифру щоб перетворити її в число:'),
    prompt('Введи третю цифру щоб перетворити її в число:')
  )
); // 521

// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function rectangleOrSquare(a, b) {
  if (a === null || !a.length || a < 0 || Number(a) === 0) {
    return b * b;
  } else if (b === null || !b.length || b < 0 || Number(b) === 0) {
    return a * a;
  } else {
    return a * b;
  }

  return a * b;
}

console.log(
  'Площа дорівнює:',
  rectangleOrSquare(
    prompt('Введи довжину прямокутника:'),
    prompt('Введи ширину прямокутника:')
  )
);

// * Норма
// 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
function isPerfectNumber(number) {
  if (number <= 1) {
    return false; // Досконалі числа є лише для натуральних чисел більше 1
  }

  let sum = 1; // Початкова сума (1 - завжди дільник)

  // Шукаємо дільники числа
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      sum += i; // Додаємо знайдений дільник
      if (i !== number / i) {
        sum += number / i; // Додаємо парний дільник (якщо він відмінний від поточного)
      }
    }
  }

  // Перевіряємо, чи сума дільників рівна заданому числу
  return sum === number;
}

const inputNumber = +prompt(
  'Введи число, щоб перевірити чи воно є досконалим:'
);

isPerfectNumber(inputNumber)
  ? console.log(inputNumber, "- це досконале число!")
  : console.log(inputNumber, "- не є досконалим числом.");

// 2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
function findPerfectNumbersInRange(min, max) {
  const perfectNumbers = [];

  for (let number = min; number <= max; number++) {
    if (isPerfectNumber(number)) {
      perfectNumbers.push(number);
    }
  }

  return perfectNumbers;
}

const minRange = +prompt('Введи мінімальне значення діапазону:');
const maxRange = +prompt('Введи максимальне значення діапазону:');

let perfectNumbersInRange = findPerfectNumbersInRange(minRange, maxRange);

if (!perfectNumbersInRange.length) {
  console.log(
    `У діапазоні від ${minRange} до ${maxRange}, немє досконалих чисел.`
  );
} else {
  console.log(
    `Досконалі числа у діапазоні від ${minRange} до ${maxRange}: ${perfectNumbersInRange.join(
      ', '
    )}`
  );
}
