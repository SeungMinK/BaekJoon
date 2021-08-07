const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution(input);


function solution(N) {
    N = parseInt(N);
    let resultString ='';
    for(var i= 1; i<=N; i++){

        for(var k =N; k>i; k--){
            resultString += ' ';
        }

        for(var j=0;j<i;j++){
            resultString += '*';
        }
        console.log(resultString);
        resultString ='';
    }


}