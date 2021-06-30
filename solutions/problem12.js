const allFactors = n => {
  const fac = new Set()
  const sqrt = Math.floor(Math.sqrt(n))
  for (let i = 1; i <= sqrt; i++) {
    if (n % i === 0) {
      fac.add(i)
      fac.add(n / i)
    }
  }
  return [...fac]
}

function* triangleNumbers() {
  for (let i = 1; true; i++) {
    let sum = 0
    for (let j = 1; j <= i; j++) {
      sum += j
    }
    yield sum
  }
}

for (const t of triangleNumbers()) {
  const factors = allFactors(t)
  if (factors.length > 500) {
    console.log(t)
    break
  }
}
