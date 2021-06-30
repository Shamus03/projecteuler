const n = 600851475143

const primeFactors = n => {
  const factors = []
  while (!isPrime(n)) {
    const sqrt = Math.floor(Math.sqrt(n))
    for (let i = 2; i <= sqrt; i++) {
      if (n % i === 0) {
        n = n / i
        factors.push(i)
        break
      }
    }
  }
  factors.push(n)
  return factors
}

const isPrime = n => {
  const sqrt = Math.floor(Math.sqrt(n))
  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

console.log(primeFactors(n).sort((a, b) => b - a)[0])
