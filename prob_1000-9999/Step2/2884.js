//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

solution(input[0],input[1]);

function solution(H,M) {

   H = parseInt(H);
   M = parseInt(M);

   /*
    1m = 60s
    1h = 1m*60 = 3600
    1d = 1h*24 = 86400

   */
   let time = H*3600+M*60;

   let deadLine = 86400;

   let minusTime = 45*60; // 문제에서 제시한 45분

    if((0<=H&&H<=23)&&(0<=M&&M<=59)){

        if(time-minusTime<0){
            time += deadLine;
        }

        time -= minusTime;

        H  = parseInt(time / 3600);
        time %= 3600;

        M = parseInt(time / 60);

 

    }
    console.log(H+" "+M);
}