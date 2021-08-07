const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution(input);


function solution(N) {

    let size = input[0];
    let temp;
    let resultString='';
    let result = 0;
    let numA, numB;
    for (let i = 1; i <= size; i++) {
        temp = input[i].toString().split(' ');
        numA = parseInt(temp[0]);
        numB = parseInt(temp[1]);
        result = numA+numB;
        resultString += (`Case #${i}: ${numA} + ${numB} = ${result}\n`);
    }
    console.log(resultString);
}