//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  let size = input[0];
  let textArray = input.splice(1);
  let iter = 0;
  let temp = '';
  let result = '';

  for (let i = 0; i < size; i++) {
    result = '';
    temp = textArray[i].split(' ');
    iter = !isNaN(temp[0]) ? temp[0] : 0;
    let text = temp[1] + '';
    for (let k = 0; k < text.length; k++) {
      for (let j = 0; j < iter; j++) {
        result += text[k];
      }
    }
    console.log(result);
  }
}
