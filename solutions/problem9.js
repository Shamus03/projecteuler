const f = () => {
  for (let a = 2; a < 1000; a++) {
    for (let b = a; b < 1000; b++) {
      for (let c = b; c < 1000; c++) {
        if (a * a + b * b === c * c && a + b + c === 1000) {
          return a * b * c
        }
      }
    }
  }
}
console.log(f())
