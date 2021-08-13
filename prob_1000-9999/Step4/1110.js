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
    let count =1;
    let check = true;
 

    while(check){

        preNum = num[1];
        postNum = (+num[0])+(+num[1]);
        postNum = postNum>=10 ? (postNum+'')[1] : postNum;
        num = preNum+postNum;
        check = result===num ? false : count ++;
   
    }
    console.log(count);

}

