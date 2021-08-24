/*입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
*/
const iter = 10000; //문제에서 10000으로 범위 제한
solution();

function solution() {
  //모든값을 true로 초기화
  let numArray = Array.from({ length: 10000 }, () => true);

  //셀프 넘버가 있는지 체크하기
  for (let i = 1; i < iter; i++) {
    if (numArray[i] != false) selfNumCheck(i + 1); // 이미 체크한 값은 중복으로 처리 안하기

    numArray[selfNumCheck(i) - 1] = false; //10000 이하의 생성자는 모두 false로 처리
  }

  //결과 출력
  for (let i = 0; i < iter; i++) {
    if (numArray[i]) console.log(i + 1);
  }
}

function selfNumCheck(num) {
  let temp = num;
  let size = (temp + '').length; //넘어온 숫자의 자릿수 ex) 7 = 한자릿수, 18 = 두자릿수, 182 = 세자릿수
  let result = num;

  for (let i = 0; i < size; i++) {
    result += +(temp + '')[i];
  }
  //재귀 함수로 구현, iter값 까지 모든 생성자를 찾음
  if (result < iter) selfNumCheck(result);

  return result;
}
