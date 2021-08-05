//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution(input);

function solution(N) {

    let size = input[0];
    let temp;
    let tempString='';
    for (let i = 1; i <= size; i++) {
        temp = input[i].toString().split(' ');
        tempString+=((parseInt(temp[0]) + parseInt(temp[1]))+'\n');
    }
    console.log(tempString);

}