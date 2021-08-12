//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution(input);

function solution(input) {
  
    let i=0;
    let tempNum1=0;
    let tempNum2=0;
    let Arr ;
    for(i=0;i<input.length;i++){
        Arr = input[i].split(' ').map(str => Number(str));
    }
   console.log(Arr);
  

}

