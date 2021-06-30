function* generateFibonacciSequence() {
  let a = BigInt(1)
  let b = BigInt(1)
  while (true) {
    yield a
    ;[a, b] = [b, a + b]
  }
}

let i = 1
for (const n of generateFibonacciSequence()) {
  if (n.toString().length >= 1000) {
    console.log(i)
    break
  }
  i++
}
