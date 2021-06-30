let max = 0

const isPalindrome = n => {
  return '' + n === ('' + n).split('').reverse().join('')
}

for (let i = 100; i <= 999; i++) {
  for (let j = i; j <= 999; j++) {
    const p = i * j
    if (isPalindrome(p) && p > max) {
      max = p
    }
  }
}

console.log(max)
