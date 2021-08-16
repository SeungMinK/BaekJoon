//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  let N = input[0];
  let array = input[1].split(' ');
  let M = +array[0];

  let sum = 0;
  for (let i = 0; i < N; i++) {
    M = M < array[i] ? +array[i] : M;
  }
  for (let i = 0; i < N; i++) {
    array[i] = (array[i] / M) * 100;
    sum += array[i];
  }
  console.log(sum / N);
}
