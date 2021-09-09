function* triangleNumbers() {
  for (let i = 0; ; i++) {
    yield (i * (i + 1)) / 2
  }
}

const isPentagonal = pi => {
  const i = (Math.sqrt(1 + 24 * pi) + 1) / 6
  return i === Math.floor(i)
}

const isHexagonal = hi => {
  const i = (Math.sqrt(8 * hi + 1) + 1) / 4
  return i === Math.floor(i)
}

function solution() {
  for (const ti of triangleNumbers()) {
    if (ti > 40755 && isPentagonal(ti) && isHexagonal(ti)) {
      return ti
    }
  }
}

console.log(solution())
