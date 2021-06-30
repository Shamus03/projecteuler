const sumOfSquares = arr => {
  let sum = 0
  for (const n of arr) {
    sum += n * n
  }
  return sum
}

const squareOfSums = arr => {
  let sum = 0
  for (const n of arr) {
    sum += n
  }
  return sum * sum
}

const arr = new Array(100).fill(0).map((_, i) => i + 1)

console.log(squareOfSums(arr) - sumOfSquares(arr))
