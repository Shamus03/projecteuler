let str = '.'
for (let i = 1; i < 1000000; i++) {
  str += i
  if (str.length > 1000000) {
    console.log(
      str[1] *
        str[10] *
        str[100] *
        str[1000] *
        str[10000] *
        str[100000] *
        str[1000000],
    )
    break
  }
}
