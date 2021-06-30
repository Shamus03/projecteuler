const primeCache = new Map()
const isPrime = n => {
  if (n <= 0) {
    return false
  }
  if (primeCache.has(n)) {
    return primeCache.get(n)
  }
  const sqrt = Math.floor(Math.sqrt(n))
  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) {
      primeCache.set(n, false)
      return false
    }
  }
  primeCache.set(n, true)
  return true
}

let maxab = 0
let maxn = 0
for (let a = -999; a <= 999; a++) {
  for (let b = -1000; b <= 1000; b++) {
    let n = 0
    while (isPrime(n * n + a * n + b)) {
      n++
    }
    if (n > maxn) {
      maxn = n
      maxab = a * b
    }
  }
}
console.log(maxab)
