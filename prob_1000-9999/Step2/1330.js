//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');


solution(input[0],input[1]);

function solution(A, B) {

    //console.log("A:의 타입은 "+typeof(A)+ "B:의 타입은 "+typeof(B))

    //string으로 넘어온 문자를 int형으로 바꿔주기
    A=parseInt(A);
    B=parseInt(B);
    
    //-10,000 ≤ A, B ≤ 10,000 제한 넘을시 0으로 바꾸기
    if (-10000>A) A =0;
    if (B>1000) B =0;

    if(A>B)  console.log('>');
    else if(A<B) console.log('<');
    else if (A==B) console.log('==');

}