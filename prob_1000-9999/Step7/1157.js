//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  let arrAlpha = Array.from({ length: 26 }, () => 0);
  let size = (input + '').length;
  let text = (input + '').split('');
  let check = false;

  //모든 값 대문자로 바꾸고, alpha case에 해당하는 배열 값 올려주기
  for (let i = 0; i < size; i++) {
    arrAlpha[text[i].toUpperCase().charCodeAt(0) - 65]++;
  }
  let maxCount = 0;
  let result = 0;

  //값이 제일 많은 아스키코드와, max값이 몇개인지 체크
  for (let j = 0; j < arrAlpha.length; j++) {
    if (maxCount < arrAlpha[j]) {
      result = j;
      maxCount = arrAlpha[j];
    }
  }

  //max값이 2개 이상이면 ? 아스키코드값인 63을 만들기위해 -2 를 대입
  for (let k = 0; k < arrAlpha.length; k++) {
    if (arrAlpha[k] == maxCount) {
      if (check == false) check = true;
      else result = -2;
    }
  }
  console.log(String.fromCharCode(result + 65));
}
