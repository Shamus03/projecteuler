const multiplyBigNumber = (n, p) => {
  n = n.map(v => v * p)
  for (let j = 0; j < n.length; j++) {
    if (n[j] >= 10) {
      n[j + 1] = (n[j + 1] || 0) + Math.floor(n[j] / 10)
      n[j] %= 10
    }
  }
  return n
}

let n = [1]

for (let i = 0; i < 1000; i++) {
  n = multiplyBigNumber(n, 2)
}

console.log(n.reduce((a, b) => a + b))
