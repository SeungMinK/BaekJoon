//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

solution(input[0]);

function solution(A) {

    A = parseInt(A);

    if(0<=A&&A<=100){

        switch(parseInt(A/10)){

            case 10 : console.log('A');
             break;

             case 9 : console.log('A');
             break;

             case 8 : console.log('B');
             break;

             case 7 : console.log('C');
             break;

             case 6 : console.log('D');
             break;

             default : console.log('F');
             break;


        }
    }

  
}