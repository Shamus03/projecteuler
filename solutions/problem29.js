const terms = new Set()
for (let a = 2; a <= 100; a++) {
  for (let b = 2; b <= 100; b++) {
    terms.add(BigInt(a) ** BigInt(b))
  }
}
console.log(terms.size)
