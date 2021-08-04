//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');


solution(input[0],input[1]);

function solution(A, B) {

A=parseInt(A);
B=parseInt(B);

 console.log(A+B);
 console.log(A-B);
 console.log(A*B);
 console.log(parseInt(A/B));
 console.log(A%B);

}