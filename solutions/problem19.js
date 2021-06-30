let count = 0
const sunday = 0
for (
  let d = new Date('1901-01-01');
  d <= new Date('2000-12-31');
  d.setDate(d.getDate() + 1)
) {
  if (d.getDay() === sunday && d.getDate() === 1) {
    count++
  }
}
console.log(count)
