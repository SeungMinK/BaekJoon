const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');


solution(input[0]);

function solution(N) {

    N = parseInt(N);
    let resultString ='';
    if (0 <= N && N <= 100000) {

        for (let i = N; i >= 1; i--) {
            resultString += i+'\n';
        }
        console.log(resultString);

    }
}