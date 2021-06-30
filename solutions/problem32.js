function* generatePermutations(ns) {
  if (!ns.length) {
    yield []
    return
  }
  for (let i = 0; i < ns.length; i++) {
    const n = ns[i]
    const rem = ns.slice(0, i).concat(ns.slice(i + 1))
    for (const p of generatePermutations(rem)) {
      yield [n, ...p]
    }
  }
}

const pandigitalProducts = new Set()
for (const p of generatePermutations([1, 2, 3, 4, 5, 6, 7, 8, 9])) {
  for (let i = 1; i < p.length - 1; i++) {
    for (let j = i + 1; j < p.length; j++) {
      const a = +p.slice(0, i).join('')
      const b = +p.slice(i, j).join('')
      const c = +p.slice(j).join('')
      if (a * b === c) {
        pandigitalProducts.add(c)
      }
    }
  }
}

console.log([...pandigitalProducts].reduce((a, b) => a + b))
