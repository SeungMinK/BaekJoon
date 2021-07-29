const fs = require('fs')
const inputNum = fs.readFileSync().toString().split(' ').map(value => +value)

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(Math.floor(a/b))
console.log(a%b)