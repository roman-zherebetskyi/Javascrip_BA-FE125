import reverseNumber from '../../js/reverseNumber.js';
import startPromtOrNot from '../../js/startPromtOrNot.js';

startPromtOrNot();

// * Мінімум

// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
const age = +prompt('Вкажи свй вік!');

switch (true) {
  case isNaN(age) || !age: {
    alert('Введи коректне число для віку.');
    break;
  }
  case age >= 0 && age <= 11: {
    alert('Ти дитина.');
    break;
  }
  case age >= 12 && age <= 17:
    alert('Ти підліток.');
    break;
  case age >= 18 && age <= 59:
    alert('Ти вже дорослий.');
    break;
  case age >= 60 && age <= 190:
    alert('Ти вже пенсіонер.');
    break;
  default:
    alert('Введи коректний вік.');
}

// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
console.log(
  'Твій спецсимвол:',
  ')!@#$%^&*('[prompt('Введи число від 0 - 9 щоб отримати спецсимвол.')]
);

// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.
const lowerBound = +prompt('Введіть нижню межу діапазону:');
const upperBound = +prompt('Введіть верхню межу діапазону:');
let sum = 0;
for (let i = lowerBound; i <= upperBound; i++) {
  sum += i;
}

console.log(
  'Сума чисел в діапазоні від',
  lowerBound,
  'до',
  upperBound,
  'рівна:',
  sum
);

// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.
const firstNumber = prompt('Введи перше число для НДС');
const secondNumber = prompt('Введи друге число для НДС');

