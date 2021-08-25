//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  let N = +input;
  let count = 0;

  for (let i = 1; i <= N; i++) {
    if (checkSequenceNum(i)) count++; // true가 반환되면 한수라는뜻 으로 Count++;
  }
  console.log(count);
}

function checkSequenceNum(num) {
  let numString = num + '';
  let size = (numString + '').length; //넘어온 숫자의 자릿수 ex) 7 = 한자릿수, 18 = 두자릿수, 182 = 세자릿수
  let temp = 0;
  let result = true;
  if (size >= 3) {
    //3자리 수 이상 숫자부터 체크
    temp = +numString[1] - +numString[0]; // 등차수열을 이룰 값
    for (let i = 2; i < size; i++) {
      if (+numString[i] - +numString[i - 1] != temp) {
        // 등차수열을 이룰 값과 한번이라도 다를 경우 정지
        result = false;
        break;
      }
    }
  }
  //모든 조건을 무사히 넘기면 true 반환
  return result;
}
