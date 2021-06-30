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

const nums = new Set()
for (const p of generatePermutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])) {
  if (p[0] === 0) {
    p.shift()
  }
  if (
    +p.slice(1, 4).join('') % 2 === 0 &&
    +p.slice(2, 5).join('') % 3 === 0 &&
    +p.slice(3, 6).join('') % 5 === 0 &&
    +p.slice(4, 7).join('') % 7 === 0 &&
    +p.slice(5, 8).join('') % 11 === 0 &&
    +p.slice(6, 9).join('') % 13 === 0 &&
    +p.slice(7, 10).join('') % 17 === 0
  ) {
    nums.add(+p.join(''))
  }
}

console.log([...nums].reduce((a, b) => a + b))
