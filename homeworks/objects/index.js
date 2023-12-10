import car from './scripts/car.js';
import clock from './scripts/clock.js';
import { fraction, fraction1, fraction2 } from './scripts/fraction.js';

console.table(car);
console.table(clock);
console.table(fraction);
console.table(fraction.add(fraction1, fraction2));
console.table(fraction.reduce(fraction.add(fraction1, fraction2)));
console.table(fraction.toDecimal(fraction.reduce(fraction.add(fraction1, fraction2))));
