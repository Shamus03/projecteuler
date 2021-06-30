let len = 0
let maxI

for (let i = 1000; i > 1; i--) {
  if (len >= i) {
    break
  }

  const rem = new Array(i).fill(0)
  let val = 1
  let pos = 0

  while (rem[val] === 0 && val !== 0) {
    rem[val] = pos
    val *= 10
    val %= i
    pos++
  }

  if (pos - rem[val] > len) {
    len = pos - rem[val]
    maxI = i
  }
}

console.log(maxI)
