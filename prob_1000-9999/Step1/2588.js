const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


input = input.map((item) => +item);
/*
input이 ,로 구분될 경우
input = input[0];
input = input.split("\\n").map((item) => +item);

*/

solution(input[0],input[1]);




function solution(A, B) {
    
    /*
    input 472, 385
    output 472 * 385 과정
    */
    
  
    let num1 = parseInt(((B%100)%10))*A; //5
    let num2 = parseInt((B%100)/10)*A; //8
    let num3 = parseInt(B/100)*A;//3
    

    console.log(num1);
    console.log(num2);
    console.log(num3);

    console.log(num3*100+num2*10+num1);
   





    

}