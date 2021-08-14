//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution(input);

function solution(input) {
  

    let min, max;
    let size = +input[0];
    let array = input[1].split(' ');
    min = max = +array[0];
    
    for (var i = 0; i<size;i++){
       min =  +array[i] < min ? array[i] : min;
       max =  +array[i] > max ? array[i] : max;
    }
    console.log(`${min} ${max}`);
}

