const p = n => (n * (3 * n - 1)) / 2

const isPentagonal = pi => {
  const i = (Math.sqrt(1 + 24 * pi) + 1) / 6
  return i === Math.floor(i)
}

function solution() {
  for (let j = 2; ; j++) {
    const pj = p(j)
    for (let k = j - 1; k > 0; k--) {
      const pk = p(k)
      if (isPentagonal(pj + pk) && isPentagonal(pj - pk)) {
        return pj - pk
      }
    }
  }
}

console.log(solution())
