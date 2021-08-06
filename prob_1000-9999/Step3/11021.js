const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution(input);


function solution(N) {

    let size = input[0];
    let temp;
    let resultString='';
    let result = 0;
    for (let i = 1; i <= size; i++) {
        temp = input[i].toString().split(' ');
        result = parseInt(temp[0])+parseInt(temp[1]);
        resultString += (`Case #${i}: ${result}\n`);
    }
    console.log(resultString);
}