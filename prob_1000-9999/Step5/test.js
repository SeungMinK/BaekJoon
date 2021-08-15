//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  console.log(typeof ('10' + 2));
  console.log(typeof (2 - '10'), 2 - '1');
  let str = 'String';
  console.log(str);
  str[0] = 'H';
  console.log(str);
}
