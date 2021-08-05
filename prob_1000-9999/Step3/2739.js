//입력값 받기, 같은 폴더내에 input.txt 생성
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');


solution(input[0]);

function solution(N) {

    N = parseInt(N);

    if (1 <= N && N <= 9) {

        for (let i = 1; i <= 9; i++) {
            console.log(N + " * " + i + " = " + N * i);

        }

    }
}