//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  const divNumber = 42;
  let array = [];
  let j = 0;
  let check = false;
  let result;

  for (let i = 0; i < input.length; i++) {
    result = input[i] % divNumber;
    check = false;
    for (j = 0; j < array.length; j++) {
      if (result === array[j]) check = true;
    }
    if (check === false) array[j] = result;
  }
  console.log(array.length);
}
