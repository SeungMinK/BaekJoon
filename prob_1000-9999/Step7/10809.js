//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  //알파벳 갯수 만큼 26개 배열 생성
  let arrAlpha = Array.from({ length: 26 }, () => -1);
  let text = input + '';
  let index = 0;
  for (let i = 0; i < text.length; i++) {
    index = text[i].charCodeAt() - 97; //소문자 a는 아스키코드로 97번
    if (arrAlpha[index] == -1) arrAlpha[index] = i; //중복되는 문자열은 맨 처음 나온 index로 저장
  }
  // 모든 ,를 제거하기위해 /제거할 문자/g 형식을 사용함 replace.(/제거할문자/g , '대체할 텍스트');
  console.log((arrAlpha + '').replace(/,/g, ' '));
}
