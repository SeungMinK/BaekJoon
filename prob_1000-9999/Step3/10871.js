//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution(input);

function solution(input) {

    
    let temp = input[0].split(' ');
    let tempArr = input[1].split(' ');
    
    let N = parseInt(temp[0]);
    let X = parseInt(temp[1]);
   
    let result = '';
    
    Arr = tempArr
            .map(str => str.split(' '))
            .map(str => parseInt(str));
    
    for(let i = 0; i < N; i++){
    
        Arr[i] < X ? result+=Arr[i]+' ':  '';

    }
    console.log(result);


}