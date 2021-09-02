//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

solution(input);

function solution(input) {
  let text = input.trim().split(' ');
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== '') {
      count++;
    }
  }

  console.log(count);
}
