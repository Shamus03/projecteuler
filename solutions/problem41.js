const isPandigital = n => {
  const digs = new Set()
  for (const c of n.toString()) {
    if (+c === 0) {
      return false
    }
    if (digs.has(+c)) {
      return false
    }
    digs.add(+c)
  }
  for (let i = 0; i < digs.size; i++) {
    if (!digs.has(i + 1)) {
      return false
    }
  }
  return true
}

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

const isPrime = n => {
  const sqrt = Math.floor(Math.sqrt(n))
  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

for (let i = 9; i >= 1; i--) {
  for (const p of generatePermutations(
    new Array(i)
      .fill(0)
      .map((_, i) => i + 1)
      .reverse(),
  )) {
    if (isPrime(+p.join(''))) {
      console.log(+p.join(''))
      return
    }
  }
}
