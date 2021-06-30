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

i: for (let i = 100000; i >= 1; i--) {
  let r = ''
  for (let j = 1; j < 5; j++) {
    r += i * j
    if (j > 1 && isPandigital(+r)) {
      console.log(r)
      break i
    }
  }
}
