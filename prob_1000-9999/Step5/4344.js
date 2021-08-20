//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  let C = input[0];
  let array = input.splice(1); // 인덱스가 1인값 = Size 를 삭제, 즉 input[0] 빼고 모든 값이 들어감

  for (let i = 0; i < C; i++) {
    //지역변수로 선언
    let temp = array[i].split(' ');
    let sum = 0;
    let count = 0;
    let avg = 0;
    // 평균 구하기
    for (let j = 1; j <= +temp[0]; j++) {
      sum += +temp[j];
    }
    avg = sum / +temp[0];

    //평균 넘는값 구하기
    for (let j = 1; j <= +temp[0]; j++) {
      avg < temp[j] ? count++ : '';
    }

    //.toFixed(N) N번째 까지만 표시 나머지는 값은 반올림 하여 처리
    let result = (count / temp[0]) * 100;
    console.log(`${result.toFixed(3)}%`);
  }
}
