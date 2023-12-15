//find greatest common divisor (GCD) of two numbers
function findGCD(a, b) {
  return b === 0 ? a : findGCD(b, a % b);
}

export default findGCD;