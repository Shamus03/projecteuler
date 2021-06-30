const isPalindromic = s => s === s.split('').reverse().join('')

let sum = 0
for (let i = 1; i < 1000000; i++) {
  if (isPalindromic(i.toString()) && isPalindromic(i.toString(2))) {
    sum += i
  }
}
console.log(sum)
