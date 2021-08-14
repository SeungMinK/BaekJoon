//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  let max = +input[0];
  for (var i = 0; i < input.length; i++) {
    max = +input[i] > max ? +input[i] : max;
  }
  console.log(max);
  console.log(input.indexOf(max + '') + 1);
}
