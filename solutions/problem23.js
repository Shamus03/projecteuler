function* generateDivisors(n) {
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      yield i
    }
  }
}

const sum = (a, b) => a + b

const sumOfDivisors = n => [...generateDivisors(n)].reduce(sum)

const isAbundantNumber = n => {
  return sumOfDivisors(n) > n
}

const stop = 28123

function* generateAbundantNumbers() {
  for (let n = 12; n < stop; n++) {
    if (isAbundantNumber(n)) {
      yield n
    }
  }
}

const abundantNumbers = new Set([...generateAbundantNumbers()])

const canBeWrittenAsSumOf2AbundantNumbers = n => {
  for (const a of abundantNumbers) {
    if (a >= n) {
      break
    }
    if (abundantNumbers.has(n - a)) {
      return true
    }
  }
  return false
}

function* numbersThatCannotBeWrittenAsSumOf2AbundantNumbers() {
  for (let n = 1; n <= stop; n++) {
    if (!canBeWrittenAsSumOf2AbundantNumbers(n)) {
      yield n
    }
  }
}

console.log(
  [...numbersThatCannotBeWrittenAsSumOf2AbundantNumbers()].reduce(sum),
)
