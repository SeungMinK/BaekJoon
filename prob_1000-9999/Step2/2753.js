//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

solution(input[0]);

function solution(A) {

    A = parseInt(A);
    result =0;
    if(1<=A&&A<=4000){


        if(A%4==0){
            if(A%100!=0 | A%400==0){
                result=1;
            }
        }
        console.log(result)
    }

  
}