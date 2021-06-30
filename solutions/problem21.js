const d = n => {
  let sum = 0
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i
    }
  }
  return sum
}

let sum = 0

for (let a = 1; a < 10000; a++) {
  const b = d(a)
  if (a !== b && d(b) === a) {
    sum += a
  }
}

console.log(sum)
