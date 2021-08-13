//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution(input);

function solution(input) {
  
    let i=0;
    let value = true;

    while(value){

        input[i]=input[i].split(' ');
        console.log((+input[i][0])+(+input[i][1]));
        value = input[++i] ?? false;  
        
    }
}

