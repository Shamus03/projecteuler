const factorial = n => (n === 0 ? 1 : n * factorial(n - 1))

const sumOfFactorialOfDigits = n =>
  n
    .toString()
    .split('')
    .map(n => factorial(+n))
    .reduce((a, b) => a + b)

let sum = 0
for (let i = 10; i < 1000000; i++) {
  if (i === sumOfFactorialOfDigits(i)) {
    sum += i
  }
}
console.log(sum)
