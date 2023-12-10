import findGCD from '../../functions/scripts/findGCD.js';

// * Максимум
// - Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
// - Складання 2-х об'єктів-дробів.
// - Віднімання 2-х об'єктів-дробів.
// - Множення 2-х об'єктів-дробів.
// - Ділення 2-х об'єктів-дробів.
// - Скорочення об'єкта-дробу.

const fraction1 = { numerator: 2, denominator: 4 };
const fraction2 = { numerator: 3, denominator: 5 };

const fraction = {
  add(fraction1, fraction2) {
    const newNumerator =
      fraction1.numerator * fraction2.denominator +
      fraction2.numerator * fraction1.denominator;
    const newDenominator = fraction1.denominator * fraction2.denominator;

    return { numerator: newNumerator, denominator: newDenominator };
  },

  subtract(fraction1, fraction2) {
    const newNumerator =
      fraction1.numerator * fraction2.denominator -
      fraction2.numerator * fraction1.denominator;
    const newDenominator = fraction1.denominator * fraction2.denominator;

    return { numerator: newNumerator, denominator: newDenominator };
  },

  multiply(fraction1, fraction2) {
    const newNumerator = fraction1.numerator * fraction2.numerator;
    const newDenominator = fraction1.denominator * fraction2.denominator;

    return { numerator: newNumerator, denominator: newDenominator };
  },

  divide(fraction1, fraction2) {
    const newNumerator = fraction1.numerator * fraction2.denominator;
    const newDenominator = fraction1.denominator * fraction2.numerator;

    return { numerator: newNumerator, denominator: newDenominator };
  },

  reduce(fraction) {
    const gcd = findGCD(fraction.numerator, fraction.denominator);
    if (gcd > 1) {
      fraction.numerator /= gcd;
      fraction.denominator /= gcd;
    }

    if (fraction.numerator === fraction.denominator) {
      fraction.numerator = 1;
      fraction.denominator = 1;
    }

    return fraction;
  },

  toDecimal(fraction) {
    return fraction.numerator / fraction.denominator;
  },
};

export { fraction, fraction1, fraction2 };
