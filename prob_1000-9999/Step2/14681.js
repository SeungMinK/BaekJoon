const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0], input[1]);

function solution(X,Y) {

    X = parseInt(X);
    Y = parseInt(Y);

    let result = 0;

    if((-1000<=X&&X<=1000&&X!=0)&&(-1000<Y&&Y<=1000&&Y!=0)){

        if(X<0){
            if(Y>0)    result =2;
            else    result=1;
        }
        else {
            if(Y>0)    result=3;
            else    result=4;
        }
        console.log(result);


    }
 


  
}