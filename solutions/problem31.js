const coins = [1, 2, 5, 10, 20, 50, 100, 200]

const waysToMake = n => {
  const ways = []
  ways[0] = 1
  for (const c of coins) {
    for (let j = c; j <= n; j++) {
      ways[j] = (ways[j] || 0) + ways[j - c]
    }
  }
  return ways[n]
}

console.log(waysToMake(200))
