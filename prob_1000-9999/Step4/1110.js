//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution(input);

function solution(input) {
  
  
    let preNum;
    let postNum;
    let num = input < 10 ? '0'+input : input+'';
    let result = num;
    let count = 0;

 

    do{

        preNum = num[1];
        sum = (+num[0])+(+num[1]);
        postNum = sum>=10 ? (sum+'')[1] : sum;
        num = preNum+postNum;
        count ++;
   
    }while(result!==num);
    console.log(count);

}

