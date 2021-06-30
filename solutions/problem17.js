const toWords = n => {
  const words = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    1000: 'one thousand',
  }
  if (n in words) {
    return words[n]
  }
  if (n < 100) {
    return toWords(n - (n % 10)) + ' ' + toWords(n % 10)
  }
  if (n % 100 === 0) {
    return toWords(n / 100) + ' hundred'
  }
  return toWords(n - (n % 100)) + ' and ' + toWords(n % 100)
}

let chars = 0
for (let i = 1; i <= 1000; i++) {
  const w = toWords(i)
  chars += w.replace(/[^a-z]/g, '').length
}
console.log(chars)
