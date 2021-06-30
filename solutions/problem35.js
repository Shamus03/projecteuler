const getPrimes = lessThan => {
  const primes = [2]
  n: for (let n = 2; n < lessThan; n++) {
    for (const p of primes) {
      if (n % p === 0) {
        continue n
      }
    }
    primes.push(n)
  }
  return primes
}

function* generateRotations(n) {
  n = n.toString()
  for (let i = 1; i < n.length; i++) {
    yield +(n.slice(i) + n.slice(0, i))
  }
}

let count = 0
const primes = new Set(getPrimes(1000000))
p: for (const p of primes) {
  for (const r of generateRotations(p)) {
    if (!primes.has(r)) {
      continue p
    }
  }
  count++
}
console.log(count)
