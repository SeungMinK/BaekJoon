//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  // 입력된 값을 아스키코드로 보여줌 charCodeAt
  console.log((input + '').charCodeAt(0));
}
