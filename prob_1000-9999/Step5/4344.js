//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  let C = input[0];
  let array = input.splice(1); // 인덱스가 1인값 = Size 를 삭제, 즉 input[0] 빼고 모든 값이 들어감

  for (let i = 0; i < C; i++) {
    let temp = array[i].split(' ');
    let sum = 0;
    let count = 0;
    let avg = 0;
    for (let j = 0; j < temp[i][0]; j++) {
      sum += +temp[i][j];
    }
    avg = sum / temp[i][0];
    for (let j = 0; j < temp[i][0]; j++) {
      count += avg >= temp[i][j] ? 1 : 0;
    }
    console.log(count);
  }
}
