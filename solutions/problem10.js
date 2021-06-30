function* generatePrimes() {
  const primes = [2]
  yield 2

  i: for (let n = 2; true; n++) {
    for (const p of primes) {
      if (n % p === 0) {
        continue i
      }
    }
    primes.push(n)
    yield n
  }
}

let sum = 0
for (const p of generatePrimes()) {
  if (p >= 2000000) {
    break
  }
  sum += p
}
console.log(sum)