function findGCD(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(
  'Найбільшим спільним дільником чисел',
  firstNumber,
  secondNumber,
  'є:',
  findGCD(firstNumber, secondNumber)
);

// 5. Запитай у користувача число і виведи всі дільники цього числа.
let someNumber = +prompt('Введи число, щоб дізнатися всі його дільники:');
let result = '';

for (let i = 1; i <= someNumber; i++) {
  !(someNumber % i) && (result = result + i + ', ');
}

console.log('Дільниками числа', someNumber, 'є:', result.slice(0, -2));

// * Норма

// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
let fiveDigigtNumber = +prompt("Введи п'ятирозрядне число");
// перевірка чи число має пять чифр і чи не містить інших символів окрім цифр
if (String(fiveDigigtNumber).length !== 5 || isNaN(fiveDigigtNumber)) {
  alert('Не коректний ввід!');
}

console.log(
  reverseNumber(fiveDigigtNumber) === fiveDigigtNumber
    ? 'Число ' + fiveDigigtNumber + ' паліндром.'
    : 'Число ' + fiveDigigtNumber + ' не паліндром.'
);

// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
//      від 200 до 300 - знижка буде 3%;
//      від 300 до 500 - 5%;
//      від 500 і вище - 7%.
let buyAmount = prompt('Введи суму покупки щоб дізнатися знижку:');
if (isNaN(buyAmount)) {
  alert('Не правильний ввід!');
}
switch (true) {
  case buyAmount >= 200 && buyAmount <= 299:
    console.log(
      'Твоя знижка - 3%, сума до оплати:',
      buyAmount - (buyAmount / 100) * 3,
      'грн.'
    );
    break;
  case buyAmount >= 300 && buyAmount <= 499:
    console.log(
      'Твоя знижка - 5%, сума до оплати:',
      buyAmount - (buyAmount / 100) * 3,
      'грн.'
    );
    break;
  case buyAmount >= 500:
    console.log(
      'Твоя знижка - 7%, сума до оплати:',
      buyAmount - (buyAmount / 100) * 3,
      'грн.'
    );
    break;
  default:
    console.log('У тебе немає знижки, сума до оплати:', buyAmount, 'грн.');
}

// 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
const inputNumbers = prompt('Введи 10 чисел через кому:'); // Введення чисел через кому
let numbers = inputNumbers.split(',').map(Number); // Розбиваємо введений рядок на числа

// Ініціалізуємо змінні для статистики
let positiveCount = 0,
  negativeCount = 0,
  zeroCount = 0,
  evenCount = 0,
  oddCount = 0;

// Проходимо по кожному введеному числу та обчислюємо статистику
for (let i = 0; i < numbers.length; i++) {
  if (isNaN(numbers[i])) {
    Alert('Введи дійсні числа.');
    break;
  }

  if (numbers[i] > 0) {
    positiveCount++;
  } else if (numbers[i] < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }

  if (numbers[i] % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log('Додатніх чисел: ' + positiveCount);
console.log("Від'ємні числа: " + negativeCount);
console.log('Нулі: ' + zeroCount);
console.log('Парні числа: ' + evenCount);
console.log('Непарні числа: ' + oddCount);

// 4. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
let isShowNextDay = true;
let dayCount = 1;

while (isShowNextDay) {
  let message = 'Сьогодні ПОНЕДІЛОК. Хочеш побачити наступний день?';

  switch (dayCount) {
    case 2: {
      message = 'Сьогодні ВІВТОРОК. Хочеш побачити наступний день?';
      break;
    }
    case 3: {
      message = 'Сьогодні СЕРЕДА. Хочеш побачити наступний день?';
      break;
    }
    case 4: {
      message = 'Сьогодні ЧЕТВЕР. Хочеш побачити наступний день?';
      break;
    }
    case 5: {
      message = "Сьогодні П'ЯТНИЦЯ. Хочеш побачити наступний день?";
      break;
    }
    case 6: {
      message = 'Сьогодні СУБОТА. Хочеш побачити наступний день?';
      break;
    }
    case 7: {
      message = 'Сьогодні НЕДІЛЯ. Хочеш побачити наступний день?';
      break;
    }
  }

  isShowNextDay = confirm(message);

  if (dayCount === 7) {
    dayCount = 1;
  } else {
    dayCount++;
  }
}

// * Максимум

// 1. Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").
const num = confirm('Загадай число від 0 до 100.');
let minRange = 0;
let maxRange = 100;
let userAnswer = '';

while (true) {
  const guess = Math.floor((minRange + maxRange) / 2);
  userAnswer = prompt(
    `Ваше число більше (>), менше (<) чи дорівнює (=) ${guess}? Введіть один з символів.`
  );
  if (userAnswer === '>') {
    minRange = guess + 1; // Змінюємо мінімальний діапазон
  } else if (userAnswer === '<') {
    maxRange = guess - 1; // Змінюємо максимальний діапазон
  } else if (userAnswer === '=') {
    alert(`Ваше число - ${guess}! Гра завершена.`);
    break;
  } else {
    alert('Будь ласка, введіть коректний символ (> , < або =).');
  }
}

// 2. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
let enteredNumber = prompt('Введи число від 2 до 9');

if (enteredNumber < 2 || enteredNumber > 9) {
  alert('Число повинно бути від 2 до 9');
}
for (let i = 1; i <= 10; i++) {
  console.log(`${enteredNumber} * ${i} =`, enteredNumber * i);
}

// 3. Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
// Функція для перевірки, чи рік є високосним
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Функція для отримання наступної дати
function getNextDate(day, month, year) {
  // Масив, що містить кількість днів у кожному місяці
  const daysInMonth = [
    0,
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  // Перевірка введених значень на коректність
  if (day < 1 || month < 1 || month > 12 || year < 1) {
    console.log('Введіть коректну дату.');
    return;
  }

  // Перевірка, чи введений день є коректним для вказаного місяця
  if (day > daysInMonth[month]) {
    console.log('Введіть коректний день для цього місяця.');
    return;
  }

  // Визначення наступної дати
  if (month === 12 && day === 31) {
    // Наступна дата - перший день наступного року
    day = 1;
    month = 1;
    year++;
  } else if (day === daysInMonth[month]) {
    // Наступна дата - перший день наступного місяця
    day = 1;
    month++;
  } else {
    // Наступна дата - той самий місяць
    day++;
  }

  // Повертаємо об'єкт з наступною датою
  return { day, month, year };
}

// Отримання введених користувачем значень
const inputDay = parseInt(prompt('Введіть день:'));
const inputMonth = parseInt(prompt('Введіть місяць:'));
const inputYear = parseInt(prompt('Введіть рік:'));

// Визначення наступної дати
const nextDate = getNextDate(inputDay, inputMonth, inputYear);

// Виведення результату
if (nextDate) {
  console.log(
    `Наступна дата: ${nextDate.day}-${nextDate.month}-${nextDate.year}`
  );
}
