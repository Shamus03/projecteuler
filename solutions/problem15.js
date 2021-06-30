// 40! / (20! * 20!)
let p = 1
for (let i = 21; i <= 40; i++) {
  p *= i
}
for (let i = 1; i <= 20; i++) {
  p /= i
}
console.log(Math.floor(p))
