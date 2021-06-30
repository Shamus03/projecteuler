let n0 = 1
let d0 = 1
for (let n1 = 1; n1 <= 9; n1++) {
  for (let d1 = n1; d1 <= 9; d1++) {
    for (let n2 = 0; n2 <= 9; n2++) {
      for (let d2 = 0; d2 <= 9; d2++) {
        const n = n1 * 10 + n2
        const d = d1 * 10 + d2
        if (n / d >= 1) {
          continue
        }
        if (
          (n2 === d1 && n1 / d2 === n / d) ||
          (n1 === d2 && n2 / d1 === n / d)
        ) {
          n0 *= n
          d0 *= d
        }
      }
    }
  }
}

const gcd = (a, b) => {
  return b ? gcd(b, a % b) : a
}

console.log(d0 / gcd(n0, d0))
