let iSum = 0
for (let i = 2; i < 1000000; i++) {
  const sum = i
    .toString()
    .split('')
    .map(d => d ** 5)
    .reduce((a, b) => a + b)
  if (sum === i) {
    iSum += i
  }
}
console.log(iSum)
