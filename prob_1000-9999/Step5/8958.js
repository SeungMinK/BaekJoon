//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  let size = +input[0];
  let array = input.splice(1); // 인덱스가 1인값 = Size 를 삭제
  let count = 0;

  for (let i = 0; i < size; i++) {
    let count = 0;
    let sum = 0;
    for (let j = 0; j < array[i].length; j++) {
      count = array[i][j] === 'O' ? count + 1 : 0;
      sum += count;
    }
    console.log(sum);
  }
}
