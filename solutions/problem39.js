let maxCount = 0
let maxP = 0
for (let p = 5; p <= 1000; p++) {
  const sols = new Set()
  for (let a = 1; a < p; a++) {
    for (let b = 1; p - a - b >= 0; b++) {
      const c = Math.sqrt(a * a + b * b)
      if (a + b + c !== p) {
        continue
      }
      sols.add(Math.max(a, b) + '-' + Math.min(a, b))
    }
  }
  if (sols.size > maxCount) {
    maxCount = sols.size
    maxP = p
  }
}

console.log(maxP)
