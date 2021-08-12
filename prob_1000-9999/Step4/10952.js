//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution(input);

function solution(input) {
  
    let i=0;
    Arr = input
        .map(str => str.split(' '));
    
    
    while(Arr[i][0]!='0'){

        console.log(parseInt(Arr[i][0])+parseInt(Arr[i][1]));
        i++;
    }

}

