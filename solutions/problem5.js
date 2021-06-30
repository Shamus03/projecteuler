i: for (let i = 1; true; i++) {
  for (let j = 1; j <= 20; j++) {
    if (i % j !== 0) {
      continue i
    }
  }
  console.log(i)
  break
}
