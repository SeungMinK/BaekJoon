const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');


solution(input[0],input[1]);

function solution(A, B) {
    //console.log("A:의 타입은 "+typeof(A))
    A=parseInt(A);
    B=parseInt(B);
    
    if(A>B)  console.log('>');
    else if(A<B) console.log('<');
    else if (A==B) console.log('==');
    
}