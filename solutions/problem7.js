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

let i = 1
for (const p of generatePrimes()) {
  if (i === 10001) {
    console.log(p)
    break
  }
  i++
}
