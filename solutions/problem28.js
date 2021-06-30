let sum = 1
for (let i = 3; i <= 1001; i += 2) {
  for (let j = 0; j < 4; j++) {
    sum += i * i - j * (i - 1)
  }
}
console.log(sum)
