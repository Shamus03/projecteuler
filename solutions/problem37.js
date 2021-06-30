const primes = new Set()
function* generatePrimes() {
  primes.add(2)
  yield 2

  i: for (let n = 2; true; n++) {
    for (const p of primes) {
      if (n % p === 0) {
        continue i
      }
    }
    primes.add(n)
    yield n
  }
}

let count = 0
let sum = 0
p: for (const p of generatePrimes()) {
  if (count >= 11) {
    break
  }
  if (p < 10) {
    continue
  }
  const ps = p.toString()
  for (let i = 1; i < ps.length; i++) {
    if (!primes.has(+ps.slice(i)) || !primes.has(+ps.slice(0, ps.length - i))) {
      continue p
    }
  }
  sum += p
  count++
}
console.log(sum)
