//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  let num = input[0] * input[1] * input[2];
  let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let result = '';
  for (let i = 0; i < (num + '').length; i++) {
    switch ((num + '')[i]) {
      case '0':
        array[0]++;
        break;
      case '1':
        array[1]++;
        break;
      case '2':
        array[2]++;
        break;
      case '3':
        array[3]++;
        break;
      case '4':
        array[4]++;
        break;
      case '5':
        array[5]++;
        break;
      case '6':
        array[6]++;
        break;
      case '7':
        array[7]++;
        break;
      case '8':
        array[8]++;
        break;
      case '9':
        array[9]++;
        break;
      default:
        '';
    }
  }
  for (let i = 0; i < array.length; i++) {
    result += array[i] + '\n';
  }
  console.log(result);
}
