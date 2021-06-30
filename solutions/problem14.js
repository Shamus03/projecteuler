function* sequence(n) {
  while (true) {
    yield n
    if (n % 2 === 0) {
      n /= 2
    } else {
      n = 3 * n + 1
    }
  }
}

function findSequenceLength(n) {
  const seen = new Set()
  for (const k of sequence(n)) {
    if (seen.has(k)) {
      return seen.size
    }
    seen.add(k)
  }
}

let max = 0
let maxI
for (let i = 0; i < 1000000; i++) {
  const l = findSequenceLength(i)
  if (l > max) {
    max = l
    maxI = i
  }
}
console.log(maxI)
