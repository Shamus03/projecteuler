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

let i = 1
for (const p of generatePermutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])) {
  if (i === 1000000) {
    console.log(p.join(''))
    break
  }
  i++
}
