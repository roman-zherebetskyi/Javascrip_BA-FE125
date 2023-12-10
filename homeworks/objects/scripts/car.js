// * Мінімум

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// - Метод, який виводить на екран інформацію про автомобіль.
// - Додавання ім’я водія у список
// - Перевірка водія на наявність його ім’я у списку
// - Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.

const car = {
  name: 'Mercedes',
  model: 'GLS',
  year: new Date().getFullYear(),
  driver: 'Roman',
  averageSpeed: 140,
  tankVolume: 90,
  fuelConsumption: 11,

  info(...args) {
    if (args.length) {
      for (let i = 0; i < args.length; i++) {
        console.log(args[i] + ':', this[args[i]]);
      }
    } else {
      for (let entry of Object.entries(this)) {
        // перевірка чи поле об'єкта не є функцією, якщо ні, тоді виводимо його в консоль
        if (typeof entry[1] !== 'function') {
          console.log(entry[0] + ':', entry[1]);
        }
      }
    }
  },

  addDriver(...args) {
    for (let item of args) {
      this.driver += ', ' + item;
    }
  },

  checkDriverName(...args) {
    let driverNameExist = [];
    let driverNameNotExist = [];

    for (let item of args) {
      this.driver.split(', ').includes(item)
        ? driverNameExist.push(item)
        : driverNameNotExist.push(item);
    }

    if (driverNameExist.length) {
      switch (true) {
        case driverNameExist.length >= 2:
          console.log('drivers:', driverNameExist.join(', '), '- exist!');
          break;

        default:
          console.log('driver:', driverNameExist.join(', '), '- exists!');
      }
    }

    if (driverNameNotExist.length) {
      switch (true) {
        case driverNameNotExist.length >= 2:
          console.log(
            'drivers:',
            driverNameNotExist.join(', '),
            '- do not exist!'
          );
          break;

        default:
          console.log(
            'driver:',
            driverNameNotExist.join(', '),
            '- does not exists!'
          );
      }
    }
  },

  calculateTimeAndFuel(distance) {
    if (typeof distance === 'number') {
      let time = distance / this.averageSpeed;
      let fuel = (this.fuelConsumption / 100) * distance;
      console.log(
        'You need',
        +time.toFixed(2),
        'hours and',
        +fuel.toFixed(2),
        'liters of fuel to cover the distance of',
        distance,
        'kilometers.'
      );
    } else if (distance) {
      console.log('Please enter correct value!');
    }
  },
};

export default car;
