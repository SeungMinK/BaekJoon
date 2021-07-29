let fs = require('fs');
let inputNum = fs.readFileSync('/dev/stdin').toString().split(' ').map(value=> + value)

let [num1,num2] = inputNum
console.log(num1/num2)